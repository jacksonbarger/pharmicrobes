const S = ({color,title,icon,children}) => (
  <div className="section-card mb-6">
    <div className={`${color} text-white px-5 py-3 font-display font-bold text-base flex items-center gap-2`}>
      <span>{icon}</span>{title}
    </div>
    <div className="p-5 text-sm leading-relaxed">{children}</div>
  </div>
);
const T = ({headers,rows,headerClass="bg-navy"}) => (
  <div className="overflow-x-auto my-3">
    <table className="w-full text-xs border-collapse">
      <thead><tr>{headers.map((h,i)=><th key={i} className={`${headerClass} text-white p-2 text-left font-semibold`}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((row,i)=><tr key={i} className={i%2?"bg-gray-50":""}>{row.map((c,j)=><td key={j} className="p-2 border-b border-gray-100 align-top" dangerouslySetInnerHTML={{__html:c}}/>)}</tr>)}</tbody>
    </table>
  </div>
);
const K = ({children}) => <div className="bg-gold-light border-l-4 border-gold px-4 py-3 rounded-r-lg my-3 text-sm">{children}</div>;

export default function GuidePage() {
  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">📖 Complete Study Guide</h1>
      <p className="text-gray-500 text-sm mb-6">All content from both lectures organized by topic.</p>

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
        <K><b>Plasmids:</b> Extrachromosomal circular DNA; replicate independently. Types: F (pili/conjugation), R (resistance + sex pili), Dissimilation (disinfectant resistance). <b>Transposons</b> ("jumping genes"): move within/between DNA; 4 domains: inverted repeats, transposase, repressor, resistance enzyme.</K>
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
    </div>
  );
}
