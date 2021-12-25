import React, { FC, useState, useEffect } from "react";
import { TileProps } from "../../interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPoo } from "@fortawesome/free-solid-svg-icons";
const Tile: FC<TileProps> = ({
  id,
  score,
  setScore,
  randomIdsArr,
  isGameOver,
  setFindedTiles,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isPermaOpen, setPermaOpen] = useState(false);

  const handleOpenTile = (tileId: number) => {
    console.log(tileId);
    if (!isOpen) {
      setOpen(true);
      randomIdsArr.includes(id) && setPermaOpen(true);
      randomIdsArr.includes(id) && setFindedTiles((prevState) => prevState + 1);
      setScore((prevState) => prevState + 1);
    }
  };
  useEffect(() => {
    score % 3 === 0 && score > 0 && setTimeout(() => setOpen(false), 1000);
  }, [score]);
  useEffect(() => {
    if (isGameOver) {
      setTimeout(() => setPermaOpen(false), 2800);
      setTimeout(() => setOpen(false), 2800);
      setTimeout(() => setScore(0), 2800);
      setTimeout(() => setFindedTiles(0), 2000);
    }
  }, [isGameOver]);

  return (
    <div
      key={id}
      onClick={() => handleOpenTile(id)}
      className={`w-[115px] h-[115px] border-8 p-4 ${
        isOpen || isPermaOpen ? "bg-custom-200" : "bg-custom-400"
      } border-custom-500  float-left hover:bg-custom-300`}
    >
      {randomIdsArr.includes(id) && (isOpen || isPermaOpen) && (
        <FontAwesomeIcon
          icon={faPoo}
          className="text-custom-600 ml-2 mt-2"
          size="3x"
        />
      )}
    </div>
  );
};

export default Tile;
