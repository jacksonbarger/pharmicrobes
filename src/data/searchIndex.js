import { FLASHCARDS } from "./flashcards";
import { MNEMONICS } from "./mnemonics";
import { CONFUSABLES } from "./confusables";
import { HIGHYIELD } from "./highyield";
import { TREE } from "./tree";
import { GUIDE_CONTENT } from "./guideContent";
import { VOCAB } from "./vocab";
import { DRUG_CLASSES } from "./drugs";

// Walk the decision tree, emit one entry per leaf answer with the path as context.
function flattenTree(node, path = []) {
  if (!node) return [];
  if (node.answer) {
    return [{
      kind: "tree",
      title: node.answer,
      body: `${node.detail}\nPath: ${path.join(" → ")}`,
      href: "/tree",
    }];
  }
  if (!node.opts) return [];
  return node.opts.flatMap((opt) => {
    const nextPath = [...path, opt.label];
    if (opt.answer) {
      return [{
        kind: "tree",
        title: opt.answer,
        body: `${opt.detail}\nPath: ${nextPath.join(" → ")}`,
        href: "/tree",
      }];
    }
    return flattenTree(opt.next, nextPath);
  });
}

// Build the flat index once at module load (client or server — tree-shakes fine).
export const SEARCH_INDEX = [
  // Flashcards — one entry per card
  ...FLASHCARDS.map((c) => ({
    kind: "flashcard",
    cat: c.cat,
    title: c.front,
    body: c.back,
    href: `/flashcards#card-${c.id}`,
  })),

  // Mnemonics — one entry per set
  ...MNEMONICS.map((m, i) => ({
    kind: "mnemonic",
    title: m.title,
    body: `${m.mnemonic}\n${m.items.join(" • ")}${m.tip ? `\nTip: ${m.tip}` : ""}`,
    href: `/mnemonics#m-${i}`,
  })),

  // Confusables — one entry per pair
  ...CONFUSABLES.map((p, i) => ({
    kind: "confusable",
    title: `${p.a.name} vs ${p.b.name}`,
    body: `${p.a.name}: ${p.a.points.join(" • ")}\n${p.b.name}: ${p.b.points.join(" • ")}`,
    href: `/confusables#c-${i}`,
  })),

  // High-yield — one entry per item
  ...HIGHYIELD.flatMap((section) =>
    section.items.map((item, i) => ({
      kind: "high-yield",
      cat: section.cat,
      title: item.title,
      body: item.body,
      href: `/highyield#hy-${section.cat}-${i}`,
    }))
  ),

  // Decision tree leaves
  ...flattenTree(TREE),

  // Study guide chunks
  ...GUIDE_CONTENT.map((g) => ({
    kind: "guide",
    title: `${g.topic} — ${g.section}`,
    body: g.text,
    href: "/guide",
  })),

  // Vocab (both instructors, all levels)
  ...["weldon", "virga"].flatMap((who) =>
    VOCAB[who].levels.flatMap((level) =>
      level.terms.map((t) => ({
        kind: "vocab",
        cat: who,
        title: t.term,
        body: `${VOCAB[who].instructor} · Level ${level.n} (${level.title}): ${t.def}`,
        href: `/vocab#term-${who}-${t.id}`,
      }))
    )
  ),

  // Drugs (Virga β-lactam reference) — one entry per drug + one per class header
  ...DRUG_CLASSES.flatMap((cls) => [
    {
      kind: "drug-class",
      title: `${cls.name} (${cls.family})`,
      body: `Nucleus: ${cls.nucleus}. ${cls.sarPrinciple} Stability: ${cls.stability}`,
      href: "/drugs",
    },
    ...cls.drugs.map((d) => ({
      kind: "drug",
      title: `${d.generic}${d.brand && d.brand !== "—" ? ` (${d.brand})` : ""}`,
      body: `${cls.name} · ${d.route} · ${d.spectrum}. ${d.keyStructure || ""} ${d.sar || ""} Clinical: ${d.clinical || ""}`,
      href: "/drugs",
    })),
  ]),
];

// Label + color metadata for each kind (rendered in the SearchBar dropdown).
export const KIND_META = {
  flashcard:  { label: "Flashcard",  color: "bg-teal"    },
  mnemonic:   { label: "Mnemonic",   color: "bg-coral"   },
  confusable: { label: "Confusable", color: "bg-gold"    },
  "high-yield": { label: "High-Yield", color: "bg-navy" },
  tree:       { label: "ID Tree",    color: "bg-green-700" },
  guide:      { label: "Study Guide",color: "bg-gp"      },
  vocab:      { label: "Vocab",      color: "bg-atyp"    },
  drug:       { label: "Drug",       color: "bg-coral"   },
  "drug-class": { label: "Drug Class", color: "bg-green-700" },
};

// Simple ranking search — no external deps.
// Scores: exact title match > title substring > body substring. Case-insensitive.
export function searchIndex(query, limit = 25) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);

  const scored = [];
  for (const entry of SEARCH_INDEX) {
    const titleLc = entry.title.toLowerCase();
    const bodyLc = entry.body.toLowerCase();
    let score = 0;
    let allTermsHit = true;

    for (const term of terms) {
      let hit = false;
      if (titleLc === term) { score += 100; hit = true; }
      else if (titleLc.startsWith(term)) { score += 50; hit = true; }
      else if (titleLc.includes(term)) { score += 25; hit = true; }
      if (bodyLc.includes(term)) { score += 5; hit = true; }
      if (!hit) { allTermsHit = false; break; }
    }

    if (allTermsHit && score > 0) scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.entry);
}
