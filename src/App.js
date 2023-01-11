import React from 'react';
import './css/main.css';


import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Dobbelspel from './pages/dobbelspel';
import Navbar from './components/navbar';
import HelloWorld from './pages/hello_world';
import Loops from './pages/loops';
import Magic8ball from './pages/magic8ball';


function App() {
	return (

		<Router>
			<Navbar />
			
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/dobbelspel' element={<Dobbelspel />} />
				<Route path='/helloworld' element={<HelloWorld />} />
				<Route path='/loops' element={<Loops />} />
				<Route path='/magic8ball' element={<Magic8ball />} />				
			</Routes>
		</Router>
	);
}

export default App;
