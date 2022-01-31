import React, {Component} from 'react';

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
        const diceOutcomes = ["cookie", "egg", "frog", "Grogu"]
        const randomDiceRoll = diceOutcomes[Math.floor(Math.random()*diceOutcomes.length)]

        this.setState({diceRoll: randomDiceRoll})
        console.log("DICE ROOOL", randomDiceRoll)

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

        {
            if (isGameWon) {
                return (<h1>YOU HAVE WON</h1>)

            } else if (isGameLost) {
                return (<h1>YOU HAVE LOST</h1>)
            }
        }
        return (
            <div className="game-board">
                <h5>{this.state.diceRoll}</h5>
                <button onClick={()=> {this.rollDice();}}>Dice</button>
                <ul>
                    Storage cabinet:
                    <li>Cookies: {this.state.storageCabinet.blueCookies}</li>
                    <li>Frog eggs: {this.state.storageCabinet.frogEggs}</li>
                    <li>Frogs: {this.state.storageCabinet.frogs}</li>
                </ul>

                <p>Grus position: {this.state.grogusPosition}</p>

                <p>Cookie container: {this.state.cookieContainer}</p>

                <p>Frog eggs container: {this.state.eggContainer}</p>

                <p>Frogs container: {this.state.frogContainer}</p>

            </div>
        );
    }
};