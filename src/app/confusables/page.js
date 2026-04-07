"use client";
import { CONFUSABLES } from "@/data/confusables";

export default function ConfusablesPage() {
  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">⚡ Easy to Confuse</h1>
      <p className="text-gray-500 text-sm mb-6">Side-by-side comparisons of commonly mixed-up pairs.</p>
      <div className="space-y-5">
        {CONFUSABLES.map((pair, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden shadow-sm" style={{borderColor:pair.color}}>
            <div className="text-white text-center py-2 font-bold text-sm" style={{background:pair.color}}>
              {pair.a.name} &nbsp;vs&nbsp; {pair.b.name}
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4 border-r" style={{borderColor:pair.color+"22"}}>
                <div className="font-bold text-sm italic mb-2" style={{color:pair.color}}>{pair.a.name}</div>
                <ul className="list-disc ml-4 space-y-0.5 text-xs leading-relaxed">
                  {pair.a.points.map((p,j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
              <div className="p-4">
                <div className="font-bold text-sm italic mb-2" style={{color:pair.color}}>{pair.b.name}</div>
                <ul className="list-disc ml-4 space-y-0.5 text-xs leading-relaxed">
                  {pair.b.points.map((p,j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
