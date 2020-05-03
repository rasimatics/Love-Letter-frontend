import React from 'react'
import socketIOClient from 'socket.io-client'
import Player from './Player';
import MyPlayer from './MyPlayer';
import koloda from '../images/onboard_assets/Koloda.svg'
import '../style/Board.css'

const ENDPOINT = "http://104.248.20.1:8080";

const Board = () => {
    let n_players = parseInt(localStorage.getItem("n_players"))

    let players = []
    for (let i = 0; i < n_players - 1; i++) {
        players.push(<Player name={"nickname"} />)
    }
    return (
        <div>
            <div className="Board">
                {players}
                <MyPlayer name="Nigar" />
                <div className="right-koloda">
                    <img src={koloda} />
                </div>
            </div>
        </div>
    )
}

export default Board