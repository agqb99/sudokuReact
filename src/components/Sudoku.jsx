import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    return returnArray.length !== tableroSet.size;
  }

  function cleanCells() {
    setTablero(inicialTablero);
  }

  function checkTablero() {
    const tiempoFinal = Date.now();
    if (hasEmptyCells()) {
      alert("No podes dejar valores vacios");
      return;
    }
    if (hasDuplicate()) {
      alert("Valores repetidos");
      return;
    }
    // const tiempoMenor = tiempoFinal - tiempoInicial <= 30;
    let tiempoTotal = (tiempoFinal - tiempoInicial) / 1000;

    // const tiempoMenor = props.users.map((user) => {
    //   if (user.playerName === props.playerName) {
    //     let tiempo = 0;
    //     console.log(props.tiempo);
    //     if (props.tiempo) {
    //       // console.log("entro a if");

    //       props.tiempo > tiempoTotal
    //         ? (tiempo = tiempoTotal)
    //         : (tiempo = props.tiempo);
    //     } else {
    //       tiempo = tiempoTotal;
    //       console.log("entro a else");
    //     }
    //   }
    //   return user;
    // });
    // tiempoMenor();

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

    alert("No hay valores repetidos");
    cleanCells();
    history.push("/home");
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
