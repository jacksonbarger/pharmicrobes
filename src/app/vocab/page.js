"use client";
import { useState, useMemo } from "react";
import { VOCAB } from "@/data/vocab";

// Visual theme per instructor tab
const THEMES = {
  weldon: {
    tabBg: "bg-navy",
    tabText: "text-navy",
    accent: "border-navy",
    levelBg: ["bg-navy-light", "bg-teal-light", "bg-gp-light"],
    levelBorder: ["border-navy", "border-teal", "border-gp"],
    levelText: ["text-navy", "text-teal", "text-gp"],
    levelBadge: ["bg-navy", "bg-teal", "bg-gp"],
  },
  virga: {
    tabBg: "bg-coral",
    tabText: "text-coral",
    accent: "border-coral",
    levelBg: ["bg-coral-light", "bg-gold-light", "bg-gn-light"],
    levelBorder: ["border-coral", "border-gold", "border-gn"],
    levelText: ["text-coral", "text-amber-800", "text-gn"],
    levelBadge: ["bg-coral", "bg-gold", "bg-gn"],
  },
};

// Flatten one instructor's terms so we can look up prereqs by id across levels.
function flatTerms(instructor) {
  const map = new Map();
  for (const level of instructor.levels) {
    for (const t of level.terms) {
      map.set(t.id, { ...t, level: level.n });
    }
  }
  return map;
}

function resolvePrereq(ref, currentMap, otherMap) {
  if (ref.startsWith("weldon:")) {
    const id = ref.slice(7);
    const t = otherMap.get(id);
    return t ? { term: t.term, cross: true, id } : null;
  }
  const t = currentMap.get(ref);
  return t ? { term: t.term, cross: false, id: ref } : null;
}

function PrereqChips({ term, currentMap, otherMap, onJump }) {
  if (!term.prereqs || term.prereqs.length === 0) return null;
  const resolved = term.prereqs
    .map((p) => resolvePrereq(p, currentMap, otherMap))
    .filter(Boolean);
  if (resolved.length === 0) return null;
  return (
    <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1">
        Builds on
      </span>
      {resolved.map((p, i) => (
        <button
          key={i}
          onClick={() => !p.cross && onJump(p.id)}
          className={`text-[11px] px-2 py-0.5 rounded-full border transition-all ${
            p.cross
              ? "bg-gp-light text-gp border-gp cursor-default"
              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-teal-light hover:border-teal cursor-pointer"
          }`}
          title={p.cross ? "See Weldon vocab list" : "Jump to this term"}
        >
          {p.cross && "↗ Weldon: "}
          {p.term}
        </button>
      ))}
    </div>
  );
}

export default function VocabPage() {
  const [tab, setTab] = useState("weldon");
  const weldon = VOCAB.weldon;
  const virga = VOCAB.virga;
  const weldonMap = useMemo(() => flatTerms(weldon), [weldon]);
  const virgaMap = useMemo(() => flatTerms(virga), [virga]);

  const data = tab === "weldon" ? weldon : virga;
  const theme = THEMES[tab];
  const currentMap = tab === "weldon" ? weldonMap : virgaMap;
  const otherMap = tab === "weldon" ? virgaMap : weldonMap;

  const jumpTo = (id) => {
    const el = document.getElementById(`term-${tab}-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      // Open the <details> if closed
      if (el.tagName === "DETAILS") el.setAttribute("open", "");
      el.classList.add("ring-2", "ring-teal");
      setTimeout(() => el.classList.remove("ring-2", "ring-teal"), 1600);
    }
  };

  const totalTerms = data.levels.reduce((n, l) => n + l.terms.length, 0);

  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">
        📚 Vocabulary — Progressive Lists
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Two lists, ordered so each term builds on the earlier ones. Start at Level 1.
      </p>

      {/* Instructor tabs */}
      <div className="flex gap-2 mb-5">
        {[
          { k: "weldon", label: "🧫 Weldon — Microbiology", count: weldon.levels.reduce((n, l) => n + l.terms.length, 0) },
          { k: "virga", label: "💊 Virga — Antimicrobials", count: virga.levels.reduce((n, l) => n + l.terms.length, 0) },
        ].map(({ k, label, count }) => {
          const active = tab === k;
          const t = THEMES[k];
          return (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`flex-1 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all text-left ${
                active
                  ? `${t.tabBg} text-white border-transparent shadow-md`
                  : `bg-white ${t.tabText} ${t.accent} hover:brightness-95`
              }`}
            >
              <div className="font-bold">{label}</div>
              <div className={`text-[11px] mt-0.5 ${active ? "text-white/70" : "text-gray-500"}`}>
                {count} terms
              </div>
            </button>
          );
        })}
      </div>

      {/* Header card */}
      <div className={`rounded-xl border-2 ${theme.accent} bg-white p-4 mb-6`}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className={`font-display font-bold ${theme.tabText}`}>
              {data.instructor} — {data.subject}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">
              Source: {data.source}
            </div>
          </div>
          <div className="text-[11px] text-gray-400">{totalTerms} terms across {data.levels.length} levels</div>
        </div>
        {data.note && (
          <div className="mt-3 text-xs text-gray-600 bg-gold-light border-l-4 border-gold px-3 py-2 rounded-r">
            {data.note}
          </div>
        )}
      </div>

      {/* Levels */}
      {data.levels.map((level, li) => (
        <section key={level.n} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className={`${theme.levelBadge[li]} text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}>
              Level {level.n}
            </span>
            <h2 className={`font-display text-lg font-bold ${theme.levelText[li]}`}>
              {level.title}
            </h2>
          </div>
          <p className="text-xs text-gray-500 mb-3 italic">{level.blurb}</p>

          <div className="space-y-2">
            {level.terms.map((t, i) => (
              <details
                key={t.id}
                id={`term-${tab}-${t.id}`}
                className={`rounded-lg border ${theme.levelBorder[li]} bg-white overflow-hidden scroll-mt-20 transition-all`}
              >
                <summary
                  className={`px-4 py-3 ${theme.levelBg[li]} border-l-4 ${theme.levelBorder[li]} font-semibold text-sm flex items-center gap-2 hover:brightness-95 transition-all`}
                >
                  <span className="text-teal text-xs mr-1">▸</span>
                  <span className="text-gray-400 text-[11px] font-mono tabular-nums w-7">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-800">{t.term}</span>
                </summary>
                <div className="px-4 py-3 text-sm text-gray-700 leading-relaxed bg-white">
                  {t.def}
                  <PrereqChips
                    term={t}
                    currentMap={currentMap}
                    otherMap={otherMap}
                    onJump={jumpTo}
                  />
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
