import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Sudoku = (props) => {
  const inicialTablero = [
    [
      { value: "6", enabled: true },
      { value: "1", enabled: true },
      { value: "9", enabled: true },
      { value: "7", enabled: true },
      { value: "4", enabled: true },
      { value: "2", enabled: true },
      { value: "3", enabled: true },
      { value: "5", enabled: true },
      { value: "8", enabled: true },
    ],
    [
      { value: "4", enabled: true },
      { value: "5", enabled: true },
      { value: "7", enabled: true },
      { value: "8", enabled: true },
      { value: "3", enabled: true },
      { value: "1", enabled: true },
      { value: "6", enabled: true },
      { value: "9", enabled: true },
      { value: "2", enabled: true },
    ],
    [
      { value: "8", enabled: true },
      { value: "2", enabled: true },
      { value: "3", enabled: true },
      { value: "6", enabled: true },
      { value: "9", enabled: true },
      { value: "5", enabled: true },
      { value: "1", enabled: true },
      { value: "7", enabled: true },
      { value: "4", enabled: true },
    ],
    [
      { value: "2", enabled: true },
      { value: "3", enabled: true },
      { value: "6", enabled: true },
      { value: "4", enabled: true },
      { value: "1", enabled: true },
      { value: "9", enabled: true },
      { value: "5", enabled: true },
      { value: "8", enabled: true },
      { value: "7", enabled: true },
    ],
    [
      { value: "5", enabled: true },
      { value: "9", enabled: true },
      { value: "1", enabled: true },
      { value: "2", enabled: true },
      { value: "7", enabled: true },
      { value: "8", enabled: true },
      { value: "4", enabled: true },
      { value: "6", enabled: true },
      { value: "3", enabled: true },
    ],
    [
      { value: "7", enabled: true },
      { value: "8", enabled: true },
      { value: "4", enabled: true },
      { value: "3", enabled: true },
      { value: "5", enabled: true },
      { value: "6", enabled: true },
      { value: "2", enabled: true },
      { value: "1", enabled: true },
      { value: "9", enabled: true },
    ],
    [
      { value: "9", enabled: true },
      { value: "6", enabled: true },
      { value: "2", enabled: true },
      { value: "1", enabled: true },
      { value: "8", enabled: true },
      { value: "3", enabled: true },
      { value: "7", enabled: true },
      { value: "4", enabled: true },
      { value: "5", enabled: true },
    ],
    [
      { value: "3", enabled: true },
      { value: "4", enabled: true },
      { value: "5", enabled: true },
      { value: "9", enabled: true },
      { value: "6", enabled: true },
      { value: "7", enabled: true },
      { value: "8", enabled: true },
      { value: "2", enabled: true },
      { value: "6", enabled: true },
    ],
    [
      { value: "1", enabled: true },
      { value: "7", enabled: true },
      { value: "8", enabled: true },
      { value: "5", enabled: true },
      { value: "2", enabled: true },
      { value: "4", enabled: true },
      { value: "9", enabled: true },
      { value: "6", enabled: true },
      { value: "6", enabled: true },
    ],
  ];
  const [tablero, setTablero] = React.useState(inicialTablero);
  const [tiempoInicial, setTiempoInicial] = React.useState();
  const history = useHistory();

  useEffect(() => {
    setTiempoInicial(Date.now());
  }, []);

  return (
    <>
      <div className="homeInformacion">
        <h2>Welcome: {props.playerName}</h2>
      </div>
      {/* <div className="numerosIniciales">
        <h2>Numeros</h2>
        const array
      </div> */}
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
  function hasDuplicateInRows() {
    const rows = []; //[1,2,3,4,5,6,7,8,9]
    let hasDuplicate = false;
    tablero.forEach((row, i) => {
      row.forEach((celda, j) => {
        rows.push(tablero[i][j].value);
      });
      console.log(rows);

      const tableroSet = new Set(rows);
      console.log(tableroSet.size);
      console.log(rows.length);
      if (rows.length !== tableroSet.size) {
        // console.log(true);
        hasDuplicate = true;
      }
      rows.splice(0, rows.length);
      // return rows.length !== tableroSet.size;
    });
    console.log(hasDuplicate);

    return hasDuplicate;
  }
  function hasDuplicateInColumns() {
    const columns = []; //[1,2,3,4,5,6,7,8,9]
    let contador = 0;
    let hasDuplicate = false;
    tablero.forEach((row) => {
      tablero.forEach((row, i) => {
        console.log(row[contador].value);
        columns.push(row[contador].value);
      });
      const tableroSet = new Set(columns);
      // console.log(tableroSet.size);
      // console.log(columns.length);
      if (columns.length !== tableroSet.size) {
        // console.log(true);
        hasDuplicate = true;
      }
      console.log(columns);
      columns.splice(0, columns.length);
      contador++;
      // return rows.length !== tableroSet.size;
    });
    console.log(hasDuplicate);
    return hasDuplicate;
  }

  function hasEmptyCells() {
    const returnArray = tablero.flat().map((e) => {
      return e.value;
    });
    const empty = returnArray.some((e) => {
      return e === "";
    });
    return empty;
  }

  // function hasDuplicate() {
  //   const returnArray = tablero.flat().map((e) => {
  //     return e.value;
  //   });
  //   const tableroSet = new Set(returnArray);
  //   console.log(tableroSet.size);
  //   console.log(returnArray.length);
  //   return returnArray.length !== tableroSet.size;
  // }

  function cleanCells() {
    setTablero(inicialTablero);
  }

  function checkTablero() {
    let arrayDeErrores = [];
    const tiempoFinal = Date.now();
    if (hasEmptyCells()) {
      // alert("No podes dejar valores vacios");
      // return;
      arrayDeErrores.push("No podes dejar valores vacios");
    }
    if (hasDuplicateInColumns()) {
      // alert("Valores repetidos en una columna!");
      // return;
      arrayDeErrores.push("Valores repetidos en una columna!");
    }
    if (hasDuplicateInRows()) {
      arrayDeErrores.push("Valores repetidos en una fila!");
    }
    if (arrayDeErrores.length === 0) {
      arrayDeErrores.push("No hay valores repetidos!");
      cleanCells();
      history.push("/home");
    }
    alert(arrayDeErrores);
    // const tiempoMenor = tiempoFinal - tiempoInicial <= 30;
    let tiempoTotal = (tiempoFinal - tiempoInicial) / 1000;

    console.log(props.users);
    props.setUsers(
      props.users.map((user) => {
        // return user
        if (user.playerName === props.playerName) {
          let tiempo = 0;
          let menorTiempo = "";
          console.log(props.tiempo);
          if (props.tiempo) {
            // console.log("entro a if");

            props.tiempo > tiempoTotal
              ? (tiempo = tiempoTotal)
              : (tiempo = props.tiempo);
          } else {
            tiempo = tiempoTotal;
            if (tiempo < 30) {
              user.playerName = "";
              menorTiempo = tiempo;
              console.log(menorTiempo);
            }
            // else {
          }
          // console.log(tiempo);
          // console.log(props);
          //   tiempo = tiempoTotal;
          // }

          return {
            playerName: props.playerName,
            tiempo: tiempo,
            menorTiempo: menorTiempo,
          };
        }

        return user;
      })
    );

    // alert("No hay valores repetidos");
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
    }
  }
};

export default Sudoku;

// Primera columna, agarrar el primer objeto de c/ arreglo y hacer un nuevo arreglo con esos valores para validar si hay duplicados.
//Para la segunda columna, tomar el segundo objeto y asi
