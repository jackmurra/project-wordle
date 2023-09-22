import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const addGuessResult = (guess) => {
    const newGuess = { id: crypto.randomUUID(), label: guess };
    const nextGuessResults = [...guessResults, newGuess];
    setGuessResults(nextGuessResults);
  };

  console.log('guessResults',guessResults.length)

  return (
    <>
      <GuessResults guessResults={guessResults} />
      {NUM_OF_GUESSES_ALLOWED > guessResults.length && (
        <Guess addGuessResult={addGuessResult} />
      )}
    </>
  );
}

export default Game;
