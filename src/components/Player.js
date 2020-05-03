import React from 'react'
import orangeCrown from '../images/onboard_assets/orange_crown.svg'
import heartPink from '../images/onboard_assets/pink_heart.svg'
import heartWhite from '../images/onboard_assets/white_heart.svg'
import '../style/Player.css'

const Player = () => {

    return (
            <div className="player-card">
                <div className="crown-container">
                    <img src={orangeCrown}/>
                </div>
                <div className="name-hearts-container">
                    <h4>Anar</h4>
                    <div className="hearts-container">
                        <img src={heartPink} />
                        <img src={heartPink} />
                        <img src={heartWhite} />
                        <img src={heartWhite} />
                        <img src={heartWhite} />
                        <img src={heartWhite} />
                        <img src={heartWhite} />
                    </div> 
                </div>
            </div>
    )
}

export default Player