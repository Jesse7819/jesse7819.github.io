import $ from "jquery";
var nowDate = new Date(); 
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


export function greetingPrompt() {
    var naam = prompt("Hallo, wat is uw naam?");

    if (naam === "") {
        $(".intro").text("Oh, U heeft niets ingevuld! Wilt u uw naam niet vertellen?");

    } else if (naam) {
        $(".intro").text("");
        $(".intro").append("Welkom " + naam + ", leuk dat u er bent! <br> Vandaag is het " + nowDate.toLocaleDateString(undefined, options));

    } else {
        //User heeft op cancel geklikt. 
    }
}

//Getallen rekenen
export function getallenFunction() {

    var eersteGetal = parseFloat(prompt("Voer het eerste nummer in."));
    var tweedeGetal = parseFloat(prompt("Voer het tweede nummer in."));

    if (isNaN(eersteGetal && tweedeGetal)) {
        $(".eersteGetal").text("Geen getal");
    } else {
        var optellen = eersteGetal + " + " + tweedeGetal + " = " + (eersteGetal + tweedeGetal);
        var aftrek = eersteGetal + " - " + tweedeGetal + " = " + (eersteGetal - tweedeGetal);
        var vermenigvuldig = eersteGetal + " x " + tweedeGetal + " = " + (eersteGetal * tweedeGetal);
        var delen = eersteGetal + " / " + tweedeGetal + " = " + (eersteGetal / tweedeGetal);
        $(".eersteGetal").text("Eerste getal: " + eersteGetal);
        $(".tweedeGetal").text("Tweede getal: " + tweedeGetal);
        $(".optellenUitkomst").text(optellen);
        $(".aftrekUitkomst").text(aftrek);
        $(".vermenigvuldigUitkomst").text(vermenigvuldig);
        $(".delenUitkomst").text(delen);
    }

}