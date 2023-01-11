import $ from "jquery";

const answersArray = ["Het is zeker", "Het is beslist zo", "Zonder twijfel", "Zeer zeker!", "Je kunt erop vertrouwen", "Volgens mij wel", "Zeer waarschijnlijk",
    "Goed vooruitzicht", "Ja", "De tekenen wijzen op: ja", "Het is wat wazig, probeer het nog eens", "Vraag het later opnieuw", "Dat kan ik je beter nu niet zeggen",
    "Dat is nu niet te voorspellen", "Concentreer je en vraag het opnieuw!", "Reken er niet op", "Mijn antwoord is nee", "Mijn bronnen zeggen nee",
    "De vooruitzichten zijn niet best", "Zeer twijfelachtig!"];

let answersLength = answersArray.length;

export function magic8ballFunction() {
    //let tekst = "<ul>";

    let answer = answersArray[Math.floor(Math.random() * answersLength)];

    let question = $(".question").val();
    
    $(".magic8ballQuestion").text(question);
    $(".question").val("");

    $(".magic8ballAnswer").text(answer);

}