import React, { useState, useEffect } from "react";
import { ScoresList, ScoreLI } from "../styled/HighScores";
import { StyledTitle } from "../styled/Random";

export default function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    console.log("Getting HighScores");

    const loadHighScores = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");
        const scores = await res.json();
        // console.log(scores);
        setHighScores(scores);
      } catch (err) {
        console.log(err);
      }
    };

    loadHighScores();
  }, []);

  return (
    <div>
      <StyledTitle> High Scores </StyledTitle>
      <ScoresList>
        {highScores
          .filter((row) => row.fields.name != null || row.fields.score != null)
          .map((score, index) => (
            <ScoreLI key={score.id}>
              {index + 1}. {score.fields.name} - {score.fields.score}
            </ScoreLI>
          ))}
      </ScoresList>
    </div>
  );
}
