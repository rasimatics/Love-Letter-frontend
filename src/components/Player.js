import React from "react";
import Discard from "./Discard";
import orangeCrown from "../images/onboard_assets/orange_crown.svg";
import heartPink from "../images/onboard_assets/pink_heart.svg";
import heartWhite from "../images/onboard_assets/white_heart.svg";
import "../style/Player.css";

const Player = (props) => {

  let stars = [];

  for (let i = 0; i < props.stars; i++) {
    stars.push(<img src={heartPink} alt='' />);
  }

  for (let i = 0; i < props.tokens_to_win - props.stars; i++)
      stars.push(<img key={i} src={heartWhite} />)

  return (
      <div className="player-card" onClick={(id)=>props.onClick(props.id)}>
          <div className="crown-container-player">
              <img src={orangeCrown} />
          </div>
          <div className="name-hearts-container-player">
              <h4>{props.name}</h4>
              <div className="hearts-container-player">
                  {stars}
              </div>
          </div>
          <Discard mydiscard={props.mydiscard} />
      </div>
  )
}

export default Player;
