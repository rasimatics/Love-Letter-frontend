import React from 'react'
import orangeCrown from '../images/onboard_assets/orange_crown.svg'
import heartPink from '../images/onboard_assets/pink_heart.svg'
import heartWhite from '../images/onboard_assets/white_heart.svg'
import timeIcon from '../images/onboard_assets/time_icon.svg'
import card1 from '../images/love_cards/cards_loveletter-02.svg'
import card2 from '../images/love_cards/cards_loveletter-03.svg'
import '../style/MyPlayer.css'

const MyPlayer = () => {

    return (
        <div className="player-card player-card-last">
            <div className="name-hearts-container">
                <div className="hearts-container">
                    <img src={heartPink} />
                    <img src={heartPink} />
                    <img src={heartWhite} />
                    <img src={heartWhite} />
                    <img src={heartWhite} />
                    <img src={heartWhite} />
                    <img src={heartWhite} />
                </div>
                <h4>Nigar</h4>
                <div className="time-icon">
                    <img src={timeIcon} />
                </div>
                <div className="crown-container">
                    <img src={orangeCrown} />
                </div>
            </div>
            <div className="right-corner-images">
                <img src={card1} />
                <img src={card2} />
            </div>
        </div>
    )
}

export default MyPlayer