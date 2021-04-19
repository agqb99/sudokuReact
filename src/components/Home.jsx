import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();

  return (
    <div className="homeInformacion">
      <h2>Jugador: {props.playerName}</h2>
      <button type="submit" onClick={HandleBoton1}>
        Sudoku
      </button>
      <button type="submit" onClick={HandleBoton2}>
        Scores
      </button>
      <button type="submit" onClick={HandleBoton3}>
        Inicio
      </button>
    </div>
  );
  function HandleBoton1() {
    history.push("/sudoku");
  }
  function HandleBoton2() {
    history.push("/scores");
  }
  function HandleBoton3() {
    history.push("/");
  }
};

export default Home;
