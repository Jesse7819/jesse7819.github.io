import React from "react";
import { diceRollInfoFunction, resetDiceRollFunction, startGameFunction, stopDiceGameFunction } from "../components/dobbelspel";
import dice6 from '../images/dice6.png';
const Dobbelspel = () => {
    return (

        <div className="dobbelspelContainer">
            <h1 className="dobbelspelTitel">Dobbelspel</h1>
            <div className="areas">

                <div className="leftArea">
                    <h2 className="player1Name">Player 1: </h2>
                    <div className="dices1">
                        <h3 className="player1Score">{/**/}</h3>
                        <img className="diceOne" src={dice6} alt="#"></img>
                        <img className="diceTwo" src={dice6} alt="#"></img>

                    </div>
                </div>

                <div className="rightArea">
                    <h2 className="player2Name">Player 2: </h2>
                    <div className="dices2">
                        <h3 className="player2Score">{/**/}</h3>
                        <img className="diceThree" src={dice6} alt="#"></img>
                        <img className="diceFour" src={dice6} alt="#"></img>
                    </div>
                </div>
                <h2 className="score">0|0</h2>
                <h2 className="playerTurn">{/**/}</h2>
                <h2 className="resultaat">{/**/}</h2>

                <button className="startBtn" type="button" onClick={diceRollInfoFunction}>Start spel</button>
                <button className="resetBtn" type="button" onClick={resetDiceRollFunction}>Speel nog een keer</button>
                <button className="stopBtn" type="button" onClick={stopDiceGameFunction}>Stop spel</button>
                <button className="rollDice" type="button" onClick={startGameFunction}>Rol de stenen</button>
            </div>
        </div>
    );
};


export default Dobbelspel;
