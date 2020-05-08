import React from 'react'
import "../style/Discard.css"

const Discard = (props) => {
    return (
        <div className="discard">
            {props.mydiscard && props.mydiscard.map((card, index) =><img key={index} className="dcard" src={card} />)}
        </div>
    )
}

export default Discard