import React,{ Component } from "react";
import ironManColor from "../assets/images/iron-man-color.png";
import "./Header.css";
class Header extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render(){
		return (
			<React.Fragment>
				<header>
					<nav>
						<ul>
							<li>About</li>
							<li>Services</li>
							<li>
								<img src= {ironManColor} alt="logo" className="brand-logo" />
							</li>
							<li>Work</li>
							<li>Contact</li>
						</ul>
					</nav>					
				</header>
			</React.Fragment>			
		)
	}	
};

export default Header;