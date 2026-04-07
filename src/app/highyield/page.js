const HY = [
  { cat:"core", badge:"CORE", items:[
    { title:"Catalase (+) = Staphylococcus | Catalase (−) = Streptococcus & Enterococcus", body:"First-line test to separate GP cocci. All Staph produce catalase (breaks H₂O₂ → bubbles). All Strep and Enterococcus are catalase-negative." },
    { title:"Coagulase (+) = S. aureus | Coagulase (−) = S. epidermidis & S. saprophyticus", body:"After catalase confirms Staph, coagulase distinguishes the most pathogenic species. S. aureus converts fibrinogen → fibrin → clot walls off bacteria from defenses." },
    { title:"GP wall = thick PG + teichoic acid | GN wall = thin PG + outer membrane + LPS", body:"GP: Up to 25 layers PG, teichoic acid (adherence), lipoteichoic acid (immune response). Stains purple. GN: Single PG layer in periplasm (contains β-lactamases), outer membrane with porins and LPS (Lipid A = endotoxin). Stains pink." },
    { title:"Exotoxins = secreted, A-B, mostly GP, very toxic | Endotoxins = Lipid A (LPS), GN, fever/shock/DIC", body:"Exotoxins: A (enzyme/toxic) + B (binding). Specific targets. Heat-labile (>60°C). Stimulate antibodies. Types: neurotoxins, enterotoxins, cytotoxins, superantigens. Endotoxins: Heat-stable. Released on death. No specific targets. IL-1/TNF-α → fever. TNF → vascular leak → shock. Activates clotting → DIC." },
    { title:"5 Stages: Incubation → Prodromal → Illness → Decline → Convalescence", body:"Incubation: infection to symptoms. Prodromal: nonspecific (fever, malaise). Illness: specific signs + symptoms; immune response highest. Decline: pathogen numbers drop; secondary infections occur here. Convalescence: recovery. Symptoms = subjective; Signs = objective/measurable." },
    { title:"Growth curve: Lag → Log → Stationary → Death | β-lactams work in LOG phase", body:"Lag: adjusting, not dividing. Log: rapid division, β-lactams act here. Stationary: nutrient depletion; C. diff toxins peak here. Death: cells die. Persister cells survive stationary phase — NOT killed by antibiotics." },
    { title:"3 Horizontal Gene Transfers: Conjugation (pilus), Transduction (phage), Transformation (naked DNA)", body:"Conjugation: sex pilus transfers plasmids/transposons. Transduction: bacteriophage carries DNA. Transformation: naked DNA from dying cells (rare, needs 'competent' cell). These spread antibiotic resistance between bacteria." },
  ]},
  { cat:"gp", badge:"GP", items:[
    { title:"S. aureus: Coag+, β-hemolytic, mannitol (yellow), Protein A, TSST-1, MRSA (mecA→PBP2a)", body:"Most pathogenic Staph. 25% genome = pathogenicity. Anterior nares reservoir. Protein A binds IgG Fc. Enterotoxins A-R = superantigens (heat-stable at 100°C, rapid onset ~4hrs). MRSA = mecA → PBP2a. VRSA = van genes. SSTIs, food poisoning, TSS, osteomyelitis." },
    { title:"S. pyogenes (GAS): β-hemolytic, M protein required (>200 types), superantigen → scarlet fever", body:"Group A. Long chains. M protein = antiphagocytic + complement interference. C5a peptidase. Streptolysin S/O = β-hemolysis. Pyrogenic exotoxin → scarlet fever (sandpaper rash, strawberry tongue), STSS. Suppurative: strep throat, impetigo, necrotizing fasciitis. Non-suppurative: rheumatic fever (molecular mimicry), glomerulonephritis." },
    { title:"S. pneumoniae: α-hemolytic, diplococci, #1 CAP, 90 serotypes, pneumolysin", body:"No Lancefield group. IgA protease. Pneumolysin → pores in epithelial cells/phagocytes. 30-50% otitis media. Sinusitis. Meningitis. Vaccines: PCV (kids), PPSV (>65). MDR (altered PBPs). WHO Priority." },
    { title:"Only Bacillus & Clostridium form spores | B. cereus = fried rice | C. diff = antibiotic-associated", body:"B. cereus: emetic toxin (heat-stable, fried rice syndrome). C. diff: antibiotics → dysbiosis; Toxin A+B in stationary phase; CDAD, PMC, toxic megacolon; ELISA. C. perfringens: alpha-toxin → gas gangrene; food poisoning 6-24hrs." },
    { title:"Listeria: Intracellular, cold-tolerant, tumbling motility, crosses placenta, listeriolysin O", body:"Grows at 4°C. Internalin A/B → listeriolysin O escapes phagolysosome → manipulates actin → cell-to-cell. 25% perinatal infections → fetal death. Unpasteurized dairy, meat." },
  ]},
  { cat:"gn", badge:"GN", items:[
    { title:"Neisseria: Both diplococci, oxidase+, catalase+ | Distinguished by maltose fermentation", body:"N. meningitidis: maltose (+), meningitis, nasopharynx reservoir, vaccine. N. gonorrhoeae: maltose (−), 2nd most common STI, MTM culture, no vaccine. Both: LOS, capsule, IgA proteases, pili, prevent phagolysosome." },
    { title:"E. coli: Oxidase−, lactose fermenter (pink MacConkey) | UPEC=#1 UTI | EHEC O157:H7=Shiga→HUS", body:"UPEC: 80% community UTIs. ETEC: traveler's diarrhea (heat-stable/labile toxins). EHEC O157:H7: Shiga toxin → protein synthesis inhibition → bloody diarrhea, HUS. Undercooked meat, raw milk." },
    { title:"Pseudomonas: Obligate aerobe, oxidase+, non-fermenter, blue-green, grapelike odor, nosocomial", body:"Pyocyanin (blue, ROS) + pyoverdine (siderophore). Moist reservoirs. Major nosocomial: ventilated, CF, burns, UTIs. Biofilms. β-lactamases. ESKAPE." },
    { title:"H. pylori: Microaerophile, high urease, gastritis/ulcers/gastric cancer (1st bacterial carcinogen)", body:"Polar flagella penetrate stomach lining. Urease → ammonia neutralizes acid + acid-inhibitory protein. Transmission: saliva, fecal-oral. First bacterium classified as carcinogen (WHO)." },
    { title:"Shigella: Very low dose (~10-100), Shiga toxin, bloody diarrhea 12-48 hrs, non-motile", body:"Acid-resistant. Invades/destroys mucosa of large intestine. Shiga toxin inhibits protein synthesis. Intracellular, cell-to-cell via invasins/actin. Fecal-oral. WHO Priority." },
  ]},
  { cat:"atyp", badge:"ATYP", items:[
    { title:"Mycoplasma: NO cell wall → can't Gram stain → resistant to β-lactams | Walking pneumonia", body:"Smallest bacteria. Membrane with sterols, no peptidoglycan. CARDS exotoxin. Attaches to bronchial cilia. More common in children." },
    { title:"M. tuberculosis: Acid-fast (mycolic acid), obligate aerobe, macrophages, granulomas, latent", body:"Slow growth (2-4 wks). Hides in alveolar macrophages (inhibits phagolysosome). Granulomas → tissue necrosis. ~13M latent in US. Mycolic acid = drug target." },
    { title:"Chlamydia: Obligate intracellular, EB→RB cycle, energy parasite, no peptidoglycan, #1 STI", body:"EB (extracellular, inert) → endocytosis → RB (active, divides) → new EBs released. Females often asymptomatic (reservoir). Urethritis, PID, cervicitis, conjunctivitis." },
    { title:"Spirochetes: T. pallidum = syphilis (STI) | B. burgdorferi = Lyme (tick, 3 stages)", body:"Can't Gram stain (thin wall). Darkfield microscopy. Periplasmic flagella (corkscrew). T. pallidum: lesions on lips/genitalia, antigenic variation. B. burgdorferi: Stage 1 bulls-eye rash → Stage 2 cardiac/neuro → Stage 3 arthritis." },
  ]},
  { cat:"abx", badge:"ABX", items:[
    { title:"6 Antibiotic Targets: Cell wall, membrane, ribosomes (30S/50S), DNA gyrase, RNA polymerase, folate", body:"Cell wall: β-lactams bind PBPs. Ribosomes: aminoglycosides, tetracyclines, macrolides. DNA gyrase/Topo IV: fluoroquinolones. RNA polymerase: rifampin. Folate: sulfonamides + trimethoprim (bacteria make own folic acid)." },
    { title:"4 Resistance Mechanisms: Enzymatic inactivation, target modification, efflux pumps, ↓permeability", body:"β-lactamases hydrolyze β-lactam ring. MRSA mecA → PBP2a. Efflux pumps expel drugs. Altered porins reduce entry (GN). Also: biofilms, intracellular growth, persister cells." },
    { title:"ESKAPE: E. faecium, S. aureus (MRSA), K. pneumoniae, A. baumannii, P. aeruginosa, Enterobacter", body:"6 MDR nosocomial pathogens. + E. coli (major UTI/sepsis cause, not formally ESKAPE)." },
  ]},
];

const catStyles = {
  core: { bg:"bg-navy-light", border:"border-navy", badge:"bg-navy", text:"text-navy" },
  gp: { bg:"bg-gp-light", border:"border-gp", badge:"bg-gp", text:"text-gp" },
  gn: { bg:"bg-gn-light", border:"border-gn", badge:"bg-gn", text:"text-gn" },
  atyp: { bg:"bg-atyp-light", border:"border-atyp", badge:"bg-atyp", text:"text-atyp" },
  abx: { bg:"bg-coral-light", border:"border-coral", badge:"bg-coral", text:"text-coral" },
};
const catTitles = { core:"Core Concepts", gp:"Gram-Positive", gn:"Gram-Negative", atyp:"Atypical & Spirochetes", abx:"Resistance & Drug Targets" };

export default function HighYieldPage() {
  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">⭐ Ultra High-Yield</h1>
      <p className="text-gray-500 text-sm mb-6">Must-memorize facts. Click any row to expand for detail.</p>
      {HY.map((section) => {
        const s = catStyles[section.cat];
        return (
          <div key={section.cat} className="mb-6">
            <h2 className={`font-display text-lg font-bold ${s.text} mb-3`}>{catTitles[section.cat]}</h2>
            <div className="space-y-2">
              {section.items.map((item, i) => (
                <details key={i} className={`rounded-lg border ${s.border} overflow-hidden`}>
                  <summary className={`px-4 py-3 ${s.bg} border-l-4 ${s.border} font-semibold text-sm flex items-center gap-2 hover:brightness-95 transition-all`}>
                    <span className="text-teal text-xs mr-1">▸</span>
                    <span className={`${s.badge} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider`}>{section.badge}</span>
                    <span className="text-gray-800">{item.title}</span>
                  </summary>
                  <div className="px-4 py-3 pl-10 text-sm text-gray-600 leading-relaxed bg-white">{item.body}</div>
                </details>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
