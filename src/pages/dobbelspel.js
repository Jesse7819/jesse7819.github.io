import React from "react";
import { diceRollInfoFunction, resetDiceRollFunction, startGameFunction } from "../components/dobbelspel";
import dice6 from '../images/dice6.png';
const Dobbelspel = () => {
    return (

        <div className="dobbelspelContainer">
            <h1 className="dobbelspelTitel">Dobbelspel</h1>
            <div className="areas">
                <div className="leftArea">
                    <h2 className="player1Name">Player 1: </h2>
                    <div className="dices1">
                        <img className="diceOne" src={dice6} alt="#"></img>
                        <img className="diceTwo" src={dice6} alt="#"></img>
                    </div>
                </div>

                <div className="rightArea">
                    <h2 className="player2Name">Player 2: </h2>
                    <div className="dices2">
                        <img className="diceThree" src={dice6} alt="#"></img>
                        <img className="diceFour" src={dice6} alt="#"></img>
                    </div>
                </div>

                <button className="startBtn" type="button" onClick={diceRollInfoFunction}>Start spel</button>
                {/* <button class="rollDiceBtn" type="button" onclick="startGameFunction()">Begin het spel</button> */}
                <button className="resetBtn" type="button" onClick={resetDiceRollFunction}>Stop spel</button>
                <button className="rollDice" type="button" onClick={startGameFunction}>Rol de stenen</button>
            </div>

            <div className="playerTurn"></div>
            


            <div className="resultaat"></div>
        </div>


    );
};


export default Dobbelspel;
