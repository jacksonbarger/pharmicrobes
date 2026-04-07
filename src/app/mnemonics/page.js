"use client";
import { MNEMONICS } from "@/data/mnemonics";

export default function MnemonicsPage() {
  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">🧠 Mnemonics</h1>
      <p className="text-gray-500 text-sm mb-6">9 custom memory aids for the hardest groupings.</p>
      <div className="space-y-4">
        {MNEMONICS.map((m, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden shadow-sm" style={{borderColor:m.color}}>
            <div className="px-5 py-3 text-white font-bold text-sm flex items-center gap-2" style={{background:m.color}}>
              <span>{m.title}</span>
            </div>
            <div className="p-5">
              <div className="bg-gold-light rounded-lg px-4 py-3 text-center font-bold text-lg text-amber-800 tracking-wide mb-3">
                {m.mnemonic}
              </div>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                {m.items.map((item, j) => <li key={j} className="italic">{item}</li>)}
              </ul>
              {m.tip && <div className="mt-3 text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">💡 {m.tip}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
