import $ from "jquery";
import dice6 from '../images/dice6.png';
import dice5 from '../images/dice5.png';
import dice4 from '../images/dice4.png';
import dice3 from '../images/dice3.png';
import dice2 from '../images/dice2.png';
import dice1 from '../images/dice1.png';

var diceRollInfo = false;
var player1DiceRoll1;
var player1DiceRoll2;
var player2DiceRoll1;
var player2DiceRoll2;
var player1Total;
var player2Total;
var turn = "player1";
var beurt;
var player1Name = "";
var player2Name = "";
var winner;
var snakeEyes1 = false;
var snakeEyes2 = false;
let diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];




export function diceRollInfoFunction() {

    player1Name = prompt("Wat is de naam van speler 1?");
    player2Name = prompt("Wat is de naam van speler 2?");
    
    if(diceRollInfo === false) {
        if ((player1Name && player2Name) !== "" || null) {
            // document.getElementsByClassName("player1Name")[0].innerHTML = "Speler: " + player1Name;
            // document.getElementsByClassName("player2Name")[0].innerHTML = "Speler: " + player2Name;
            $(".player1Name").text("Speler: " + player1Name);
            $(".player2Name").text("Speler: " + player2Name);
            diceRollInfo = true;
            $(".resetBtn").css("display", "block");
            $(".rollDice").css("display", "block");
            $(".startBtn").css("display", "none");
            getTurnPlayer();
        } else {
            // document.getElementsByClassName("player1Name")[0].innerHTML = "Oh, U heeft niets ingevuld! Wilt u uw naam niet vertellen?";
            // document.getElementsByClassName("player2Name")[0].innerHTML = "";
            $(".player1Name").text("Oh, U heeft niets ingevuld! Wilt u uw naam niet vertellen?");
            $(".player2Name").text("");
            diceRollInfo = false;
            $(".resetBtn").css("display", "none");
            $(".rollDiceBtn").css("display", "none");
        }
    }

}

export function getTurnPlayer() {

    if(turn === "player1"){
        beurt = player1Name + " is aan de beurt.";
    } else {
        beurt = player2Name + " is aan de beurt.";
    }
    $(".playerTurn").css("display", "block");
    $(".playerTurn").text(beurt);
}

export function resetDiceRollFunction() {
    diceRollInfo = false;
    player1Name = "";
    player2Name = "";
    $(".player1Name").text("");
    $(".player2Name").text("");
    player1DiceRoll1 = 0;
    player1DiceRoll2 = 0;
    player2DiceRoll1 = 0;
    player2DiceRoll2 = 0;
    $(".resetBtn").css("display", "none");
    $(".rollDiceBtn").css("display", "none");
    $(".startBtn").css("display", "block");
    $(".diceOne").text("");
    $(".diceTwo").text("");
    turn = "player1";
    $(".playerTurn").css("display", "none");
    snakeEyes1 = false;
    snakeEyes2 = false;
}

export function startGameFunction() {


    if(turn === "player1") {
        
        player1DiceRoll1 = Math.floor(Math.random() * 6 + 1);
        player1DiceRoll2 = Math.floor(Math.random() * 6 + 1);
        
        player1Total = (player1DiceRoll1 + player1DiceRoll2);
        document.querySelector(".diceOne").setAttribute("src", diceImages[player1DiceRoll1 - 1]);
        document.querySelector(".diceTwo").setAttribute("src", diceImages[player1DiceRoll2 - 1]);
        if(player1Total === 2) {
            snakeEyes1 = true;
        }
        turn = "player2";
        getTurnPlayer();
        $(".player1Name").text("Speler: " + player1Name + ": heeft " + player1DiceRoll1 + " + " + player1DiceRoll2 + " (" + player1Total + ") gerold.");
    } else if(turn === "player2") {
        player2DiceRoll1 = Math.floor(Math.random() * 6 + 1);
        player2DiceRoll2 = Math.floor(Math.random() * 6 + 1);
        player2Total = (player2DiceRoll1 + player2DiceRoll2);
        document.querySelector(".diceOne").setAttribute("src", diceImages[player2DiceRoll1 - 1]);
        document.querySelector(".diceTwo").setAttribute("src", diceImages[player2DiceRoll2 - 1]);
        if(player2Total === 2) {
            snakeEyes2 = true;
        }
        turn = "player1";
        getTurnPlayer();
        $(".player2Name").text("Speler: " + player2Name + ": heeft " + player2DiceRoll1 + " + " + player2DiceRoll2 + " (" + player2Total + ") gerold.");
        getResultaat();
    }

}

export function getResultaat() {

    if(snakeEyes1 === true || snakeEyes2 === true) {
        if(snakeEyes1 === true) {
            winner = player1Name;
        } 
        if(snakeEyes2 === true) {
            winner = player2Name;
        }
    } else if((snakeEyes1 === true && snakeEyes2 === true) || (player1Total === player2Total)) {
        $(".resultaat").text("Gelijkspel!");
        return;
    } 
    if(player1Total > player2Total) {
        winner = player1Name;
    } 
    if(player2Total > player1Total) {
        winner = player2Name;
    }

    $(".resultaat").text(winner + " heeft gewonnen!");
}