import type { JSX } from "react";

type NewGameButtonProps = {
  isGameOver: boolean;
  startNewGame: () => void;
};

const NewGamebutton = ({
  isGameOver,
  startNewGame,
}: NewGameButtonProps): JSX.Element | null => {
  if (!isGameOver) return null;
  return (
    <button
      onClick={startNewGame}
      className="bg-[#11B5E5] border border-[#D7D7D7] rounded w-56.25 h-10 px-3 py-1.5 block mx-auto cursor-pointer"
    >
      New Game
    </button>
  );
};

export default NewGamebutton;
