import React,{ Component } from "react";
import ClockComponent from "../ClockComponent/ClockComponent.js";
import "./DisplayCards.scss";
import chart from "../assets/images/stock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch, faDollarSign, faArrowUp, faArrowDown, faPlus } from "@fortawesome/fontawesome-free-solid";

class DisplayCards extends Component {
	constructor(props) {
    super(props);   
  }

  render(){
		return (
			<React.Fragment>
				<div className="display-cards-container">
          {/* this is for time-zone block */}
          <div className="card"> 
            <h2>Time zone</h2>                       
            <ClockComponent />
          </div>
          {/* this block is for saved companies */}
        </div>
			</React.Fragment>			
		)
	}	
};

export default DisplayCards;