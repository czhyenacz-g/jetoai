export type VerificationStep = {
  title: string;
  text: string;
};

export const verificationSteps: VerificationStep[] = [
  {
    title: "Zkontrolujte zdroj",
    text: "Kdo obrázek zveřejnil? Je dohledatelný původní autor?",
  },
  {
    title: "Podívejte se na kontext",
    text: "Odpovídá fotografie místu, času a události, se kterou je spojována?",
  },
  {
    title: "Vyzkoušejte AI detektor",
    text: "Berte jeho výsledek jako indicii, nikoliv verdikt.",
  },
  {
    title: "Vyhledejte obrázek",
    text: "Zkuste reverzní vyhledávání a zjistěte, zda fotografie nebyla zveřejněná už dřív v jiném kontextu.",
  },
  {
    title: "Ověřte samotné tvrzení",
    text: "I skutečná fotografie může doprovázet nepravdivý text.",
  },
];
