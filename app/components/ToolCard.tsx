import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  variant?: "primary" | "secondary";
};

const variantStyles = {
  primary: "bg-green-600 hover:bg-green-700",
  secondary: "bg-blue-600 hover:bg-blue-700",
};

export function ToolCard({
  title,
  description,
  ctaLabel,
  href,
  variant = "primary",
}: ToolCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-base font-bold text-gray-900">{title}</h2>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      <Link
        href={href}
        className={`mt-auto inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors ${variantStyles[variant]}`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
