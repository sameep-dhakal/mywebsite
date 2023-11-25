import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineer",
          "Instructor",
          "Learner",
          "Machine Learning Enthusiast",
          "Bioinformatics Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
      }}
    />
  );
}

export default Type;
