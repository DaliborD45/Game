import { Dispatch, SetStateAction } from "react";

export interface IntroProps {
  score: number;
  setGameOver: Dispatch<SetStateAction<boolean>>;
  bestScore: number;
  setHint: Dispatch<SetStateAction<boolean>>;
}

export interface TileProps {
  id: number;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  randomIdsArr: number[];
  isGameOver: boolean;
  setFindedTiles: Dispatch<SetStateAction<number>>;
}

export interface BoardProps {
  setScore: Dispatch<SetStateAction<number>>;
  setBestScore: Dispatch<SetStateAction<number>>;
  score: number;
  isGameOver: boolean;
  randomIdsArr: number[];
  bestScore: number;
  setGameOver: Dispatch<SetStateAction<boolean>>;
}
export interface GameOverProps {
  score: number;
}
export interface BottomProps {
  hint: boolean;
}
