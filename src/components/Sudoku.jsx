import React from "react";

const Sudoku = (props) => {
  const [tablero, setTablero] = React.useState([
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
  ]);

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
    </>
  );

  function handleChange(e) {
    const indiceFila = parseInt(e.target.name.charAt(0));
    const indiceColumna = parseInt(e.target.name.charAt(2));

    // console.log(e.target.value);
    setTablero(
      tablero.map((columna, i) => {
        return columna.map((celda, j) => {
          if (i === indiceFila && j === indiceColumna) {
            return {
              ...celda,
              value: parseInt(e.target.value),
            };
          }
          return celda;
        });
      })
    );
  }
};

export default Sudoku;
