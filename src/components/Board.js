import React from 'react'
import socketIOClient from 'socket.io-client'
import Player from './Player';
import MyPlayer from './MyPlayer';
import koloda from '../images/onboard_assets/Koloda.svg'
import '../style/Board.css'
import card1 from '../images/love_cards/cards_loveletter-02.svg'
import card2 from '../images/love_cards/cards_loveletter-03.svg'

const ENDPOINT = "http://104.248.20.1:8080";

const Board = () => {
    let n_players = parseInt(localStorage.getItem("n_players"))

    let players = []
    for (let i = 0; i < n_players - 1; i++) {
        players.push(<Player name={"nickname"} />)
    }

    const cards = ()=>
    {
        console.log("Card paylamaq")
    }

    return (
        <div>
            <div className="Board">
                {players}
                <MyPlayer name="Nigar" />
                <div className="right-corner-images">
                    <img src={card1} />
                    <img src={card2} />
                </div>
                <div onClick={cards} className="right-koloda">
                    <img src={koloda} />
                </div>
            </div>
        </div>
    )
}

export default Board