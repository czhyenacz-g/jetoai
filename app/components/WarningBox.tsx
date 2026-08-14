const caveats = [
  "Skutečná fotografie může být použita s falešným popiskem",
  "Fotografie může být stará a vydávaná za aktuální",
  "Fotografie může být klasicky upravená (např. v Photoshopu)",
  "Jen část fotografie mohla být upravena pomocí AI",
  "AI detektor může udělat chybu — false positive i false negative",
  "Nový generátor AI nemusí být detektorem rozpoznán",
];

export function WarningBox() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl border border-amber-600/40 bg-amber-950/20 p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-bold text-amber-400">
          AI detektor neurčuje, zda je fotografie pravdivá
        </h2>
        <p className="mb-4 text-gray-300">
          AI detekce je indicie, ne důkaz. Nízké skóre neznamená, že je
          fotografie pravá, vysoké skóre samo o sobě není definitivním
          důkazem.
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-400">
          {caveats.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
