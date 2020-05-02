import React, { useState, useEffect } from 'react'
import cancel from '../images/vector_cancel.svg'
import purple_vector from '../images/vector_puple_vector.svg'
import { Link } from 'react-router-dom'
import '../style/CreateGame.css'
import '../style/Shared.css'



const CreateGame = () => {
    const [player,setPlayer] = useState(2)

    const id = localStorage.getItem("id")
    console.log(id)

    const change = (e)=>{
        setPlayer(e.target.value)
    }
    const createGame = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ n_players: player,created_by_player_id:id})
        }
        const url = "http://104.248.20.1:8080/api/game/"

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => window.open("/game/"+data.id,"_self"))
    }

    
    return (
        <div className="game-page">
            <div className="choose">Choose game mode</div>
            <button className="btn-close"><img src={cancel} /></button>
            <div className="mode">
                <p className="header">Number of players:</p>
                <form onSubmit={createGame}>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={change} name="players" value="2" checked={player==2} />
                                2 Players
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={change} name="players"  value="3" checked={player==3} />
                                3 Players
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={change} name="players"  value="4" checked={player==4} />
                                4 Players
                        </label>
                    </div>
                    <input className="btn-next" type="submit" value="Next"/>
                </form>

            </div>
            <img className="purple-vector" src={purple_vector} alt="Not Found" />
        </div>
    )
}


export default CreateGame