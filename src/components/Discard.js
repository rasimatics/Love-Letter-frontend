import React from 'react'

const Discard = (props) => {
    let cards = props.discard
    console.log(cards)
    return (
        <div>
            Discarded cards
        </div>
    )
}

export default Discard