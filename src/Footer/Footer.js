import React,{ Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faHome, faMapMarkerAlt, faEnvelope } from "@fortawesome/fontawesome-free-solid";
import "./Footer.scss";
class Footer extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render(){
		return (
			<React.Fragment>
				<footer id="footer">
          <p>Feel free to explore and get inspired. </p>
					<div className="contact-container">
						<div className="mobile contact">						
							<a href="tel:6824019013">
								<i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
								682-401-9013
							</a>							
						</div>
						<div className="email contact">
							<a href="mailto:naveenreddyrella@gmail.com">
								<i><FontAwesomeIcon icon={faEnvelope} /></i>
								naveenreddyrella@gmail.com
							</a>
						</div>
						<div className="address contact">						
							<a href="https://www.google.com/maps/place/39370+Mozart+Terrace,+Fremont,+CA+94538/@37.557423,-121.9682287,17z/data=!3m1!4b1!4m5!3m4!1s0x808fc0f26b91864d:0x8babd3a8ebfdbfc6!8m2!3d37.557423!4d-121.96604">
								<i><FontAwesomeIcon icon={faHome} /></i>
								39370 Mozart ter, Fremont California
							</a>
						</div>
						<div className="social-media contact">
							<a href="https://www.facebook.com/" target="_blank" title="Facebook">
								<i><FontAwesomeIcon icon={faFacebook} /></i>
							</a>
							<a href="https://www.facebook.com/" target="_blank" title="Twitter">
							<i><FontAwesomeIcon icon={faTwitter} /></i>
							</a>
						</div>
					</div>										
				</footer>
			</React.Fragment>			
		)
	}	
};

export default Footer;