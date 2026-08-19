import Image from "next/image";
import { AFFILIATE_BANNERS, type AffiliateBannerId } from "../config/affiliate-banners";
import { getAffiliateBannerImage, type AffiliateBannerVariant } from "../lib/affiliate-banners";

/**
 * Obecná znovupoužitelná affiliate reklama — obrázek se natahuje z
 * whitelistované Media Collection redakce (stejný princip jako /odhaleno),
 * cílová URL a alt text žijí v app/config/affiliate-banners.ts. Další
 * affiliate banner = nová položka v configu, ne nová komponenta. Kolekce
 * může obsahovat víc obrázků pro tentýž banner (např. široký ~2:1 a tenký
 * ~728×90 horizontální) — `variant` řídí, který se vybere (viz
 * app/lib/affiliate-banners.ts).
 */
export async function AffiliateBanner({
  id,
  variant = "wide",
  className = "",
}: {
  id: AffiliateBannerId;
  variant?: AffiliateBannerVariant;
  className?: string;
}) {
  const config = AFFILIATE_BANNERS[id];
  const image = await getAffiliateBannerImage(config.collectionSlug, variant);

  if (!image) return null;

  return (
    <div className={className}>
      <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-gray-400">
        Partnerský odkaz
      </p>
      <a
        href={config.targetUrl}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="block overflow-hidden rounded-xl border border-gray-200"
      >
        <Image
          src={image.url}
          alt={config.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full"
        />
      </a>
    </div>
  );
}
