import React, { useState, useEffect } from 'react'
import purple_vector from '../images/vector_puple_vector.svg'
import cancel from '../images/vector_cancel.svg'
import socketIOClient from 'socket.io-client'
import { Redirect } from 'react-router-dom'
import '../style/Shared.css'

const ENDPOINT = "http://104.248.20.1:8080";
const socket = socketIOClient(ENDPOINT);


const JoinGame = () => {
    const [value, setValue] = useState("")
    const [player, setPlayer] = useState()
    const [game, setGame] = useState()


    useEffect(()=>{
        socket.on("player", data => setPlayer(data));
        socket.on("game", data => setGame(data));
    })


    const handleJoin = () => {
        socket.on("err", data => console.log(data))
        socket.emit('join-game',
            {
                player: {
                    id: localStorage.getItem("id")
                },
                game: {
                    id: value
                }
            })
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