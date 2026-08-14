import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 px-4 py-8 text-sm text-gray-500">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>JeToAI.cz v této verzi obrázky nezpracovává ani neukládá.</p>
        <nav className="flex flex-wrap gap-4">
          <Link href="/jak-poznat-ai-obrazek" className="hover:text-gray-300">
            Jak poznat AI obrázek
          </Link>
          <Link href="/jak-overit-fotografii" className="hover:text-gray-300">
            Jak ověřit fotografii
          </Link>
          <Link href="/ai-detektory" className="hover:text-gray-300">
            AI detektory
          </Link>
        </nav>
      </div>
    </footer>
  );
}
