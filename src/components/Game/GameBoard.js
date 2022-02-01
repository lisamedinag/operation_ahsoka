import React, {Component} from 'react';
import {UnloadingArea, GameResult, Containers, Button} from "../exportedComponents";

export default class Game extends Component {
    constructor() {
        super();
        this.state = {
            diceRoll: "",
            storageCabinet: {
                blueCookies: 3,
                frogEggs: 3,
                frogs: 3
            },
            grogusPosition: 0,
            cookieContainer: 0,
            eggContainer: 0,
            frogContainer: 0,
        }
    }

    rollDice() {
        // with this option it's harder to win:
        // const diceOutcomes = ["cookie", "Grogu", "egg", "frog", "Grogu"]

        const diceOutcomes = ["cookie", "egg", "frog", "Grogu"]
        const randomDiceRoll = diceOutcomes[Math.floor(Math.random()*diceOutcomes.length)]

        this.setState({diceRoll: randomDiceRoll})

         if(randomDiceRoll === "cookie" && this.state.storageCabinet.blueCookies > 0){
            this.setState(prevState => ({
                storageCabinet: {
                    ...prevState.storageCabinet,
                    blueCookies: this.state.storageCabinet.blueCookies - 1
                },
                cookieContainer: this.state.cookieContainer + 1
            }))

        } else if(randomDiceRoll === "egg" && this.state.storageCabinet.frogEggs > 0){
            this.setState(prevState => ({
                storageCabinet: {
                    ...prevState.storageCabinet,
                    frogEggs: this.state.storageCabinet.frogEggs - 1
                },
                eggContainer: this.state.eggContainer + 1
            }))

        } else if(randomDiceRoll === "frog"  && this.state.storageCabinet.frogs > 0){
            this.setState(prevState => ({
                storageCabinet: {
                    ...prevState.storageCabinet,
                    frogs: this.state.storageCabinet.frogs - 1
                },
                frogContainer: this.state.frogContainer + 1
            }))

        }else if(randomDiceRoll === "Grogu" && this.state.grogusPosition < 7){
            this.setState({
                grogusPosition: this.state.grogusPosition + 1
            })
        }
    }


    render() {
        const isGameWon = this.state.storageCabinet.blueCookies === 0 && this.state.storageCabinet.frogEggs === 0
            && this.state.storageCabinet.frogs === 0;
        const isGameLost = this.state.grogusPosition === 7;

        {if (isGameWon) {
                return (<GameResult isGameWon= "true"/>)
            } else if (isGameLost) {
                return (<GameResult isGameLost="true"/>)
            }}

        return (
            <div className="game-board">
                {/*<ul>*/}
                {/*    Storage cabinet*/}
                {/*    <li>Cookies: {this.state.storageCabinet.blueCookies}</li>*/}
                {/*    <li>Frog eggs: {this.state.storageCabinet.frogEggs}</li>*/}
                {/*    <li>Frogs: {this.state.storageCabinet.frogs}</li>*/}
                {/*</ul>*/}

                <Containers cookieContainer={this.state.cookieContainer} eggContainer={this.state.eggContainer}
                            frogContainer={this.state.frogContainer}/>

                <UnloadingArea grogusPosition={this.state.grogusPosition}/>

                <Button onClick={() => {this.rollDice()}} name="Roll"/>
                <h5>{this.state.diceRoll}</h5>
            </div>
        );
    }
};