import React, { useState } from 'react'
import '../style/play.css'
import purple_vector from '../images/vector_puple_vector.svg'
import robot from '../images/robot_vector.svg'
import witch from '../images/witch_vector.svg'
import cancel from '../images/vector_cancel.svg'
import { Link } from 'react-router-dom'

const Play = () => {
    const [value, setValue] = useState("")
    const postData = () => {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ nickname: value })
        // }
        // const url = "http://104.248.20.1:8080/api/player"

        // fetch(url, requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        console.log(value,"Sent")
    }

    return (
        <div className="play-page">
            <div className="choose-nickname">Choose a Nickname</div>
            <button className="btn-close"><img src={cancel} /></button>
            <img className="robot" src={robot} alt="Not Found" />
            <input
                className="input-box"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
                placeholder="Nickname"
            />
            <Link to="/gamemode"> 
            <button
                className="go-button"
                onClick={postData}>
                OK,GO
            </button>
            </Link>
            <img className="witch" src={witch} alt="Not Found" />
            <img className="background-vector" src={purple_vector} alt="Not Found" />
        </div >
    )
}


export default Play