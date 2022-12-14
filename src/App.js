import React from 'react';
import './App.css';
import './css/navbar.css';

import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Dobbelspel from './pages/dobbelspel';
import Navbar from './components/navbar';


function App() {
return (
	
	<Router>
    
	 <Navbar /> 
   
        
		<Routes>
			<Route path='/' exact element={<Home />} />
			<Route path='/about' element={<About/>} />
			<Route path='/dobbelspel' element={<Dobbelspel/>} />
		</Routes>
	</Router>
);
}

export default App;
