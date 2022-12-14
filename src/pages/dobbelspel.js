import React from "react";
import { diceRollInfoFunction, resetDiceRollFunction, startGameFunction } from "../components/dobbelspel";

const Dobbelspel = () => {
return (
	<div class="dobbelspelContainer">
            <div class="diceButtons">
                <button class="startBtn" type="button" onClick={diceRollInfoFunction}>Start spel</button>
                {/* <button class="rollDiceBtn" type="button" onclick="startGameFunction()">Begin het spel</button> */}
                <button class="resetBtn" type="button" onClick={resetDiceRollFunction}>Stop het spel</button>
            </div>
            
            
            <p class="player1Name"></p>
            <p class="player2Name"></p>
            
            <div class="playerTurn"></div>
            <button class="rollDice" type="button" onClick={startGameFunction}>Rol de dobbelstenen</button>

            <div class="numbersRolled">
                <h1 class="diceOne"></h1>
                <h1 class="diceTwo"></h1>
            </div>
            <div class="resultaat"></div>
        </div>
);
};

export default Dobbelspel;
