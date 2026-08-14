export function WarningBox() {
  return (
    <section className="border-y border-amber-200 bg-amber-50 px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4 L22 20 L2 20 Z" />
            <line x1="12" y1="10" x2="12" y2="15" />
            <circle cx="12" cy="18" r="0.6" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <div>
          <h2 className="mb-1 text-lg font-bold text-gray-900">
            AI detektor neurčuje, zda je fotografie pravdivá
          </h2>
          <p className="text-sm text-gray-700">
            Skutečná fotografie může být použita s falešným popiskem, může
            být stará, upravená nebo vytržená z kontextu. AI výsledek je
            pouze indicie, ne důkaz.
          </p>
          <a
            href="#jak-poznat"
            className="mt-2 inline-block text-sm font-semibold text-amber-700 hover:underline"
          >
            Více informací →
          </a>
        </div>
      </div>
    </section>
  );
}
