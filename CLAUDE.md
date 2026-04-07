# CLAUDE.md — PharMicrobes Authoring Guide

This file tells Claude Code how to extend the PharMicrobes study app when the user drops new course material into the repo. Read this fully before editing code.

---

## 1. What this project is

**PharMicrobes** is an interactive medical microbiology / pharmacology study hub (`pharmicrobes.vercel.app`). Every piece of content is sourced **exclusively from lecture materials the user provides** — never invent facts, never pull from outside sources. If you are uncertain what the slides say, ask.

**Live:** https://pharmicrobes.vercel.app
**Repo:** https://github.com/jacksonbarger/pharmicrobes
**Auto-deploy:** Every push to `main` triggers a Vercel production deploy.

### Stack
- Next.js **15.5.x** App Router (static export — all pages are `○ (Static)`)
- React 19
- Tailwind CSS 4 (flat `@theme` tokens in `src/app/globals.css`)
- No database, no API routes, no auth. Pure static content + client interactivity.

### Do / don't
- **Do** keep everything static and client-side. New pages should be `.js` (not `.tsx`) to match the existing code.
- **Do** match the existing visual language exactly (see §3).
- **Do** run `npm run build` locally before committing — the Vercel pipeline will reject lint errors (unescaped `"` / `'` in JSX, missing keys, etc.).
- **Don't** add dependencies unless absolutely required. This app has 4 runtime deps total. Keep it that way.
- **Don't** pin Next.js below **15.5.14** — earlier versions are blocked by Vercel's security check.
- **Don't** use `<img>` — use `next/image` only if the user adds real images. There are currently no images.
- **Don't** invent content. Every card, mnemonic, tree node, and high-yield bullet must trace back to a specific lecture the user has provided.

---

## 2. Where new content arrives

When the user says "I added new content" or drops files, check these locations **in order**:

1. `content/` — the canonical drop folder at the repo root. Create it if missing.
2. The current working directory (files the user unzipped or exported to the project root)
3. `../` — one level up, i.e. `/Users/justbusiness/Desktop/PDA IV/` where the source course materials already live (look for `.docx`, `.pdf`, `.pptx`, folders named after instructors, etc.)

### Handling each file type
| Type | How to read |
|---|---|
| `.md`, `.txt` | `Read` tool directly |
| `.docx` | `textutil -convert txt "file.docx" -stdout` (macOS built-in) |
| `.pdf` | `Read` tool supports PDF (use `pages:` for >10 page docs) |
| `.pptx` | `unzip -p file.pptx 'ppt/slides/slide*.xml' \| grep -o '<a:t>[^<]*</a:t>'` to extract text, or ask user to export to PDF |
| `.xlsx`, `.csv` | Ask user to export a CSV; read with `Read` |

Always read the **entire** source file before authoring content. Partial reads lead to invented gaps.

---

## 3. Visual language (strict)

All tokens are defined in `src/app/globals.css` as Tailwind 4 `@theme` CSS variables. Use these exact names — do not introduce new colors.

### Color roles (matched to organism categories)
| Token | Hex | Meaning |
|---|---|---|
| `navy` / `navy-light` | `#1a2744` | Primary brand, headers, core concepts |
| `teal` / `teal-light` | `#0e7c7b` | Accent, progress, success states |
| `coral` / `coral-light` | `#d94f4f` | Warnings, "missed" states, antibiotics/resistance |
| `gold` / `gold-light` | `#d4a843` | Callouts, key insights |
| `gp` / `gp-light` | `#6a3d9a` (purple) | **Gram-positive** organisms |
| `gn` / `gn-light` | `#c44569` (magenta) | **Gram-negative** organisms |
| `atyp` / `atyp-light` | `#d17b0f` (amber) | **Atypical / spirochetes** |
| `cream` | `#faf8f4` | Page background |

**Rule:** any organism-related UI must color-code by these three categories (`gp` / `gn` / `atyp`). Never mix the palette.

### Shared components & classes
- `.section-card` — rounded white card with border and subtle shadow. Use as the outer container for all major blocks on `/guide`.
- `.tag` — tiny bold pill for labels.
- `.animate-fade` — fade-in-up page entry. Every page's root `<div>` should have this.
- **Font-display** (`font-display` → Georgia serif) is used for headings; body is system sans.
- All pages use emoji in headings (🧫 📖 ⭐ 🗂️ 🃏 🌳 🧠 ⚡) — keep this tone.

### Page skeleton (every route uses this pattern)
```jsx
export default function SomePage() {
  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">EMOJI Page Title</h1>
      <p className="text-gray-500 text-sm mb-6">One-line subtitle.</p>
      {/* content */}
    </div>
  );
}
```

For interactive pages, add `"use client";` as the first line.

---

## 4. Routes & data files (current inventory)

| Route | File | Data source | Purpose |
|---|---|---|---|
| `/` | `src/app/page.js` | inline `tools[]` | Home grid linking to every tool |
| `/guide` | `src/app/guide/page.js` | inline (uses `<S>`, `<T>`, `<K>` helpers) | Long-form study guide split into colored sections |
| `/highyield` | `src/app/highyield/page.js` | inline `HY[]` | Expandable must-memorize facts, grouped by category |
| `/charts` | `src/app/charts/page.js` | inline JSX tables | Filled + blank Gram-stain classification charts |
| `/flashcards` | `src/app/flashcards/page.js` | `src/data/flashcards.js` | Flip-to-reveal deck with progress + filter |
| `/tree` | `src/app/tree/page.js` | inline `TREE` | Click-through diagnostic decision tree |
| `/mnemonics` | `src/app/mnemonics/page.js` | `src/data/mnemonics.js` | Memory aids with items + tip |
| `/confusables` | `src/app/confusables/page.js` | `src/data/confusables.js` | Side-by-side comparison cards |

Navigation is in `src/components/Sidebar.js`. **Any new route must be added to the `NAV` array AND the home grid's `tools` array.**

### Data shapes (canonical — follow exactly)

**Flashcard** — `src/data/flashcards.js`
```js
{ id: 35, front: "Organism name", back: "Line 1\nLine 2\nLine 3", cat: "gp" | "gn" | "atyp" }
```
`id` must be unique and sequential. `back` uses `\n` for line breaks (the page renders with `whitespace-pre-line`). Keep each card ~5–7 lines.

**Mnemonic** — `src/data/mnemonics.js`
```js
{
  title: "Group Name",
  mnemonic: "THE ACRONYM",
  color: "#d94f4f",  // pick from the palette hex values above
  items: ["First item", "Second item"],
  tip: "Optional one-sentence clinical tip"
}
```

**Confusable pair** — `src/data/confusables.js`
```js
{
  a: { name: "Thing A", points: ["bullet 1", "bullet 2"] },
  b: { name: "Thing B", points: ["bullet 1", "bullet 2"] },
  color: "#0e7c7b"  // palette hex
}
```
Both sides should have the **same number of points** (cards are rendered in a 2-col grid). Keep bullets ≤ ~60 chars.

**High-yield section** — `src/app/highyield/page.js` `HY[]`
```js
{
  cat: "core" | "gp" | "gn" | "atyp" | "abx",
  badge: "CORE",
  items: [{ title: "Headline fact", body: "Full explanation paragraph." }]
}
```

**Decision tree node** — `src/app/tree/page.js` `TREE`
```js
// branch node
{ q: "Question?", opts: [ { label: "Choice", next: { /* next node */ } } ] }
// leaf node
{ label: "Choice", answer: "Organism", detail: "One-sentence summary" }
```

---

## 5. How to extend when new content arrives

When the user drops a new lecture / PowerPoint / study guide / worksheet:

### Step 1 — Read the source completely
Locate the file (see §2), read it end-to-end. Note the lecture number / title and any categorization the instructor used.

### Step 2 — Classify what was added
Ask: does this content **extend** an existing topic, or is it a **new topic** that deserves its own route?

- **Same topic, more organisms/facts:** add entries to existing data files. E.g. new bugs → extend `flashcards.js`, extend the classification chart in `/charts`, add branches to `/tree`, add entries to `/highyield`.
- **Same topic, new mnemonic or comparison:** extend `mnemonics.js` or `confusables.js`.
- **New topic entirely** (e.g. Lecture 3: Antifungals, Lecture 4: Antivirals): create a new route under `src/app/<slug>/page.js` using the page skeleton in §3. Add it to `NAV` in `Sidebar.js` and to `tools[]` in `src/app/page.js`. Pick a palette color that isn't already in heavy use, or reuse `abx`/`coral` for drug-focused content.

### Step 3 — Decide which tools to build
For any significant new content, the user expects **all five** of these study tools to be extended or created:
1. **Study Guide** entry — long-form prose in `/guide` (add a new `<S>` section) or a new route
2. **High-Yield** bullets — 5–8 must-memorize facts in `/highyield`
3. **Flashcards** — one card per testable item
4. **Mnemonic(s)** — at least one memory aid if there's a list to memorize
5. **Decision tree** additions OR a new diagnostic/ID tool if the content introduces a new classification axis
6. Optionally **Confusables** if the content introduces easily-confused pairs
7. Optionally a **new interactive tool** (quiz, matching game, dose calculator, etc.) if the content suggests one

Not every content drop needs all seven — use judgment. But default to **adding at least flashcards + high-yield + guide section** for any new lecture.

### Step 4 — Write the code
- Match the existing data shape byte-for-byte. Don't invent new fields.
- Keep entries consistent in length and tone with existing ones.
- Every piece of content must be traceable to a specific source line/slide. If the source is ambiguous, ask the user — don't guess.
- Run `npm run build` before committing. Fix any lint errors (common one: escape `"` and `'` inside JSX text as `&quot;` / `&rsquo;`).

### Step 5 — Commit and deploy
```bash
git add -A
git commit -m "Add <topic> content from <lecture name>"
git push
```
Vercel auto-deploys from `main`. Verify with `curl -sI https://pharmicrobes.vercel.app/` (expect `HTTP/2 200`) after ~60 s.

### Step 6 — Report to the user
Summarize:
- Which source file(s) you read
- Which routes/data files you changed and how many entries you added
- The live URL of the new/updated page
- Anything ambiguous in the source that you want the user to verify

---

## 6. Extending with a new interactive tool

If the user asks for a new tool type (e.g. dose calculator, drug-bug matcher, timed quiz, dosing flashcards), follow this checklist:

1. Create `src/app/<tool-slug>/page.js` with `"use client";` at the top
2. Data lives in `src/data/<tool-slug>.js` if it's more than ~20 lines; otherwise inline it
3. Add to `Sidebar.js` `NAV` array with an emoji icon
4. Add to home page `tools[]` array with a color class and description
5. Use `useState` / `useMemo` only — no external state libraries
6. Reuse `section-card`, `tag`, `animate-fade`, the palette tokens, and the page skeleton

**Pattern to copy:** `flashcards/page.js` is the most feature-rich reference (filter tabs, progress bar, card flip, known/missed tracking, reset). Start from there for any new quiz-style tool.

---

## 7. Commands reference

```bash
npm run dev       # local dev (Turbopack) — http://localhost:3000
npm run build     # production build + lint check (MUST pass before commit)
npm run start     # serve the built app
npm run lint      # lint without building

vercel deploy --prod --yes   # manual prod deploy (rare — pushes auto-deploy)
vercel alias ls              # confirm pharmicrobes.vercel.app is attached
```

---

## 8. Senior-dev defaults to honor

From global user preferences (apply where relevant):
- Fail fast on missing config — validate env at startup if you ever add env vars
- Structured logs if any backend is added
- Rate-limit headers if any API routes are added
- Correlation IDs for tracing if multi-service

None of these apply to the current static app, but keep them in mind if the app grows.

---

## 9. Quick sanity checks before you say "done"

- [ ] `npm run build` passes locally with zero errors
- [ ] New content traces to a specific source file the user provided
- [ ] New route (if any) is in `Sidebar.js` `NAV` AND home `tools[]`
- [ ] Palette colors match (`gp` / `gn` / `atyp` for organisms)
- [ ] Page root uses `animate-fade` and the standard `<h1>` header style
- [ ] `git push` to `main` triggered Vercel auto-deploy
- [ ] Live URL returns 200

---

*Last updated: 2026-04-07. Regenerate the sections above if the app architecture changes materially (new framework, new data shapes, new routing pattern).*
