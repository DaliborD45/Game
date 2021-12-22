import React, { useState } from "react";
import Board from "./Board/Board";
import Bottom from "./Bottom/Bottom";
import Footer from "./Footer/Footer";
import Intro from "./Intro/Intro";

const Home = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);

  return (
    <div className="w-screen h-screen bg-light-brown font-['Clear_Sans']">
      <div className="max-w-lg mx-auto  mt-10">
        <Intro score={score} bestScore={bestScore} />
        <Board setScore={setScore} setBestScore={setBestScore} />
        <Bottom />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
