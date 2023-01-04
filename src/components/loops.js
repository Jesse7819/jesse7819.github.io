import $ from "jquery";

export function firstLoop() {
    let tekst = "";
    for(let i = 0; i < 10; i++) {
        for (let x = 0; x < 10; x++) {
            tekst += "*";
        }
        tekst += "<br>";
    }
    $(".firstLoop").append(tekst);
}


export function secondLoop() {
    let tekst = "";
    let i = 0;
    let x = 0;

    while (i < 10) {
        tekst += "*";
        for (x = 0; x < 8; x++) {
            if(i === 0 || i === 9){
                tekst += "*";
            } else {
                tekst += "&nbsp";
            }
        }
        tekst += "* <br>";
        i++;
    }
    
    $(".secondLoop").append(tekst);

}

export function fourthLoop() {
    let tekst = "";

    for(let i = 0; i < 10; i++) {
        for(let x = 0; x <= i; x++) {
            tekst = tekst + "*";    
        }
        tekst += "<br>";

    }
    $(".secondLoop").append(tekst);
}

export function fifthLoop() {
    let tekst = "";

    for(let i = 10; i > 0; i--) {
        for(let x = 10; x >= i; x--) {
            tekst = tekst + "*";    
        }
        tekst += "<br>";

    }
    $(".secondLoop").append(tekst);
}