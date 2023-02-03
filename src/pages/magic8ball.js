import React from "react";
import { magic8ballFunction, enterFunction } from "../components/magic8ball";

const magic8ball = () => {

    return (
        <div>
            
            <div className="magic8ball">
                <div className="magic8ballForm">
                    <label className="introQuestion">Stel uw vraag:</label>
                    <input type="text" className="question" onKeyDown={enterFunction} required></input>
                    
                </div>

                <div className="magic8ballResults">
                    <div className="magic8ballQuestion">
                        {/*De vraag imported vanuit JS component */}
                    </div>
                    <hr></hr>
                    <div className="magic8ballAnswer">
                        {/*Het antwoord imported vanuit JS component */}
                    </div>
                </div>
                <br></br>
                <button className="magic8ballBtn" onClick={magic8ballFunction}>Vraag</button>
            </div>
        </div>
    );
};

export default magic8ball;
