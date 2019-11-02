import React,{ Component } from "react";
import SignUp from "../SignUp/SignUp.js";
import SignIn from "../SignIn/SignIn.js";


class LandingPage extends Component {
	constructor(props) {
    super(props);   
    this.state = {
        showSignUP: false
    }
  }
  handleSignUp = (str) => {
      if( str == "clickedInsideSignIn") {
        this.setState({ showSignUp: true });
      } else {
        this.setState({ showSignUp: false });
      }
  }
  render = () => {
      const handleSignUp = this.handleSignUp;
      return ( 
        //   render sign-in page first as user have registered already.
        <React.Fragment>
            {   this.state.showSignUp ? 
                <SignUp  handleSignUp= {handleSignUp.bind(this)} /> : 
                <SignIn  handleSignUp= {handleSignUp.bind(this)}/> 
            }
        </React.Fragment>

       );
  }
}

export default LandingPage;
