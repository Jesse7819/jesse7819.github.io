import React from 'react';
import { createKluis, getKluis } from '../components/kluis';

const Kluis = () => {
	return (
		<div>
			<button className="createKluisBtn" onClick={createKluis}>Create</button>
			<div className="kluisInfo"></div>
			<button className="kluisArray" onClick={getKluis}>Show all</button>
			<div className="kluisInfo2"></div>

			{/* <div className="kluisForm">
				<label className="formLabel">Hoeveel staven wilt u in de kluis leggen?</label>
				<input type="text" className="stavenInput" required></input>
				<input type="submit" value="Submit" />
			</div> */}
		</div>
	);
};

export default Kluis;
