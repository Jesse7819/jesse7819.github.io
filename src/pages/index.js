import React from 'react';
import Carousel, { CarouselItem } from "../components/carousel";
import dobbelspelImg from '../images/dobbelspel.png';
import dobbelspelImg2 from '../images/dobbelspel2.png';
import kluisImg from '../images/kluis.png';
import kluisImg2 from '../images/kluis2.png';
import bejaardentehuisImg from '../images/bejaardentehuis.png';


const Home = () => {
	return (
		<div className="home">
			<div className="homeIntro">
				<h1 className="homeTitle">Welkom op mijn website!</h1>
				<div className="homeInfo">
					<div>Deze website heb ik gemaakt met ReactJS.

						Op deze website laat ik zien wat ik kan met HTML, Javascript, Jquery en CSS.
						Alles op deze website is met Javascript en Jquery gemaakt, inclusief het HTML.
						Bijvoorbeeld bij Cases - For/while loops. Dat is allemaal geregeld door Javascript en Jquery.

					</div>
				</div>
			</div>
			<Carousel>
				<CarouselItem><img className="carousel-item-img" src={dobbelspelImg} alt="#"></img></CarouselItem>
				<CarouselItem><img className="carousel-item-img" src={dobbelspelImg2} alt="#"></img></CarouselItem>
				<CarouselItem><img className="carousel-item-img" src={kluisImg} alt="#"></img></CarouselItem>
				<CarouselItem><img className="carousel-item-img" src={kluisImg2} alt="#"></img></CarouselItem>
				<CarouselItem><img className="carousel-item-img" src={bejaardentehuisImg} alt="#"></img></CarouselItem>
			</Carousel>
		</div>
	);
};

export default Home;
