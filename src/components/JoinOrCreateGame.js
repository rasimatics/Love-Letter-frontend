import React from "react";
import { Link } from "react-router-dom";
import cancel from "../images/vector_cancel.svg";
import back from "../images/vector_return.svg";
import dayday from "../images/Dayday_IceKing.svg";
import purple_vector from "../images/vector_puple_vector.svg";
import "../style/JoinOrCreateGame.css";
import "../style/Shared.css";

const JoinOrCreateGame = () => {
  return (
    <div className='game-page'>
      <div className='choose'>Join or Create a game</div>
      <Link to={{ pathname: "/gamemode" }}>
        <button className='btn-return'>
          <img src={back} />
        </button>
      </Link>
      <Link to={{ pathname: "/" }}>
        <button className='btn-close'>
          <img src={cancel} />
        </button>
      </Link>
      <div className='mode'>
        <Link to='/join-game'>
          <button className='btn-mode'>Join Game</button>
        </Link>
        <Link to={{ pathname: "/create-a-game" }}>
          <button className='btn-mode'>Create Game</button>
        </Link>
      </div>
      <img className='right_vector' src={dayday} alt='Not Found' />
      <div className='help'>Help & FAQ</div>
      <img className='purple-vector' src={purple_vector} alt='Not Found' />
    </div>
  );
};

export default JoinOrCreateGame;
