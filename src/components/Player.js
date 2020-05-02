import React from 'react'
import orange from '../images/onboard_assets/orange_crown.svg'
import place from '../images/onboard_assets/purple_card_bg.svg'
import '../style/Player.css'

const Player = () => {

    return (
        <div className="player-card">
            <img className="icon" src={orange}/>
            <div className="name-points">
                <h4>Anar</h4>
            </div>
            <img src={place}/>
        </div>
    )
}


export default Player