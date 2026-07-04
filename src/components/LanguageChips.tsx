import Languages, { type Language } from "../languages";
import { clsx } from "clsx";
import type { JSX } from "react";

type LanguageChipsProps = {
  wrongGuessCount: number;
};

const LanguageChips = ({
  wrongGuessCount,
}: LanguageChipsProps): JSX.Element => {
  const langElements: JSX.Element[] = Languages.map(
    (lang: Language, index: number): JSX.Element => {
      const isLanguageLost: boolean = index < wrongGuessCount;

      const className: string = clsx(
        "relative px-2 py-1 rounded",
        isLanguageLost &&
          "before:content-['💀'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:bg-black/70 before:text-sm",
      );

      return (
        <span
          className={`rounded-[3px] p-[4.5px] text-black ${lang.color} ${className}`}
          key={lang.lang}
        >
          {lang.lang}
        </span>
      );
    },
  );
  return (
    <section className="flex flex-wrap justify-center gap-1.25 max-w-87.5 ">
      {langElements}
    </section>
  );
};

export default LanguageChips;
