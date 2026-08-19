import Image from "next/image";
import { AFFILIATE_BANNERS, type AffiliateBannerId } from "../config/affiliate-banners";
import { getAffiliateBannerImage } from "../lib/affiliate-banners";

/**
 * Obecná znovupoužitelná affiliate reklama — obrázek se natahuje z
 * whitelistované Media Collection redakce (stejný princip jako /odhaleno),
 * cílová URL a alt text žijí v app/config/affiliate-banners.ts. Další
 * affiliate banner = nová položka v configu, ne nová komponenta.
 *
 * Banner v obrázku už sám obsahuje označení „Reklama / partnerský odkaz“ —
 * proto se tady nezdvojuje žádný další marketingový text okolo, jen
 * popisný alt pro čtečky obrazovky.
 */
export async function AffiliateBanner({
  id,
  className = "",
}: {
  id: AffiliateBannerId;
  className?: string;
}) {
  const config = AFFILIATE_BANNERS[id];
  const image = await getAffiliateBannerImage(config.collectionSlug);

  if (!image) return null;

  return (
    <a
      href={config.targetUrl}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={`block overflow-hidden rounded-xl border border-gray-200 ${className}`}
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
  );
}
