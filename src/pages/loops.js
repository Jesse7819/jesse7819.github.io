import React from "react";
import { firstLoop, secondLoop, fourthLoop, fifthLoop } from "../components/loops";

const loops = () => {
	return (
        
		<div className="loops">
            <div className="loopBtns">
                <button className="firstLoopBtn" onClick={firstLoop}>Loop #1</button>
                <button className="secondLoopBtn" onClick={secondLoop}>Loop #2</button>
                <button className="fourthLoopBtn" onClick={fourthLoop}>Loop #4</button>
                <button className="fifthLoopBtn" onClick={fifthLoop}>Loop #5</button>
            </div>
            <div className="firstLoop"></div>
            <div className="secondLoop"></div>
            <div className="thirdLoop"></div>
            <div className="fourthLoop"></div>
		</div>

        
	);
};

export default loops;
