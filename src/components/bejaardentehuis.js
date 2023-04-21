import $ from "jquery";


export function bejaardentehuisFunction() {


    const leeftijdsArray = [];
    const bejaardentehuisArray = [];
    const flexArray = ["id1", "id2", "id3", "id4", "id5", "id6"];
    $("#id1").text("").append("<b>Row 1:</b>");
    $("#id2").text("").append("<b>Row 2:</b>");
    $("#id3").text("").append("<b>Row 3:</b>");
    $("#id4").text("").append("<b>Row 4:</b>");
    $("#id5").text("").append("<b>Row 5:</b>");
    $("#id6").text("").append("<b>Row 6:</b>");


    for (let x = 0; x < 100; x++) {
        let leeftijd = Math.floor(Math.random() * 100 + 1);
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
    $(".info2").show();

}


