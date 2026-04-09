"use client";
import { useState } from "react";
import Image from "next/image";

// ─── Figure helper ───────────────────────────────────────────────────────
const Fig = ({ src, alt, w, h, caption }) => (
  <figure className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
    <div className="flex items-center justify-center">
      <Image src={src} alt={alt} width={w} height={h} className="max-w-full h-auto object-contain rounded" />
    </div>
    {caption && (
      <figcaption className="mt-2 text-[11px] text-gray-600 italic text-center leading-snug">{caption}</figcaption>
    )}
  </figure>
);

// ─── Shared layout helpers ──────────────────────────────────────────────
const S = ({ color, title, icon, children }) => (
  <div className="section-card mb-6">
    <div className={`${color} text-white px-5 py-3 font-display font-bold text-base flex items-center gap-2`}>
      <span>{icon}</span>
      {title}
    </div>
    <div className="p-5 text-sm leading-relaxed">{children}</div>
  </div>
);

const T = ({ headers, rows, headerClass = "bg-navy" }) => (
  <div className="overflow-x-auto my-3">
    <table className="w-full text-xs border-collapse">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className={`${headerClass} text-white p-2 text-left font-semibold`}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 ? "bg-gray-50" : ""}>
            {row.map((c, j) => (
              <td
                key={j}
                className="p-2 border-b border-gray-100 align-top"
                dangerouslySetInnerHTML={{ __html: c }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const K = ({ children }) => (
  <div className="bg-gold-light border-l-4 border-gold px-4 py-3 rounded-r-lg my-3 text-sm">
    {children}
  </div>
);

// ─── Weldon — Medical Microbiology ─────────────────────────────────────
function WeldonGuide() {
  return (
    <>
      <S color="bg-teal" title="Chain of Infection & Transmission" icon="🔗">
        <T headers={["Link","Description"]} rows={[
          ["<b>Pathogen</b>","Features allowing colonization & damage"],
          ["<b>Reservoir</b>","Where pathogen lives: humans (asymptomatic carriers), animals (zoonotic), environment (water, soil, food)"],
          ["<b>Portal of Exit</b>","Nasal secretions, saliva, sputum, droplets, vaginal/semen, urine, feces, blood"],
          ["<b>Transmission</b>","Contact (direct/droplet/fomites), Vehicle (food/water/airborne), Vector (mechanical/biological)"],
          ["<b>Portal of Entry</b>","Respiratory, GI, GU tract, skin/parenteral (breaks), placenta"],
          ["<b>Susceptible Host</b>","Immune status, age, microbiome, nutrition, stress"],
        ]}/>
        <K><b>Immunocompromised:</b> HIV/AIDS, transplant, burn, premature infants, chemo, DMARDs, ventilators, catheters</K>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Transmission Types</h3>
        <T headers={["Type","Details"]} rows={[
          ["<b>Direct Contact</b>","Skin-to-skin, kissing, sexual; bites (zoonotic); transplacental"],
          ["<b>Droplet</b>","Cough/sneeze/singing; short distance; depends on droplet size"],
          ["<b>Indirect/Fomites</b>","Doorknobs, handrails, keyboards, hand towels"],
          ["<b>Vehicle</b>","Contaminated water, food, blood, IV fluids"],
          ["<b>Airborne</b>","Very small particles; long distance; dust with bacteria/spores"],
          ["<b>Vector (Mechanical)</b>","Passive transfer (e.g. house flies to food)"],
          ["<b>Vector (Biological)</b>","Bite transfers pathogen (fleas, ticks, mosquitoes)"],
        ]}/>
      </S>

      <S color="bg-coral" title="Course, Duration & Scope of Infection" icon="📊">
        <h3 className="font-display text-navy font-bold mb-2">5 Stages of Infectious Disease</h3>
        <div className="flex flex-wrap gap-1 justify-center my-3">
          {["1. Incubation","2. Prodromal","3. Illness","4. Decline","5. Convalescence"].map((s,i)=>(
            <div key={i} className="flex items-center gap-1">
              <div className="bg-navy-light border border-navy rounded-lg px-3 py-2 text-center text-xs font-bold">{s}</div>
              {i<4 && <span className="text-teal font-bold">→</span>}
            </div>
          ))}
        </div>
        <K><b>Symptoms</b> = subjective (patient-reported). <b>Signs</b> = objective, measurable (fever, swelling, pus). Immune response highest during Illness phase. Secondary infections occur during Decline.</K>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Duration of Disease</h3>
        <T headers={["Type","Definition","Examples"]} rows={[
          ["<b>Acute</b>","Occurs quickly, short duration","Sinus/ear infections, UTIs, food poisoning"],
          ["<b>Chronic</b>","Delayed onset, months-years-lifetime","Hepatitis, mononucleosis, TB"],
          ["<b>Latent</b>","Pathogen remains, can reactivate","Chickenpox → Shingles (neurons)"],
          ["<b>Persistent</b>","Persists through immune response","<i>M. tuberculosis, H. pylori</i>"],
          ["<b>Subclinical</b>","No symptoms, carrier state","Asymptomatic carriers"],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Scope</h3>
        <T headers={["Term","Definition"]} rows={[
          ["<b>Primary</b>","Initial acute onset"],["<b>Secondary</b>","New infection from immune suppression"],
          ["<b>Localized</b>","Confined to one area"],["<b>Systemic</b>","Spreads via circulatory system"],
          ["<b>Bacteremia</b>","Bacteria in blood"],["<b>Toxemia</b>","Toxins in blood"],
          ["<b>Septicemia</b>","Life-threatening: infectious agents/toxins in blood"],
        ]}/>
      </S>

      <S color="bg-gp" title="Cell Wall: Gram-Positive vs Gram-Negative" icon="🧱">
        <K><b>Peptidoglycan (Murein):</b> Only in bacterial cell walls. NAG + NAM cross-linked by polypeptides. <b>Transpeptidase (PBPs)</b> makes cross-links. <span className="tag bg-orange-50 text-orange-700 border border-orange-400">ABX Target</span> — β-lactams bind PBPs. Lysozyme breaks β-1,4 glycosidic bonds.</K>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-gp-light border-2 border-gp rounded-xl p-4">
            <h4 className="font-bold text-gp mb-2">Gram-Positive (Purple)</h4>
            <ul className="list-disc ml-4 space-y-1">
              <li><b>Thick</b> peptidoglycan (up to 25 layers)</li>
              <li>Inner membrane only</li>
              <li><b>Teichoic acid:</b> negative charge, mediates adherence</li>
              <li><b>Lipoteichoic acid:</b> embedded in membrane, elicits immune response</li>
              <li>More resistant to drying</li>
            </ul>
          </div>
          <div className="bg-gn-light border-2 border-gn rounded-xl p-4">
            <h4 className="font-bold text-gn mb-2">Gram-Negative (Pink/Red)</h4>
            <ul className="list-disc ml-4 space-y-1">
              <li><b>Thin</b> peptidoglycan (single layer)</li>
              <li>Outer + inner membrane</li>
              <li><b>Periplasm:</b> contains β-lactamases</li>
              <li><b>Porins:</b> allow small molecules; can exclude large antibiotics</li>
              <li><b>LPS:</b> Lipid A = endotoxin → fever, shock. O antigen = species ID</li>
            </ul>
          </div>
        </div>
        <K>Gram stain useful for: (1) ID by morphology + color, (2) Antibiotic choice — GP and GN differ in susceptibility.</K>
      </S>

      <S color="bg-navy" title="Specialized Structures" icon="⚙️">
        <h3 className="font-display text-navy font-bold mb-2">Inside Cell Wall</h3>
        <T headers={["Structure","Key Details","Significance"]} rows={[
          ["<b>Plasma Membrane</b>","Protein:phospholipid 3:1; ATP synthase","<span class='tag bg-orange-50 text-orange-700 border border-orange-400'>ABX Target</span>"],
          ["<b>Ribosomes</b>","30S + 50S → 70S; differ from eukaryotic","<span class='tag bg-orange-50 text-orange-700 border border-orange-400'>ABX Target</span> — multiple drug classes"],
          ["<b>Endospores</b>","<i>Bacillus</i> + <i>Clostridium</i> only; resist heat, UV, chemicals; dormant for years","Germinate when nutrients available; malachite green stain"],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Outside Cell Wall</h3>
        <T headers={["Structure","Details","Infection Role"]} rows={[
          ["<b>Capsule</b>","Polysaccharide coat; negative staining","<span class='tag bg-green-50 text-green-700 border border-green-600'>VF</span> Inhibits phagocytosis; some bacteria only infectious when encapsulated (<i>S. pneumoniae, K. pneumoniae</i>); vaccine antigens"],
          ["<b>Flagella</b>","Flagellin; ATP-powered; silver stain","Chemotaxis; <i>E. coli</i> → UTIs; <i>H. pylori</i> → stomach mucous"],
          ["<b>Fimbriae</b>","Short, pilin; 100s per cell","Attachment to host cells; <i>N. gonorrhoeae</i> only infectious with fimbriae"],
          ["<b>Pilus</b>","Longer, 1-2 per cell","Sex pilus for conjugation (DNA transfer); antigenic variation → immune escape"],
        ]}/>
      </S>

      <S color="bg-teal" title="Growth, Oxygen & Enzyme Tests" icon="📈">
        <K><b>Binary Fission</b> (vertical gene transfer): cell doubles → divides → each daughter gets chromosome. <b>Generation time</b> = doubling time. Most human pathogens are <b>mesophiles</b> (25-40°C). Optimal pH: 6.5-7.5.</K>
        <T headers={["Growth Phase","Description","Clinical Note"]} rows={[
          ["<b>Lag</b>","Adjusting, metabolizing, NOT dividing","—"],
          ["<b>Log (Exponential)</b>","Rapid division","<b>β-lactams act here</b>"],
          ["<b>Stationary</b>","Nutrients depleted, waste buildup","<i>C. diff</i> toxins peak here"],
          ["<b>Death</b>","Continuous cell death","Persister cells may survive"],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Oxygen Classification</h3>
        <T headers={["Type","O₂","Examples"]} rows={[
          ["<b>Obligate Aerobes</b>","Require O₂","<i>M. tuberculosis, Pseudomonas</i>"],
          ["<b>Facultative Anaerobes</b>","Use O₂ if present, or ferment","<i>E. coli, Staphylococcus</i>"],
          ["<b>Aerotolerant</b>","Same with or without O₂","<i>S. pyogenes</i>"],
          ["<b>Obligate Anaerobes</b>","Die in O₂","<i>Clostridium tetani, C. perfringens</i>"],
          ["<b>Microaerophiles</b>","Reduced O₂ (<2-10%)","<i>Campylobacter, H. pylori</i>"],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Key Enzyme Tests</h3>
        <T headers={["Test","Detects","Positive (+)","Negative (−)"]} rows={[
          ["<b>Catalase</b>","H₂O₂ → bubbles","All <i>Staphylococcus</i>","<i>Streptococcus, Enterococcus</i>"],
          ["<b>Coagulase</b>","Fibrinogen → fibrin","<i>S. aureus</i>","<i>S. epidermidis, S. saprophyticus</i>"],
          ["<b>Oxidase</b>","Cytochrome C oxidase","<i>Neisseria, Pseudomonas, Vibrio</i>","Enteric GN (<i>E. coli, Klebsiella</i>)"],
          ["<b>Urease</b>","Urea → ammonia (pink)","<i>Proteus, H. pylori, S. saprophyticus</i>","<i>E. coli, Salmonella, Shigella</i>"],
          ["<b>Hemolysis</b>","RBC lysis on blood agar","α=incomplete (green); β=complete (clear); γ=none","—"],
        ]}/>
        <K><b>MacConkey agar</b> = selective (bile salts inhibit GP) + differential (lactose + pH indicator). Lactose fermenters → pink/red. Non-lactose → pale. <i>N. gonorrhoeae</i> vs <i>N. meningitidis</i> distinguished by maltose fermentation.</K>
      </S>

      <S color="bg-coral" title="Virulence Factors & Toxins" icon="⚔️">
        <K><b>4 Tasks:</b> (1) Get in & stay in, (2) Avoid/evade host defenses, (3) Damage host & spread, (4) Exit & infect another host.</K>
        <T headers={["Strategy","Details"]} rows={[
          ["<b>Capsule</b>","Prevents phagocytosis; hides PAMPs"],
          ["<b>M protein</b>","<i>S. pyogenes</i>; antiphagocytic (>200 variants)"],
          ["<b>Protein A</b>","<i>S. aureus</i>; binds IgG → blocks complement"],
          ["<b>IgA protease</b>","Degrades IgA → bacteria adhere to mucous membranes"],
          ["<b>Antigenic variation</b>","Alters surface antigens → slows antibody production"],
          ["<b>Molecular mimicry</b>","Coat with host molecules → immune cells see 'self'"],
          ["<b>Intracellular hiding</b>","Use invasin/actin; cell-to-cell via cadherins"],
          ["<b>Biofilms</b>","Prosthetics/catheters; block antibiotics + immune response"],
          ["<b>Siderophores</b>","Steal iron from host transferrin/lactoferrin"],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Exotoxins vs Endotoxins</h3>
        <T headers={["Feature","Exotoxins","Endotoxins"]} rows={[
          ["<b>Source</b>","Secreted (mostly GP, some GN)","Lipid A of LPS (GN outer membrane)"],
          ["<b>Structure</b>","A-B (A=toxic enzyme, B=binding)","Lipid A"],
          ["<b>Heat</b>","Labile (>60°C)","Stable"],
          ["<b>Targets</b>","Specific (B determines)","No specific targets"],
          ["<b>Toxicity</b>","Extremely lethal","Less toxic"],
          ["<b>Antibodies</b>","Stimulate B cells","Poor antibody generation"],
          ["<b>Effects</b>","Neuro/entero/cyto/superantigens","Fever (IL-1/TNF), shock, DIC"],
        ]}/>
        <K><b>Superantigens:</b> Bind MHC II + TCR simultaneously → massive T cell activation → cytokine storm. <i>S. aureus</i> TSST-1 (TSS), <i>S. pyogenes</i> pyrogenic exotoxin (scarlet fever).</K>
        <K><b>ID₅₀</b> = organisms to infect 50% of hosts. <b>LD₅₀</b> = organisms to kill 50%. <i>Shigella</i> ~10-100 vs <i>Salmonella</i> ~100,000.</K>
      </S>

      <S color="bg-navy" title="Genetics & Antibiotic Resistance" icon="🧬">
        <K>Prokaryotic genome: single circular DNA, haploid, no introns. <b>Folate pathway</b> (DHPS, DHFR) = drug target. <b>DNA gyrase</b> (Topo II) + <b>Topo IV</b> = drug targets. <b>RNA polymerase</b> = drug target. <b>Ribosomes (70S)</b> = drug target.</K>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Horizontal Gene Transfer</h3>
        <T headers={["Method","Mechanism"]} rows={[
          ["<b>Conjugation</b>","Sex pilus transfers plasmids/transposons between cells"],
          ["<b>Transduction</b>","Bacteriophage carries donor DNA → can change non-pathogenic to pathogenic"],
          ["<b>Transformation</b>","Naked DNA from dying cells taken up (rare); cell must be 'competent'"],
        ]}/>
        <K><b>Plasmids:</b> Extrachromosomal circular DNA; replicate independently. Types: F (pili/conjugation), R (resistance + sex pili), Dissimilation (disinfectant resistance). <b>Transposons</b> (&ldquo;jumping genes&rdquo;): move within/between DNA; 4 domains: inverted repeats, transposase, repressor, resistance enzyme.</K>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Resistance Mechanisms</h3>
        <T headers={["Mechanism","Details","Example"]} rows={[
          ["<b>Enzymatic Inactivation</b>","Enzymes deactivate drug","β-lactamases hydrolyze β-lactam ring"],
          ["<b>Target Modification</b>","Altered target → reduced binding","MRSA: mecA → PBP2a; TetM blocks ribosome binding"],
          ["<b>Efflux Pumps</b>","Pump drug out of cell","Found in GP and GN; broad or specific"],
          ["<b>Reduced Permeability</b>","Altered porins/envelope","Important for GN bacteria"],
          ["<b>Biofilms</b>","Physical barrier","Prosthetic device infections"],
          ["<b>Persister Cells</b>","Dormant, not killed by drugs","Stationary phase / non-dividing"],
        ]}/>
      </S>
    </>
  );
}

// ─── Virga — β-Lactams & Antimicrobials ───────────────────────────────
function VirgaGuide() {
  return (
    <>
      <S color="bg-navy" title="Discovery & Development of Penicillin" icon="📜">
        <T headers={["Year","Event"]} rows={[
          ["<b>1929</b>","Alexander Fleming discovers a fungus producing a clear zone of bacterial inhibition. Names it <i>penicillin</i> but cannot isolate it."],
          ["<b>1939</b>","Florey and Chain isolate and characterize penicillin. First clinical trials in humans."],
          ["<b>(Heatley)</b>","Norman Heatley, technician, develops the base/acid extraction protocol from 'mold juice.'"],
          ["<b>1943</b>","Large-scale production established. 'Controlled fermentation' directs the formation of specific penicillin types."],
          ["<b>1948</b>","Giuseppe Brotzu isolates <i>Cephalosporium acremonium</i> from a sewage outflow; cephalosporin C later characterized by Abraham and Newton at Florey's lab."],
          ["<b>1955</b>","Ernst Chain at Beecham Pharmaceuticals suggests semi-synthetic modification of a common penicillin nucleus → leads to isolation of 6-APA."],
        ]}/>
        <K><b>Chemical instability of natural penicillins:</b> unstable to acid, base, and solution at room temperature over time. Fleming originally believed penicillin was an enzyme and could not isolate the active component — so he moved on to sulfonamides. The β-lactam ring&rsquo;s inherent reactivity is exactly what makes it both a drug and a chemistry challenge.</K>
        <K><b>Penicillin G vs Penicillin V:</b> both natural. Pen G is highly acid-labile → poor oral bioavailability → IV/IM. Pen V uses phenoxyacetic acid as its side-chain building block instead of phenylacetic acid — the phenoxy oxygen withdraws electrons from the β-lactam carbonyl, conferring enough acid stability for oral dosing. Both remain narrow-spectrum and β-lactamase susceptible.</K>
      </S>

      <S color="bg-gp" title="Peptidoglycan Target Review" icon="🧱">
        <K><b>The target:</b> the peptidoglycan layer of the bacterial cell wall provides strength and rigidity. In Gram-positive species it may be 25-40 layers thick (~20% of dry weight). In Gram-negatives it&rsquo;s ~10% of dry weight, with an outer lipid bilayer.</K>
        <div className="grid gap-3 md:grid-cols-2 my-4">
          <Fig
            src="/sar/gram-positive-envelope.jpeg"
            alt="Gram-positive cell envelope cross-section"
            w={640} h={420}
            caption="Gram-positive envelope: 25–40 layers of exposed peptidoglycan with embedded teichoic/lipoteichoic acids. Antibiotic access is easy — the PG is the outermost barrier."
          />
          <Fig
            src="/sar/gram-negative-envelope.jpeg"
            alt="Gram-negative cell envelope cross-section"
            w={640} h={420}
            caption="Gram-negative envelope: outer membrane (LPS + porins) hides a thin PG layer in the periplasm. Porin permeability + periplasmic β-lactamases are the two big gatekeepers."
          />
        </div>
        <Fig
          src="/sar/peptidoglycan-crosslink.jpeg"
          alt="Peptidoglycan NAG/NAM repeating unit with pentaglycine cross-link"
          w={720} h={440}
          caption="Alternating NAG–NAM strands; NAM carries the stem peptide (L-Ala–D-Glu–L-Lys–D-Ala-D-Ala). PBP transpeptidase recognizes the terminal D-Ala-D-Ala and forms the pentaglycine cross-link to the adjacent strand — the exact chemistry β-lactams hijack."
        />
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Repeating Unit</h3>
        <T headers={["Component","Detail"]} rows={[
          ["<b>NAG + NAM</b>","Alternating N-acetylglucosamine and N-acetylmuramic acid, linked by a 1,4-β glycosidic bond (broken by lysozyme)"],
          ["<b>Stem tetrapeptide</b>","Attached to NAM's free acid: L-Ala → D-Glu → L-Lys → D-Ala (starts as a pentapeptide with a terminal D-Ala-D-Ala)"],
          ["<b>Cross-link</b>","Pentaglycyl bridge between the ε-amino of Lys and the carboxyl of D-Ala of the adjacent strand"],
          ["<b>Transpeptidase (PBPs)</b>","Enzyme that catalyzes cross-linking — recognizes the terminal D-Ala-D-Ala and cleaves to form the peptide bond. Over 2,500 PBP variants identified."],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Three Assembly Phases</h3>
        <T headers={["Phase","What happens"]} rows={[
          ["<b>Cytoplasmic</b>","NAG and NAM built by <i>murA-F</i>-encoded enzymes in the cytoplasm. Fosfomycin targets MurA here."],
          ["<b>Membrane-associated</b>","NAG-NAM units linked to the lipid carrier (bactoprenol) for transport across the plasma membrane."],
          ["<b>Extracytoplasmic</b>","Cell wall units move to the outer lipid layer; PBPs incorporate them into the growing peptidoglycan by cross-linking adjacent strands."],
        ]}/>
      </S>

      <S color="bg-coral" title="How β-Lactams Kill Bacteria" icon="⚛️">
        <K><b>The trick:</b> β-lactams mimic the D-Ala-D-Ala terminus of the peptidoglycan stem peptide. The PBP active-site serine attacks the β-lactam carbonyl thinking it&rsquo;s the normal substrate — but instead of cleaving and releasing, the β-lactam forms an irreversible covalent bond. The PBP is permanently inactivated, the cell wall can no longer be cross-linked, and the bacterium lyses during growth.</K>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">β-Lactam Ring Essentials</h3>
        <T headers={["Feature","Why it matters"]} rows={[
          ["<b>4-membered ring (N1-C2-C3-C4)</b>","Highly strained → reactive. The strain is what drives PBP acylation."],
          ["<b>Fusion to a 5- or 6-membered ring</b>","Penicillins fuse to a thiazolidine; cephalosporins fuse to a cefem (6-membered). Fusion adds additional ring strain, increasing reactivity. Carbapenems replace the sulfur. Monobactams skip the fused ring entirely."],
          ["<b>Ring strain = reactivity</b>","The lactam nitrogen does NOT behave like a typical tertiary amide because any double-bond formation would force the rings into an impossible planar conformation."],
          ["<b>3 chiral centers (2S, 5R, 6R)</b>","All penicillin derivatives share this absolute configuration."],
          ["<b>R-group on the amide</b>","Only SAR handle. Affects spectrum, stability, and bioavailability."],
          ["<b>Carboxylic acid</b>","Binds PBP active site as the carboxylate ion."],
        ]}/>
        <K><b>Why irreversible?</b> After the PBP serine attacks and opens the β-lactam, the thiazolidinone ring (on penicillins) cannot leave — it blocks the entry of the pentaglycyl bridge&rsquo;s amino terminus that would normally complete the reaction. The enzyme is stuck with the acyl-enzyme intermediate forever. In contrast, the normal D-Ala-D-Ala substrate releases the terminal D-Ala after the serine attack, freeing the enzyme.</K>
        <Fig
          src="/sar/pbp-ic50-mic.png"
          alt="Penicillin IC50 vs PBP isoform correlation with MIC"
          w={720} h={420}
          caption="PBP binding drives efficacy. A β-lactam's IC50 against each PBP isoform predicts the clinical MIC for organisms that depend on that PBP — different side chains give very different selectivity profiles across PBP1–PBP4."
        />
      </S>

      <S color="bg-teal" title="The Four β-Lactam Classes at a Glance" icon="💊">
        <T headers={["Class","Nucleus","Defining Feature","Spectrum"]} rows={[
          ["<b>Penicillins</b>","6-APA","β-lactam + thiazolidine","Narrow to extended. Spectrum is tuned entirely by the C6 R-group."],
          ["<b>Cephalosporins</b>","7-ACA","β-lactam + 6-membered cefem ring","5 generations, each broader. Two SAR handles: C7 acyl (spectrum) and C3 leaving group (PK, protein binding)."],
          ["<b>Carbapenems</b>","Carbapenem nucleus","β-lactam + 5-ring with C instead of S; trans-hydroxyethyl at C6","Very broad. Stable against most β-lactamases. Reserved for MDR/severe infections."],
          ["<b>Monobactam</b>","Monocyclic β-lactam","No fused ring; N1 sulfonate activates the carbonyl","Gram− only. Safe in true penicillin allergy (no shared fused ring for IgE cross-reactivity)."],
        ]}/>
        <K><b>Key idea:</b> all four classes use the same mechanism (PBP acylation via D-Ala-D-Ala mimicry) but they differ in which PBPs they prefer, how well they penetrate the outer membrane (Gram−), and how resistant they are to β-lactamases. For drug-level detail, see the <b>Drug Reference</b> page.</K>
        <Fig
          src="/sar/cephalosporin-generations.png"
          alt="Cephalosporin generations table with mnemonic endings"
          w={760} h={500}
          caption="Cephalosporin generations by suffix: 1st gen (cef-a-/cef-fa-), 2nd gen (cef-fur-/cef-met-), 3rd gen (cef-ime/-ixime), 4th gen (cef-pi-), 5th gen (-ta-rol-ine). Each generation broadens Gram− coverage (and usually trades away some Gram+) by retuning the C-7 acyl and C-3 leaving groups."
        />
      </S>

      <S color="bg-coral" title="Resistance Mechanisms" icon="🛡️">
        <T headers={["Mechanism","Details","Key Examples"]} rows={[
          ["<b>β-lactamase hydrolysis</b>","Enzyme opens the β-lactam ring → inactive drug","Most clinically important. Most forms are plasmid-encoded and transferable."],
          ["<b>Altered PBPs</b>","New PBP has low affinity for β-lactams","<b>MRSA</b>: <i>mecA</i> → PBP2a. <b>Pneumococci</b>: altered PBP1/2 → penicillin-resistant strains."],
          ["<b>Reduced penetration</b>","Loss or down-regulation of outer-membrane porins","Gram− only. Combines with β-lactamases for high-level resistance."],
          ["<b>Efflux pumps</b>","Pump drug back out","Found in both Gram+ and Gram−; broad or drug-specific."],
          ["<b>β-lactamase bypass at MurA</b>","Fosfomycin's MurA target is upstream of PBPs → no cross-resistance","Fosfomycin is the only β-lactam-pathway-active drug not touched by β-lactamases."],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Ambler Classification of β-Lactamases</h3>
        <T headers={["Class","Mechanism","Notable Members","Inhibited by"]} rows={[
          ["<b>A</b>","Serine active site","Penicillinases (TEM-1/2, SHV-1), ESBLs (cefotaxime/ceftriaxone/ceftazidime/aztreonam), KPC carbapenemases","Clavulanate, sulbactam, tazobactam, avibactam, relebactam, vaborbactam"],
          ["<b>B</b>","Zinc (metallo-)","NDM, VIM, IMP","NONE currently — use cefiderocol"],
          ["<b>C</b>","Serine (chromosomal)","AmpC (SPACE bugs: <i>Serratia, Pseudomonas, Proteus, Acinetobacter, Citrobacter, Enterobacter</i>)","Avibactam, relebactam"],
          ["<b>D</b>","Serine (OXA-type)","OXA-48","Avibactam (some), relebactam"],
        ]}/>
        <K><b>β-lactamase inhibitors (BLIs):</b> poor antibiotics on their own but synergize with β-lactams. Classical BLIs (clavulanate, sulbactam, tazobactam) are suicide substrates — they irreversibly acylate the enzyme&rsquo;s serine. Newer diazabicyclooctanes (avibactam, relebactam) reversibly carbamoylate the serine, letting one molecule inhibit multiple enzymes. Vaborbactam is a boronic-acid transition-state mimic.</K>
      </S>

      <S color="bg-navy" title="Pharmacokinetics & PD Principles" icon="📊">
        <K><b>Time-dependent killing:</b> β-lactam efficacy depends on how long the free drug concentration stays above the MIC (%T&gt;MIC), NOT peak concentration. This is why β-lactams are dosed q4-6-8h (not once daily like aminoglycosides). Continuous infusion of piperacillin-tazobactam is sometimes used for severe infections to maximize %T&gt;MIC.</K>
        <T headers={["Property","Notes"]} rows={[
          ["<b>Oral bioavailability</b>","Varies with side chain. Pen G: poor. Amoxicillin: excellent (~90%). Ampicillin: fair. Most cephalosporins: oral forms have specific PK modifications (axetil prodrug for cefuroxime, esterase-resistant C3 for cefazolin's cephalexin counterpart)."],
          ["<b>Half-life</b>","Most β-lactams have short half-lives (1-2 h). Ceftriaxone is the standout at ~8 h → once-daily dosing. Ertapenem's 95% protein binding extends its half-life to ~4 h."],
          ["<b>Renal vs biliary clearance</b>","Most β-lactams are renally cleared → dose-adjust in renal impairment. <b>Ceftriaxone</b> is biliary-cleared → no renal adjustment (but avoid in neonates)."],
          ["<b>CSF penetration</b>","3rd/4th/5th gen cephalosporins, carbapenems (meropenem > imipenem for CNS), and cefuroxime (only 2nd gen with meaningful BBB crossing)."],
          ["<b>Imipenem + cilastatin</b>","Imipenem is inactivated by human renal dehydropeptidase-I. Cilastatin inhibits the enzyme to preserve urinary levels. Fixed 1:1 combination."],
        ]}/>
      </S>

      <S color="bg-coral" title="Allergy & Hypersensitivity" icon="⚠️">
        <K><b>Reported vs actual penicillin allergy:</b> up to 10% of patients report a penicillin allergy. In clinical practice only ~10-20% of those actually have a true IgE-mediated reaction on testing. The vast majority can safely receive β-lactams.</K>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Mechanism</h3>
        <T headers={["Step","Detail"]} rows={[
          ["<b>Hapten formation</b>","The β-lactam carbonyl covalently modifies host proteins — specifically, the penicilloyl group attaches to Lys 199 (and other Lys residues) of serum albumin."],
          ["<b>Antigen presentation</b>","The modified albumin is recognized as foreign, triggering IgE production."],
          ["<b>Type I reaction on re-exposure</b>","IgE bound to mast cells → histamine release → urticaria, angioedema, bronchospasm, anaphylaxis."],
          ["<b>Range of severity</b>","Mild rash to anaphylaxis (1-10% of population for any severity)."],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Cross-Reactivity</h3>
        <T headers={["Situation","Risk"]} rows={[
          ["<b>Penicillin → cephalosporin</b>","Clinical incidence ~2-6% (much lower than the often-quoted 10%). Higher with early-generation cephalosporins (shared benzyl side chain with penicillin)."],
          ["<b>Penicillin → 3rd+ gen cephalosporin</b>","Very low (<1%) because their side chains are structurally distinct (ATMO group)."],
          ["<b>Penicillin → aztreonam</b>","Essentially zero (except ceftazidime-allergic patients — shared side chain with aztreonam)."],
          ["<b>Penicillin → carbapenem</b>","Very low, likely <1%."],
        ]}/>
        <K><b>Management:</b> penicillin skin testing is available. A negative skin test makes true IgE-mediated reaction unlikely. Desensitization protocols exist when penicillin is the only viable option (e.g., syphilis in pregnancy).</K>
      </S>

      <S color="bg-teal" title="Spectrum & Clinical Principles" icon="🎯">
        <T headers={["Concept","Detail"]} rows={[
          ["<b>Narrow vs broad spectrum</b>","Narrow: fewer organisms, less disruption to microbiota → preferred when pathogen is known. Broad: empiric coverage before culture results, or polymicrobial infections."],
          ["<b>MIC (Minimum Inhibitory Concentration)</b>","Lowest drug concentration that prevents visible growth in vitro. Defines S/I/R breakpoints. Example: <i>S. pneumoniae</i> penicillin-susceptible <0.1 mcg/mL, intermediate 0.1-1.0, resistant ≥1.0."],
          ["<b>Empiric therapy</b>","Start before culture results based on likely organisms, severity, and local antibiogram. Narrow to definitive therapy once cultures return."],
          ["<b>Stewardship</b>","Use the narrowest effective agent for the shortest effective duration. About 20-30% of outpatient antibiotic prescriptions are unnecessary."],
          ["<b>Drug of choice (DOC)</b>","The preferred agent based on efficacy, toxicity, spectrum, cost, and local resistance. Changes over time as resistance emerges."],
        ]}/>
        <h3 className="font-display text-navy font-bold mt-4 mb-2">Common Empiric Choices</h3>
        <T headers={["Indication","Empiric Agent(s)","Rationale"]} rows={[
          ["<b>Surgical prophylaxis</b>","Cefazolin","MSSA/strep coverage, long-enough half-life for single-dose pre-op, narrow = stewardship-friendly"],
          ["<b>Community-acquired pneumonia</b>","Ceftriaxone + azithromycin","Ceftriaxone covers <i>S. pneumoniae, H. influenzae</i>; azithromycin covers atypicals (Legionella, Mycoplasma, Chlamydia)"],
          ["<b>Bacterial meningitis (adult)</b>","Ceftriaxone + vancomycin","3rd gen for gram- and resistant pneumococci; vanco for highly-resistant pneumococci; add ampicillin for Listeria in >50 or IC"],
          ["<b>Hospital-acquired pneumonia / VAP</b>","Pip-tazo or cefepime + vancomycin","Broad gram- incl Pseudomonas + MRSA coverage"],
          ["<b>Febrile neutropenia</b>","Cefepime or pip-tazo","Anti-pseudomonal β-lactam monotherapy is first-line per IDSA"],
          ["<b>MRSA bacteremia</b>","Vancomycin or daptomycin","Daptomycin if MIC creep or source control issue"],
          ["<b>C. difficile (non-severe)</b>","Fidaxomicin (1st) or oral vancomycin","Fidaxomicin has lower recurrence; metronidazole now second-line"],
          ["<b>Uncomplicated cystitis</b>","Nitrofurantoin, TMP-SMX, or fosfomycin","Narrow spectrum, concentrate in urine"],
        ]}/>
      </S>

      <S color="bg-gold" title="Non-β-Lactam Mechanism Overview" icon="💉">
        <K><b>Cross-reference:</b> for full drug-level detail on every class below, see the <b>Drug Reference</b> page (💊). This section is a conceptual map so you can place each drug in its mechanism family.</K>
        <Fig
          src="/sar/antibiotic-targets.png"
          alt="Antibiotic mechanism of action overview"
          w={800} h={560}
          caption="Five bacterial targets are exploited by antibiotics: cell wall, protein synthesis (30S/50S), DNA synthesis, RNA polymerase, and folate metabolism. Every drug in the table below maps to one of these — place it in its family first, then memorize the specifics."
        />
        <T headers={["Target","Classes","Why it matters"]} rows={[
          ["<b>Cell wall (non-β-lactam)</b>","Glycopeptides (vancomycin, telavancin), Fosfomycin","Vancomycin binds the D-Ala-D-Ala <i>substrate</i> (not PBP) — different target, no cross-resistance. VRE/VRSA = D-Ala-D-Lac mutation. Fosfomycin inhibits MurA, the first step of PG synthesis."],
          ["<b>Cell membrane</b>","Lipopeptides (daptomycin), Polymyxins (colistin)","Daptomycin forms Ca²⁺-dependent pores in Gram+ membranes — inactivated by pulmonary surfactant (no pneumonia use). Polymyxins act as cationic detergents on Gram- LPS — nephrotoxic 'last resort.'"],
          ["<b>Protein synthesis — 30S</b>","Aminoglycosides (gentamicin, tobramycin, amikacin), Tetracyclines (doxycycline, tigecycline)","Aminoglycosides cause codon misreading → bactericidal, concentration-dependent, once-daily high-dose. Tetracyclines block tRNA A-site binding → bacteriostatic, broad incl atypicals."],
          ["<b>Protein synthesis — 50S</b>","Macrolides (azithro, clarithro, erythro), Lincosamides (clindamycin), Oxazolidinones (linezolid, tedizolid), Streptogramins (quinupristin/dalfopristin)","All bind the 23S rRNA. Macrolides/clindamycin/streptogramins share the MLS binding site → cross-resistance via <i>erm</i> methylases. Linezolid binds a UNIQUE site → no cross-resistance, works against MRSA + VRE."],
          ["<b>DNA synthesis</b>","Fluoroquinolones (cipro, levo, moxi, gemi)","Poison the DNA gyrase/topoisomerase IV-DNA complex, trapping double-strand breaks → bactericidal. Black-box: tendon rupture, QT, C. diff, aortic aneurysm."],
          ["<b>DNA damage (anaerobic activation)</b>","Nitroimidazoles (metronidazole), Nitrofurans (nitrofurantoin)","Both are prodrugs. Anaerobic bacterial enzymes reduce the nitro group to reactive intermediates that damage DNA. Metronidazole: anaerobes + protozoa. Nitrofurantoin: urinary concentrating for cystitis."],
          ["<b>RNA polymerase</b>","Rifamycins (rifampin), Macrocyclics (fidaxomicin)","Bind bacterial (not eukaryotic) RNA polymerase β-subunit. Rifampin: always combo therapy (rapid resistance). Fidaxomicin: narrow anti-C.diff, minimal absorption, spares Bacteroides → lower recurrence."],
          ["<b>Folate</b>","Sulfonamides + DHFR inhibitors (TMP-SMX)","Sequential pathway blockade: sulfamethoxazole inhibits DHPS (mimics PABA), trimethoprim inhibits DHFR. Synergistic bactericidal. Humans don't synthesize folate → bacteria-selective."],
        ]}/>
        <K><b>Bactericidal vs Bacteriostatic:</b> Bactericidal = kills directly (β-lactams, vanco, aminoglycosides, fluoroquinolones, daptomycin). Bacteriostatic = inhibits growth, immune system clears (tetracyclines, macrolides, clindamycin, sulfonamides, linezolid mostly). The distinction matters for immunocompromised patients and for infections like endocarditis where bactericidal agents are preferred.</K>
      </S>
    </>
  );
}

// ─── Main page ──────────────────────────────────────────────────────────
export default function GuidePage() {
  const [tab, setTab] = useState("weldon");

  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">📖 Complete Study Guide</h1>
      <p className="text-gray-500 text-sm mb-5">Two instructors, two halves of the course. Pick a tab to jump in.</p>

      {/* Instructor tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab("weldon")}
          className={`flex-1 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all text-left ${
            tab === "weldon"
              ? "bg-navy text-white border-transparent shadow-md"
              : "bg-white text-navy border-navy hover:brightness-95"
          }`}
        >
          <div className="font-bold">🧫 Weldon — Medical Microbiology</div>
          <div className={`text-[11px] mt-0.5 ${tab === "weldon" ? "text-white/70" : "text-gray-500"}`}>
            Chain of infection, cell wall, virulence, genetics, resistance
          </div>
        </button>
        <button
          onClick={() => setTab("virga")}
          className={`flex-1 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all text-left ${
            tab === "virga"
              ? "bg-coral text-white border-transparent shadow-md"
              : "bg-white text-coral border-coral hover:brightness-95"
          }`}
        >
          <div className="font-bold">💊 Virga — β-Lactams & Antimicrobials</div>
          <div className={`text-[11px] mt-0.5 ${tab === "virga" ? "text-white/70" : "text-gray-500"}`}>
            Penicillin history, PBP mechanism, resistance, PK/PD, clinical principles
          </div>
        </button>
      </div>

      {tab === "weldon" ? <WeldonGuide /> : <VirgaGuide />}
    </div>
  );
}
