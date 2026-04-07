"use client";
import { useState, useMemo } from "react";
import { FLASHCARDS } from "@/data/flashcards";

const CAT_COLORS = { gp:"#6a3d9a", gn:"#c44569", atyp:"#d17b0f" };
const CAT_LABELS = { gp:"GRAM +", gn:"GRAM −", atyp:"ATYPICAL" };
const CAT_BG = { gp:"#f0e8f8", gn:"#fce4ec", atyp:"#fff3e0" };

export default function FlashcardsPage() {
  const [filter, setFilter] = useState("all");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(new Set());
  const [missed, setMissed] = useState(new Set());

  const deck = useMemo(() => {
    if (filter === "missed") return FLASHCARDS.filter(c => missed.has(c.id));
    if (filter === "all") return FLASHCARDS;
    return FLASHCARDS.filter(c => c.cat === filter);
  }, [filter, missed]);

  const card = deck[idx] || deck[0];
  const total = deck.length;
  const knownCount = [...known].filter(id => deck.some(c => c.id === id)).length;

  const next = (isKnown) => {
    if (isKnown) setKnown(p => new Set([...p, card.id]));
    else setMissed(p => new Set([...p, card.id]));
    setFlipped(false);
    setIdx(i => (i + 1) % total);
  };
  const reset = () => { setKnown(new Set()); setMissed(new Set()); setIdx(0); setFlipped(false); };

  if (!card) return <div className="text-center py-20 text-gray-400">No cards in this filter. Try &quot;All&quot; or study more to build your Missed pile.</div>;

  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">🃏 Flashcard Quiz</h1>
      <p className="text-gray-500 text-sm mb-5">Tap to flip, then mark Got it or Missed. Filter by category.</p>

      <div className="flex gap-2 flex-wrap mb-4">
        {[["all","All"],["gp","Gram +"],["gn","Gram −"],["atyp","Atypical"],["missed",`Missed (${missed.size})`]].map(([k,l]) =>
          <button key={k} onClick={() => {setFilter(k);setIdx(0);setFlipped(false);}}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all
              ${filter===k ? "bg-navy text-white border-navy" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`}>{l}</button>
        )}
        <button onClick={reset} className="ml-auto px-4 py-1.5 rounded-full text-sm font-semibold border-2 border-coral text-coral bg-white hover:bg-coral-light">Reset</button>
      </div>

      <div className="text-center text-sm text-gray-400 mb-3">Card {idx+1} of {total} &nbsp;|&nbsp; Known: {knownCount}/{total}</div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-teal rounded-full transition-all duration-300" style={{width:`${total > 0 ? (knownCount/total)*100 : 0}%`}} />
      </div>

      {/* Card */}
      <div onClick={() => setFlipped(!flipped)}
        className="rounded-2xl p-8 min-h-[260px] cursor-pointer relative transition-all border-2 shadow-sm hover:shadow-md"
        style={{background:flipped ? "#f0faf9" : (CAT_BG[card.cat]||"#f8f8f8"), borderColor:CAT_COLORS[card.cat]||"#ccc"}}>
        <span className="absolute top-3 right-4 text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border"
          style={{color:CAT_COLORS[card.cat], borderColor:CAT_COLORS[card.cat]}}>{CAT_LABELS[card.cat]}</span>
        {!flipped ? (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="text-2xl font-bold text-navy italic whitespace-pre-line text-center">{card.front}</div>
            <div className="mt-4 text-xs text-gray-400">tap to flip</div>
          </div>
        ) : (
          <div>
            <div className="text-sm font-bold italic mb-2" style={{color:CAT_COLORS[card.cat]}}>{card.front}</div>
            <div className="whitespace-pre-line text-[15px] leading-relaxed text-gray-800">{card.back}</div>
          </div>
        )}
      </div>

      {flipped && (
        <div className="flex gap-3 mt-5 justify-center">
          <button onClick={()=>next(false)} className="flex-1 max-w-[200px] py-3 rounded-xl border-2 border-coral bg-coral-light text-coral font-bold text-lg hover:bg-coral hover:text-white transition-all">✗ Missed</button>
          <button onClick={()=>next(true)} className="flex-1 max-w-[200px] py-3 rounded-xl border-2 border-green-600 bg-green-50 text-green-700 font-bold text-lg hover:bg-green-600 hover:text-white transition-all">✓ Got it!</button>
        </div>
      )}
    </div>
  );
}
