import React, { useContext, useState } from "react";

const ScoreContext = React.createContext(-1);
const useScore = () => useContext(ScoreContext);

const ScoreProvider = ({ children }) => {
  const [score, SetScore] = useState(-1);

  return (
    <ScoreContext.Provider value={[score, SetScore]}>
      {children}
    </ScoreContext.Provider>
  );
};

export { ScoreProvider, useScore };
