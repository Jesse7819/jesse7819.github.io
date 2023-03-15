import React from 'react';
import './css/main.css';


import { BrowserRouter as Router, Routes, Route, BrowserRouter }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Dobbelspel from './pages/dobbelspel';
import Navbar from './components/navbar';
import HelloWorld from './pages/hello_world';
import Loops from './pages/loops';
import Magic8ball from './pages/magic8ball';
import Bejaardentehuis from './pages/bejaardentehuis';
import Footer from './components/footer';
import Kluis from './pages/kluis';


function App() {
	return (

		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/dobbelspel' element={<Dobbelspel />} />
				<Route path='/helloworld' element={<HelloWorld />} />
				<Route path='/loops' element={<Loops />} />
				<Route path='/magic8ball' element={<Magic8ball />} />
				<Route path='/bejaardentehuis' element={<Bejaardentehuis />} />
				<Route path='/kluis' element={<Kluis />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
