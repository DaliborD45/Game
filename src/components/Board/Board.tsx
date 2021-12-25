import React, { FC, useState, useEffect } from "react";
import { BoardProps } from "../../interfaces/interfaces";
import Tile from "../Tile/Tile";
import { tilesArr } from "../../helpers/tilesList";
const Board: FC<BoardProps> = ({
  setBestScore,
  setScore,
  score,
  bestScore,
  randomIdsArr,
  setGameOver,
  isGameOver,
}) => {
  const [findedTiles, setFindedTiles] = useState(0);
  useEffect(() => {
    if (findedTiles === 3) {
      setGameOver(true);
      setTimeout(() => {
        setGameOver(false);
      }, 3000);

      setTimeout(() => {
        randomIdsArr.splice(0, randomIdsArr.length);

        while (randomIdsArr.length !== 3) {
          const randomId: number = Math.floor(Math.random() * 16);
          if (!randomIdsArr.includes(randomId) && randomId !== 0) {
            randomIdsArr.push(randomId);
          }
        }
        console.log(randomIdsArr);
        if (score < bestScore || bestScore === 0) {
          setBestScore(score);
        }
      }, 3000);

      console.log("najsoo");
    }
  });
  return (
    <div className="w-[500px] h-[500px] bg-custom-500 rounded-md mt-10">
      <section className="ml-5 pt-5">
        {tilesArr.map(({ id }) => {
          return (
            <Tile
              key={id}
              id={id}
              score={score}
              setScore={setScore}
              randomIdsArr={randomIdsArr}
              setFindedTiles={setFindedTiles}
              isGameOver={isGameOver}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Board;
