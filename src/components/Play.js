import React from 'react'
import style from '../style/play.css'
import purple_vector from '../images/vector_puple_vector.svg'
import robot from '../images/robot_vector.svg'
import witch from '../images/witch_vector.svg'
import cancel from '../images/vector_cancel.svg'

class Play extends React.Component {
    constructor() {
        super()
        this.state = {value : ""}
        this.postData=this.postData.bind(this)
    }

    postData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nickname: this.state.value })
        }

        fetch('http://104.248.20.1:3000/api/player', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div className="play-page">
                <div className="choose-nickname">Choose a Nickname</div>
                <button className="btn-close"><img src={cancel} /></button>
                <img className="robot" src={robot} alt="Not Found" />
                <input
                    className="input-box"
                    onChange={(e) => this.setState({ value: e.target.value })}
                    value={this.state.value}
                    type="text"
                    placeholder="Nickname"
                />
                <button
                    className="go-button"
                    onClick={this.postData}
                >OK,GO
                </button>
                <img className="witch" src={witch} alt="Not Found" />
                <img className="background-vector" src={purple_vector} alt="Not Found" />
            </div>
        )
    }
}

export default Play