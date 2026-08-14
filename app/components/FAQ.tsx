const faqs = [
  {
    q: "Dokáže AI detektor spolehlivě poznat obrázek vytvořený AI?",
    a: "Ne vždy. Výsledky závisí na generátoru, kvalitě obrázku, následných úpravách a samotném detektoru.",
  },
  {
    q: "Znamená nízká pravděpodobnost AI, že je fotografie pravá?",
    a: "Ne. Znamená pouze, že konkrétní detektor nenašel dostatek znaků AI generování.",
  },
  {
    q: "Pozná detektor Photoshop?",
    a: "Ne nutně. Klasická editace fotografie je jiný problém než generování pomocí AI.",
  },
  {
    q: "Co když AI upravila jen část fotografie?",
    a: "Takové úpravy mohou být výrazně obtížnější na automatické rozpoznání.",
  },
  {
    q: "Mohou se AI detektory mýlit?",
    a: "Ano. Mohou mít false positive i false negative výsledky.",
  },
  {
    q: "Ukládá JeToAI.cz moje obrázky?",
    a: "V aktuální V1 JeToAI.cz obrázky vůbec nepřijímá. Uživatel je případně nahrává přímo externím službám a řídí se jejich podmínkami.",
  },
  {
    q: "Proč používáte více způsobů ověřování?",
    a: "Protože samotná AI detekce neověřuje pravdivost obsahu.",
  },
];

export function FAQ() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-2xl font-bold">Časté otázky</h2>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-xl border border-gray-700 bg-gray-800 p-4"
            >
              <summary className="cursor-pointer font-semibold text-gray-100 marker:text-amber-400">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-gray-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
