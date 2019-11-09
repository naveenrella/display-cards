import React,{ Component } from "react";
import savingsImage from "../assets/images/savings.svg";
import checkingImage from "../assets/images/checking.svg";

import "./Accounts.scss";

class Accounts extends Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<React.Fragment>
        <div class= "logged-user">
        <a href="#" class="banner banner--gradient-bg">  
          <div>
            <div class="banner__title">Welcome</div>
            <div class="banner__text">Sridevi!</div>
          </div>
          <div class="banner__cta">
            <span>Logout</span>
          </div>
        </a>

        </div>  
        <div class="cards-container">
          <div class="card">
            {/* <img src={checkingImage} alt="checking" /> */}
            <h2>Account details</h2>
            <div class="account-details">
              <p class="title">Available balance</p>
              <p>$850</p>
            </div>
            <div class="account-details">
              <p class="title">Routing number</p>
              <p>615244112</p>
            </div>
            <div class="account-details">
              <p class="title">Routing number</p>
              <p>101221231</p>
            </div>
            <div class="account-details">
              <p class="title">Interest rate</p>
              <p>0%</p>
            </div>
            <div class="account-details">
              <p class="title">Interest in 2019</p>
              <p>$0.00</p>
            </div>
            <div class="account-details">
              <p class="title">Last statement date</p>
              <p>10/17/2019</p>
            </div>
          </div>

          <div class="card">
            <img src={checkingImage} alt="checking" />
            <h1>$850.62</h1>
            <p class="title">Available balance</p>
            <p>CHECKING ACCOUNT</p>
          </div>

          <div class="card">
            <img src={savingsImage} alt="savings" />
            <h1>$4210.90</h1>
            <p class="title">Available balance</p>
            <p>SAVING ACCOUNT</p>
          </div>
        </div>
			</React.Fragment>			
		)
	}	
};

export default Accounts;