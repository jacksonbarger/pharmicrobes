"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/guide", label: "Study Guide", icon: "📖" },
  { href: "/highyield", label: "High-Yield", icon: "⭐" },
  { href: "/charts", label: "Bug Charts", icon: "🗂️" },
  { href: "/flashcards", label: "Flashcards", icon: "🃏" },
  { href: "/tree", label: "Bug ID Tree", icon: "🌳" },
  { href: "/mnemonics", label: "Mnemonics", icon: "🧠" },
  { href: "/confusables", label: "Confusables", icon: "⚡" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-3 left-3 z-50 bg-navy text-white p-2 rounded-lg shadow-lg"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-navy z-40 flex flex-col transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="p-5 pb-3 border-b border-white/10">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-white font-display text-lg font-bold tracking-tight">
              🧫 PharMicrobes
            </h1>
            <p className="text-white/50 text-xs mt-0.5">Med Micro Study Hub</p>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${active
                    ? "bg-teal text-white shadow-md"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <p className="text-white/30 text-[10px] text-center">
            Lectures 1 &amp; 2 · All content from provided slides
          </p>
        </div>
      </aside>
    </>
  );
}
