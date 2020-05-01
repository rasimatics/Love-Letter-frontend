import React, { useState,useEffect } from 'react'
import cancel from '../images/vector_cancel.svg'
import purple_vector from '../images/vector_puple_vector.svg'
import guy_vector from '../images/guy_vector.svg'
import '../style/Gamemode.css'
import { Link } from 'react-router-dom'



const Gamemode = () => {
    const [mode, setMode] = useState("")
    return (
        <div className="gamemode">
            <div className="choose-mode">Choose game mode</div>
            <button className="btn-close"><img src={cancel} /></button>
            <img className="guy-vector" src={guy_vector} alt="Not Found" />
            <div className="mode">
                <button className="btn-mode" onClick={() => setMode("splayer")}>Sigle Player</button>
                <Link to={{pathname:"join-or-create"}}>
                    <button className="btn-mode" onClick={() => setMode("mplayer")}>Multi Player</button>
                </Link>
            </div>
            <div className="help">Help&FAQ</div>
            <img className="purple-vector" src={purple_vector} alt="Not Found" />
        </div>
    )
}


export default Gamemode