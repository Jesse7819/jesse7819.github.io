import $ from "jquery";

export function bejaardentehuisFunction() {

    
    const leeftijdsArray = [];
    const bejaardentehuisArray = [];
    let aantalBejaarden = bejaardentehuisArray.length;
    let innerTable = "<tr class='testrow'>";


    for(let x = 0; x < 100; x++) {
        let leeftijd = Math.floor(Math.random() * 99 + 1);
        leeftijdsArray.push(leeftijd);
        if(leeftijd > 50) {
            bejaardentehuisArray.push(leeftijd);
        }
    }
    
    for(let x = 0; x < 5; x++){
        //maak een div voor de table
        //begin met tr
        //daarin 25x loop voor td

        // $(".tableTest").append("<tr>");
        for(let i = 0; i < 25; i++) {
            // $(".tableTest").append("<td>" + leeftijdsArray[i] + "</td>");
            // $(".tableTest").append("<br>");
            innerTable += "<td class='testcell'>" + leeftijdsArray[i] + "</td>";
            // innerTable += "</td> <br /> ";
            
            
        }
        innerTable += "</tr>";
        //$(".tableTest").append("</tr>");
        $(".tableTest").append(innerTable);
        innerTable = "<tr>";

    }


    $(".leeftijdResults").text(leeftijdsArray);
    $(".bejaardentehuisResults").text(bejaardentehuisArray);
    
}