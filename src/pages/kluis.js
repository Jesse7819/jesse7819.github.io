import React from 'react';
import { createKluis, getKluis } from '../components/kluis';

const Kluis = () => {
	return (
		<div>
			<button className="createKluisBtn" onClick={createKluis}>Create</button>
			<div className="kluisInfo"></div>
			<button className="kluisArray" onClick={getKluis}>Show all</button>
			<div className="kluisInfo2"></div>
		</div>
	);
};

export default Kluis;
