import React, { useState } from "react";
import Modal from "react-modal";
import socketIOClient from "socket.io-client";
import Player from "./Player";
import MyPlayer from "./MyPlayer";
import koloda from "../images/onboard_assets/Koloda.svg";
import "../style/Board.css";
import card1 from "../images/love_cards/cards_loveletter-01.svg";
import card2 from "../images/love_cards/cards_loveletter-02.svg";
import card3 from "../images/love_cards/cards_loveletter-03.svg";
import card4 from "../images/love_cards/cards_loveletter-04.svg";
import card5 from "../images/love_cards/cards_loveletter-05.svg";
import card6 from "../images/love_cards/cards_loveletter-06.svg";
import card7 from "../images/love_cards/cards_loveletter-07.svg";
import card8 from "../images/love_cards/cards_loveletter-08.svg";
import bcard from "../images/love_cards/cards_loveletter-09.svg";
import deck from "../images/deck.svg";
import Discard from "./Discard";

const ENDPOINT = "http://104.248.20.1:8080";

Modal.setAppElement("#root");

const Board = () => {
  const [handCard, setHandCard] = useState(card7);
  const [newCard, setNewCard] = useState();
  const [mystars, setMystars] = useState(0);
  const [mydiscard, setMyDiscard] = useState([card4, card5, card6]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let n_players = parseInt(localStorage.getItem("n_players"));

  let players = [];

  for (let i = 0; i < n_players - 1; i++) {
    players.push(
      <Player name={"Anar"} stars={mystars} mydiscard={mydiscard} />
    );
  }

  const playerOneCard = () => {
    document.getElementsByClassName("one")[0].style.animationName = "playerOne";
    setTimeout(
      () =>
        (document.getElementsByClassName("one")[0].style.animationName = ""),
      3000
    );
  };

  const playerTwoCard = () => {
    document.getElementsByClassName("two")[0].style.animationName = "playerTwo";
    setTimeout(
      () =>
        (document.getElementsByClassName("two")[0].style.animationName = ""),
      3000
    );
  };

  const playerThreeCard = () => {
    document.getElementsByClassName("three")[0].style.animationName =
      "playerThree";
    setTimeout(
      () =>
        (document.getElementsByClassName("three")[0].style.animationName = ""),
      3000
    );
  };

  const myFirstCard = () => {
    document.getElementsByClassName("myCard")[0].style.animationName =
      "myFirstCard";
    setTimeout(() => {
      document.getElementsByClassName("inHand")[0].style.opacity = "1";
    }, 400);
  };

  const newCardtoMe = () => {
    document.getElementsByClassName("myCard")[0].style.animationName = "myCard";
    setTimeout(() => {
      document.getElementsByClassName("newCard")[0].style.opacity = "1";
    }, 400);
  };

  const startGame = () => {
    setNewCard(card8);
    if (n_players === 4) {
      setTimeout(() => myFirstCard(), 1000);
      setTimeout(() => playerOneCard(), 2000);
      setTimeout(() => playerTwoCard(), 3000);
      setTimeout(() => playerThreeCard(), 4000);
      setTimeout(() => newCardtoMe(), 5000);
    } else if (n_players === 3) {
      setTimeout(() => myFirstCard(), 1000);
      setTimeout(() => playerOneCard(), 2000);
      setTimeout(() => playerThreeCard(), 3000);
      setTimeout(() => newCardtoMe(), 4000);
    } else {
      setTimeout(() => myFirstCard(), 1000);
      setTimeout(() => playerTwoCard(), 2000);
      setTimeout(() => newCardtoMe(), 3000);
    }
  };

  var url = document.URL;
  var gameId = url.substring(url.lastIndexOf("/") + 1);

  return (
    <div>
      <div className='Board'>
        <div className='game-id'>#{gameId}</div>

        <img className='player one' src={bcard} alt='' />
        <img className='player two' src={bcard} alt='' />
        <img className='player three' src={bcard} alt='' />

        {players}

        <MyPlayer name='Nigar' stars={mystars} mydiscard={mydiscard} />

        <div className='right-corner-images'>
          <img className='inHand' src={handCard} alt='' />
          <img className='newCard' src={newCard} alt='' />
        </div>

        <img className='myCard' src={bcard} />

        <div onClick={startGame} className='right-koloda'>
          <img src={koloda} alt='' />
        </div>

        <div className='modal-container'>
          <button className='modal-btn' onClick={() => setModalIsOpen(true)}>
            <img src={deck} />
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className='Modal'
            overlayClassName='Overlay'
          >
            <div className='modal-text-top'>
              <h3>Select "Jake the Dog" <br/> Guard Target</h3>
            </div>

            <div className='modal-cards'>
              <img src={card2} />
              <img src={card3} />
              <img src={card4} />
              <img src={card5} />
              <img src={card6} />
              <img src={card7} />
              <img src={card8} />
            </div>

            <div className='modal-text-bottom'>
              <h2>Use the characters in <br/> the cartoon</h2>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Board;
