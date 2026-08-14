"use client";

import { useState } from "react";

// TODO(V2): napojit na skutečný fact-check backend/API, až bude existovat.
export function FactCheckSection() {
  const [value, setValue] = useState("");

  return (
    <div id="fact-check" className="scroll-mt-24">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">
        Obrázek může být skutečný. Ale co tvrzení?
      </h2>
      <p className="mb-4 text-sm text-gray-600">
        Samotná fotografie často nestačí. Skutečný obrázek může být
        doplněný nepravdivým popiskem, špatným datem nebo úplně jiným
        příběhem.
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={4}
          placeholder="Sem napište tvrzení nebo otázku…"
          className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="button"
          disabled
          className="mt-3 w-full cursor-not-allowed rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-400"
        >
          Ověřit tvrzení (připravujeme)
        </button>
        <p className="mt-3 text-xs text-gray-500">
          Fact-checking nástroj zatím nefunguje. Napojení na ověřování
          tvrzení připravujeme — tahle sekce je zatím jen ukázka.
        </p>
      </div>
    </div>
  );
}
