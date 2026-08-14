import { AdSlot } from "./AdSlot";

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
    <section id="faq" className="scroll-mt-24 border-t border-gray-200 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Často kladené otázky
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-lg border border-gray-200 bg-white p-4 open:bg-gray-50"
            >
              <summary className="cursor-pointer text-sm font-semibold text-gray-900 marker:text-green-600">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <AdSlot size="300x250" />
        </div>
      </div>
    </section>
  );
}
