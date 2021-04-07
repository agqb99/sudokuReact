import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Sudoku from "./components/Sudoku";
import Scores from "./components/Scores";
import { Route, Switch } from "react-router-dom";

function App() {
  const [users, setUsers] = React.useState([]);
  const [playerName, setPlayerName] = React.useState("");

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Login
            users={users}
            setPlayerName={setPlayerName}
            setUsers={setUsers}
          />
        )}
      />
      <Route
        path="/home"
        exact
        render={() => <Home playerName={playerName} />}
      />
      <Route path="/scores" exact render={() => <Scores />} />
      <Route
        path="/sudoku"
        exact
        render={() => <Sudoku playerName={playerName} />}
      />
    </Switch>
  );
}

export default App;
