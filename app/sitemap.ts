import type { MetadataRoute } from "next";
import { getRevealItems } from "./lib/reveals";

const SITE_URL = "https://jetoai.cz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const revealItems = await getRevealItems();
  const revealPages: MetadataRoute.Sitemap = revealItems.map((item) => ({
    url: `${SITE_URL}/odhaleno/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/ano`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/ne`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/ai-detektory`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/jak-overit-fotografii`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/jak-poznat-ai-obrazek`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/odhaleno`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/o-projektu`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/podminky-pouziti`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/zasady-ochrany-osobnich-udaju`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...revealPages,
  ];
}
