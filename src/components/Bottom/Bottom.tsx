import React, { FC } from "react";
import { BottomProps } from "../../interfaces/interfaces";
const Bottom: FC<BottomProps> = ({ hint }) => {
  return (
    <section className="mt-16 text-center">
      <p
        className={`text-custom-600 font-bold text-xl ${
          hint && "bg-yellow-200 py-1"
        }`}
      >
        Tap on 3 tiles in a row and find candy canes as soon as possible!
      </p>
    </section>
  );
};

export default Bottom;
