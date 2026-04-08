import { HIGHYIELD, HY_STYLES, HY_TITLES } from "@/data/highyield";

export default function HighYieldPage() {
  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">⭐ Ultra High-Yield</h1>
      <p className="text-gray-500 text-sm mb-6">Must-memorize facts. Click any row to expand for detail.</p>
      {HIGHYIELD.map((section) => {
        const s = HY_STYLES[section.cat];
        return (
          <div key={section.cat} className="mb-6">
            <h2 className={`font-display text-lg font-bold ${s.text} mb-3`}>{HY_TITLES[section.cat]}</h2>
            <div className="space-y-2">
              {section.items.map((item, i) => (
                <details key={i} id={`hy-${section.cat}-${i}`} className={`rounded-lg border ${s.border} overflow-hidden scroll-mt-20`}>
                  <summary className={`px-4 py-3 ${s.bg} border-l-4 ${s.border} font-semibold text-sm flex items-center gap-2 hover:brightness-95 transition-all`}>
                    <span className="text-teal text-xs mr-1">▸</span>
                    <span className={`${s.badge} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider`}>{section.badge}</span>
                    <span className="text-gray-800">{item.title}</span>
                  </summary>
                  <div className="px-4 py-3 pl-10 text-sm text-gray-600 leading-relaxed bg-white">{item.body}</div>
                </details>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
