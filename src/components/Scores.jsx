import React from "react";
import { useHistory } from "react-router-dom";

const Scores = (props) => {
  const history = useHistory();

  return (
    <div className="">
      <h2>Scores</h2>
      {/* <h2>Jugador: {props.playerName}</h2> */}
      {props.users.map((user) => (
        <div>
          <div className="usuarios">
            <h4>Jugador: {user.playerName}</h4>
            <h4>Tiempo: {user.tiempo}</h4>
          </div>
          <div className="otro">
            <button id="home" type="submit" onClick={handlerBoton}>
              Volver al Inicio
            </button>
            <button id="otroIntento" type="submit" onClick={handlerBoton2}>
              Jugar de nuevo
            </button>
          </div>
        </div>
      ))}
    </div>
  );
  function handlerBoton2() {
    history.push("/sudoku");
  }
  function handlerBoton() {
    history.push("/");
  }
};

export default Scores;
