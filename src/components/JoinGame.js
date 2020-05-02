import React, { useState } from 'react'
import purple_vector from '../images/vector_puple_vector.svg'
import cancel from '../images/vector_cancel.svg'
import { Link } from 'react-router-dom'
import '../style/Shared.css'

const JoinGame = () => {
    const [value, setValue] = useState("")

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
            <Link to={{ pathname: "" }} >
                <button
                    className="go-button">
                    OK,GO
                </button>
            </Link>
            <img className="background-vector" src={purple_vector} alt="Not Found" />
        </div >
    )
}


export default JoinGame