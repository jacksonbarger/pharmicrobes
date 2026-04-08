"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchIndex, KIND_META, SEARCH_INDEX } from "@/data/searchIndex";

// Escape regex special chars so query highlights don't blow up.
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Wrap every case-insensitive match of `terms` in <mark>.
function Highlight({ text, terms }) {
  if (!text) return null;
  if (!terms || terms.length === 0) return <>{text}</>;
  const pattern = new RegExp(`(${terms.map(escapeRegex).join("|")})`, "gi");
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((p, i) =>
        pattern.test(p) ? (
          <mark key={i} className="bg-gold-light text-navy rounded px-0.5">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function SearchBar({ onNavigate }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = useMemo(() => searchIndex(q, 25), [q]);
  const terms = useMemo(
    () => q.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [q]
  );

  // Global Cmd+K / Ctrl+K focus
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
        setOpen(true);
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Reset active index when results change
  useEffect(() => {
    setActive(0);
  }, [q]);

  // Scroll active result into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const commit = (entry) => {
    if (!entry) return;
    setOpen(false);
    setQ("");
    onNavigate?.();
    router.push(entry.href);
  };

  const onKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      commit(results[active]);
    }
  };

  const showDropdown = open && q.trim().length > 0;

  return (
    <div className="relative px-4 py-3 border-b border-white/10">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm pointer-events-none">
          🔍
        </span>
        <input
          ref={inputRef}
          type="text"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={onKeyDown}
          placeholder="Search everything…"
          className="w-full bg-white/10 text-white placeholder-white/40 text-sm rounded-lg pl-8 pr-12 py-2 border border-white/10 focus:outline-none focus:border-teal focus:bg-white/15 transition-all"
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-white/40 border border-white/20 rounded px-1.5 py-0.5 pointer-events-none">
          ⌘K
        </span>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          ref={listRef}
          className="absolute left-4 right-4 top-full mt-2 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-[70vh] overflow-y-auto lg:left-auto lg:right-auto lg:w-[420px] lg:-ml-2"
        >
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-400">
              No matches for &ldquo;{q}&rdquo;
              <div className="text-[11px] mt-1 text-gray-300">
                {SEARCH_INDEX.length} items indexed
              </div>
            </div>
          ) : (
            <>
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 border-b border-gray-100">
                {results.length} result{results.length === 1 ? "" : "s"}
              </div>
              <ul>
                {results.map((r, i) => {
                  const meta = KIND_META[r.kind] || { label: r.kind, color: "bg-gray-500" };
                  const isActive = i === active;
                  return (
                    <li
                      key={`${r.href}-${i}`}
                      data-idx={i}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        commit(r);
                      }}
                      onMouseEnter={() => setActive(i)}
                      className={`px-3 py-2.5 cursor-pointer border-b border-gray-50 last:border-b-0 transition-colors ${
                        isActive ? "bg-teal-light" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span
                          className={`${meta.color} text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded mt-0.5 flex-shrink-0`}
                        >
                          {meta.label}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-navy leading-snug">
                            <Highlight text={r.title} terms={terms} />
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-2 leading-snug whitespace-pre-line">
                            <Highlight text={r.body.slice(0, 200)} terms={terms} />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="px-3 py-2 text-[10px] text-gray-400 bg-gray-50 border-t border-gray-100 flex gap-3">
                <span>↑↓ navigate</span>
                <span>↵ open</span>
                <span>esc close</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
