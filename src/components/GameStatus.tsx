import Language from "../languages";
import { clsx } from "clsx";
import { getFarewellText } from "../utils";
import type { JSX } from "react";

type gameStatusProps = {
  isGameWon: boolean;
  isGameLost: boolean;
  isGameOver: boolean;
  isLastGuessIncorrect: boolean | string;
  wrongGuessCount: number;
};

const GameStatus = ({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessIncorrect,
  wrongGuessCount,
}: gameStatusProps): JSX.Element => {
  const gameStatusClass: string = clsx(
    "rounded flex flex-col items-center justify-center w-full max-w-[350px] min-h-[60px] mx-auto mb-8",
    isGameWon && "bg-[#10A95B]",
    isGameLost && "bg-[#BA2A2A]",
    !isGameOver &&
      isLastGuessIncorrect &&
      "bg-[#7A5EA7] border border-dashed border-[#323232]",
  );

  const renderGameStatus = (): JSX.Element | null => {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="text-[20px] font-medium text-[#F9F4DA]">
          {getFarewellText(Language[wrongGuessCount - 1].lang)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <p className="text-[20px] font-medium text-[#F9F4DA]">You Win</p>
          <p className="text-[16px] font-medium text-[#F9F4DA]">
            Well done! 🎉
          </p>
        </>
      );
    }

    if (isGameLost)
      return (
        <>
          <p className="text-[20px] font-medium text-[#F9F4DA]">Game Over</p>
          <p className="text-[16px] font-medium text-[#F9F4DA]">
            You lose! Better start learning Assembly 😭
          </p>
        </>
      );
    return null;
  };
  return (
    <section aria-live="polite" role="status" className={gameStatusClass}>
      {renderGameStatus()}
    </section>
  );
};

export default GameStatus;
