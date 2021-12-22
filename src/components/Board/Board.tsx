import React from "react";

const Board = () => {
  return (
    <div className="w-[500px] h-[500px] bg-custom-500 rounded-md mt-10">
      <section className="ml-5 pt-5">
        {[...Array(16)].map((x, i) => (
          <div className="w-[115px] h-[115px] border-8 p-4 bg-custom-400 border-custom-500  float-left hover:bg-custom-300"></div>
        ))}
      </section>
    </div>
  );
};

export default Board;
