import React, { useState } from "react";
import Board from "./Board/Board";
import Bottom from "./Bottom/Bottom";
import Footer from "./Footer/Footer";
import GameOver from "./GameOver/GameOver";
import Intro from "./Intro/Intro";
import { randomIdsArr } from "../helpers/tilesList";
const Home = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [hint, setHint] = useState(false);

  return (
    <div className="w-screen h-screen bg-light-brown font-['Clear_Sans'] overflow-x-hidden">
      <div className="max-w-lg mx-auto  mt-10">
        <Intro
          score={score}
          bestScore={bestScore}
          setGameOver={setGameOver}
          setHint={setHint}
        />
        {isGameOver && <GameOver score={score} />}
        <Board
          setScore={setScore}
          setBestScore={setBestScore}
          score={score}
          bestScore={bestScore}
          randomIdsArr={randomIdsArr}
          setGameOver={setGameOver}
          isGameOver={isGameOver}
        />
        <Bottom hint={hint} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
