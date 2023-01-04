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
let diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
var player1Score = 0;
var player2Score = 0;

export function diceRollInfoFunction() {

    player1Name = prompt("Wat is de naam van speler 1?");
    player2Name = prompt("Wat is de naam van speler 2?");

    if (diceRollInfo === false) {
        if (((player1Name && player2Name) !== null)) {
            if (((player1Name && player2Name) !== "")) {
                $(".player1Name").text("Player 1: " + player1Name);
                $(".player2Name").text("Player 2: " + player2Name);
                diceRollInfo = true;
                $(".stopBtn").show();
                $(".rollDice").show();
                $(".startBtn").hide();
                getTurnPlayer();
            } else {
                $(".player1Name").text("Oh, U heeft niets ingevuld! Wilt u uw naam niet vertellen?");
                $(".player2Name").text("");
                diceRollInfo = false;
                $(".stopBtn").hide();
                $(".rollDice").hide();
            }
        } else {
            $(".player1Name").text("Oh, U heeft niets ingevuld! Wilt u uw naam niet vertellen?");
            $(".player2Name").text("");
            diceRollInfo = false;
            $(".stopBtn").hide();
            $(".rollDice").hide();
        }
    }
}

export function resetDiceRollFunction() {
    diceRollInfo = false;
    player1DiceRoll1 = 0;
    player1DiceRoll2 = 0;
    player2DiceRoll1 = 0;
    player2DiceRoll2 = 0;
    player1Total = 0;
    player2Total = 0;
    $(".resetBtn").hide();
    $(".dices1").hide();
    $(".dices2").hide();
    turn = "player1";
    $(".resultaat").text("");
    getTurnPlayer();
    $(".rollDice").show();
    $(".player1Name").text("Player 1: " + player1Name);
    $(".player2Name").text("Player 2: " + player2Name);
}

export function stopDiceGameFunction() {
    resetDiceRollFunction();
    player1Name = "";
    player2Name = "";
    $(".player1Name").text("Player 1: ");
    $(".player2Name").text("Player 2: ");
    $(".startBtn").show();
    $(".playerTurn").hide();
    $(".rollDice").hide();
    $(".rightArea").css("opacity", "1");
    $(".stopBtn").hide();
    player1Score = 0;
    player2Score = 0;
    $(".score").text(player1Score + "|" + player2Score);
}

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

function getTurnPlayer() {
    if (turn === "player1") {
        beurt = player1Name + " is aan de beurt.";
        $(".rightArea").css("opacity", "0.5");
        $(".leftArea").css("opacity", "1");
    } else {
        beurt = player2Name + " is aan de beurt.";
        $(".rightArea").css("opacity", "1");
        $(".leftArea").css("opacity", "0.5");
    }
    $(".playerTurn").show();
    $(".playerTurn").text(beurt);
}

export function startGameFunction() {

    
    if (turn === "player1") {
        player1DiceRoll1 = rollDice();
        player1DiceRoll2 = rollDice();
        player1Total = (player1DiceRoll1 + player1DiceRoll2);
        $(".dices1").show();
        document.querySelector(".diceOne").setAttribute("src", diceImages[player1DiceRoll1 - 1]);
        document.querySelector(".diceTwo").setAttribute("src", diceImages[player1DiceRoll2 - 1]);
        turn = "player2";
        $(".player1Score").text(player1DiceRoll1 + " + " + player1DiceRoll2 + " (Totaal: " + player1Total + ")");
        getTurnPlayer();

    } else if (turn === "player2") {
        player2DiceRoll1 = rollDice();
        player2DiceRoll2 = rollDice();
        player2Total = (player2DiceRoll1 + player2DiceRoll2);
        $(".dices2").show();
        document.querySelector(".diceThree").setAttribute("src", diceImages[player2DiceRoll1 - 1]);
        document.querySelector(".diceFour").setAttribute("src", diceImages[player2DiceRoll2 - 1]);
        $(".player2Score").text(player2DiceRoll1 + " + " + player2DiceRoll2 + " (Totaal: " + player2Total + ")");
        getResultaat();
        $(".resetBtn").show();
        $(".rollDice").hide();
    }
    $(".playerTurn").text(beurt);
}

function resultaatInfo() {
    $(".resultaat").text(winner + " heeft gewonnen!");
    $(".rightArea").css("opacity", "1");
    $(".leftArea").css("opacity", "1");
    $(".playerTurn").hide();
    $(".score").text(player1Score + "|" + player2Score);
}

export function getResultaat() {

    if (player1Total === player2Total) {
        resultaatInfo();
        $(".resultaat").text("Gelijkspel!");
        return;
    }
    else if (player1Total === 2) {
        winner = player1Name;
        player1Score = player1Score + 1;
        resultaatInfo();
        $(".resultaat").text(player1Name + " heeft gewonnen door snake eyes!");
        return;
    }
    else if (player2Total === 2) {
        winner = player2Name;
        player2Score = player2Score + 1;
        resultaatInfo();
        $(".resultaat").text(player2Name + " heeft gewonnen door snake eyes!");
        return;
    }
    else if (player1Total > player2Total) {
        winner = player1Name;
        player1Score = player1Score + 1;
        resultaatInfo();
    }
    else if (player2Total > player1Total) {
        winner = player2Name;
        player2Score = player2Score + 1;
        resultaatInfo();
    }
}