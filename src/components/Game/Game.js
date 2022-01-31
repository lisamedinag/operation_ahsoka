import React, {Component} from 'react';
import {GameBoard} from "../exportedComponents";

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
                    <button onClick={() => this.startGame()}>Start game</button>
                : <GameBoard /> }
            </div>
        );
    }
};