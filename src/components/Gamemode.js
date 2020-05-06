import React from "react";
import { Link } from "react-router-dom";
import cancel from "../images/vector_cancel.svg";
import back from "../images/vector_return.svg";
import purple_vector from "../images/vector_puple_vector.svg";
import guy_vector from "../images/guy_vector.svg";
import "../style/Gamemode.css";
import "../style/Shared.css";

const Gamemode = () => {
  return (
    <div className='game-page'>
      <div className='choose'>Choose game mode</div>
      <Link to={{ pathname: "/play" }}>
        <button className='btn-return'>
          <img src={back} />
        </button>
      </Link>
      <Link to={{ pathname: "/" }}>
        <button className='btn-close'>
          <img src={cancel} />
        </button>
      </Link>
      <img className='guy-vector' src={guy_vector} alt='Not Found' />
      <div className='mode'>
        <button className='btn-mode'>Sigleplayer</button>
        <Link to={{ pathname: "join-or-create" }}>
          <button className='btn-mode'>Multiplayer</button>
        </Link>
      </div>
      <div className='help'>Help & FAQ</div>
      <img className='purple-vector' src={purple_vector} alt='Not Found' />
    </div>
  );
};

export default Gamemode;
