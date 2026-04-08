// Flat text extract of /guide content for search indexing.
// Each entry = one searchable chunk. Keep in sync with src/app/guide/page.js.
// When you change a table row or callout in the guide, mirror it here.
//
// The page is split into Weldon (microbiology) and Virga (β-lactams &
// antimicrobials) tabs. Entries below are kept in two arrays so search hits
// can label which instructor the chunk belongs to.

const WELDON = [
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

// ─── Virga — β-Lactams & Antimicrobials ───────────────────────────────
const VIRGA = [
  // --- Discovery & Development ---
  { section: "Discovery & Development", topic: "Fleming 1929", text: "Alexander Fleming discovers a fungus producing a clear zone of bacterial inhibition. Names it penicillin but cannot isolate it. Originally believed it was an enzyme, moved on to sulfonamides." },
  { section: "Discovery & Development", topic: "Florey, Chain, Heatley", text: "1939 Florey and Chain isolate and characterize penicillin. Norman Heatley develops the base/acid extraction protocol from mold juice. First clinical trials in humans." },
  { section: "Discovery & Development", topic: "Mass production", text: "1943 large-scale production established. Controlled fermentation directs the formation of specific penicillin types." },
  { section: "Discovery & Development", topic: "Cephalosporin discovery", text: "1948 Giuseppe Brotzu isolates Cephalosporium acremonium from a sewage outflow. Cephalosporin C later characterized by Abraham and Newton at Florey's lab." },
  { section: "Discovery & Development", topic: "6-APA semi-synthesis", text: "1955 Ernst Chain at Beecham Pharmaceuticals suggests semi-synthetic modification of a common penicillin nucleus, leading to isolation of 6-aminopenicillanic acid (6-APA)." },
  { section: "Discovery & Development", topic: "Pen G vs Pen V", text: "Both natural penicillins. Pen G is highly acid-labile so poor oral bioavailability and given IV/IM. Pen V uses phenoxyacetic acid as its side-chain — the phenoxy oxygen withdraws electrons from the β-lactam carbonyl, conferring acid stability for oral dosing. Both narrow-spectrum, both β-lactamase susceptible." },
  { section: "Discovery & Development", topic: "Chemical instability of natural penicillins", text: "Penicillin G is unstable to acid (penillic acid), base (penicilloic acid), β-lactamase (penicilloic acid), and amidase (6-APA). Every later β-lactam SAR addresses one of these failure modes." },

  // --- Peptidoglycan Target Review ---
  { section: "Peptidoglycan Target", topic: "Peptidoglycan layer", text: "The peptidoglycan layer of the bacterial cell wall provides strength and rigidity. In Gram-positive species 25-40 layers thick (~20% dry weight). In Gram-negatives ~10% dry weight, with an outer lipid bilayer." },
  { section: "Peptidoglycan Target", topic: "NAG and NAM repeating unit", text: "Alternating N-acetylglucosamine and N-acetylmuramic acid linked by 1,4-β glycosidic bond (broken by lysozyme). Stem tetrapeptide attached to NAM: L-Ala → D-Glu → L-Lys → D-Ala (starts as a pentapeptide with terminal D-Ala-D-Ala)." },
  { section: "Peptidoglycan Target", topic: "Pentaglycine cross-link", text: "Pentaglycyl bridge connects the ε-amino of L-Lys on one strand to the carboxyl of D-Ala on the next. Transpeptidase (PBP) cleaves the terminal D-Ala and forms the peptide bond. Over 2,500 PBP variants identified." },
  { section: "Peptidoglycan Target", topic: "Three assembly phases", text: "Cytoplasmic: NAG/NAM built by murA-F enzymes (fosfomycin targets MurA). Membrane-associated: linked to bactoprenol carrier. Extracytoplasmic: PBPs cross-link strands at the outer face." },

  // --- How β-Lactams Kill Bacteria ---
  { section: "β-Lactam Mechanism", topic: "D-Ala-D-Ala mimicry", text: "β-lactams mimic the D-Ala-D-Ala terminus of the peptidoglycan stem peptide. The PBP active-site serine attacks the β-lactam carbonyl thinking it's the normal substrate, but instead of cleaving and releasing it forms an irreversible covalent acyl-enzyme. The PBP is permanently inactivated, the cell wall cannot cross-link, and the bacterium lyses." },
  { section: "β-Lactam Mechanism", topic: "β-lactam ring strain", text: "4-membered β-lactam ring (N1-C2-C3-C4) is highly strained. Fusion to a 5- or 6-membered ring adds further strain. Strain is what drives PBP acylation. The lactam nitrogen does not behave like a typical tertiary amide because any double-bond formation would force the rings into an impossible planar conformation." },
  { section: "β-Lactam Mechanism", topic: "Why irreversible", text: "After PBP serine opens the β-lactam, the thiazolidinone (penicillins) cannot leave — it blocks entry of the pentaglycyl bridge that would normally complete the reaction. The enzyme is stuck with the acyl-enzyme intermediate forever. In contrast, normal D-Ala-D-Ala releases the terminal D-Ala after serine attack." },
  { section: "β-Lactam Mechanism", topic: "Three chiral centers", text: "All penicillin derivatives share absolute configuration 2S, 5R, 6R. The R-group on the C6 amide is the only SAR handle and tunes spectrum, stability, and bioavailability." },

  // --- Four β-Lactam Classes at a Glance ---
  { section: "Four β-Lactam Classes", topic: "Penicillins overview", text: "Nucleus 6-APA (β-lactam fused to thiazolidine). Spectrum is tuned entirely by the C6 R-group. Narrow to extended spectrum depending on side chain." },
  { section: "Four β-Lactam Classes", topic: "Cephalosporins overview", text: "Nucleus 7-ACA (β-lactam fused to a 6-membered cefem ring). Two SAR handles: C7 acyl side chain (spectrum), C3 leaving group (PK and protein binding). Five generations, each broader than the last." },
  { section: "Four β-Lactam Classes", topic: "Carbapenems overview", text: "Carbapenem nucleus has β-lactam fused to a 5-membered ring with carbon instead of sulfur, plus a trans-hydroxyethyl at C6. Very broad spectrum, stable against most β-lactamases. Reserved for MDR or severe infections." },
  { section: "Four β-Lactam Classes", topic: "Monobactams overview", text: "Monocyclic β-lactam — no fused ring. N1 sulfonate activates the carbonyl. Gram-negative only. Safe in true penicillin allergy because there is no shared fused ring for IgE cross-reactivity." },

  // --- Resistance Mechanisms ---
  { section: "β-Lactam Resistance", topic: "β-lactamase hydrolysis", text: "Enzyme opens the β-lactam ring, inactivating the drug. Most clinically important resistance mechanism. Most forms are plasmid-encoded and transferable." },
  { section: "β-Lactam Resistance", topic: "Altered PBPs", text: "New PBP has low affinity for β-lactams. MRSA: mecA gene encodes PBP2a. Pneumococci: altered PBP1/2 leading to penicillin-resistant strains." },
  { section: "β-Lactam Resistance", topic: "Reduced penetration / efflux", text: "Loss of outer-membrane porins (Gram-negative) combines with β-lactamases for high-level resistance. Efflux pumps push drug back out, found in both Gram+ and Gram-." },
  { section: "β-Lactam Resistance", topic: "Ambler Class A", text: "Serine active site β-lactamases. Penicillinases (TEM-1/2, SHV-1), ESBLs (cefotaxime/ceftriaxone/ceftazidime/aztreonam), KPC carbapenemases. Inhibited by clavulanate, sulbactam, tazobactam, avibactam, relebactam, vaborbactam." },
  { section: "β-Lactam Resistance", topic: "Ambler Class B (metallo)", text: "Zinc active-site metallo-β-lactamases. NDM, VIM, IMP. NOT inhibited by current BLIs — clinical answer is cefiderocol (siderophore Trojan horse)." },
  { section: "β-Lactam Resistance", topic: "Ambler Class C (AmpC)", text: "Chromosomal serine β-lactamases. SPACE bugs: Serratia, Pseudomonas, Proteus, Acinetobacter, Citrobacter, Enterobacter. Inhibited by avibactam, relebactam." },
  { section: "β-Lactam Resistance", topic: "Ambler Class D (OXA)", text: "Serine OXA-type β-lactamases including OXA-48. Some inhibited by avibactam and relebactam." },
  { section: "β-Lactam Resistance", topic: "BLI mechanisms", text: "Classical BLIs (clavulanate, sulbactam, tazobactam) are suicide substrates that irreversibly acylate the enzyme's serine. Diazabicyclooctanes (avibactam, relebactam) reversibly carbamoylate the serine — one molecule inhibits multiple enzymes. Vaborbactam is a boronic-acid transition-state mimic." },
  { section: "β-Lactam Resistance", topic: "Cefiderocol SAR", text: "Cefiderocol is a 5th-generation cephalosporin designed to defeat metallo-β-lactamases. C-7 acylamino side chain provides serine-β-lactamase stability; C-3 catechol side chain chelates Fe³⁺ and rides the bacterial siderophore uptake system through the outer membrane (Trojan horse). Charged groups protect against metallo-β-lactamases." },

  // --- PK/PD ---
  { section: "β-Lactam PK/PD", topic: "Time-dependent killing", text: "β-lactam efficacy depends on how long the free drug concentration stays above the MIC (%T>MIC), not peak concentration. β-lactams are dosed q4-6-8h, not once daily like aminoglycosides. Continuous infusion of pip-tazo is sometimes used for severe infections to maximize %T>MIC." },
  { section: "β-Lactam PK/PD", topic: "Oral bioavailability", text: "Pen G is poorly absorbed orally. Amoxicillin has excellent (~90%) PO absorption. Ampicillin is fair. Cephalosporin oral forms use specific PK modifications such as the axetil prodrug for cefuroxime." },
  { section: "β-Lactam PK/PD", topic: "Half-life", text: "Most β-lactams have short half-lives (1-2 h). Ceftriaxone is the standout at ~8 h enabling once-daily dosing. Ertapenem's 95% protein binding extends its half-life to ~4 h." },
  { section: "β-Lactam PK/PD", topic: "Clearance", text: "Most β-lactams are renally cleared and need dose adjustment in renal impairment. Ceftriaxone is biliary-cleared so no renal adjustment needed (avoid in neonates)." },
  { section: "β-Lactam PK/PD", topic: "CSF penetration", text: "3rd/4th/5th gen cephalosporins, carbapenems (meropenem > imipenem for CNS), and cefuroxime (only 2nd gen with meaningful BBB crossing) achieve adequate CSF concentrations." },
  { section: "β-Lactam PK/PD", topic: "Imipenem + cilastatin", text: "Imipenem is inactivated by human renal dehydropeptidase-I. Cilastatin inhibits the enzyme to preserve urinary levels. Fixed 1:1 combination." },

  // --- Allergy ---
  { section: "Penicillin Allergy", topic: "Reported vs actual", text: "Up to 10% of patients report a penicillin allergy, but only ~10-20% of those have a true IgE-mediated reaction on testing. The vast majority can safely receive β-lactams." },
  { section: "Penicillin Allergy", topic: "Hapten formation", text: "The β-lactam carbonyl covalently modifies host proteins — penicilloyl group attaches to Lys 199 (and other Lys residues) of serum albumin. The modified albumin is recognized as foreign, triggering IgE production and Type I hypersensitivity on re-exposure." },
  { section: "Penicillin Allergy", topic: "Cross-reactivity", text: "Penicillin → cephalosporin clinical incidence ~2-6%, higher with early-generation cephalosporins (shared benzyl side chain). Penicillin → 3rd+ gen cephalosporin <1% (distinct ATMO group). Penicillin → aztreonam essentially zero (except ceftazidime-allergic patients due to shared side chain). Penicillin → carbapenem very low, likely <1%." },
  { section: "Penicillin Allergy", topic: "Skin test and desensitization", text: "Penicillin skin testing is available; a negative skin test makes IgE-mediated reaction unlikely. Desensitization protocols exist when penicillin is the only viable option (e.g., syphilis in pregnancy)." },

  // --- Spectrum & Clinical Principles ---
  { section: "Clinical Principles", topic: "Narrow vs broad spectrum", text: "Narrow: fewer organisms, less microbiota disruption, preferred when pathogen is known. Broad: empiric coverage before culture results, or polymicrobial infections." },
  { section: "Clinical Principles", topic: "MIC", text: "Minimum Inhibitory Concentration is the lowest drug concentration that prevents visible growth in vitro. Defines S/I/R breakpoints. Example: S. pneumoniae penicillin-susceptible <0.1 mcg/mL, intermediate 0.1-1.0, resistant ≥1.0." },
  { section: "Clinical Principles", topic: "Empiric therapy and stewardship", text: "Start before culture results based on likely organisms, severity, and local antibiogram. Narrow to definitive therapy when cultures return. Use the narrowest effective agent for the shortest effective duration. About 20-30% of outpatient antibiotic prescriptions are unnecessary." },
  { section: "Clinical Principles", topic: "Surgical prophylaxis", text: "Cefazolin is first-line for surgical prophylaxis. Covers MSSA and strep, has long-enough half-life for single-dose pre-op, and is narrow-spectrum (stewardship-friendly)." },
  { section: "Clinical Principles", topic: "Community-acquired pneumonia", text: "Empiric: ceftriaxone + azithromycin. Ceftriaxone covers S. pneumoniae and H. influenzae; azithromycin covers atypicals (Legionella, Mycoplasma, Chlamydia)." },
  { section: "Clinical Principles", topic: "Bacterial meningitis (adult)", text: "Ceftriaxone + vancomycin. 3rd gen for Gram-negatives and resistant pneumococci; vancomycin for highly-resistant pneumococci. Add ampicillin for Listeria coverage in patients >50 or immunocompromised." },
  { section: "Clinical Principles", topic: "HAP/VAP and febrile neutropenia", text: "Hospital-acquired pneumonia and ventilator-associated pneumonia: piperacillin-tazobactam or cefepime + vancomycin (broad Gram-negative incl Pseudomonas plus MRSA). Febrile neutropenia: cefepime or pip-tazo monotherapy first-line per IDSA." },
  { section: "Clinical Principles", topic: "MRSA bacteremia", text: "Vancomycin first-line. Daptomycin if MIC creep or source-control concerns." },
  { section: "Clinical Principles", topic: "C. difficile and cystitis", text: "C. difficile non-severe: fidaxomicin (first) or oral vancomycin; metronidazole now second-line. Uncomplicated cystitis: nitrofurantoin, TMP-SMX, or fosfomycin (narrow spectrum, concentrate in urine)." },

  // --- Non-β-lactam mechanism overview ---
  { section: "Non-β-Lactam Overview", topic: "Vancomycin mechanism", text: "Vancomycin binds the D-Ala-D-Ala substrate (not the PBP enzyme) — different target from β-lactams, no cross-resistance. VRE/VRSA arise from a D-Ala-D-Lac mutation that abolishes vancomycin binding." },
  { section: "Non-β-Lactam Overview", topic: "Fosfomycin mechanism", text: "Fosfomycin inhibits MurA, the first enzyme of peptidoglycan synthesis (cytoplasmic phase). Upstream of PBPs and not touched by β-lactamases." },
  { section: "Non-β-Lactam Overview", topic: "Daptomycin and polymyxins", text: "Daptomycin forms Ca²⁺-dependent pores in Gram+ membranes — inactivated by pulmonary surfactant (do not use for pneumonia). Polymyxins (colistin) act as cationic detergents on Gram- LPS — nephrotoxic 'last resort.'" },
  { section: "Non-β-Lactam Overview", topic: "Aminoglycosides and tetracyclines", text: "Aminoglycosides bind 30S ribosome causing codon misreading — bactericidal, concentration-dependent, once-daily high-dose. Tetracyclines block tRNA A-site binding — bacteriostatic, broad including atypicals." },
  { section: "Non-β-Lactam Overview", topic: "50S inhibitors", text: "Macrolides, clindamycin, and streptogramins share the MLS binding site on 23S rRNA — cross-resistance via erm methylases. Linezolid binds a UNIQUE 50S site, no cross-resistance, works against MRSA and VRE." },
  { section: "Non-β-Lactam Overview", topic: "Fluoroquinolones", text: "Poison the DNA gyrase / topoisomerase IV–DNA complex, trapping double-strand breaks. Bactericidal. Black-box warnings: tendon rupture, QT prolongation, C. difficile, aortic aneurysm." },
  { section: "Non-β-Lactam Overview", topic: "Nitroimidazoles and nitrofurans", text: "Both are prodrugs. Anaerobic bacterial enzymes reduce the nitro group to reactive intermediates that damage DNA. Metronidazole: anaerobes plus protozoa. Nitrofurantoin: concentrates in urine for cystitis." },
  { section: "Non-β-Lactam Overview", topic: "RNA polymerase inhibitors", text: "Rifamycins (rifampin) and macrocyclics (fidaxomicin) bind bacterial RNA polymerase β-subunit (not eukaryotic). Rifampin requires combination therapy because of rapid resistance. Fidaxomicin is narrow anti-C. diff with minimal absorption and spares Bacteroides → lower recurrence." },
  { section: "Non-β-Lactam Overview", topic: "Folate inhibitors", text: "TMP-SMX is a sequential pathway blockade: sulfamethoxazole inhibits DHPS (mimics PABA), trimethoprim inhibits DHFR. Synergistic and bactericidal. Humans don't synthesize folate, so the pathway is bacteria-selective." },
  { section: "Non-β-Lactam Overview", topic: "Bactericidal vs bacteriostatic", text: "Bactericidal: β-lactams, vancomycin, aminoglycosides, fluoroquinolones, daptomycin. Bacteriostatic: tetracyclines, macrolides, clindamycin, sulfonamides, linezolid (mostly). The distinction matters for immunocompromised patients and for endocarditis where bactericidal agents are preferred." },
];

export const GUIDE_CONTENT = [
  ...WELDON.map((e) => ({ ...e, instructor: "weldon" })),
  ...VIRGA.map((e) => ({ ...e, instructor: "virga" })),
];
