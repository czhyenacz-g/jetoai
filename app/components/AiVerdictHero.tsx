type AiVerdictHeroProps = {
  word: "ANO" | "NE";
  subtitle: string;
  explanation: string;
};

// Sdílené jádro pro /ano a /ne — sdílecí stránky s jedním obrovským
// slovem, které musí být čitelné okamžitě i na mobilu. Barva (zelená vs.
// červená) drží konvenci ano/ne a zelená zároveň navazuje na barvu značky
// JeToAI.cz použitou jinde na webu.
export function AiVerdictHero({ word, subtitle, explanation }: AiVerdictHeroProps) {
  const isYes = word === "ANO";

  return (
    <div className="flex flex-col items-center px-4 py-12 text-center sm:py-16">
      <p
        className={`text-[6rem] font-extrabold leading-none tracking-tight sm:text-[9rem] md:text-[11rem] ${
          isYes ? "text-green-600" : "text-red-600"
        }`}
      >
        {word}
      </p>
      <p className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
        {subtitle}
      </p>
      <p className="mt-4 max-w-sm text-sm text-gray-500">{explanation}</p>
    </div>
  );
}
