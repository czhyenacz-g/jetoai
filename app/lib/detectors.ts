export type Detector = {
  name: string;
  description: string;
  url: string;
  cta: string;
};

export const detectors: Detector[] = [
  {
    name: "Sightengine",
    description:
      "Detektor zaměřený na rozpoznávání obrázků vytvořených nebo upravených pomocí generativní AI.",
    url: "https://sightengine.com/detect-ai-generated-images",
    cta: "Otevřít Sightengine",
  },
  {
    name: "Hive",
    description: "Nástroj pro detekci AI generovaného obsahu a deepfake obsahu.",
    url: "https://hivemoderation.com/ai-generated-content-detection",
    cta: "Otevřít Hive",
  },
];
