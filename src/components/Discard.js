import React from 'react'
import "../style/Discard.css"

import card1 from '../images/love_cards/cards_loveletter-01.svg'
import card2 from '../images/love_cards/cards_loveletter-02.svg'
import card3 from '../images/love_cards/cards_loveletter-03.svg'
import card4 from '../images/love_cards/cards_loveletter-04.svg'
import card5 from '../images/love_cards/cards_loveletter-05.svg'
import card6 from '../images/love_cards/cards_loveletter-06.svg'
import card7 from '../images/love_cards/cards_loveletter-07.svg'
import card8 from '../images/love_cards/cards_loveletter-08.svg'

const whichCard = (id) => {
    switch (id) {
        case 1: return card1
        case 2: return card2
        case 3: return card3
        case 4: return card4
        case 5: return card5
        case 6: return card6
        case 7: return card7
        case 8: return card8
    }
}

const Discard = (props) => {
    return (
        <div className="discard">
            {props.mydiscard && props.mydiscard.map((card, index) =><img key={index} className="dcard" src={whichCard(card)} />)}
        </div>
    )
}

export default Discard