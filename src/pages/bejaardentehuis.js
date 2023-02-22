import { data } from "jquery";
import React from "react";
import { bejaardentehuisFunction } from "../components/bejaardentehuis";

const bejaardentehuis = () => {

    return (
        <div>
            <div className="bejaardentehuis">
                <div className="bejaardentehuisArea">
                    <button className="bejaardentehuisBtn" onClick={bejaardentehuisFunction}>Start</button>
                    <p><b>Alle leeftijden:</b></p>
                    <hr></hr>
                    <div className="leeftijdResults"></div>
                    <hr></hr>
                    <span><b>Iedereen boven de 50:</b></span>
                    <div className="bejaardentehuisResults"></div>
                    <hr></hr>
                    <div id="main">
                        <div id="id1"><b>Row 1</b><hr></hr></div>
                        <div id="id2"><b>Row 2</b><hr></hr></div>
                        <div id="id3"><b>Row 3</b><hr></hr></div>
                        <div id="id4"><b>Row 4</b><hr></hr></div>
                        <div id="id5"><b>Row 5</b><hr></hr></div>
                        <div id="id6"><b>Row 6</b><hr></hr></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default bejaardentehuis;
