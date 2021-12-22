import { Dispatch, SetStateAction } from "react";

export interface IntroProps {
  score: number;
  bestScore: number;
}

export interface BoardProps {
  setScore: Dispatch<SetStateAction<number>>;
  setBestScore: Dispatch<SetStateAction<number>>;
}
