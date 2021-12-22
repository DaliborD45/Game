import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-screen h-36 bg-custom-700 text-custom-400 mt-40 ">
      <section className="flex justify-center pt-10">
        <p className="font-bold text-xl   mr-5 mt-2">Made by Dalibor Detko</p>
        <a
          href="https://github.com/DaliborD45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="text-custom-500 hover:opacity-80 "
            size="3x"
          />
        </a>
      </section>
    </div>
  );
};

export default Footer;
