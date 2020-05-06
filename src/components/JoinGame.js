import React, { useState, useEffect } from 'react'
import purple_vector from '../images/vector_puple_vector.svg'
import cancel from '../images/vector_cancel.svg'
import '../style/Shared.css'
import  {socket} from '../helpers/socket'


const JoinGame = () => {
    const [value, setValue] = useState("")

    //Join to the game
    const handleJoin = () => {
        localStorage.setItem("gid",value)

        setTimeout(() => {
            window.open("/game/" + value, "_self")
        }, 1000);
    }


    return (
        <div className="game-page">
            <div className="choose">Type Game ID</div>
            <button className="btn-close"><img src={cancel} /></button>
            <input
                className="input-box"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
                placeholder="Game ID"
            />
            <button
                className="go-button"
                onClick={handleJoin}>
                OK,GO
            </button>
            <img className="background-vector" src={purple_vector} alt="Not Found" />
        </div >
    )
}


export default JoinGame