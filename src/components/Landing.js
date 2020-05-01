import React from 'react';
import { Link } from 'react-router-dom'
import '../style/landing.css'
import hearts from '../images/heart_hearts.svg'
import post from '../images/letters_letters.svg'
import cancel from '../images/vector_cancel.svg'
import princess from '../images/frame_princess.svg'
import purple_vector from '../images/vector_puple_vector.svg'
import login from '../images/login_icon.svg'
import settings from '../images/settings 1_icon.svg'
import ladder from '../images/leadrer 1_icon.svg'


const Landing = () => {
    return (
        <div className="main">
            <img className="purple-vector" src={purple_vector} alt="Not Found" />
            <img className="hearts" src={hearts} alt="Not Found" />
            <div className="word-love">Love</div>
            <div className="word-letter">LETTER</div>
            <button className="btn-close"><img src={cancel} /></button>
            <img className="post" src={post} alt="Not Found" />
            <img className="princess" src={princess} alt="Not Found" />
            <Link to="/play">
                <button
                    className="play"
                    >Click to play
                </button>
            </Link>
            <div className="buttons">
                <button className="bottom-buttons"><img className="bottom-img" src={login} alt="Not Found" /></button>
                <button className="bottom-buttons"><img className="bottom-img" src={ladder} alt="Not Found" /></button>
                <button className="bottom-buttons"><img className="bottom-img" src={settings} alt="Not Found" /></button>
            </div>
        </div>
    )
}
export default Landing;