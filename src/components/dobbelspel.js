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

export function diceRollInfoFunction() {

    player1Name = prompt("Wat is de naam van speler 1?");
    player2Name = prompt("Wat is de naam van speler 2?");

    if (diceRollInfo === false) {
        if (((player1Name && player2Name) !== null)) {
            if (((player1Name && player2Name) !== "")) {
                $(".player1Name").text("Player 1: " + player1Name);
                $(".player2Name").text("Player 2: " + player2Name);
                diceRollInfo = true;
                $(".resetBtn").css("display", "block");
                $(".rollDice").css("display", "block");
                $(".startBtn").css("display", "none");
                $(".rightArea").css("opacity", "0.5");
            } else {
                $(".player1Name").text("Oh, U heeft niets ingevuld! Wilt u uw naam niet vertellen?");
                $(".player2Name").text("");
                diceRollInfo = false;
                $(".resetBtn").css("display", "none");
                $(".rollDice").css("display", "none");
            }
        } else {
            $(".player1Name").text("Oh, U heeft niets ingevuld! Wilt u uw naam niet vertellen?");
            $(".player2Name").text("");
            diceRollInfo = false;
            $(".resetBtn").css("display", "none");
            $(".rollDice").css("display", "none");
        }
    }
}

export function resetDiceRollFunction() {
    console.log(player1Name);
    diceRollInfo = false;
    // player1Name = "";
    // player2Name = "";
    $(".player1Name").text("Player 1: ");
    $(".player2Name").text("Player 2: ");
    player1DiceRoll1 = 0;
    player1DiceRoll2 = 0;
    player2DiceRoll1 = 0;
    player2DiceRoll2 = 0;
    // $(".resetBtn").css("display", "none");
    $(".rollDice").css("display", "none");
    $(".startBtn").css("display", "block");
    $(".dices1").css("display", "none");
    $(".dices2").css("display", "none");
    turn = "player1";
    $(".playerTurn").css("display", "none");
    $(".resultaat").text("");
    $(".rightArea").css("opacity", "1");
    $(".leftArea").css("opacity", "1");
}

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

export function startGameFunction() {

    if (turn === "player1") {
        player1DiceRoll1 = rollDice();
        player1DiceRoll2 = rollDice();
        player1Total = (player1DiceRoll1 + player1DiceRoll2);
        $(".dices1").css("display", "block");
        document.querySelector(".diceOne").setAttribute("src", diceImages[player1DiceRoll1 - 1]);
        document.querySelector(".diceTwo").setAttribute("src", diceImages[player1DiceRoll2 - 1]);
        turn = "player2";
        $(".player1Name").text("Player: " + player1Name + ": heeft " + player1DiceRoll1 + " + " + player1DiceRoll2 + " (" + player1Total + ") gerold.");
    } else if (turn === "player2") {
        player2DiceRoll1 = rollDice();
        player2DiceRoll2 = rollDice();
        player2Total = (player2DiceRoll1 + player2DiceRoll2);
        $(".dices2").css("display", "block");
        document.querySelector(".diceThree").setAttribute("src", diceImages[player2DiceRoll1 - 1]);
        document.querySelector(".diceFour").setAttribute("src", diceImages[player2DiceRoll2 - 1]);
        turn = "player1";
        $(".player2Name").text("Player: " + player2Name + ": heeft " + player2DiceRoll1 + " + " + player2DiceRoll2 + " (" + player2Total + ") gerold.");
        getResultaat();
    }
    if (turn === "player1") {
        beurt = player1Name + " is aan de beurt.";
        $(".rightArea").css("opacity", "0.5");
        $(".leftArea").css("opacity", "1");
    } else {
        beurt = player2Name + " is aan de beurt.";
        $(".rightArea").css("opacity", "1");
        $(".leftArea").css("opacity", "0.5");
    }
    $(".playerTurn").css("display", "block");
    $(".playerTurn").text(beurt);
}

export function getResultaat() {
    if (player1Total === player2Total) {
        $(".resultaat").text("Gelijkspel!");
        return;
    }
    else if (player1Total === 2) {
        winner = player1Name;
        $(".resultaat").text(player1Name + " heeft gewonnen door snake eyes!");
        return;
    }
    else if (player2Total === 2) {
        winner = player2Name;
        $(".resultaat").text(player2Name + " heeft gewonnen door snake eyes!");
        return;
    }
    else if (player1Total > player2Total) {
        winner = player1Name;
    }
    else if (player2Total > player1Total) {
        winner = player2Name;
    }
    $(".resultaat").text(winner + " heeft gewonnen!");
}