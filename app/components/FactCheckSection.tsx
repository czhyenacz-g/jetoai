"use client";

import { useState } from "react";

// TODO(V2): napojit na skutečný fact-check backend/API, až bude existovat.
export function FactCheckSection() {
  const [value, setValue] = useState("");

  return (
    <section id="fact-check" className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-3 text-2xl font-bold">
          Obrázek může být skutečný. Ale co tvrzení?
        </h2>
        <p className="mb-6 text-gray-400">
          Samotná fotografie často nestačí. Skutečný obrázek může být
          doplněný nepravdivým popiskem, špatným datem nebo úplně jiným
          příběhem.
        </p>
        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6">
          <label
            htmlFor="claim"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Vložte tvrzení nebo text příspěvku
          </label>
          <textarea
            id="claim"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={3}
            placeholder="Např. text sdíleného příspěvku…"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            type="button"
            disabled
            className="mt-4 w-full cursor-not-allowed rounded-lg bg-gray-700 px-4 py-2 font-semibold text-gray-400"
          >
            Ověřit tvrzení (připravujeme)
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Fact-checking nástroj zatím nefunguje. Napojení na ověřování
            tvrzení připravujeme — tahle sekce je zatím jen ukázka.
          </p>
        </div>
      </div>
    </section>
  );
}
