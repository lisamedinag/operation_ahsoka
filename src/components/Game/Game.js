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
                    <Button onClick={() => {this.startGame()}} name="Start game"/>
                : <GameBoard /> }
            </div>
        );
    }
};