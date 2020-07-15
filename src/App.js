import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import HighScores from "./pages/HighScores";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./styled/Global";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";

function App() {
  const { loading } = useAuth0();

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Router>
      <GlobalStyle />
      <Main>
        <Container>
          <Navbar />
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/highScores" component={HighScores} />
            <Route path="/gameOver" component={GameOver} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
