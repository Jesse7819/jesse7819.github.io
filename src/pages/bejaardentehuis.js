import React from "react";
import { bejaardentehuisFunction } from "../components/bejaardentehuis";
// onClick={magic8ballFunction}
const bejaardentehuis = () => {

    return (
        <div>
            <div className="bejaardentehuis">
                <div className="bejaardentehuisArea">
                <button className="bejaardentehuisBtn" onClick={bejaardentehuisFunction}>Start</button>
                <div className="leeftijdResults"></div>
                <div className="bejaardentehuisResults"></div>

                <div className="tableTest">
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default bejaardentehuis;
