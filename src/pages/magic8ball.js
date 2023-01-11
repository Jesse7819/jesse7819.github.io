import React from "react";
import {magic8ballFunction} from "../components/magic8ball";

const magic8ball = () => {
	return (
		<div>
            <button className="magic8ballBtn" onClick={magic8ballFunction}>Start</button>
			<div className="magic8ball">
                <div className="magic8ballForm">
                    <label>Stel uw vraag:</label><br></br>
                    <input type="text" className="question" required></input>
                </div>

                <div className="magic8ballResults">
                    <div className="magic8ballQuestion">
                        {/*De vraag imported vanuit JS component */}
                    </div>
                    <div className="magic8ballAnswer">
                        {/*Het antwoord imported vanuit JS component */}
                    </div>
                </div>
            </div>
		</div>
	);
};

export default magic8ball;
