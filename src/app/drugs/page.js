"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { DRUG_CLASSES } from "@/data/drugs";

// SAR principle figures lifted from Dr. Virga's β-lactams.pptx.
// Placed at the top of the page so the chemistry is one glance away from every class card.
const SAR_FIGURES = [
  {
    src: "/sar/cefiderocol-sar.png",
    w: 640, h: 520,
    title: "Side chains steer everything — Cefiderocol",
    caption:
      "C-7 acyl side chain → β-lactamase stability. C-3 side chain → metallo-β-lactamase evasion. Catechol → iron chelation → trojan-horse uptake through bacterial iron transporters. One molecule, three SAR handles tuned in parallel.",
  },
  {
    src: "/sar/penicillin-degradation.png",
    w: 640, h: 440,
    title: "The β-lactam ring is the drug AND the liability",
    caption:
      "Natural penicillin chemistry is fragile: acid opens the ring to penillic acid (why Pen G is IV/IM only), base/β-lactamases open it to penicilloic acid, methanol attack yields methyl ester, and amidase cleaves the side chain to 6-APA — the scaffold used for every semi-synthetic penicillin.",
  },
  {
    src: "/sar/pbp-classification.png",
    w: 640, h: 480,
    title: "Different PBPs, different essentiality",
    caption:
      "Organisms rely on different PBP isoforms for cross-linking. The spectrum of a β-lactam is ultimately determined by which PBPs its side chain can reach and acylate — MRSA's PBP2a is the textbook escape (acquired via mecA, low affinity for classical β-lactams).",
  },
];

function SarHero() {
  const [open, setOpen] = useState(true);
  return (
    <div className="section-card mb-6 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-navy text-white px-5 py-3 font-display font-bold text-base flex items-center justify-between gap-2 hover:brightness-110 transition-all"
      >
        <span className="flex items-center gap-2">
          <span>⚛️</span>
          <span>SAR Principles at a Glance</span>
        </span>
        <span className="text-xs font-normal opacity-80">{open ? "collapse ▴" : "expand ▾"}</span>
      </button>
      {open && (
        <div className="p-5 bg-white">
          <p className="text-xs text-gray-500 mb-4 italic">
            Three figures from Dr. Virga&rsquo;s β-lactam slides that capture most of the SAR story — how side chains, ring chemistry, and target biology decide what each drug can do.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {SAR_FIGURES.map((fig) => (
              <figure key={fig.src} className="flex flex-col">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-2 flex items-center justify-center">
                  <Image
                    src={fig.src}
                    alt={fig.title}
                    width={fig.w}
                    height={fig.h}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="mt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-teal mb-0.5">{fig.title}</div>
                  <div className="text-xs text-gray-700 leading-relaxed">{fig.caption}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const FAMILY_COLORS = {
  // β-lactams
  Penicillin:            { bg: "bg-navy",    text: "text-navy",    light: "bg-navy-light",  border: "border-navy"  },
  "β-lactamase Inhibitor": { bg: "bg-gold", text: "text-amber-800", light: "bg-gold-light", border: "border-gold" },
  Cephalosporin:         { bg: "bg-atyp",    text: "text-atyp",    light: "bg-atyp-light",  border: "border-atyp"  },
  Carbapenem:            { bg: "bg-green-700", text: "text-green-800", light: "bg-green-50", border: "border-green-700" },
  Monobactam:            { bg: "bg-gp",      text: "text-gp",      light: "bg-gp-light",    border: "border-gp"    },
  // Cell wall (non-β-lactam) & membrane
  Glycopeptide:          { bg: "bg-green-700", text: "text-green-800", light: "bg-green-50", border: "border-green-700" },
  Lipopeptide:           { bg: "bg-green-700", text: "text-green-800", light: "bg-green-50", border: "border-green-700" },
  Polymyxin:             { bg: "bg-green-700", text: "text-green-800", light: "bg-green-50", border: "border-green-700" },
  "Phosphonic acid":     { bg: "bg-green-700", text: "text-green-800", light: "bg-green-50", border: "border-green-700" },
  // Protein synthesis 30S
  Aminoglycoside:        { bg: "bg-teal",    text: "text-teal",    light: "bg-teal-light",  border: "border-teal"  },
  Tetracycline:          { bg: "bg-teal",    text: "text-teal",    light: "bg-teal-light",  border: "border-teal"  },
  // Protein synthesis 50S
  Macrolide:             { bg: "bg-coral",   text: "text-coral",   light: "bg-coral-light", border: "border-coral" },
  Lincosamide:           { bg: "bg-coral",   text: "text-coral",   light: "bg-coral-light", border: "border-coral" },
  Oxazolidinone:         { bg: "bg-coral",   text: "text-coral",   light: "bg-coral-light", border: "border-coral" },
  Streptogramin:         { bg: "bg-coral",   text: "text-coral",   light: "bg-coral-light", border: "border-coral" },
  // Nucleic acid
  Fluoroquinolone:       { bg: "bg-gn",      text: "text-gn",      light: "bg-gn-light",    border: "border-gn"    },
  Rifamycin:             { bg: "bg-gold",    text: "text-amber-800", light: "bg-gold-light", border: "border-gold" },
  Nitroimidazole:        { bg: "bg-gn",      text: "text-gn",      light: "bg-gn-light",    border: "border-gn"    },
  Nitrofuran:            { bg: "bg-gn",      text: "text-gn",      light: "bg-gn-light",    border: "border-gn"    },
  Macrocyclic:           { bg: "bg-gold",    text: "text-amber-800", light: "bg-gold-light", border: "border-gold" },
  // Folate
  "Sulfonamide + DHFR Inhibitor": { bg: "bg-coral", text: "text-coral", light: "bg-coral-light", border: "border-coral" },
};

// Mechanism groups for the top-level filter. Classes without an explicit
// `group` field default to "β-lactam" (the original 11 classes in drugs.js).
const GROUP_META = {
  "β-lactam":       { label: "β-Lactam",         emoji: "🧬" },
  "cell-wall":      { label: "Cell Wall (non-β)", emoji: "🧱" },
  "other-cell-wall":{ label: "Cell Wall (other)", emoji: "🧱" },
  membrane:         { label: "Membrane",          emoji: "💥" },
  "protein-30s":    { label: "Protein 30S",       emoji: "🔬" },
  "protein-50s":    { label: "Protein 50S",       emoji: "🧪" },
  "nucleic-acid":   { label: "Nucleic Acid",      emoji: "🧬" },
  folate:           { label: "Folate",            emoji: "🌿" },
};

const classGroup = (cls) => cls.group || "β-lactam";

const ROUTE_OPTS = ["All", "PO", "IV/IM", "Oral+Parenteral"];
const SPECTRUM_OPTS = ["All", "Narrow", "Broad", "Extended", "MRSA", "Pseudomonas"];

function matchesRoute(route, filter) {
  if (filter === "All") return true;
  const hasPO = /PO/i.test(route);
  const hasParen = /(IV|IM)/i.test(route);
  if (filter === "PO") return hasPO && !hasParen;
  if (filter === "IV/IM") return hasParen && !hasPO;
  if (filter === "Oral+Parenteral") return hasPO && hasParen;
  return true;
}

function matchesSpectrum(drug, filter) {
  if (filter === "All") return true;
  const s = (drug.spectrum + " " + (drug.spectrumDetail || "") + " " + (drug.clinical || "")).toLowerCase();
  if (filter === "MRSA") return s.includes("mrsa");
  if (filter === "Pseudomonas") return s.includes("pseudomonas");
  return drug.spectrum === filter;
}

function Tag({ children, color = "bg-gray-100 text-gray-700" }) {
  return (
    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${color}`}>
      {children}
    </span>
  );
}

function DrugCard({ drug, familyTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-lg border ${familyTheme.border} bg-white overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left px-4 py-3 ${familyTheme.light} border-l-4 ${familyTheme.border} hover:brightness-95 transition-all flex items-center gap-3`}
      >
        <span className="text-teal text-xs">{open ? "▾" : "▸"}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className={`font-display font-bold ${familyTheme.text}`}>{drug.generic}</span>
            {drug.brand && drug.brand !== "—" && (
              <span className="text-xs text-gray-500 italic">({drug.brand})</span>
            )}
          </div>
          <div className="flex gap-1.5 mt-1 flex-wrap">
            <Tag color="bg-teal-light text-teal">{drug.route}</Tag>
            {drug.oralBA && drug.oralBA !== "n/a" && (
              <Tag color="bg-gray-100 text-gray-600">PO BA: {drug.oralBA}</Tag>
            )}
            {drug.blResistant === true && <Tag color="bg-green-50 text-green-700">β-lase resistant</Tag>}
            {drug.blResistant === false && <Tag color="bg-coral-light text-coral">β-lase susceptible</Tag>}
            <Tag color="bg-gp-light text-gp">{drug.spectrum}</Tag>
          </div>
        </div>
      </button>

      {open && (
        <div className="px-4 py-4 bg-white border-t border-gray-100 space-y-3 animate-fade">
          {drug.rGroup && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">R-group</div>
              <div className="text-sm font-mono text-navy">{drug.rGroup}</div>
            </div>
          )}
          {drug.keyStructure && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Key Structural Feature</div>
              <div className="text-sm text-gray-700 leading-relaxed">{drug.keyStructure}</div>
            </div>
          )}
          {drug.sar && (
            <div className="bg-gold-light border-l-4 border-gold rounded-r px-3 py-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-0.5">🧪 Med-Chem / SAR Insight</div>
              <div className="text-sm text-gray-800 leading-relaxed">{drug.sar}</div>
            </div>
          )}
          {drug.spectrumDetail && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Spectrum</div>
              <div className="text-sm text-gray-700">{drug.spectrumDetail}</div>
            </div>
          )}
          {drug.clinical && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Clinical Role</div>
              <div className="text-sm text-gray-700 leading-relaxed">{drug.clinical}</div>
            </div>
          )}
          {drug.notes && (
            <div className="bg-coral-light border-l-4 border-coral rounded-r px-3 py-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-coral mb-0.5">⚠️ Note</div>
              <div className="text-sm text-gray-800 leading-relaxed">{drug.notes}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function DrugsPage() {
  const [routeFilter, setRouteFilter] = useState("All");
  const [spectrumFilter, setSpectrumFilter] = useState("All");
  const [activeGroup, setActiveGroup] = useState("all");
  const [activeClass, setActiveClass] = useState("all");

  // Classes visible in the class pill bar depend on the selected group.
  const classesForGroup = useMemo(() => {
    if (activeGroup === "all") return DRUG_CLASSES;
    return DRUG_CLASSES.filter((cls) => classGroup(cls) === activeGroup);
  }, [activeGroup]);

  const filteredClasses = useMemo(() => {
    return classesForGroup
      .map((cls) => {
        const drugs = cls.drugs.filter(
          (d) => matchesRoute(d.route, routeFilter) && matchesSpectrum(d, spectrumFilter)
        );
        return { ...cls, drugs };
      })
      .filter((cls) => (activeClass === "all" || cls.id === activeClass) && cls.drugs.length > 0);
  }, [classesForGroup, routeFilter, spectrumFilter, activeClass]);

  const totalDrugs = filteredClasses.reduce((n, c) => n + c.drugs.length, 0);

  // Unique groups present in the data, in a stable order
  const availableGroups = useMemo(() => {
    const order = ["β-lactam", "cell-wall", "membrane", "protein-30s", "protein-50s", "nucleic-acid", "folate", "other-cell-wall"];
    const present = new Set(DRUG_CLASSES.map(classGroup));
    return order.filter((g) => present.has(g));
  }, []);

  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">💊 Antimicrobial Drug Reference</h1>
      <p className="text-gray-500 text-sm mb-5">
        Med-chem focused. Structure, pharmacophore, SAR, and why each modification matters — sourced from Dr. Virga&rsquo;s β-lactams and Antimicrobial Coverage materials.
      </p>

      {/* SAR principles hero — figures from the β-lactams pptx */}
      <SarHero />

      {/* Filters */}
      <div className="section-card p-4 mb-6">
        {/* Mechanism group filter */}
        <div className="mb-3 pb-3 border-b border-gray-100">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Mechanism</div>
          <div className="flex gap-1 flex-wrap">
            <button
              onClick={() => { setActiveGroup("all"); setActiveClass("all"); }}
              className={`px-3 py-1 rounded-full text-xs font-semibold border-2 transition-all ${
                activeGroup === "all"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              All
            </button>
            {availableGroups.map((g) => {
              const meta = GROUP_META[g];
              const active = activeGroup === g;
              return (
                <button
                  key={g}
                  onClick={() => { setActiveGroup(g); setActiveClass("all"); }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border-2 transition-all ${
                    active
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {meta.emoji} {meta.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[180px]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Route</div>
            <div className="flex gap-1 flex-wrap">
              {ROUTE_OPTS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRouteFilter(r)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border-2 transition-all ${
                    routeFilter === r
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Spectrum</div>
            <div className="flex gap-1 flex-wrap">
              {SPECTRUM_OPTS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSpectrumFilter(s)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border-2 transition-all ${
                    spectrumFilter === s
                      ? "bg-teal text-white border-teal"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Class</div>
          <div className="flex gap-1 flex-wrap">
            <button
              onClick={() => setActiveClass("all")}
              className={`px-3 py-1 rounded-full text-xs font-semibold border-2 transition-all ${
                activeClass === "all"
                  ? "bg-coral text-white border-coral"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              All classes
            </button>
            {classesForGroup.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setActiveClass(cls.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border-2 transition-all ${
                  activeClass === cls.id
                    ? "bg-coral text-white border-coral"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {cls.tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 text-[11px] text-gray-400">
          {totalDrugs} drug{totalDrugs === 1 ? "" : "s"} shown
        </div>
      </div>

      {/* Classes */}
      {filteredClasses.length === 0 ? (
        <div className="text-center py-16 text-gray-400 text-sm">
          No drugs match this filter. Try &ldquo;All&rdquo; for route and spectrum.
        </div>
      ) : (
        filteredClasses.map((cls) => {
          const theme = FAMILY_COLORS[cls.family] || FAMILY_COLORS.Penicillin;
          return (
            <section key={cls.id} className="mb-8">
              <div className={`rounded-xl border-2 ${theme.border} ${theme.light} p-5 mb-3`}>
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <h2 className={`font-display text-lg font-bold ${theme.text}`}>{cls.name}</h2>
                  <span className={`${theme.bg} text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded`}>
                    {cls.tag}
                  </span>
                </div>
                <div className="grid gap-3 md:grid-cols-2 text-xs">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">Nucleus</div>
                    <div className="font-mono text-gray-800 text-[13px]">{cls.nucleus}</div>
                    {cls.nucleusDetail && (
                      <div className="text-gray-600 mt-1 leading-relaxed">{cls.nucleusDetail}</div>
                    )}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">Stability</div>
                    <div className="text-gray-600 leading-relaxed">{cls.stability}</div>
                  </div>
                </div>
                <div className="mt-3 bg-white border-l-4 border-teal rounded-r px-3 py-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-teal mb-0.5">⚛️ SAR Principle</div>
                  <div className="text-xs text-gray-800 leading-relaxed">{cls.sarPrinciple}</div>
                </div>
                {cls.resistance && (
                  <div className="mt-2 text-[11px] text-gray-500 italic">
                    <span className="font-bold text-coral uppercase tracking-wider">Resistance:</span> {cls.resistance}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {cls.drugs.map((drug, i) => (
                  <DrugCard key={drug.generic + i} drug={drug} familyTheme={theme} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
