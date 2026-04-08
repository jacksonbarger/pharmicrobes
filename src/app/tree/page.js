"use client";
import { useState } from "react";
import { TREE } from "@/data/tree";

function TreeNode({ node }) {
  const [sel, setSel] = useState(null);
  if (!node) return null;
  if (node.answer) return (
    <div className="mt-3 p-5 rounded-xl bg-green-50 border-2 border-green-500 animate-fade">
      <div className="text-lg font-bold text-green-700 italic">→ {node.answer}</div>
      <p className="text-sm text-gray-600 mt-1">{node.detail}</p>
    </div>
  );
  return (
    <div className="mt-3 animate-fade">
      <p className="font-bold text-navy mb-2">{node.q}</p>
      <div className="flex flex-col gap-2">
        {node.opts.map((opt, i) => (
          <div key={i}>
            <button onClick={() => setSel(i)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm transition-all
                ${sel===i ? "border-teal bg-teal-light font-bold" : "border-gray-200 bg-white hover:border-gray-400"}`}>
              {opt.label}
            </button>
            {sel === i && (opt.answer ? <TreeNode node={opt} /> : <TreeNode node={opt.next} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TreePage() {
  const [key, setKey] = useState(0);
  return (
    <div className="animate-fade">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-navy">🌳 Bug ID Decision Tree</h1>
          <p className="text-gray-500 text-sm">Click through diagnostic logic step by step.</p>
        </div>
        <button onClick={() => setKey(k=>k+1)} className="px-4 py-2 rounded-full border-2 border-teal text-teal font-semibold text-sm hover:bg-teal hover:text-white transition-all">Start Over</button>
      </div>
      <div className="section-card p-5">
        <p className="font-bold text-lg text-navy mb-1">{TREE.q}</p>
        <TreeNode key={key} node={TREE} />
      </div>
    </div>
  );
}
