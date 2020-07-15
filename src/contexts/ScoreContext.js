import React, { useContext, useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
require("dotenv").config();

const ScoreContext = React.createContext(-1);
const useScore = () => useContext(ScoreContext);

const ScoreProvider = ({ children }) => {
  const [score, SetScore] = useState(-1);

  return (
    <Auth0Provider
      domain="tenant-ccollins.us.auth0.com"
      clientId="UY0i8vymcBqAgJoHyRt0nkg0jl1kd7WO"
      redirectUri={window.location.origin}
      audience="https://learnbuildtypeccollinsapi"
    >
      <ScoreContext.Provider value={[score, SetScore]}>
        {children}
      </ScoreContext.Provider>
    </Auth0Provider>
  );
};

export { ScoreProvider, useScore };
