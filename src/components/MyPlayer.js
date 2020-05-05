import React from 'react'
import orangeCrown from '../images/onboard_assets/orange_crown.svg'
import heartPink from '../images/onboard_assets/pink_heart.svg'
import heartWhite from '../images/onboard_assets/white_heart.svg'
import timeIcon from '../images/onboard_assets/time_icon.svg'
import Discard from './Discard'
import '../style/MyPlayer.css'

const MyPlayer = (props) => {

    let stars = []
    for (let i = 0; i < props.stars; i++)
        stars.push(<img src={heartPink} />)

    for (let i = 0; i < 10 - props.stars; i++)
        stars.push(<img src={heartWhite} />)

    return (
        <div className="myplayer-card player-card-last">
            <div className="mydiscard">
                <Discard mydiscard={props.mydiscard} />
            </div>
            <div className="name-hearts-container">
                <div className="hearts-container">
                    {stars}
                </div>
                <h4>{props.name}</h4>
                <div className="time-icon">
                    <img src={timeIcon} />
                </div>
                <div className="crown-container">
                    <img src={orangeCrown} />
                </div>
            </div>
        </div>
    )
}

export default MyPlayer