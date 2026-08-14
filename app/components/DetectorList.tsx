import { detectors } from "../lib/detectors";

export function DetectorList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {detectors.map((detector) => (
        <div
          key={detector.name}
          className="flex flex-col gap-3 rounded-2xl border border-gray-700 bg-gray-800 p-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold">{detector.name}</h3>
            <span className="text-xs uppercase tracking-wide text-gray-500">
              externí služba
            </span>
          </div>
          <p className="text-sm text-gray-400">{detector.description}</p>
          <a
            href={detector.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center rounded-lg border border-amber-600 px-4 py-2 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-600 hover:text-gray-900"
          >
            {detector.cta} ↗
          </a>
        </div>
      ))}
    </div>
  );
}
