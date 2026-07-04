import { clsx } from "clsx";
import type { JSX } from "react";
type WordLettersprops = {
  currentWord: string;
  isGameLost: boolean;
  guessedLetters: string[];
};

const WordLetters = ({
  currentWord,
  isGameLost,
  guessedLetters,
}: WordLettersprops): JSX.Element => {
  const letterElement: JSX.Element[] = currentWord
    .split("")
    .map((cur: string): JSX.Element => {
      const shouldRevealLetter:boolean = isGameLost || guessedLetters.includes(cur);
      const letterClassName: string = clsx(
        isGameLost && !guessedLetters.includes(cur) && "bg-[#EC5D49]",
      );
      return (
        <span
          className={`${letterClassName} h-10 w-10 bg-[#323232] flex justify-center items-center text-[1.125rem] border-b border-b-[#F9F4DA]`}
        >
          {shouldRevealLetter ? cur.toUpperCase() : ""}
        </span>
      );
    });
  return (
    <section className="flex justify-center gap-0.5 my-8 mx-auto">
      {letterElement}
    </section>
  );
};

export default WordLetters;
