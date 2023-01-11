import $ from "jquery";

let firstLoopActive = false;
let secondLoopActive = false;
let thirdLoopActive = false;
let fourthLoopActive = false;
let fifthLoopActive = false;
let sixthLoopActive = false;

export function firstLoop() {
    let tekst = "";

    if (firstLoopActive === false) {
        firstLoopActive = true;
        for (let i = 0; i < 10; i++) {
            for (let x = 0; x < 10; x++) {
                tekst += "*";
            }
            tekst += "<br>";
        }
        $(".firstLoop").css("display", "inline-flex");
        $(".firstLoop").append(tekst);
        
    }
}


export function secondLoop() {
    let tekst = "";
    let i = 0;
    let x = 0;

    if (secondLoopActive === false) {
        while (i < 10) {
            tekst += "*";
            for (x = 0; x < 8; x++) {
                if (i === 0 || i === 9) {
                    tekst += "*";
                } else {
                    tekst += "&nbsp";
                }
            }
            tekst += "* <br>";
            i++;
        }
        $(".secondLoop").css("display", "inline-flex");
        $(".secondLoop").append(tekst);
        secondLoopActive = true;
    }

}

export function thirdLoop() {
    let tekst = "";
    if (thirdLoopActive === false) {
        for (let i = 0; i < 10; i++) {
            for (let x = 10; x > i; x--) {
                tekst = tekst + "&nbsp";
            }
            tekst += "***<br>";
        }
        
        $(".thirdLoop").css("display", "inline-flex");
        $(".thirdLoop").append(tekst);
        thirdLoopActive = true;
    }
}

export function fourthLoop() {
    let tekst = "";
    if (fourthLoopActive === false) {
        for (let i = 0; i < 10; i++) {
            for (let x = 0; x <= i; x++) {
                tekst = tekst + "*";
            }
            tekst += "<br>";

        }
        
        $(".fourthLoop").css("display", "inline-flex");
        $(".fourthLoop").append(tekst);
        fourthLoopActive = true;
    }
}

export function fifthLoop() {
    let tekst = "";

    if (fifthLoopActive === false) {
        for (let i = 0; i < 10; i++) {
            tekst = tekst + "&nbsp".repeat(i);
            tekst = tekst + "*".repeat(10 - i);
            tekst += "<br>";
        }
        $(".fifthLoop").css("display", "inline-flex");
        $(".fifthLoop").append(tekst);
        fifthLoopActive = true;
    }
}

export function sixthLoop() {
    let tekst = "";

    if (sixthLoopActive === false) {
        sixthLoopActive = true;
        for (let i = 1; i < 10; i++) {
            for (let x = 10; x > i; x--) {
                tekst = tekst + "&nbsp";
            }
            for (let y = 0; y < i; y++) {
                tekst = tekst + i.toString();
            }
            tekst += "<br>";
        }
        $(".sixthLoop").css("display", "inline-flex");
        tekst += "<br>";
        $(".sixthLoop").append(tekst);

    }
}

