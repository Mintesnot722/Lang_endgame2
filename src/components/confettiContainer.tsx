import Confetti from "react-confetti";
import type { JSX } from "react";

type confettiProps = {
  isGameWon: boolean;
};

export default function ConfettiContainer({
  isGameWon,
}: confettiProps): JSX.Element | null {
  if (!isGameWon) return null;

  return <Confetti recycle={false} numberOfPieces={1000} />;
}
