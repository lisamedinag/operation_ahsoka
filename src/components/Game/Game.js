import React, {Component} from 'react';
import {GameBoard, Button} from "../exportedComponents";
import './Game.css'

export default class Game extends Component {
    constructor() {
        super();
        this.state = { hasBegan: false }
    }

    startGame() {
        this.setState({hasBegan: true})
    }

    render() {
        return (
            <div className="game">
                {this.state.hasBegan === false ?
                    <div className="start-button"><Button onClick={() => {this.startGame()}} name="Start"/></div>
                : <GameBoard /> }
            </div>
        );
    }
};