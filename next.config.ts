import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Obrázky pro /odhaleno/[slug] žijí v existující Knihovně médií
    // projektu sokujici-redakce — žádná lokální kopie, viz app/lib/redakce.ts.
    remotePatterns: [{ protocol: "https", hostname: "redakce.sokujiciodhaleni.cz" }],
  },
};

export default nextConfig;
