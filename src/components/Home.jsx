import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="homeInformacion">
      <h2>Jugador: {props.playerName}</h2>
      <button>
        <Link to="/sudoku">Sudoky </Link>
      </button>
      <button>
        <Link to="/scores">Scores </Link>
      </button>
    </div>
  );
};

export default Home;
