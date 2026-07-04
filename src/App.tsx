import "./App.css";
import React from "react";
import { randomWord } from "./utils";
import Language from "./languages";

import ConfettiContainer from "./components/confettiContainer";
import Header from "./components/Header";
import GameStatus from "./components/GameStatus";
import LanguageChips from "./components/LanguageChips";
import WordLetters from "./components/WordLetters";
import Keyboard from "./components/Keyboard";
import NewGamebutton from "./components/NewGameButton";

function App() {
  const [currentWord, setCurrentWord] = React.useState<string>((): string =>
    randomWord(),
  );
  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost: boolean = wrongGuessCount >= Language.length - 1;
  const isGameOver: boolean = isGameWon || isGameLost;
  const lastGuessedLetter: string = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect: boolean|string =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  function addGuessedLetter(letter: string): void {
    setGuessedLetters((prevLetters: string[]): string[] =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  function startNewGame() {
    setCurrentWord(randomWord());
    setGuessedLetters([]);
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#262626] text-[#D9D9D9] p-5">
      <ConfettiContainer isGameWon={isGameWon} />
      <Header />

      <GameStatus
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        wrongGuessCount={wrongGuessCount}
        isLastGuessIncorrect={isLastGuessIncorrect}
      />

      <LanguageChips wrongGuessCount={wrongGuessCount} />

      <WordLetters
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />

      <Keyboard
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
        addGuessedLetter={addGuessedLetter}
      />

      <NewGamebutton startNewGame={startNewGame} isGameOver={isGameOver} />
    </main>
  );
}

export default App;
