import React, {useState,useEffect} from 'react'
import socketIOClient from 'socket.io-client'
import Player from './Player';
import MyPlayer from './MyPlayer';
import koloda from  '../images/onboard_assets/Koloda.svg'
import card1 from '../images/love_cards/cards_loveletter-02.svg'
import card2 from '../images/love_cards/cards_loveletter-03.svg'
import '../style/Board.css'

const ENDPOINT = "http://104.248.20.1:8080";

const Board = () => {

    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("/api/game/", data => {
            setResponse(data);
        });
    }, []);

    return (
        <div className="Board">
            <Player />
            <Player />
            <Player />
            <MyPlayer />
            <div className="right-corner-images">
                <img src={card1} />
                <img src={card2} />
            </div>
            <div className="right-koloda">
                <img src={koloda} />
            </div>
        </div>  
    )
}

export default Board