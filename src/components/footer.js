import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-header">
				<div className="socialBtns">
					<i className="facebookBtn">
						<FontAwesomeIcon icon={faFacebook} />
					</i>
					<i className="twitterBtn">
						<FontAwesomeIcon icon={faTwitterSquare} />
					</i>
					<i className="googleBtn">
						<FontAwesomeIcon icon={faGoogle} />
					</i>
					<i className="instagramBtn">
						<FontAwesomeIcon icon={faInstagram} />
					</i>
					<i className="linkedInBtn">
						<FontAwesomeIcon icon={faLinkedin} />
					</i>
					<i className="githubBtn">
						<FontAwesomeIcon icon={faGithub} />
					</i>
				</div>
			</div>
			<div className="footer-bottom">
				© 2023 Copyright:
				<a className="text-white" href='#'>
					Jesse Sosef
				</a>
			</div>
		</div>
	);
}