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
];
