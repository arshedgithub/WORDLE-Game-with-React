import React from "react";
import Row from "./Row";

export default function Grid() {
  return (
    <div>
      {guesses.map((g, i) => {
        <Row key={i} />;
      })}
    </div>
  );
}
