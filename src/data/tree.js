export const TREE = {
  q:"What does the Gram stain show?", opts:[
    { label:"Gram-Positive (Purple)", next:{
      q:"Morphology?", opts:[
        { label:"Cocci", next:{
          q:"Arrangement?", opts:[
            { label:"Clusters (Staphylococcus)", next:{
              q:"All Staph are catalase +. Coagulase test?", opts:[
                { label:"Coagulase +", answer:"S. aureus", detail:"β-hemolytic, mannitol fermenter (yellow), Protein A, TSST-1. MRSA (mecA→PBP2a)." },
                { label:"Coagulase −", next:{
                  q:"Urease test?", opts:[
                    { label:"Urease +", answer:"S. saprophyticus", detail:"UTIs in young sexually active females. Biofilms." },
                    { label:"Urease −", answer:"S. epidermidis", detail:"Prosthetic device infections, biofilms. MRSE." }
                  ]}}
              ]}},
            { label:"Chains / Pairs (Strep/Entero)", next:{
              q:"All are catalase −. Hemolysis?", opts:[
                { label:"β-hemolytic (complete, clear)", next:{
                  q:"Lancefield?", opts:[
                    { label:"Group A", answer:"S. pyogenes (GAS)", detail:"M protein required, streptolysin S/O, superantigen. Strep throat, scarlet fever, necrotizing fasciitis." },
                    { label:"Group B", answer:"S. agalactiae (GBS)", detail:"Neonatal meningitis/sepsis. Vaginal swab 35-37 weeks." }
                  ]}},
                { label:"α-hemolytic (incomplete, green)", next:{
                  q:"Further ID?", opts:[
                    { label:"Diplococci (bullet-shaped)", answer:"S. pneumoniae", detail:"#1 CAP, otitis media (30-50%), meningitis. 90 serotypes. Pneumolysin." },
                    { label:"Green colonies, dental", answer:"Viridans (S. mutans)", detail:"Dental caries, endocarditis (dextran → heart valves)." },
                    { label:"Survives bile + salt", answer:"E. faecium", detail:"Group D, VRE, MDR, WHO Priority." }
                  ]}},
                { label:"γ-hemolytic (none)", answer:"E. faecalis", detail:"Group D. Nosocomial UTIs (catheters). Endocarditis (biofilms)." }
              ]}}
          ]}},
        { label:"Bacilli (Rods)", next:{
          q:"Size and spore formation?", opts:[
            { label:"Large, Spore-forming", next:{
              q:"Oxygen requirement?", opts:[
                { label:"Facultative anaerobe", answer:"Bacillus cereus", detail:"Fried rice syndrome (heat-stable emetic toxin), diarrheal toxin." },
                { label:"Obligate anaerobe", next:{
                  q:"Disease?", opts:[
                    { label:"Antibiotic-associated diarrhea", answer:"C. difficile", detail:"Toxin A+B (stationary phase). CDAD, PMC, toxic megacolon." },
                    { label:"Gas gangrene / food poisoning", answer:"C. perfringens", detail:"Alpha-toxin (phospholipase → necrosis). Food poisoning 6-24 hrs." },
                    { label:"Botulism (paralysis)", answer:"C. botulinum", detail:"Botulinum toxin prevents ACh release." }
                  ]}}
              ]}},
            { label:"Small, Non-spore-forming", next:{
              q:"Key feature?", opts:[
                { label:"Tumbling motility, cold-tolerant", answer:"Listeria monocytogenes", detail:"Intracellular (listeriolysin O). Crosses placenta. Unpasteurized dairy." },
                { label:"Club-shaped, pseudomembrane", answer:"C. diphtheriae", detail:"Diphtheria toxin (from phage). DTaP/Tdap vaccine." },
                { label:"Filamentous, partially acid-fast", answer:"Nocardia", detail:"Mycolic acid. Pulmonary (80%), CNS (44% mortality)." }
              ]}}
          ]}}
      ]}},
    { label:"Gram-Negative (Pink/Red)", next:{
      q:"Morphology?", opts:[
        { label:"Diplococci (Neisseria)", next:{
          q:"Both oxidase + and catalase +. Maltose fermentation?", opts:[
            { label:"Maltose +", answer:"N. meningitidis", detail:"Nasopharynx reservoir. Meningitis. Vaccine available." },
            { label:"Maltose −", answer:"N. gonorrhoeae", detail:"2nd most common STI. Culture on MTM. PCR/NAATs." }
          ]}},
        { label:"Coccobacilli", next:{
          q:"Key features?", opts:[
            { label:"Oxidase +, β-lactamases, respiratory", answer:"Moraxella catarrhalis", detail:"Otitis media/sinusitis (children), bronchitis/pneumonia (COPD)." },
            { label:"Oxidase +, fastidious, chocolate agar", answer:"H. influenzae", detail:"Serotype b most virulent. Meningitis, epiglottitis, otitis media." },
            { label:"Oxidase −, survives on surfaces", answer:"Acinetobacter baumannii", detail:"MDR. Ventilator-associated pneumonia. ESKAPE." },
            { label:"Oxidase +, whooping cough", answer:"Bordetella pertussis", detail:"DTaP/Tdap vaccine." }
          ]}},
        { label:"Bacilli (Rods)", next:{
          q:"Lactose fermentation (MacConkey)?", opts:[
            { label:"Lactose Fermenter (pink)", next:{
              q:"Oxidase?", opts:[
                { label:"Oxidase +", next:{
                  q:"Which?", opts:[
                    { label:"Curved, cholera", answer:"Vibrio cholerae", detail:"Cholera toxin → rice water stool → hypovolemic shock." },
                    { label:"Freshwater, motile", answer:"Aeromonas sp.", detail:"Gastroenteritis, traveler's diarrhea." }
                  ]}},
                { label:"Oxidase −", next:{
                  q:"Which?", opts:[
                    { label:"#1 UTI, fimbriae", answer:"E. coli", detail:"UPEC (UTIs), ETEC (traveler's), EHEC O157:H7 (Shiga → HUS)." },
                    { label:"Encapsulated, currant jelly sputum", answer:"Klebsiella pneumoniae", detail:"Nosocomial, IC/alcoholism. ESKAPE." },
                    { label:"Motile, nosocomial", answer:"Enterobacter sp.", detail:"UTI, pneumonia, SSTI. ESKAPE." },
                    { label:"Uses citrate", answer:"Citrobacter freundii", detail:"Bloody diarrhea (Shiga toxin), UTIs." }
                  ]}}
              ]}},
            { label:"Non-Lactose Fermenter (pale)", next:{
              q:"Oxidase?", opts:[
                { label:"Oxidase +", next:{
                  q:"Which?", opts:[
                    { label:"Blue-green pigment, grapelike", answer:"Pseudomonas aeruginosa", detail:"Nosocomial: ventilated, CF, burns. ESKAPE." },
                    { label:"Comma-shaped, microaerophile", answer:"Campylobacter jejuni", detail:"Leading foodborne illness US. Poultry." },
                    { label:"High urease, stomach", answer:"H. pylori", detail:"Gastritis, ulcers, gastric cancer (carcinogen)." },
                    { label:"Freshwater aerosol", answer:"Legionella pneumophila", detail:"Legionnaires' disease. Blocks phagosome-lysosome." }
                  ]}},
                { label:"Oxidase −", next:{
                  q:"Which?", opts:[
                    { label:"Flagellated, typhoid", answer:"Salmonella enterica", detail:"Gastroenteritis, typhoid. Asymptomatic carriers." },
                    { label:"Non-motile, very low dose", answer:"Shigella sonnei", detail:"~10-100 organisms. Shiga toxin. Bloody diarrhea 12-48 hrs." },
                    { label:"Urease +, stones", answer:"Proteus sp.", detail:"Nosocomial UTIs. Struvite kidney stones." },
                    { label:"Red pigmented", answer:"Serratia marcescens", detail:"Nosocomial respiratory, wound, UTI." }
                  ]}}
              ]}}
          ]}}
      ]}},
    { label:"Can't Gram Stain (Atypical)", next:{
      q:"Why can't it stain?", opts:[
        { label:"No cell wall", answer:"Mycoplasma pneumoniae", detail:"Smallest bacteria. Sterols in membrane. Walking pneumonia. Resistant to β-lactams." },
        { label:"Too many lipids (mycolic acid)", answer:"M. tuberculosis", detail:"Acid-fast (red). Granulomas. Latent TB. Slow growth 2-4 wks." },
        { label:"Obligate intracellular, no peptidoglycan", answer:"Chlamydia trachomatis", detail:"Energy parasite. EB→RB cycle. STI. Females asymptomatic." },
        { label:"Obligate intracellular, thin GN wall", answer:"Rickettsia rickettsii", detail:"Tick vector. RMSF. Vasculitis → rash." },
        { label:"Spirochete (corkscrew motion)", next:{
          q:"Which?", opts:[
            { label:"Syphilis (STI)", answer:"Treponema pallidum", detail:"Lesions, hyaluronidase, antigenic variation." },
            { label:"Lyme disease (tick)", answer:"Borrelia burgdorferi", detail:"3 stages: rash → cardiac/neuro → arthritis." }
          ]}}
      ]}}
  ]
};
