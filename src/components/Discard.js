import React from "react";
import "../style/Discard.css";

const Discard = (props) => {
  return (
    <div className='discard'>
      {props.mydiscard.map((card, index) => (
        <img key={index} className='dcard' src={card} alt='' />
      ))}
    </div>
  );
};

export default Discard;
