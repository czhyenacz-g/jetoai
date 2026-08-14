import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export function ToolCard({ title, description, ctaLabel, href }: ToolCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-700 bg-gray-800 p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      <Link
        href={href}
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 font-semibold text-gray-900 transition-colors hover:bg-amber-500"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
