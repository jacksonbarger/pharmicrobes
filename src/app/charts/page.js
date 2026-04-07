"use client";
import { useState } from "react";

const FilledChart = () => (
  <div className="overflow-x-auto">
    <table className="min-w-[1000px] text-xs border-collapse w-full">
      <thead>
        <tr><th colSpan={8} className="bg-navy text-white p-2 text-center text-sm font-display">GRAM STAIN</th></tr>
        <tr>
          <th colSpan={4} className="bg-gp text-white p-2 text-center">GRAM-POSITIVE</th>
          <th colSpan={3} className="bg-gn text-white p-2 text-center">GRAM-NEGATIVE</th>
          <th className="bg-atyp text-white p-2 text-center">ATYPICALS</th>
        </tr>
        <tr>
          <th colSpan={2} className="bg-gp/80 text-white p-1.5 text-center text-[11px]">COCCI</th>
          <th colSpan={2} className="bg-gp/80 text-white p-1.5 text-center text-[11px]">BACILLI</th>
          <th className="bg-gn/80 text-white p-1.5 text-center text-[11px]">COCCI</th>
          <th colSpan={2} className="bg-gn/80 text-white p-1.5 text-center text-[11px]">BACILLI</th>
          <th rowSpan={2} className="bg-atyp-light border border-atyp/30 p-2 align-top text-[11px]">
            <b className="text-atyp">Mycoplasma pneumoniae</b><br/><span className="text-gray-500">(no cell wall)</span><br/><br/>
            <b className="text-atyp">M. tuberculosis</b><br/><span className="text-gray-500">(acid-fast, mycolic acid)</span><br/><br/>
            <b className="text-atyp">Chlamydia trachomatis</b><br/><span className="text-gray-500">(obligate intracellular)</span><br/><br/>
            <b className="text-atyp">Rickettsia rickettsii</b><br/><span className="text-gray-500">(obligate intracellular)</span><br/><br/>
            <b className="text-atyp">Spirochetes:</b><br/>
            <i>Treponema pallidum</i><br/>
            <i>Borrelia burgdorferi</i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="align-top">
          <td className="bg-gp-light border border-gp/20 p-3 min-w-[140px]">
            <b className="text-gp">CLUSTERS</b><br/>All catalase +<br/><br/>
            <u>Coagulase +:</u><br/><i>S. aureus</i> (MRSA, VRSA)<br/><br/>
            <u>Coagulase −:</u><br/><i>S. epidermidis</i><br/><i>S. saprophyticus</i> (urease +)
          </td>
          <td className="bg-gp-light border border-gp/20 p-3 min-w-[150px]">
            <b className="text-gp">CHAINS / PAIRS</b><br/>All catalase −<br/><br/>
            <u>β-hemolytic:</u><br/><i>S. pyogenes</i> (GAS)<br/><i>S. agalactiae</i> (GBS)<br/><br/>
            <u>α-hemolytic:</u><br/><i>S. pneumoniae</i> (diplococci)<br/>Viridans: <i>S. mutans</i><br/><i>E. faecium</i><br/><br/>
            <u>γ-hemolytic:</u><br/><i>E. faecalis</i>
          </td>
          <td className="bg-gp-light border border-gp/20 p-3 min-w-[130px]">
            <b className="text-gp">SMALL BACILLI</b><br/><br/>
            <i>Listeria monocytogenes</i><br/><i>C. diphtheriae</i><br/><i>Gardnerella</i><br/><br/>
            <b className="text-gp">FILAMENTOUS</b><br/><i>Nocardia</i> (acid-fast)
          </td>
          <td className="bg-gp-light border border-gp/20 p-3 min-w-[130px]">
            <b className="text-gp">LARGE BACILLI<br/>(Spore-Forming)</b><br/><br/>
            <i>Bacillus cereus</i><br/><i>C. perfringens</i><br/><i>C. difficile</i><br/><i>C. tetani</i><br/><i>C. botulinum</i>
          </td>
          <td className="bg-gn-light border border-gn/20 p-3 min-w-[130px]">
            <b className="text-gn">DIPLOCOCCI</b><br/>Oxidase +, catalase +<br/><br/>
            <i>N. meningitidis</i><br/><i>N. gonorrhoeae</i><br/><br/>
            <b className="text-gn">COCCOBACILLI</b><br/><i>Moraxella catarrhalis</i><br/><i>H. influenzae</i><br/><i>A. baumannii</i> (ox−)<br/><i>Bordetella pertussis</i>
          </td>
          <td className="bg-gn-light border border-gn/20 p-3 min-w-[130px]">
            <b className="text-gn">LACTOSE FERM.</b><br/><br/>
            <u>Oxidase +:</u><br/><i>Vibrio cholerae</i><br/><i>Aeromonas</i><br/><br/>
            <u>Oxidase −:</u><br/><i>E. coli</i><br/><i>Klebsiella</i><br/><i>Enterobacter</i><br/><i>Citrobacter</i>
          </td>
          <td className="bg-gn-light border border-gn/20 p-3 min-w-[140px]">
            <b className="text-gn">NON-LACTOSE FERM.</b><br/><br/>
            <u>Oxidase +:</u><br/><i>Pseudomonas</i><br/><i>Campylobacter</i><br/><i>H. pylori</i><br/><i>Legionella</i><br/><br/>
            <u>Oxidase −:</u><br/><i>Salmonella</i><br/><i>Shigella</i><br/><i>Proteus</i><br/><i>Serratia</i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const BlankChart = () => (
  <div className="overflow-x-auto">
    <table className="min-w-[1000px] text-xs border-collapse w-full">
      <thead>
        <tr><th colSpan={8} className="bg-navy text-white p-2 text-center text-sm font-display">GRAM STAIN</th></tr>
        <tr>
          <th colSpan={4} className="bg-gp text-white p-2 text-center">GRAM-POSITIVE</th>
          <th colSpan={3} className="bg-gn text-white p-2 text-center">GRAM-NEGATIVE</th>
          <th className="bg-atyp text-white p-2 text-center">ATYPICALS</th>
        </tr>
        <tr>
          <th colSpan={2} className="bg-gp/80 text-white p-1.5 text-center text-[11px]">COCCI</th>
          <th colSpan={2} className="bg-gp/80 text-white p-1.5 text-center text-[11px]">BACILLI</th>
          <th className="bg-gn/80 text-white p-1.5 text-center text-[11px]">COCCI</th>
          <th colSpan={2} className="bg-gn/80 text-white p-1.5 text-center text-[11px]">BACILLI</th>
          <th rowSpan={2} className="border border-dashed border-gray-300 p-2 align-top min-h-[280px]"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="align-top">
          {["CLUSTERS\nCatalase: ___\n\nCoagulase +:\n_______________\n\nCoagulase −:\n_______________\n_______________",
            "CHAINS / PAIRS\nCatalase: ___\n\nβ-hemolytic:\n_______________\n_______________\n\nα-hemolytic:\n_______________\n_______________\n_______________\n\nγ-hemolytic:\n_______________",
            "SMALL BACILLI\n\n_______________\n_______________\n_______________\n\nFILAMENTOUS\n_______________",
            "LARGE BACILLI\n(Spore-Forming)\n\n_______________\n_______________\n_______________\n_______________\n_______________"
          ].map((txt,i) => (
            <td key={i} className="border border-dashed border-gp/40 p-3 min-w-[140px] h-[300px] whitespace-pre-line text-gray-400">
              <b className="text-gp">{txt.split("\n")[0]}</b>{"\n"}{txt.split("\n").slice(1).join("\n")}
            </td>
          ))}
          {["DIPLOCOCCI\nOxidase: ___ Catalase: ___\n\n_______________\n_______________\n\nCOCCOBACILLI\n_______________\n_______________\n_______________\n_______________",
            "LACTOSE FERM.\n\nOxidase +:\n_______________\n_______________\n\nOxidase −:\n_______________\n_______________\n_______________\n_______________",
            "NON-LACTOSE FERM.\n\nOxidase +:\n_______________\n_______________\n_______________\n_______________\n\nOxidase −:\n_______________\n_______________\n_______________\n_______________"
          ].map((txt,i) => (
            <td key={i} className="border border-dashed border-gn/40 p-3 min-w-[130px] h-[300px] whitespace-pre-line text-gray-400">
              <b className="text-gn">{txt.split("\n")[0]}</b>{"\n"}{txt.split("\n").slice(1).join("\n")}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

export default function ChartsPage() {
  const [tab, setTab] = useState("filled");
  return (
    <div className="animate-fade">
      <h1 className="font-display text-2xl font-bold text-navy mb-1">🗂️ Bugs by Gram Stain</h1>
      <p className="text-gray-500 text-sm mb-4">Classification chart — use the blank version to test yourself.</p>
      <div className="flex gap-2 mb-5">
        <button onClick={() => setTab("filled")}
          className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all ${tab==="filled" ? "bg-navy text-white border-navy" : "bg-white text-gray-600 border-gray-200"}`}>✅ Filled Chart</button>
        <button onClick={() => setTab("blank")}
          className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all ${tab==="blank" ? "bg-navy text-white border-navy" : "bg-white text-gray-600 border-gray-200"}`}>📝 Blank (Practice)</button>
      </div>
      <div className="section-card p-4">
        {tab === "filled" ? <FilledChart /> : <BlankChart />}
      </div>
    </div>
  );
}
