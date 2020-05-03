import React from 'react'
import orangeCrown from '../images/onboard_assets/orange_crown.svg'
import heartPink from '../images/onboard_assets/pink_heart.svg'
import heartWhite from '../images/onboard_assets/white_heart.svg'
import timeIcon from '../images/onboard_assets/time_icon.svg'
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
                <h4>Asad</h4>
                <div className="time-icon">
                    <img src={timeIcon} />
                </div>
                <div className="crown-container">
                    <img src={orangeCrown}/>
                </div>
            </div>
        </div>
    )
}

export default MyPlayer