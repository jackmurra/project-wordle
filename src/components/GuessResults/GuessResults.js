import React from "react";
import { range } from "../../utils";

function GuessResults({ guessResults }) {
  const emptyRows = range(6 - guessResults.length);
  const whitespaceRows = emptyRows.map(() => ({
    id: crypto.randomUUID(),
    label: "     ",
  }));
  const rows = [...guessResults, ...whitespaceRows];

  return (
    <div className="guess-results">
      {rows.map(({ id, label }) => (
        <p key={id} className="guess">
          {label.split("").map((character, index) => (
            <span key={index} className="cell">
              {character}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
