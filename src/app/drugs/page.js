"use client";
import { useMemo, useState } from "react";
import { DRUG_CLASSES } from "@/data/drugs";

const FAMILY_COLORS = {
  Penicillin:            { bg: "bg-navy",    text: "text-navy",    light: "bg-navy-light",  border: "border-navy"  },
  "β-lactamase Inhibitor": { bg: "bg-gold", text: "text-amber-800", light: "bg-gold-light", border: "border-gold" },
  Cephalosporin:         { bg: "bg-atyp",    text: "text-atyp",    light: "bg-atyp-light",  border: "border-atyp"  },
  Carbapenem:            { bg: "bg-green-700", text: "text-green-800", light: "bg-green-50", border: "border-green-700" },
  Monobactam:            { bg: "bg-gp",      text: "text-gp",      light: "bg-gp-light",    border: "border-gp"    },
};

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
  const [activeClass, setActiveClass] = useState("all");

  const filteredClasses = useMemo(() => {
    return DRUG_CLASSES.map((cls) => {
      const drugs = cls.drugs.filter(
        (d) => matchesRoute(d.route, routeFilter) && matchesSpectrum(d, spectrumFilter)
      );
      return { ...cls, drugs };
    }).filter((cls) => (activeClass === "all" || cls.id === activeClass) && cls.drugs.length > 0);
  }, [routeFilter, spectrumFilter, activeClass]);

  const totalDrugs = filteredClasses.reduce((n, c) => n + c.drugs.length, 0);

  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">💊 β-Lactam Drug Reference</h1>
      <p className="text-gray-500 text-sm mb-5">
        Med-chem focused. Structure, SAR, stability, and why each modification matters — sourced from Dr. Virga&rsquo;s β-lactams materials.
      </p>

      {/* Filters */}
      <div className="section-card p-4 mb-6">
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

        <div className="mt-3 pt-3 border-t border-gray-100 flex gap-1 flex-wrap">
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
          {DRUG_CLASSES.map((cls) => (
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
