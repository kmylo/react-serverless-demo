import React, { useState, useEffect } from "react";
import { ScoresList, ScoreLI } from "../styled/HighScores";

export default function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    console.log("Getting HighScores");

    const loadHighScores = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");
        const scores = await res.json();
        console.log(scores);
        setHighScores(scores);
      } catch (err) {
        console.log(err);
      }
    };

    loadHighScores();
  }, []);

  return (
    <div>
      <h1> HighScores </h1>
      <ScoresList>
        {highScores.map((score) => (
          <ScoreLI key={score.id}>
            {score.fields.name} - {score.fields.score}
          </ScoreLI>
        ))}
      </ScoresList>
    </div>
  );
}
