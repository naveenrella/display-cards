import React,{ Component } from "react";
import ironManColor from "../assets/images/iron-man-color.png";
import "./Header.scss";
class Header extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	burgerToggle= () => {
		let linksEl = document.querySelector('.mobile-nav-bar');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	};

	render(){
		return (
			<React.Fragment>
				<header>
					<nav>
						<ul>							
							<li>
								{/* <a href="#footer"><img src= {ironManColor} alt="logo" className="brand-logo" /></a> */}
							</li>
						</ul>
					</nav>					
				</header>
			</React.Fragment>			
		)
	}	
};

export default Header;