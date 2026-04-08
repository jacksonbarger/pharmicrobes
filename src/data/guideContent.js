// Flat text extract of /guide content for search indexing.
// Each entry = one searchable chunk. Keep in sync with src/app/guide/page.js.
// When you change a table row or callout in the guide, mirror it here.

export const GUIDE_CONTENT = [
  // --- Chain of Infection & Transmission ---
  { section: "Chain of Infection & Transmission", topic: "Pathogen", text: "Features allowing colonization & damage." },
  { section: "Chain of Infection & Transmission", topic: "Reservoir", text: "Where pathogen lives: humans (asymptomatic carriers), animals (zoonotic), environment (water, soil, food)." },
  { section: "Chain of Infection & Transmission", topic: "Portal of Exit", text: "Nasal secretions, saliva, sputum, droplets, vaginal/semen, urine, feces, blood." },
  { section: "Chain of Infection & Transmission", topic: "Transmission", text: "Contact (direct/droplet/fomites), Vehicle (food/water/airborne), Vector (mechanical/biological)." },
  { section: "Chain of Infection & Transmission", topic: "Portal of Entry", text: "Respiratory, GI, GU tract, skin/parenteral (breaks), placenta." },
  { section: "Chain of Infection & Transmission", topic: "Susceptible Host", text: "Immune status, age, microbiome, nutrition, stress." },
  { section: "Chain of Infection & Transmission", topic: "Immunocompromised", text: "HIV/AIDS, transplant, burn, premature infants, chemo, DMARDs, ventilators, catheters." },
  { section: "Chain of Infection & Transmission", topic: "Direct Contact", text: "Skin-to-skin, kissing, sexual; bites (zoonotic); transplacental." },
  { section: "Chain of Infection & Transmission", topic: "Droplet Transmission", text: "Cough/sneeze/singing; short distance; depends on droplet size." },
  { section: "Chain of Infection & Transmission", topic: "Indirect / Fomites", text: "Doorknobs, handrails, keyboards, hand towels." },
  { section: "Chain of Infection & Transmission", topic: "Vehicle Transmission", text: "Contaminated water, food, blood, IV fluids." },
  { section: "Chain of Infection & Transmission", topic: "Airborne Transmission", text: "Very small particles; long distance; dust with bacteria/spores." },
  { section: "Chain of Infection & Transmission", topic: "Vector (Mechanical)", text: "Passive transfer (e.g. house flies to food)." },
  { section: "Chain of Infection & Transmission", topic: "Vector (Biological)", text: "Bite transfers pathogen (fleas, ticks, mosquitoes)." },

  // --- Course, Duration & Scope of Infection ---
  { section: "Course, Duration & Scope", topic: "5 Stages of Infectious Disease", text: "Incubation → Prodromal → Illness → Decline → Convalescence. Symptoms = subjective (patient-reported). Signs = objective, measurable (fever, swelling, pus). Immune response highest during Illness phase. Secondary infections occur during Decline." },
  { section: "Course, Duration & Scope", topic: "Acute infection", text: "Occurs quickly, short duration. Examples: sinus/ear infections, UTIs, food poisoning." },
  { section: "Course, Duration & Scope", topic: "Chronic infection", text: "Delayed onset, months to years to lifetime. Examples: Hepatitis, mononucleosis, TB." },
  { section: "Course, Duration & Scope", topic: "Latent infection", text: "Pathogen remains, can reactivate. Example: Chickenpox → Shingles (neurons)." },
  { section: "Course, Duration & Scope", topic: "Persistent infection", text: "Persists through immune response. Examples: M. tuberculosis, H. pylori." },
  { section: "Course, Duration & Scope", topic: "Subclinical infection", text: "No symptoms, carrier state. Asymptomatic carriers." },
  { section: "Course, Duration & Scope", topic: "Primary vs Secondary", text: "Primary: initial acute onset. Secondary: new infection from immune suppression." },
  { section: "Course, Duration & Scope", topic: "Localized vs Systemic", text: "Localized: confined to one area. Systemic: spreads via circulatory system." },
  { section: "Course, Duration & Scope", topic: "Bacteremia / Toxemia / Septicemia", text: "Bacteremia: bacteria in blood. Toxemia: toxins in blood. Septicemia: life-threatening infectious agents/toxins in blood." },

  // --- Cell Wall ---
  { section: "Cell Wall", topic: "Peptidoglycan (Murein)", text: "Only in bacterial cell walls. NAG + NAM cross-linked by polypeptides. Transpeptidase (PBPs) makes cross-links. ABX target — β-lactams bind PBPs. Lysozyme breaks β-1,4 glycosidic bonds." },
  { section: "Cell Wall", topic: "Gram-Positive wall", text: "Thick peptidoglycan (up to 25 layers). Inner membrane only. Teichoic acid: negative charge, mediates adherence. Lipoteichoic acid: embedded in membrane, elicits immune response. More resistant to drying. Stains purple." },
  { section: "Cell Wall", topic: "Gram-Negative wall", text: "Thin peptidoglycan (single layer). Outer + inner membrane. Periplasm: contains β-lactamases. Porins: allow small molecules; can exclude large antibiotics. LPS: Lipid A = endotoxin → fever, shock. O antigen = species ID. Stains pink/red." },
  { section: "Cell Wall", topic: "Why gram stain matters", text: "Useful for (1) ID by morphology + color, (2) Antibiotic choice — GP and GN differ in susceptibility." },

  // --- Specialized Structures ---
  { section: "Specialized Structures", topic: "Plasma Membrane", text: "Protein:phospholipid 3:1; ATP synthase. Antibiotic target." },
  { section: "Specialized Structures", topic: "Ribosomes", text: "30S + 50S → 70S; differ from eukaryotic. Antibiotic target — multiple drug classes." },
  { section: "Specialized Structures", topic: "Endospores", text: "Bacillus + Clostridium only; resist heat, UV, chemicals; dormant for years. Germinate when nutrients available; malachite green stain." },
  { section: "Specialized Structures", topic: "Capsule", text: "Polysaccharide coat; negative staining. Virulence factor: inhibits phagocytosis; some bacteria only infectious when encapsulated (S. pneumoniae, K. pneumoniae); vaccine antigens." },
  { section: "Specialized Structures", topic: "Flagella", text: "Flagellin; ATP-powered; silver stain. Chemotaxis. E. coli → UTIs; H. pylori → penetrates stomach mucous layer." },
  { section: "Specialized Structures", topic: "Fimbriae", text: "Short, pilin; 100s per cell. Attachment to host cells. N. gonorrhoeae only infectious with fimbriae." },
  { section: "Specialized Structures", topic: "Pilus (Sex pilus)", text: "Longer, 1-2 per cell. Sex pilus for conjugation (DNA transfer). Antigenic variation → immune escape." },

  // --- Growth, Oxygen & Enzyme Tests ---
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Binary Fission", text: "Vertical gene transfer: cell doubles → divides → each daughter gets chromosome. Generation time = doubling time. Most human pathogens are mesophiles (25-40°C). Optimal pH 6.5-7.5." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Lag phase", text: "Adjusting, metabolizing, NOT dividing." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Log (exponential) phase", text: "Rapid division. β-lactams act here." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Stationary phase", text: "Nutrients depleted, waste buildup. C. diff toxins peak here." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Death phase", text: "Continuous cell death. Persister cells may survive." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Obligate Aerobes", text: "Require O₂. Examples: M. tuberculosis, Pseudomonas." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Facultative Anaerobes", text: "Use O₂ if present, or ferment. Examples: E. coli, Staphylococcus." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Aerotolerant", text: "Same with or without O₂. Example: S. pyogenes." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Obligate Anaerobes", text: "Die in O₂. Examples: Clostridium tetani, C. perfringens." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Microaerophiles", text: "Reduced O₂ (<2-10%). Examples: Campylobacter, H. pylori." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Catalase test", text: "Detects H₂O₂ → bubbles. Positive: all Staphylococcus. Negative: Streptococcus, Enterococcus." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Coagulase test", text: "Detects fibrinogen → fibrin. Positive: S. aureus. Negative: S. epidermidis, S. saprophyticus." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Oxidase test", text: "Detects cytochrome C oxidase. Positive: Neisseria, Pseudomonas, Vibrio. Negative: enteric GN (E. coli, Klebsiella)." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Urease test", text: "Detects urea → ammonia (pink). Positive: Proteus, H. pylori, S. saprophyticus. Negative: E. coli, Salmonella, Shigella." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Hemolysis", text: "RBC lysis on blood agar. α = incomplete (green), β = complete (clear), γ = none." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "MacConkey agar", text: "Selective (bile salts inhibit GP) + differential (lactose + pH indicator). Lactose fermenters → pink/red. Non-lactose → pale." },
  { section: "Growth, Oxygen & Enzyme Tests", topic: "Maltose fermentation", text: "Distinguishes N. gonorrhoeae (−) from N. meningitidis (+)." },

  // --- Virulence Factors & Toxins ---
  { section: "Virulence & Toxins", topic: "4 Pathogen Tasks", text: "(1) Get in & stay in, (2) Avoid/evade host defenses, (3) Damage host & spread, (4) Exit & infect another host." },
  { section: "Virulence & Toxins", topic: "Capsule (virulence)", text: "Prevents phagocytosis; hides PAMPs." },
  { section: "Virulence & Toxins", topic: "M protein", text: "S. pyogenes; antiphagocytic (>200 variants)." },
  { section: "Virulence & Toxins", topic: "Protein A", text: "S. aureus; binds IgG Fc → blocks complement." },
  { section: "Virulence & Toxins", topic: "IgA protease", text: "Degrades IgA → bacteria adhere to mucous membranes." },
  { section: "Virulence & Toxins", topic: "Antigenic variation", text: "Alters surface antigens → slows antibody production." },
  { section: "Virulence & Toxins", topic: "Molecular mimicry", text: "Coat with host molecules → immune cells see 'self'." },
  { section: "Virulence & Toxins", topic: "Intracellular hiding", text: "Use invasin/actin; cell-to-cell spread via cadherins." },
  { section: "Virulence & Toxins", topic: "Biofilms", text: "Form on prosthetics/catheters; block antibiotics + immune response." },
  { section: "Virulence & Toxins", topic: "Siderophores", text: "Steal iron from host transferrin/lactoferrin." },
  { section: "Virulence & Toxins", topic: "Exotoxins", text: "Source: secreted (mostly GP, some GN). Structure: A-B (A = toxic enzyme, B = binding). Heat-labile (>60°C). Targets: specific. Extremely lethal. Stimulate antibodies. Effects: neuro/entero/cyto/superantigens." },
  { section: "Virulence & Toxins", topic: "Endotoxins", text: "Source: Lipid A of LPS (GN outer membrane). Heat-stable. No specific targets. Less toxic than exotoxins. Poor antibody generation. Effects: fever (IL-1/TNF), shock, DIC." },
  { section: "Virulence & Toxins", topic: "Superantigens", text: "Bind MHC II + TCR simultaneously → massive T cell activation → cytokine storm. S. aureus TSST-1 (TSS), S. pyogenes pyrogenic exotoxin (scarlet fever)." },
  { section: "Virulence & Toxins", topic: "ID50 and LD50", text: "ID50 = organisms to infect 50% of hosts. LD50 = organisms to kill 50%. Shigella ~10-100 vs Salmonella ~100,000." },

  // --- Genetics & Resistance ---
  { section: "Genetics & Resistance", topic: "Prokaryotic genome", text: "Single circular DNA, haploid, no introns. Folate pathway (DHPS, DHFR) = drug target. DNA gyrase (Topo II) + Topo IV = drug targets. RNA polymerase = drug target. Ribosomes (70S) = drug target." },
  { section: "Genetics & Resistance", topic: "Conjugation", text: "Sex pilus transfers plasmids/transposons between cells." },
  { section: "Genetics & Resistance", topic: "Transduction", text: "Bacteriophage carries donor DNA → can change non-pathogenic to pathogenic." },
  { section: "Genetics & Resistance", topic: "Transformation", text: "Naked DNA from dying cells taken up (rare); cell must be 'competent'." },
  { section: "Genetics & Resistance", topic: "Plasmids", text: "Extrachromosomal circular DNA; replicate independently. Types: F (pili/conjugation), R (resistance + sex pili), Dissimilation (disinfectant resistance)." },
  { section: "Genetics & Resistance", topic: "Transposons", text: "Jumping genes: move within/between DNA. 4 domains: inverted repeats, transposase, repressor, resistance enzyme." },
  { section: "Genetics & Resistance", topic: "Enzymatic Inactivation", text: "Enzymes deactivate drug. β-lactamases hydrolyze β-lactam ring." },
  { section: "Genetics & Resistance", topic: "Target Modification", text: "Altered target → reduced binding. MRSA: mecA → PBP2a. TetM blocks ribosome binding." },
  { section: "Genetics & Resistance", topic: "Efflux Pumps", text: "Pump drug out of cell. Found in GP and GN; broad or specific." },
  { section: "Genetics & Resistance", topic: "Reduced Permeability", text: "Altered porins/envelope. Important for GN bacteria." },
  { section: "Genetics & Resistance", topic: "Biofilm resistance", text: "Physical barrier. Prosthetic device infections." },
  { section: "Genetics & Resistance", topic: "Persister Cells", text: "Dormant, not killed by drugs. Stationary phase / non-dividing." },

  // --- Charts (gram-stain reference) ---
  { section: "Gram Stain Chart", topic: "GP Cocci — Clusters (Staphylococcus)", text: "All catalase +. Coagulase +: S. aureus (MRSA, VRSA). Coagulase −: S. epidermidis, S. saprophyticus (urease +)." },
  { section: "Gram Stain Chart", topic: "GP Cocci — Chains / Pairs (Strep/Entero)", text: "All catalase −. β-hemolytic: S. pyogenes (GAS), S. agalactiae (GBS). α-hemolytic: S. pneumoniae (diplococci), Viridans (S. mutans), E. faecium. γ-hemolytic: E. faecalis." },
  { section: "Gram Stain Chart", topic: "GP Small Bacilli & Filamentous", text: "Small: Listeria monocytogenes, C. diphtheriae, Gardnerella. Filamentous: Nocardia (acid-fast)." },
  { section: "Gram Stain Chart", topic: "GP Large Spore-forming Bacilli", text: "Bacillus cereus, C. perfringens, C. difficile, C. tetani, C. botulinum." },
  { section: "Gram Stain Chart", topic: "GN Diplococci & Coccobacilli", text: "Diplococci: N. meningitidis, N. gonorrhoeae (oxidase+, catalase+). Coccobacilli: Moraxella catarrhalis, H. influenzae, A. baumannii (ox−), Bordetella pertussis." },
  { section: "Gram Stain Chart", topic: "GN Lactose Fermenters", text: "Oxidase +: Vibrio cholerae, Aeromonas. Oxidase −: E. coli, Klebsiella, Enterobacter, Citrobacter." },
  { section: "Gram Stain Chart", topic: "GN Non-lactose Fermenters", text: "Oxidase +: Pseudomonas, Campylobacter, H. pylori, Legionella. Oxidase −: Salmonella, Shigella, Proteus, Serratia." },
  { section: "Gram Stain Chart", topic: "Atypicals", text: "Mycoplasma pneumoniae (no cell wall), M. tuberculosis (acid-fast, mycolic acid), Chlamydia trachomatis (obligate intracellular), Rickettsia rickettsii (obligate intracellular). Spirochetes: Treponema pallidum, Borrelia burgdorferi." },

  // ═══════════════════════════════════════════════════════════════════
  // VIRGA — β-Lactams & Antimicrobials
  // ═══════════════════════════════════════════════════════════════════

  // --- Discovery & Development of Penicillin ---
  { instructor: "virga", section: "Discovery & Development of Penicillin", topic: "1929 Fleming", text: "Alexander Fleming discovers a fungus producing a clear zone of bacterial inhibition. Names it penicillin but cannot isolate it. Originally believed penicillin was an enzyme, moved on to sulfonamides." },
  { instructor: "virga", section: "Discovery & Development of Penicillin", topic: "1939 Florey & Chain", text: "Florey and Chain isolate and characterize penicillin. First clinical trials in humans. Norman Heatley, technician, develops the base/acid extraction protocol from 'mold juice.'" },
  { instructor: "virga", section: "Discovery & Development of Penicillin", topic: "1943 Production", text: "Large-scale penicillin production established. 'Controlled fermentation' directs the formation of specific penicillin types." },
  { instructor: "virga", section: "Discovery & Development of Penicillin", topic: "1948 Cephalosporin C", text: "Giuseppe Brotzu isolates Cephalosporium acremonium from a sewage outflow; cephalosporin C later characterized by Abraham and Newton at Florey's lab." },
  { instructor: "virga", section: "Discovery & Development of Penicillin", topic: "1955 Semi-synthetics", text: "Ernst Chain at Beecham Pharmaceuticals suggests semi-synthetic modification of a common penicillin nucleus → leads to isolation of 6-APA, the scaffold for every semi-synthetic penicillin." },
  { instructor: "virga", section: "Discovery & Development of Penicillin", topic: "Natural penicillin instability", text: "Natural penicillins are unstable to acid, base, and solution at room temperature over time. The β-lactam ring's inherent reactivity is exactly what makes it both a drug and a chemistry challenge." },
  { instructor: "virga", section: "Discovery & Development of Penicillin", topic: "Penicillin G vs V", text: "Both natural. Pen G is highly acid-labile → poor oral bioavailability → IV/IM. Pen V uses phenoxyacetic acid as its side-chain building block instead of phenylacetic acid — the phenoxy oxygen withdraws electrons from the β-lactam carbonyl, conferring enough acid stability for oral dosing. Both narrow-spectrum, β-lactamase susceptible." },

  // --- Peptidoglycan Target Review ---
  { instructor: "virga", section: "Peptidoglycan Target Review", topic: "The target", text: "Peptidoglycan layer provides strength and rigidity. Gram-positive: 25-40 layers thick (~20% of dry weight). Gram-negative: ~10% dry weight, behind outer lipid bilayer in the periplasm." },
  { instructor: "virga", section: "Peptidoglycan Target Review", topic: "NAG + NAM", text: "Alternating N-acetylglucosamine and N-acetylmuramic acid, linked by a 1,4-β glycosidic bond (broken by lysozyme)." },
  { instructor: "virga", section: "Peptidoglycan Target Review", topic: "Stem tetrapeptide", text: "Attached to NAM's free acid: L-Ala → D-Glu → L-Lys → D-Ala. Starts as a pentapeptide with a terminal D-Ala-D-Ala that the transpeptidase cleaves." },
  { instructor: "virga", section: "Peptidoglycan Target Review", topic: "Cross-link", text: "Pentaglycyl bridge between the ε-amino of Lys and the carboxyl of D-Ala of the adjacent strand." },
  { instructor: "virga", section: "Peptidoglycan Target Review", topic: "Transpeptidase PBPs", text: "Penicillin-binding proteins catalyze cross-linking — recognize the terminal D-Ala-D-Ala and cleave to form the peptide bond. Over 2,500 PBP variants identified." },
  { instructor: "virga", section: "Peptidoglycan Target Review", topic: "Cytoplasmic phase", text: "NAG and NAM built by murA-F-encoded enzymes in the cytoplasm. Fosfomycin targets MurA here." },
  { instructor: "virga", section: "Peptidoglycan Target Review", topic: "Membrane-associated phase", text: "NAG-NAM units linked to the lipid carrier (bactoprenol) for transport across the plasma membrane." },
  { instructor: "virga", section: "Peptidoglycan Target Review", topic: "Extracytoplasmic phase", text: "Cell wall units move to the outer lipid layer; PBPs incorporate them into the growing peptidoglycan by cross-linking adjacent strands." },

  // --- How β-Lactams Kill Bacteria ---
  { instructor: "virga", section: "How β-Lactams Kill Bacteria", topic: "D-Ala-D-Ala mimicry", text: "β-lactams mimic the D-Ala-D-Ala terminus of the peptidoglycan stem peptide. PBP active-site serine attacks the β-lactam carbonyl thinking it's the normal substrate — forms irreversible covalent bond, PBP permanently inactivated, cell wall can't cross-link, bacterium lyses during growth." },
  { instructor: "virga", section: "How β-Lactams Kill Bacteria", topic: "4-membered β-lactam ring", text: "Highly strained (N1-C2-C3-C4) → reactive. The strain is what drives PBP acylation." },
  { instructor: "virga", section: "How β-Lactams Kill Bacteria", topic: "Fused ring systems", text: "Penicillins fuse to a thiazolidine; cephalosporins fuse to a cefem (6-membered). Fusion adds ring strain, increasing reactivity. Carbapenems replace the sulfur. Monobactams skip the fused ring entirely." },
  { instructor: "virga", section: "How β-Lactams Kill Bacteria", topic: "Ring strain = reactivity", text: "The lactam nitrogen does NOT behave like a typical tertiary amide because any double-bond formation would force the rings into an impossible planar conformation." },
  { instructor: "virga", section: "How β-Lactams Kill Bacteria", topic: "Three chiral centers", text: "All penicillin derivatives share the 2S, 5R, 6R absolute configuration." },
  { instructor: "virga", section: "How β-Lactams Kill Bacteria", topic: "R-group SAR handle", text: "Only SAR handle on the penicillin nucleus. Affects spectrum, stability, and bioavailability. All semi-synthetic penicillins differ only here." },
  { instructor: "virga", section: "How β-Lactams Kill Bacteria", topic: "Carboxylic acid", text: "Binds PBP active site as the carboxylate ion — mandatory anchor for PBP recognition." },
  { instructor: "virga", section: "How β-Lactams Kill Bacteria", topic: "Why irreversible?", text: "After PBP serine attacks and opens the β-lactam, the thiazolidinone ring blocks entry of the pentaglycyl bridge's amino terminus that would normally complete the reaction. Enzyme is stuck with the acyl-enzyme intermediate forever. Normal D-Ala-D-Ala releases the terminal D-Ala, freeing the enzyme." },

  // --- Four β-Lactam Classes ---
  { instructor: "virga", section: "Four β-Lactam Classes", topic: "Penicillins", text: "Nucleus: 6-APA (β-lactam + thiazolidine). Spectrum narrow to extended, tuned entirely by the C6 R-group." },
  { instructor: "virga", section: "Four β-Lactam Classes", topic: "Cephalosporins", text: "Nucleus: 7-ACA (β-lactam + 6-membered cefem ring). 5 generations, each broader. Two SAR handles: C7 acyl (spectrum) and C3 leaving group (PK, protein binding)." },
  { instructor: "virga", section: "Four β-Lactam Classes", topic: "Carbapenems", text: "Carbapenem nucleus: β-lactam + 5-ring with C instead of S; trans-hydroxyethyl at C6. Very broad spectrum. Stable against most β-lactamases. Reserved for MDR/severe infections." },
  { instructor: "virga", section: "Four β-Lactam Classes", topic: "Monobactam", text: "Monocyclic β-lactam — no fused ring; N1 sulfonate activates the carbonyl. Gram− only. Safe in true penicillin allergy (no shared fused ring for IgE cross-reactivity)." },

  // --- Resistance Mechanisms (β-lactam) ---
  { instructor: "virga", section: "β-Lactam Resistance", topic: "β-lactamase hydrolysis", text: "Enzyme opens the β-lactam ring → inactive drug. Most clinically important β-lactam resistance mechanism. Most forms are plasmid-encoded and transferable." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "Altered PBPs", text: "New PBP has low affinity for β-lactams. MRSA: mecA → PBP2a. Pneumococci: altered PBP1/2 → penicillin-resistant strains." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "Reduced penetration", text: "Loss or down-regulation of outer-membrane porins. Gram− only. Combines with β-lactamases for high-level resistance." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "Efflux pumps", text: "Pump drug back out of the cell. Found in both Gram+ and Gram−; broad or drug-specific." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "Fosfomycin & MurA", text: "Fosfomycin's MurA target is upstream of PBPs → no cross-resistance with β-lactams. Only β-lactam-pathway-active drug not touched by β-lactamases." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "Ambler Class A", text: "Serine active site. Penicillinases (TEM-1/2, SHV-1), ESBLs (cefotaxime/ceftriaxone/ceftazidime/aztreonam), KPC carbapenemases. Inhibited by clavulanate, sulbactam, tazobactam, avibactam, relebactam, vaborbactam." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "Ambler Class B", text: "Zinc (metallo-β-lactamases). NDM, VIM, IMP. NONE of the classical inhibitors work — use cefiderocol." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "Ambler Class C", text: "Serine (chromosomal AmpC). SPACE bugs: Serratia, Pseudomonas, Proteus, Acinetobacter, Citrobacter, Enterobacter. Inhibited by avibactam, relebactam." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "Ambler Class D", text: "Serine (OXA-type), e.g., OXA-48 in carbapenem-resistant Enterobacterales. Avibactam works against some." },
  { instructor: "virga", section: "β-Lactam Resistance", topic: "β-lactamase inhibitors (BLIs)", text: "Poor antibiotics on their own but synergize with β-lactams. Classical BLIs (clavulanate, sulbactam, tazobactam) are suicide substrates — irreversibly acylate the enzyme's serine. Newer diazabicyclooctanes (avibactam, relebactam) reversibly carbamoylate the serine. Vaborbactam is a boronic-acid transition-state mimic." },

  // --- PK & PD ---
  { instructor: "virga", section: "β-Lactam PK & PD", topic: "Time-dependent killing", text: "β-lactam efficacy depends on how long the free drug concentration stays above the MIC (%T>MIC), NOT peak concentration. Why β-lactams are dosed q4-6-8h (not once daily like aminoglycosides). Continuous infusion of pip-tazo sometimes used for severe infections to maximize %T>MIC." },
  { instructor: "virga", section: "β-Lactam PK & PD", topic: "Oral bioavailability", text: "Varies with side chain. Pen G poor. Amoxicillin excellent (~90%). Ampicillin fair. Most cephalosporins use specific PK modifications (axetil prodrug for cefuroxime, esterase-resistant C3 for cefazolin's cephalexin counterpart)." },
  { instructor: "virga", section: "β-Lactam PK & PD", topic: "Half-life", text: "Most β-lactams have short half-lives (1-2 h). Ceftriaxone is the standout at ~8 h → once-daily dosing. Ertapenem's 95% protein binding extends its half-life to ~4 h." },
  { instructor: "virga", section: "β-Lactam PK & PD", topic: "Clearance", text: "Most β-lactams renally cleared → dose-adjust in renal impairment. Ceftriaxone is biliary-cleared → no renal adjustment (but avoid in neonates)." },
  { instructor: "virga", section: "β-Lactam PK & PD", topic: "CSF penetration", text: "3rd/4th/5th gen cephalosporins, carbapenems (meropenem > imipenem for CNS), and cefuroxime (only 2nd gen with meaningful BBB crossing)." },
  { instructor: "virga", section: "β-Lactam PK & PD", topic: "Imipenem + cilastatin", text: "Imipenem is inactivated by human renal dehydropeptidase-I. Cilastatin inhibits the enzyme to preserve urinary levels. Fixed 1:1 combination." },

  // --- Allergy ---
  { instructor: "virga", section: "β-Lactam Allergy", topic: "Reported vs actual penicillin allergy", text: "Up to 10% of patients report a penicillin allergy. In clinical practice only ~10-20% of those actually have a true IgE-mediated reaction on testing. Vast majority can safely receive β-lactams." },
  { instructor: "virga", section: "β-Lactam Allergy", topic: "Hapten formation", text: "The β-lactam carbonyl covalently modifies host proteins — specifically, the penicilloyl group attaches to Lys 199 (and other Lys residues) of serum albumin." },
  { instructor: "virga", section: "β-Lactam Allergy", topic: "IgE anaphylaxis", text: "Modified albumin recognized as foreign → IgE production. On re-exposure, IgE on mast cells → histamine → urticaria, angioedema, bronchospasm, anaphylaxis. Severity ranges mild rash to anaphylaxis (1-10% of population for any severity)." },
  { instructor: "virga", section: "β-Lactam Allergy", topic: "PCN → cephalosporin cross-reactivity", text: "Clinical incidence ~2-6% (much lower than the often-quoted 10%). Higher with early-generation cephalosporins (shared benzyl side chain with penicillin). Very low (<1%) for 3rd+ gen cephalosporins because ATMO side chains are structurally distinct." },
  { instructor: "virga", section: "β-Lactam Allergy", topic: "PCN → aztreonam cross-reactivity", text: "Essentially zero — except ceftazidime-allergic patients share a side chain with aztreonam." },
  { instructor: "virga", section: "β-Lactam Allergy", topic: "PCN → carbapenem cross-reactivity", text: "Very low, likely <1%." },

  // --- Spectrum & Clinical Principles ---
  { instructor: "virga", section: "Spectrum & Clinical Principles", topic: "Narrow vs broad spectrum", text: "Narrow: fewer organisms, less disruption to microbiota → preferred when pathogen known. Broad: empiric coverage before culture results, or polymicrobial infections." },
  { instructor: "virga", section: "Spectrum & Clinical Principles", topic: "MIC", text: "Minimum Inhibitory Concentration. Lowest drug concentration that prevents visible growth in vitro. Defines S/I/R breakpoints. Example: S. pneumoniae penicillin-susceptible <0.1 mcg/mL, intermediate 0.1-1.0, resistant ≥1.0." },
  { instructor: "virga", section: "Spectrum & Clinical Principles", topic: "Empiric therapy", text: "Start before culture results based on likely organisms, severity, and local antibiogram. Narrow to definitive therapy once cultures return." },
  { instructor: "virga", section: "Spectrum & Clinical Principles", topic: "Antimicrobial stewardship", text: "Use the narrowest effective agent for the shortest effective duration. About 20-30% of outpatient antibiotic prescriptions are unnecessary." },
  { instructor: "virga", section: "Spectrum & Clinical Principles", topic: "Drug of choice (DOC)", text: "Preferred agent based on efficacy, toxicity, spectrum, cost, and local resistance. Changes over time as resistance emerges." },
  { instructor: "virga", section: "Empiric Choices", topic: "Surgical prophylaxis", text: "Cefazolin — MSSA/strep coverage, long-enough half-life for single-dose pre-op, narrow = stewardship-friendly." },
  { instructor: "virga", section: "Empiric Choices", topic: "Community-acquired pneumonia (CAP)", text: "Ceftriaxone + azithromycin. Ceftriaxone covers S. pneumoniae, H. influenzae; azithromycin covers atypicals (Legionella, Mycoplasma, Chlamydia)." },
  { instructor: "virga", section: "Empiric Choices", topic: "Bacterial meningitis (adult)", text: "Ceftriaxone + vancomycin. 3rd gen for gram- and resistant pneumococci; vanco for highly-resistant pneumococci; add ampicillin for Listeria in >50 or immunocompromised." },
  { instructor: "virga", section: "Empiric Choices", topic: "HAP/VAP", text: "Pip-tazo or cefepime + vancomycin. Broad gram- including Pseudomonas + MRSA coverage." },
  { instructor: "virga", section: "Empiric Choices", topic: "Febrile neutropenia", text: "Cefepime or pip-tazo. Anti-pseudomonal β-lactam monotherapy is first-line per IDSA." },
  { instructor: "virga", section: "Empiric Choices", topic: "MRSA bacteremia", text: "Vancomycin or daptomycin. Daptomycin preferred if MIC creep or source control issue." },
  { instructor: "virga", section: "Empiric Choices", topic: "C. difficile (non-severe)", text: "Fidaxomicin (first-line) or oral vancomycin. Fidaxomicin has lower recurrence; metronidazole now second-line." },
  { instructor: "virga", section: "Empiric Choices", topic: "Uncomplicated cystitis", text: "Nitrofurantoin, TMP-SMX, or fosfomycin. Narrow spectrum, concentrate in urine." },

  // --- Non-β-Lactam Mechanism Overview ---
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "Cell wall (non-β-lactam)", text: "Glycopeptides (vancomycin, telavancin), Fosfomycin. Vancomycin binds the D-Ala-D-Ala substrate (not PBP) — different target, no cross-resistance. VRE/VRSA = D-Ala-D-Lac mutation. Fosfomycin inhibits MurA, the first step of PG synthesis." },
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "Cell membrane", text: "Lipopeptides (daptomycin), Polymyxins (colistin). Daptomycin forms Ca²⁺-dependent pores in Gram+ membranes — inactivated by pulmonary surfactant (no pneumonia use). Polymyxins act as cationic detergents on Gram- LPS — nephrotoxic 'last resort.'" },
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "Protein synthesis 30S", text: "Aminoglycosides (gentamicin, tobramycin, amikacin), Tetracyclines (doxycycline, tigecycline). Aminoglycosides cause codon misreading → bactericidal, concentration-dependent, once-daily high-dose. Tetracyclines block tRNA A-site binding → bacteriostatic, broad including atypicals." },
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "Protein synthesis 50S", text: "Macrolides (azithro, clarithro, erythro), Lincosamides (clindamycin), Oxazolidinones (linezolid, tedizolid), Streptogramins (quinupristin/dalfopristin). All bind 23S rRNA. Macrolides/clindamycin/streptogramins share the MLS binding site → cross-resistance via erm methylases. Linezolid binds a UNIQUE site → no cross-resistance, works against MRSA + VRE." },
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "DNA synthesis (gyrase)", text: "Fluoroquinolones (cipro, levo, moxi, gemi). Poison the DNA gyrase/topoisomerase IV-DNA complex, trapping double-strand breaks → bactericidal. Black-box: tendon rupture, QT, C. diff, aortic aneurysm." },
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "Anaerobic DNA damage", text: "Nitroimidazoles (metronidazole), Nitrofurans (nitrofurantoin). Both are prodrugs. Anaerobic bacterial enzymes reduce the nitro group to reactive intermediates that damage DNA. Metronidazole: anaerobes + protozoa. Nitrofurantoin: urinary concentrating for cystitis." },
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "RNA polymerase", text: "Rifamycins (rifampin), Macrocyclics (fidaxomicin). Bind bacterial (not eukaryotic) RNA polymerase β-subunit. Rifampin: always combo therapy (rapid resistance). Fidaxomicin: narrow anti-C.diff, minimal absorption, spares Bacteroides → lower recurrence." },
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "Folate synthesis", text: "Sulfonamides + DHFR inhibitors (TMP-SMX). Sequential pathway blockade: sulfamethoxazole inhibits DHPS (mimics PABA), trimethoprim inhibits DHFR. Synergistic bactericidal. Humans don't synthesize folate → bacteria-selective." },
  { instructor: "virga", section: "Non-β-Lactam Mechanisms", topic: "Bactericidal vs bacteriostatic", text: "Bactericidal = kills directly (β-lactams, vanco, aminoglycosides, fluoroquinolones, daptomycin). Bacteriostatic = inhibits growth, immune system clears (tetracyclines, macrolides, clindamycin, sulfonamides, linezolid mostly). Distinction matters for immunocompromised patients and for endocarditis where bactericidal agents are preferred." },
];
