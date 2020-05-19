import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/JoinGame.css";
import "../style/Shared.css";
import purple_vector from "../images/vector_puple_vector.svg";
import cancel from "../images/vector_cancel.svg";
import back from "../images/vector_return.svg";
import jake from "../images/jake_the_dog.svg";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://104.248.20.1:8080/";
const socket = socketIOClient(ENDPOINT);

const JoinGame = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    socket.on("join-game", (data) => console.log(data));
  });

  const handleJoin = () => {
    socket.emit("join-game", {
      player: {
        id: localStorage.getItem("id"),
      },
      game: {
        id: value,
      },
    });
  };

  return (
    <div className='game-page'>
      <div className='choose'>Type game ID</div>
      <Link to={{ pathname: "/join-or-create" }}>
        <button className='btn-return'>
          <img src={back} alt='' />
        </button>
      </Link>
      <Link to={{ pathname: "/" }}>
        <button className='btn-close'>
          <img src={cancel} alt='' />
        </button>
      </Link>
      <input
        className='input-box'
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type='text'
        placeholder='Game ID'
      />
      <Link to={{ pathname: "/game/" + value }}>
        <button className='go-button' onClick={handleJoin}>
          OK, Go
        </button>
      </Link>
      <img className='jake' src={jake} alt='Not Found' />
      <img className='background-vector' src={purple_vector} alt='Not Found' />
    </div>
  );
};

export default JoinGame;
