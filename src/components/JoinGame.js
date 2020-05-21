import React, { useState, useEffect } from 'react'
import purple_vector from '../images/vector_puple_vector.svg'
import cancel from '../images/vector_cancel.svg'
import "../style/JoinGame.css";
import '../style/Shared.css'
import back from "../images/vector_return.svg";
import jake from "../images/jake_the_dog.svg";
import { socket } from '../helpers/socket'

const JoinGame = () => {
  const [value, setValue] = useState("")

  let err = ""

  useEffect(() => {
      socket.on("err", data => err=data.msg)
  })

  //Join to the game
  const handleJoin = () => {
      localStorage.setItem("gid", value)
      socket.emit('join-game',
          {
              player: {
                  id: localStorage.getItem("id")
              },
              game: {
                  id: localStorage.getItem("gid")
              }
          })
      setTimeout(() => {
          if (err === "") {
              window.open("/game/" + value, "_self")
          }else {
              alert(err)
          }
      },1000)
  }

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