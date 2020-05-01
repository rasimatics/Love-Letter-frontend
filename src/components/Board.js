import React, {useState,useEffect} from 'react'
import socketIOClient from 'socket.io-client'

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
            {response}
        </div>
    )
}


export default Board