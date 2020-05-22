import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Play.css";
import "../style/Shared.css";
import purple_vector from "../images/vector_puple_vector.svg";
import robot from "../images/robot_vector.svg";
import witch from "../images/witch_vector.svg";
import cancel from "../images/vector_cancel.svg";
import back from "../images/vector_return.svg";

const Play = () => {
  const [value, setValue] = useState("");
  const postData = () => {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: value }),
    };
    const url = "http://104.248.20.1:8080/api/player";

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => localStorage.setItem("id",data.id))
          localStorage.setItem("nickname",value)
    }

  return (
    <div className='game-page'>
      <div className='choose'>Choose a Nickname</div>
      <Link to={{ pathname: "/" }}>
        <button className='btn-return'>
          <img src={back} alt='' />
        </button>
      </Link>
      <Link to={{ pathname: "/" }}>
        <button className='btn-close'>
          <img src={cancel} alt='' />
        </button>
      </Link>
      <img className='robot' src={robot} alt='Not Found' />
      <input
        className='input-box'
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type='text'
        placeholder='Nickname'
      />
      <Link to={{ pathname: "/gamemode" }}>
        <button className='go-button' onClick={postData}>
          OK, Go
        </button>
      </Link>
      <img className='witch' src={witch} alt='Not Found' />
      <img className='background-vector' src={purple_vector} alt='Not Found' />
    </div>
  );
};

export default Play;
