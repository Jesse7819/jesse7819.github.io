import $ from "jquery";


export function bejaardentehuisFunction() {


    const leeftijdsArray = [];
    const bejaardentehuisArray = [];
    const flexArray = ["id1", "id2", "id3", "id4", "id5", "id6"];
    $("#id1").text("Row 1:");
    $("#id2").text("Row 2:");
    $("#id3").text("Row 3:");
    $("#id4").text("Row 4:");
    $("#id5").text("Row 5:");
    $("#id6").text("Row 6:");

    for (let x = 0; x < 100; x++) {
        let leeftijd = Math.floor(Math.random() * 120 + 1);
        leeftijdsArray.push(leeftijd);
        if (leeftijd > 50) {
            bejaardentehuisArray.push(leeftijd);
        }
    }

    for (let x = 0; x < bejaardentehuisArray.length; x++) {
        $("#" + flexArray[x % flexArray.length]).append("<p>" + bejaardentehuisArray[x] + "</p>");
    }

    $(".leeftijdResults").text(leeftijdsArray);
    $(".bejaardentehuisResults").text(bejaardentehuisArray);

}


