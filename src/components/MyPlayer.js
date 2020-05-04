import React from 'react'
import orangeCrown from '../images/onboard_assets/orange_crown.svg'
import heartPink from '../images/onboard_assets/pink_heart.svg'
import heartWhite from '../images/onboard_assets/white_heart.svg'
import timeIcon from '../images/onboard_assets/time_icon.svg'
import '../style/MyPlayer.css'
import Discard from './Discard'

const MyPlayer = (props) => {

    let stars = []
    for(let i=0; i<props.stars; i++)
        stars.push(<img src={heartPink} />)
    
    for(let i=0;i<10-props.stars;i++)
        stars.push(<img src={heartWhite} />)

    return (
        <div className="myplayer-card player-card-last">
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
                <Discard discard={props.discard}/>
            </div>
        </div>
    )
}

export default MyPlayer