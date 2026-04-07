export const CONFUSABLES = [
  { a:{ name:"Shigella", points:["Non-motile (moves cell-to-cell)","Very LOW dose (~10-100)","Non-lactose fermenter, oxidase −","Stays in GI (large intestine)","Shiga toxin → bloody diarrhea 12-48 hrs","No animal reservoir","Acid-resistant"] },
    b:{ name:"Salmonella", points:["Motile (flagella)","HIGH dose (~100,000)","Non-lactose fermenter, oxidase −","Spreads systemically (blood, organs)","Typhoid toxin → gastroenteritis + typhoid fever","Animal reservoirs","Reduced gastric acidity = risk factor"] }, color:"#c44569" },
  { a:{ name:"N. gonorrhoeae", points:["Does NOT ferment maltose (−)","Gonorrhea (2nd most common STI)","Sexual transmission","Culture on MTM","Purulent discharge","No vaccine","PCR/NAATs"] },
    b:{ name:"N. meningitidis", points:["Ferments maltose (+)","Community-acquired meningitis","Respiratory droplets","Gram stain of CSF","Nasopharynx carriers","Vaccine available","CSF diagnosis"] }, color:"#0e7c7b" },
  { a:{ name:"Exotoxins", points:["Secreted (mostly GP)","A-B structure","Specific targets","Extremely toxic","Heat-labile (>60°C)","Stimulate antibodies","Neuro-/entero-/cyto-/superantigens"] },
    b:{ name:"Endotoxins", points:["Lipid A of LPS (GN)","No A-B structure","No specific targets","Less toxic","Heat-STABLE","Poor antibody generation","Fever, shock, DIC"] }, color:"#d94f4f" },
  { a:{ name:"S. aureus", points:["Coagulase POSITIVE","β-hemolytic","Mannitol fermenter (yellow)","Most pathogenic Staph","Protein A, TSST-1, enterotoxins","MRSA (mecA), VRSA (van genes)","SSTIs, food poisoning, TSS"] },
    b:{ name:"S. epidermidis vs S. saprophyticus", points:["Both coagulase NEGATIVE","Epidermidis: urease −, prosthetics","Saprophyticus: urease +, UTIs","Both form biofilms","Less virulent","Epidermidis: MRSE","Saprophyticus: sexual transmission"] }, color:"#6a3d9a" },
  { a:{ name:"Food Poisoning (Preformed Toxin)", points:["Toxin already in food","No bacterial growth needed","Fast: 2-12 hours","B. cereus emetic (fried rice)","S. aureus enterotoxin A","C. perfringens","C. botulinum"] },
    b:{ name:"Foodborne Illness (Growth Required)", points:["Bacteria colonize + multiply","Microbial growth needed","Slower: ≥24 hours","C. jejuni (#1 US, poultry)","Salmonella, Shigella","E. coli, Listeria","V. cholerae"] }, color:"#8a6d2b" },
  { a:{ name:"S. pyogenes (GAS)", points:["Group A Lancefield","LONG chains","β-hemolytic (wide)","M protein required","Strep throat, scarlet fever","Necrotizing fasciitis","Rheumatic fever, glomerulonephritis"] },
    b:{ name:"S. agalactiae (GBS)", points:["Group B Lancefield","SHORT chains","β-hemolytic (narrow)","Capsule for virulence","Neonatal meningitis/sepsis","Vaginal swab 35-37 wks","Vertical transmission"] }, color:"#0e7c7b" },
];
