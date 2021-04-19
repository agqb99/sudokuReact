import React from "react";
import { useHistory } from "react-router-dom";

const Scores = (props) => {
  const history = useHistory();

  return (
    <>
      <div className="">
        <h2>Scores</h2>
        {props.users.map((user) => (
          <div>
            <div className="usuarios">
              {user.tiempo > 30 && user.tiempo !== "" ? (
                <>
                  <h4>Jugador: {user.playerName}</h4>
                  <h4>Tiempo: {user.tiempo}</h4>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="otro">
        <button id="home" type="submit" onClick={handlerBoton}>
          Volver al Inicio
        </button>
        <button id="otroIntento" type="submit" onClick={handlerBoton2}>
          Jugar de nuevo
        </button>
        <button id="winners" type="submit" onClick={handlerBoton3}>
          Ver Tabla de Mejores Partidas
        </button>
      </div>
    </>
  );

  function handlerBoton() {
    history.push("/");
  }
  function handlerBoton2() {
    history.push("/sudoku");
  }
  function handlerBoton3() {
    history.push("/winners");
  }
};

export default Scores;
