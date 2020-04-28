import React from 'react'
import cancel from '../images/vector_cancel.svg'
import purple_vector from '../images/vector_puple_vector.svg'
import { Link } from 'react-router-dom'
import '../style/CreateGame.css'



const CreateGame = () => {
    return (
        <div className="gamemode">
            <div className="choose-mode">Choose game mode</div>
            <button className="btn-close"><img src={cancel} /></button>
            <div className="mode">
                <p className="header">Number of players:</p>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" name="players" value="2" checked={true} />
                                2 Players
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="players"  value="3" />
                                3 Players
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="players"  value="4" />
                                4 Players
                        </label>
                    </div>
                    <input className="btn-next" type="submit" value="Next"/>
                </form>

            </div>
            <img className="purple-vector" src={purple_vector} alt="Not Found" />
        </div>
    )
}


export default CreateGame