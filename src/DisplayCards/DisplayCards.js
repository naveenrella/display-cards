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
          <div className="card">
            <div className="interactive-buttons"> 
              <i> <FontAwesomeIcon icon={faArrowLeft}/></i>
              <i> <FontAwesomeIcon icon={faSearch}/></i>
            </div>
            {/* This is for graph section  */}
            <h1 className="company-name">APPLE
            <i > <FontAwesomeIcon icon={faPlus}/></i>
            </h1>
            <i className="dollar"> <FontAwesomeIcon icon={faDollarSign}/>235.70</i>
            <i className="arrow-down"> <FontAwesomeIcon icon={faArrowDown}/>0.55</i>
            <div className="graph">
                <img src={chart} alt="chart picture"/>
            </div>
          </div>
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