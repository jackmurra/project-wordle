import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const addGuessResult = guess => {
      const newGuess = {id: crypto.randomUUID(), label: guess}
      const nextGuessResults = [...guessResults, newGuess]
      setGuessResults(nextGuessResults)
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <Guess addGuessResult={addGuessResult} />
    </>
  );
}

export default Game;
