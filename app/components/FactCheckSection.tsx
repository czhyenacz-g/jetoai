"use client";

import { useState } from "react";
import {
  buildGoogleSearchUrl,
  buildFactCheckUrl,
  buildTrustedSourcesUrl,
  buildOriginalSourceUrl,
} from "../lib/fact-checker";

const OPTIONS = [
  { label: "Vyhledat na Googlu", build: buildGoogleSearchUrl },
  { label: "Hledat fact-checky", build: buildFactCheckUrl },
  { label: "Hledat v důvěryhodných zdrojích", build: buildTrustedSourcesUrl },
  { label: "Hledat původní zdroj", build: buildOriginalSourceUrl },
];

// Tvrzení žije jen v lokálním React stavu prohlížeče — nikdy se nikam
// neposílá ani neukládá (žádný fetch, žádné localStorage). Princip i
// zdrojové seznamy přejaté z ct25.cz/fact-checker (app/lib/fact-checker.ts).
export function FactCheckSection() {
  const [claim, setClaim] = useState("");
  const trimmed = claim.trim();
  const hasClaim = trimmed.length > 0;

  return (
    <div id="fact-check" className="scroll-mt-24">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">
        Obrázek může být skutečný. Ale co tvrzení?
      </h2>
      <p className="mb-2 text-sm text-gray-600">
        Samotná fotografie často nestačí. Skutečný obrázek může být
        doplněný nepravdivým popiskem, špatným datem nebo úplně jiným
        příběhem.
      </p>
      <p className="mb-4 text-sm text-gray-600">
        Napište tvrzení, které chcete prověřit, a otevřeme vám několik
        rychlých cest k dostupným zdrojům. Nejde o automatický verdikt ani
        plnohodnotný fact-check.
      </p>
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <label
          htmlFor="claim"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Vložte tvrzení nebo text příspěvku
        </label>
        <textarea
          id="claim"
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          rows={4}
          placeholder="Sem napište tvrzení nebo text příspěvku…"
          className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {OPTIONS.map((option) =>
            hasClaim ? (
              <a
                key={option.label}
                href={option.build(trimmed)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-green-600 px-3 py-2 text-center text-sm font-semibold text-green-600 transition-colors hover:bg-green-600 hover:text-white"
              >
                {option.label}
              </a>
            ) : (
              <button
                key={option.label}
                type="button"
                disabled
                className="cursor-not-allowed rounded-lg border border-gray-200 px-3 py-2 text-center text-sm font-medium text-gray-400"
              >
                {option.label}
              </button>
            )
          )}
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Zadané tvrzení se na JeToAI.cz neukládá. Otevře se pouze jako
          vyhledávací dotaz ve zvolené externí službě.
        </p>
      </div>

      <p className="mt-3 text-xs text-gray-400">
        Rychlá kontrola tvrzení vychází z{" "}
        <a
          href="https://ct25.cz/fact-checker"
          className="font-medium text-gray-500 underline hover:text-green-600"
        >
          nástroje na CT25.cz
        </a>
        .
      </p>
    </div>
  );
}
