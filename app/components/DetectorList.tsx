import { detectors } from "../lib/detectors";

export function DetectorList() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {detectors.map((detector) => (
        <div
          key={detector.name}
          className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{detector.name}</h3>
            <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
              externí
            </span>
          </div>
          <p className="text-sm text-gray-600">{detector.description}</p>
          <a
            href={detector.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center rounded-lg border border-green-600 px-3 py-1.5 text-sm font-semibold text-green-600 transition-colors hover:bg-green-600 hover:text-white"
          >
            {detector.cta} ↗
          </a>
        </div>
      ))}
    </div>
  );
}
