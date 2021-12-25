import React, { FC } from "react";
import { IntroProps } from "../../interfaces/interfaces";

const Intro: FC<IntroProps> = ({ score, bestScore, setGameOver, setHint }) => {
  const handleHint = () => {
    setHint(true);
    setTimeout(() => setHint(false), 3000);
  };
  const handleGameReset = () => window.location.reload();
  return (
    <>
      <section className="flex">
        <section>
          <h1 className="font-semibold text-4xl text-custom-700 mt-3">
            Xmas Game!
          </h1>
        </section>
        <section className="flex ml-auto h-16 leading-3 mr-3">
          <div className="rounded-sm bg-custom-500  w-28 font-bold text-center ">
            <p className="text-custom-200 text-lg pt-1">SCORE</p>
            <p className="text-custom-100 text-2xl">{score}</p>
          </div>
          <div className="rounded-sm bg-custom-500  w-28 font-bold text-center ml-2">
            <p className="text-custom-200 text-lg pt-1">BEST</p>
            <p className="text-custom-100 text-2xl">{bestScore}</p>
          </div>
        </section>
      </section>
      <section className="flex mt-5 ">
        <div className="font-semibold text-lg mt-2 text-custom-600">
          <p>Find 3 candy canes hidden in the boxes!</p>
          <p
            onClick={() => handleHint()}
            className="underline hover:text-custom-400"
          >
            How to play?
          </p>
        </div>
        <div className="rounded-sm bg-custom-600 h-10 mt-3 mr-3 w-36 font-bold text-center ml-auto hover:opacity-95">
          <p
            className="text-custom-100 text-xl py-1.5 "
            onClick={() => handleGameReset()}
          >
            New Game
          </p>
        </div>
      </section>
    </>
  );
};

export default Intro;
