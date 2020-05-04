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


const ENDPOINT = "http://104.248.20.1:8080";

const Board = () => {
    const [handCard,setHandCard] = useState(card7)
    const [newCard,setNewCard] = useState()
    let n_players = parseInt(localStorage.getItem("n_players"))

    // let deck = [card1, card1, card1, card1, card1, card2, card2, card3, card3, card4, card4, card5, card5,
    //     card6, card6, card7, card8]

    // console.log(deck);

    let players = []
    for (let i = 0; i < n_players - 1; i++) {
        players.push(<Player name={"Anar"} />)
    }

    const playerOneCard = ()=>{
        document.getElementsByClassName("one")[0].style.animationName = "playerOne"
        setTimeout(()=> document.getElementsByClassName("one")[0].style.animationName = "",3000)
    }

    const playerTwoCard = ()=>{
        document.getElementsByClassName("two")[0].style.animationName = "playerTwo"
        setTimeout(()=> document.getElementsByClassName("two")[0].style.animationName = "",3000)
    }

    const playerThreeCard = ()=>{
        document.getElementsByClassName("three")[0].style.animationName = "playerThree"
        setTimeout(()=> document.getElementsByClassName("three")[0].style.animationName = "",3000)
    }

    const myFirstCard = ()=>{
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
        setTimeout(()=>myFirstCard(),1000)  
        setTimeout(()=>playerOneCard(),2000)
        setTimeout(()=>playerTwoCard(),3000)
        setTimeout(()=>playerThreeCard(),4000)
        setTimeout(()=>newCardtoMe(),5000)   
    }

    
    return (
        <div>
            <div className="Board">
                <img className="player one" src={bcard} />
                <img className="player two" src={bcard} />
                <img className="player three" src={bcard} />
                {players}
                <MyPlayer name="Nigar" />
                <div className="right-corner-images">
                    <img className="inHand" src={handCard} />
                    <img className="newCard" src={newCard} />
                </div>
                <img className="myCard" src={bcard} />
                <div onClick={startGame} className="right-koloda">
                    <img src={koloda} />
                </div>
            </div>
        </div>
    )
}

export default Board