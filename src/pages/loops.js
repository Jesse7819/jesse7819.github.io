import React from "react";
import { firstLoop, secondLoop, thirdLoop, fourthLoop, fifthLoop, sixthLoop } from "../components/loops";

const loops = () => {
    return (

        <div className="loops">
            <div className="loopBtns">
                
            
            </div>
            <div className="loopArea">
                <button className="loopBtn" onClick={firstLoop}>Loop #1</button>
                <div className="loopbox firstLoop"></div>
            </div>
            <div className="loopArea">
                <button className="loopBtn" onClick={secondLoop}>Loop #2</button>
                <div className="loopbox secondLoop "></div>
            </div>
            <div className="loopArea">
                <button className="loopBtn" onClick={thirdLoop}>Loop #3</button>
                <div className="loopbox thirdLoop"></div>
            </div>
            <div className="loopArea">
                <button className="loopBtn" onClick={fourthLoop}>Loop #4</button>
                <div className="loopbox fourthLoop"></div>
            </div>
            <div className="loopArea">
                <button className="loopBtn" onClick={fifthLoop}>Loop #5</button>
                <div className="loopbox fifthLoop"></div>
            </div>
            <div className="loopArea">
                <button className="loopBtn" onClick={sixthLoop}>Loop #6</button>
                <div className="loopbox sixthLoop"></div>
            </div>
        </div>


    );
};

export default loops;
