import React, { useState, useEffect } from "react";
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
import Modal from "react-modal";
import { socket } from '../helpers/socket'
import CardsInfor from "./CardsInfor";


Modal.setAppElement("#root");

const Board = () => {
  const [handCard, setHandCard] = useState();
  const [newCard, setNewCard] = useState();
  const [modalGuardIsOpen, setmodalGuardIsOpen] = useState(false);
  const [mystars, setMystars] = useState(0);
  const [players, setPlayers] = useState([])
  const [selected_card, setSelected_card] = useState()
  const [turn, setTurn] = useState()
  const [cardClass, setCardClass] = useState("")
  const [showCard, setShowCard] = useState()
  const [mydiscard, setMyDiscard] = useState();
  const [tokens_to_win, setTokens_to_win] = useState()

  let n_players = parseInt(localStorage.getItem("n_players"));

  useEffect(() => {
    socket.on("card-played", data => console.log(data))
    socket.on("play-card", data => console.log(data))
    socket.on("err", data => alert(data.msg))
    socket.on("info", data => console.log(data))
    socket.on("player-discarded", data => console.log(data))
    socket.on("player-eliminated", data => console.log(data))
    socket.on("round-over", (data) => console.log(data))

    setInterval(() => {
      const URL = "http://104.248.20.1:8080/api/game/" + localStorage.getItem("gid")
      socket.on('connect', () => {
        socket.emit('connect-to-room', localStorage.getItem("gid"))
      });
      fetch(URL).then(response => response.json())
        .then(data => {
          setPlayers(data.players)
          let id = parseInt(localStorage.getItem("id"))
          setTokens_to_win(data.tokens_to_win)
          setHandCard(whichCard(data.players.find(player => player.id === id).on_hand_card_id))
          setNewCard(whichCard(data.players.find(player => player.id === id).taken_card_id))

          n_players = data.n_players
          setTurn(data.whose_turn_player_id)
          //split cards 
          if (n_players === data.players.length && localStorage.getItem("splitted") === "false") {
            localStorage.setItem("splitted", "true")
            startGame()
            setTimeout(() => {
              if (data.whose_turn_player_id === id) {
                newCardtoMe()
              } else {
                switch (n_players) {
                  case 2: playerOneCard()
                  case 3: playerOneCard()
                  case 4: playerOneCard()
                }
              }
            }, 3500)
          }
          //if spiltted show my cards
          else if (n_players === data.players.length && localStorage.getItem("splitted") === "true") {
            document.getElementsByClassName("inHand")[0].style.opacity = 1
            document.getElementsByClassName("newCard")[0].style.opacity = 1
          }
        })
    }, 1000)

  }, [])


  const whichCard = (id) => {
    switch (id) {
      case 1: return card1
      case 2: return card2
      case 3: return card3
      case 4: return card4
      case 5: return card5
      case 6: return card6
      case 7: return card7
      case 8: return card8
    }
  }

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
  }


  const newCardtoMe = () => {
    document.getElementsByClassName("myCard")[0].style.animationName = "myCard"
    document.getElementsByClassName("newCard")[0].style.opacity = 1
  }



  const startGame = () => {
    if (n_players === 4) {
      setTimeout(() => myFirstCard(), 1000)
      setTimeout(() => playerOneCard(), 2000)
      setTimeout(() => playerTwoCard(), 3000)
      setTimeout(() => playerThreeCard(), 4000)
    }
    else if (n_players === 3) {
      setTimeout(() => myFirstCard(), 1000)
      setTimeout(() => playerOneCard(), 2000)
      setTimeout(() => playerThreeCard(), 3000)
    } else {
      setTimeout(() => myFirstCard(), 1000)
      setTimeout(() => playerOneCard(), 2000)
    }
  }
  const selectCard = (e) => {
    if (newCard === undefined) {
      alert("Not your turn")
    } else {
      setSelected_card(e.target.src.match(/^\d+|\d+\b|\d+(?=\w)/g)[1])
      setCardClass(e.target.className)
    }

  }

  const [guardguess, setGuardguess] = useState(null)

  const guardClick = (id) => {
    setGuardguess(id)
    setmodalGuardIsOpen(false)
  }

  const playToPlayer = (id) => {
    if (selected_card) {
      if (parseInt(selected_card[1]) == 1) {
        setmodalGuardIsOpen(true)
        if (guardguess == null);
          socket.emit('play-card',
            {
              player: {
                id: turn
              },
              card: {
                id: parseInt(selected_card[1])
              },
              target: {
                player: {
                  id: id
                },
                card: {
                  id: guardguess
                }
              }
            })
          setGuardguess(null)
        
      }
      else {
        if (selected_card[1] == 2) {
          if (JSON.parse(players.find(player => player.id === id).discarded_cards).pop() !== 4 && turn !== id) {
            let priestShow = players.find(player => player.id === id).on_hand_card_id
            priestShowCard(parseInt(localStorage.getItem("id")), priestShow);

          }
        }
        socket.emit('play-card',
          {
            player: {
              id: turn
            },
            card: {
              id: parseInt(selected_card[1])
            },
            target: {
              player: {
                id: id
              }
            }
          })
      }
      setSelected_card()
      setCardClass("")

    }
    else {
      alert("Choose card")
    }
  }

  const priestShowCard = (whom, card) => {
    if (whom === parseInt(localStorage.getItem("id"))) {
      setShowCard(whichCard(card))
      document.getElementsByClassName("casePriest")[0].style.animationName = "showCard"
      setTimeout(() => {
        document.getElementsByClassName("casePriest")[0].style.animationName = ""
      }, 3000)
    }
  }



  let url = document.URL;
  let gameId = url.substring(url.lastIndexOf("/") + 1);

  return (
    <div>
      <div className='Board'>
        <div className='game-id'>#{gameId}</div>

        <img className='player one' src={bcard} alt='' />
        <img className='player two' src={bcard} alt='' />
        <img className='player three' src={bcard} alt='' />

        {players.map(player => player.id != localStorage.getItem("id") ?
          <Player key={player.id} id={player.id} onClick={playToPlayer} name={player.nickname} mydiscard={JSON.parse(player.discarded_cards)} stars={player.tokens_of_af} tokens_to_win={tokens_to_win} />
          :
          <MyPlayer key={player.id} id={player.id} onClick={playToPlayer} name={player.nickname} mydiscard={JSON.parse(player.discarded_cards)} stars={player.tokens_of_af} tokens_to_win={tokens_to_win} />)}


        <div className="right-corner-images">
          <img className="inHand" src={handCard} onClick={selectCard} alt="" />
          <img className="newCard" src={newCard} onClick={selectCard} alt="" />
        </div>

        <img className="casePriest" src={showCard} />

        <img className='myCard' src={bcard} alt='' />

        <div className="right-koloda">
          <img src={koloda} onClick={() => setmodalGuardIsOpen(true)} alt="" />
        </div>

        <CardsInfor />


        <div className='modal-container'>
          <Modal
            isOpen={modalGuardIsOpen}
            onRequestClose={() => setmodalGuardIsOpen(false)}
            className='Modal'
            overlayClassName='Overlay'
          >
            <div className='modal-text-top'>
              <h3>Select "Jake the Dog" <br /> Guard Target</h3>
            </div>

            <div className='modal-cards'>
              <img src={card2} onClick={() => guardClick(2)} alt='' />
              <img src={card3} onClick={() => guardClick(3)} alt='' />
              <img src={card4} onClick={() => guardClick(4)} alt='' />
              <img src={card5} onClick={() => guardClick(5)} alt='' />
              <img src={card6} onClick={() => guardClick(6)} alt='' />
              <img src={card7} onClick={() => guardClick(7)} alt='' />
              <img src={card8} onClick={() => guardClick(8)} alt='' />
            </div>

            <div className='modal-text-bottom'>
              <h2>Use the characters in <br /> the cartoon</h2>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Board;
