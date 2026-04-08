import Link from "next/link";

const tools = [
  { href:"/guide", icon:"📖", title:"Study Guide", desc:"Complete breakdown of both lectures — Chain of infection, cell walls, structures, growth, virulence, toxins, genetics, resistance", color:"bg-navy" },
  { href:"/highyield", icon:"⭐", title:"Ultra High-Yield", desc:"Must-memorize facts with expandable detail dropdowns — the 80/20 of both lectures", color:"bg-gradient-to-r from-amber-600 to-pink-600" },
  { href:"/vocab", icon:"📚", title:"Vocabulary (Progressive)", desc:"Two ordered term lists — Weldon micro + Virga antimicrobials — leveled so each builds on the last", color:"bg-gradient-to-r from-navy to-coral" },
  { href:"/drugs", icon:"💊", title:"β-Lactam Drug Reference", desc:"Med-chem focused drug cards — structure, SAR, stability, spectrum, and clinical role for every β-lactam in Virga's materials", color:"bg-gradient-to-r from-atyp to-green-700" },
  { href:"/charts", icon:"🗂️", title:"Bug Classification Charts", desc:"Filled + blank Gram stain organism charts for self-testing", color:"bg-gp" },
  { href:"/flashcards", icon:"🃏", title:"Flashcard Quiz", desc:"34 organism cards — flip, self-grade, track progress, filter by Gram type", color:"bg-teal" },
  { href:"/tree", icon:"🌳", title:"Bug ID Decision Tree", desc:"Click-through diagnostic logic: Gram stain → morphology → tests → organism", color:"bg-green-700" },
  { href:"/mnemonics", icon:"🧠", title:"Mnemonics", desc:"9 custom memory aids — ESKAPE, spore-formers, oxidase+, urease+, catalase, STIs, intracellular pathogens", color:"bg-coral" },
  { href:"/confusables", icon:"⚡", title:"Easy to Confuse", desc:"Side-by-side comparisons of commonly mixed-up pairs — Shigella vs Salmonella, exo vs endotoxins, and more", color:"bg-amber-700" },
];

export default function Home() {
  return (
    <div className="animate-fade">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-navy via-[#2c4a7c] to-teal text-white p-8 sm:p-12 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,124,123,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(212,168,67,0.2)_0%,transparent_50%)]" />
        <div className="relative z-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">🧫 PharMicrobes</h1>
          <p className="mt-2 text-white/80 text-lg">Medical Microbiology Study Hub</p>
          <p className="mt-4 text-white/60 text-sm max-w-xl">
            Lectures 1 &amp; 2 — Introduction to Medical Microbiology &amp; Bacterial Species Characteristics. 
            Interactive study guide, flashcards, decision tree, mnemonics, and comparison cards — all sourced exclusively from lecture slides.
          </p>
        </div>
      </div>

      {/* Tool Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {tools.map((t) => (
          <Link key={t.href} href={t.href}
            className="group section-card hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className={`${t.color} text-white px-5 py-3 flex items-center gap-3`}>
              <span className="text-2xl">{t.icon}</span>
              <span className="font-display font-bold text-base">{t.title}</span>
            </div>
            <p className="px-5 py-3 text-sm text-gray-600 leading-relaxed">{t.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
