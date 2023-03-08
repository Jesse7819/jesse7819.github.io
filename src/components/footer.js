import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-header">
				<div className="socialBtns">
					<a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="facebookBtn">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="twitterBtn">
						<FontAwesomeIcon icon={faTwitterSquare} />
					</a>
					<a href="https://www.google.com/" target="_blank" rel="noreferrer" className="googleBtn">
						<FontAwesomeIcon icon={faGoogle} />
					</a>
					<a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="instagramBtn">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href="https://nl.linkedin.com/" target="_blank" rel="noreferrer" className="linkedInBtn">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href="https://github.com/Jesse7819" target="_blank" rel="noreferrer" className="githubBtn">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
			</div>
			<div className="footer-bottom">
				© 2023 Made by:
				<a className="text-white" href='/'>
					Jesse Sosef
				</a>
			</div>
		</footer>
	);
}