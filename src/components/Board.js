import React, { useState } from 'react'
import socketIOClient from 'socket.io-client'
import Player from './Player';
import MyPlayer from './MyPlayer';
import koloda from '../images/onboard_assets/Koloda.svg'
import '../style/Board.css'
import card1 from '../images/love_cards/cards_loveletter-01.svg'
import card2 from '../images/love_cards/cards_loveletter-02.svg'
import card3 from '../images/love_cards/cards_loveletter-03.svg'
import card4 from '../images/love_cards/cards_loveletter-04.svg'
import card5 from '../images/love_cards/cards_loveletter-05.svg'
import card6 from '../images/love_cards/cards_loveletter-06.svg'
import card7 from '../images/love_cards/cards_loveletter-07.svg'
import card8 from '../images/love_cards/cards_loveletter-08.svg'
import bcard from '../images/love_cards/cards_loveletter-09.svg'

import { socket } from '../helpers/socket'

const Board = () => {
    const [handCard, setHandCard] = useState(card7)
    const [newCard, setNewCard] = useState()
    const [mystars, setMystars] = useState(0)
    const [mydiscard, setMyDiscard] = useState([card4, card5, card6])
    const [players, setPlayers] = useState([])


    let n_players = parseInt(localStorage.getItem("n_players"))

    socket.on("err", data => console.log(data))
    socket.on("join-game", data => console.log("Join", data));
    socket.on("player", data => console.log("Player", data));
    socket.on("game", data => { localStorage.setItem("players", JSON.stringify(data.players)); setPlayers(data.players); console.log(data) });

    socket.emit('join-game',
        {
            player: {
                id: localStorage.getItem("id")
            },
            game: {
                id: localStorage.getItem("gid")
            }
        })

    document.onkeydown = (event) => {
        if (event.keyCode == 116)
            event.preventDefault()
    }

    window.stop();

    const playerOneCard = () => {
        document.getElementsByClassName("one")[0].style.animationName = "playerOne"
        setTimeout(() => document.getElementsByClassName("one")[0].style.animationName = "", 3000)
    }

    const playerTwoCard = () => {
        document.getElementsByClassName("two")[0].style.animationName = "playerTwo"
        setTimeout(() => document.getElementsByClassName("two")[0].style.animationName = "", 3000)
    }

    const playerThreeCard = () => {
        document.getElementsByClassName("three")[0].style.animationName = "playerThree"
        setTimeout(() => document.getElementsByClassName("three")[0].style.animationName = "", 3000)
    }

    const myFirstCard = () => {
        document.getElementsByClassName("myCard")[0].style.animationName = "myFirstCard"
        setTimeout(() => {
            document.getElementsByClassName("inHand")[0].style.opacity = "1"
        }, 400)
    }

    const newCardtoMe = () => {
        document.getElementsByClassName("myCard")[0].style.animationName = "myCard"
        setTimeout(() => {
            document.getElementsByClassName("newCard")[0].style.opacity = "1"
        }, 400)

    }


    const startGame = () => {
        setNewCard(card8)
        if (n_players === 4) {
            setTimeout(() => myFirstCard(), 1000)
            setTimeout(() => playerOneCard(), 2000)
            setTimeout(() => playerTwoCard(), 3000)
            setTimeout(() => playerThreeCard(), 4000)
            setTimeout(() => newCardtoMe(), 5000)
        }
        else if (n_players === 3) {
            setTimeout(() => myFirstCard(), 1000)
            setTimeout(() => playerOneCard(), 2000)
            setTimeout(() => playerThreeCard(), 3000)
            setTimeout(() => newCardtoMe(), 4000)
        } else {
            setTimeout(() => myFirstCard(), 1000)
            setTimeout(() => playerTwoCard(), 2000)
            setTimeout(() => newCardtoMe(), 3000)
        }
    }


    return (
        <div>
            <div className="Board">
                <img className="player one" src={bcard} alt="" />
                <img className="player two" src={bcard} alt="" />
                <img className="player three" src={bcard} alt="" />

                {players.map(player => player.id != localStorage.getItem("id") && <Player key={player.id} name={player.id} mydiscard={[]} />)}

                <MyPlayer name={localStorage.getItem("id")} stars={mystars} mydiscard={[]} />

                <div className="right-corner-images">
                    <img className="inHand" src={handCard} alt="" />
                    <img className="newCard" src={newCard} alt="" />
                </div>

                <img className="myCard" src={bcard} />

                <div onClick={startGame} className="right-koloda">
                    <img src={koloda} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Board