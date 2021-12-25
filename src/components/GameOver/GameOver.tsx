import React, { FC } from "react";
import { GameOverProps } from "../../interfaces/interfaces";
const GameOver: FC<GameOverProps> = ({ score }) => {
  return (
    <div className="absolute w-[500px] top-80 h-10 bg-custom-600 text-custom-200 font bold text-xl text-center">
      <p className="pt-1">{`Game Over! It took you ${score} picks to finish!`}</p>
    </div>
  );
};

export default GameOver;
