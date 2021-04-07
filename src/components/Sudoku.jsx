import React from "react";

const Sudoku = (props) => {
  const [tablero, setTablero] = React.useState([
    [
      { value: 0, enabled: true },
      { value: 0, enabled: true },
      { value: 0, enabled: true },
    ],
    [
      { value: 0, enabled: true },
      { value: 0, enabled: true },
      { value: 0, enabled: true },
    ],
    [
      { value: 0, enabled: true },
      { value: 0, enabled: true },
      { value: 0, enabled: true },
    ],
  ]);
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
                ></input>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );

  function handleChange(e) {}
};

export default Sudoku;
