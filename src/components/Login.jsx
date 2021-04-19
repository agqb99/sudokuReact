import React from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [playerName, setPlayerName] = React.useState("");
  const history = useHistory();
  return (
    <div className="login">
      <div className="bienvenida">
        <h3>Welcome </h3>
      </div>
      <div className="rules">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          doloremque hic facilis facere voluptatum harum vero porro aspernatur,
          dignissimos voluptatibus sapiente modi repellendus consequuntur quas.
          Earum harum perspiciatis alias quibusdam.
        </p>
      </div>
      <div className="registro">
        <label>Nombre: </label>
        <input
          value={playerName}
          onChange={handleInputChange}
          type="text"
        ></input>
        <button type="submit" onClick={controlHandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );

  function controlHandleSubmit(e) {
    e.preventDefault();
    props.setUsers([...props.users, { playerName, tiempo: 0 }]);
    props.setPlayerName(playerName);
     if (playerName === props.playerName) {
        alert("Este nombre ya está en uso")
     }
    setPlayerName("");
    history.push("/home");
  }

  function handleInputChange(e) {
    setPlayerName(e.target.value);
  }
};

export default Login;
