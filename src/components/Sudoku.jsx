import React from "react";

const Sudoku = (props) => {
  const inicialTablero = [
    [
      { value: "", enabled: true },
      { value: "", enabled: true },
      { value: "", enabled: true },
    ],
    [
      { value: "", enabled: true },
      { value: "", enabled: true },
      { value: "", enabled: true },
    ],
    [
      { value: "", enabled: true },
      { value: "", enabled: true },
      { value: "", enabled: true },
    ],
  ];
  const [tablero, setTablero] = React.useState(inicialTablero);

  // console.log("Hola");

  return (
    <>
      <div className="homeInformacion">
        <h2>Welcome: {props.playerName}</h2>
      </div>
      <div className="sudoku">
        {tablero.map((row, i) => {
          return (
            <div key={`row-${i}`}>
              {row.map((celda, j) => (
                <input
                  key={`celda-${j}`}
                  name={`${i}-${j}`}
                  enabled={celda.enabled}
                  value={celda.value}
                  onChange={handleChange}
                ></input>
              ))}
            </div>
          );
        })}
      </div>
      <div className="finIntento">
        <button id="FinIntento" type="submit" onClick={checkTablero}>
          Finalizar Partida
        </button>
      </div>
    </>
  );

  // function hasDuplicateInRows() {}
  // function hasDuplicateInColumns() {}

  function hasEmptyCells() {
    const returnArray = tablero.flat().map((e) => {
      return e.value;
    });
    const empty = returnArray.some((e) => {
      return e === "";
    });
    return empty;
  }

  function hasDuplicate() {
    const returnArray = tablero.flat().map((e) => {
      return e.value;
    });
    const tableroSet = new Set(returnArray);
    console.log(tableroSet.size);
    console.log(returnArray.length);

    if (returnArray.length === tableroSet.size) {
      return false;
    } else {
      return true;
    }
  }

  function cleanCells() {
    setTablero(inicialTablero);
  }

  function checkTablero() {
    if (hasDuplicate()) {
      // console.log("Valores repetidos");
      alert("Valores repetidos");
    } else {
      alert("No hay valores repetidos");
      cleanCells();
    }
    if (hasEmptyCells()) {
      alert("No podes dejar valores vacios");
    }
  }

  function handleChange(e) {
    const indiceFila = parseInt(e.target.name.charAt(0));
    const indiceColumna = parseInt(e.target.name.charAt(2));
    const validacionDigito = /^\d?$/;
    if (validacionDigito.test(e.target.value)) {
      // console.log(e.target.value);
      setTablero(
        tablero.map((columna, i) => {
          return columna.map((celda, j) => {
            if (i === indiceFila && j === indiceColumna) {
              return {
                ...celda,
                value: isNaN(parseInt(e.target.value))
                  ? ""
                  : parseInt(e.target.value),
              };
            }
            return celda;
          });
        })
      );
      // if (e.target.value === "" ) {
      //   alert("No puedes dejar espacios en blanco")
      // }
    }
  }
};

export default Sudoku;
