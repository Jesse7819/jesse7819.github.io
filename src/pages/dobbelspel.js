import React from "react";
import { diceRollInfoFunction, resetDiceRollFunction, startGameFunction } from "../components/dobbelspel";
import dice6 from '../images/dice6.png';
const Dobbelspel = () => {
    return (
        
        <div className="dobbelspelContainer">
            <div className="diceButtons">
                <button className="startBtn" type="button" onClick={diceRollInfoFunction}>Start spel</button>
                {/* <button class="rollDiceBtn" type="button" onclick="startGameFunction()">Begin het spel</button> */}
                <button className="resetBtn" type="button" onClick={resetDiceRollFunction}>Stop het spel</button>
            </div>

            <p className="player1Name"></p>
            <p className="player2Name"></p>

            <div className="playerTurn"></div>
            <button className="rollDice" type="button" onClick={startGameFunction}>Rol de dobbelstenen</button>

            <div className="numbersRolled">
                <img className="diceOne" src={dice6} alt="#"></img>
                <img className="diceTwo" src={dice6} alt="#"></img>
            </div>
            <div className="resultaat"></div>
        </div>
       
        
    );
};


export default Dobbelspel;
