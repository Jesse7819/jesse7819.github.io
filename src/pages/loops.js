import React from "react";
import { firstLoop, secondLoop, thirdLoop, fourthLoop, fifthLoop, sixthLoop } from "../components/loops";

const loops = () => {
	return (
        
		<div className="loops">
            <div className="loopBtns">
                <button className="firstLoopBtn" onClick={firstLoop}>Loop #1</button>
                <button className="secondLoopBtn" onClick={secondLoop}>Loop #2</button>
                <button className="secondLoopBtn" onClick={thirdLoop}>Loop #3</button>
                <button className="fourthLoopBtn" onClick={fourthLoop}>Loop #4</button>
                <button className="fifthLoopBtn" onClick={fifthLoop}>Loop #5</button>
                <button className="sixthLoopBtn" onClick={sixthLoop}>Loop #6</button>
            </div>
            <div className="firstLoop"></div>
            <div className="secondLoop"></div>
            <div className="thirdLoop"></div>
            <div className="fourthLoop"></div>
		</div>

        
	);
};

export default loops;
