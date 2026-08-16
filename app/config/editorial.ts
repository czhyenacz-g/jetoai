// Slug pracovní složky (Media Collection) v redakci ŠokujícíOdhalení, ze
// které JeToAI.cz čte obrázky pro /odhaleno/[slug]. Whitelistovaná na
// straně redakce (PublicMediaCollectionController) pro veřejné čtení bez
// tokenu — viz sokujici-redakce/docs/MEDIA_COLLECTIONS.md. Dokud tenhle
// slug není na straně redakce whitelistovaný, veřejný endpoint vrací 404 a
// /odhaleno zůstává prázdné — žádná chyba, jen žádná data.
export const JETOAI_REVEALED_COLLECTION_SLUG =
  process.env.JETOAI_REVEALED_COLLECTION_SLUG || "jetoai-generovano-ai";
