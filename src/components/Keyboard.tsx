import { clsx } from "clsx";
import type { JSX } from "react";
type KeyboardProps = {
  guessedLetters: string[];
  currentWord: string;
  isGameOver: boolean;
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  guessedLetters,
  currentWord,
  isGameOver,
  addGuessedLetter
}: KeyboardProps): JSX.Element => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetElement = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx(
      "w-10 h-10 border border-gray-400 rounded font-medium",
      {
        "bg-[#10A95B]": isCorrect,
        "bg-[#EC5D49]": isWrong,
        "bg-yellow-400": !isCorrect && !isWrong, // default color
      },
    );

    return (
      <button
        key={letter}
        className={`${className} disabled:cursor-not-allowed disabled:opacity-50 text-black`}
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  return (
    <section className="flex flex-wrap justify-center gap-2 max-w-112.5 mb-9 mx-auto">
      {alphabetElement}
    </section>
  );
};

export default Keyboard;
