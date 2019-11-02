import React,{ Component } from "react";
import "./ClockComponent.scss";
import Clock from 'react-clock';

class ClockComponent extends Component {
	constructor(props) {
    super(props);

    this.state = {
      pstTime: new Date(),
      estTime: this.calculateTime('-4') 
    }
  }

  componentDidMount() {
    setInterval(
      () => this.setState(
          { 
            pstTime: new Date(),
            estTime: this.calculateTime('-4')
          }
        ),
      1000
    );
  }
  
  calculateTime = (offset) => {
    // create Date object for current location
    const currentZoneDate = new Date();   
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    const utc = currentZoneDate.getTime() + (currentZoneDate.getTimezoneOffset() * 60000);   
    // create new Date object for different city
    // using supplied offset
    return new Date(utc + (3600000*offset));
  }

	render(){
		return (
			<React.Fragment>
        <div className="clock">
          <Clock value={this.state.estTime} className="clock-component" />
          <h2>EST</h2>
        </div>  
        <div className="clock">		                      
          <Clock value={this.state.pstTime} className="clock-component" />
          <h2>PST</h2>
        </div>
			</React.Fragment>			
		)
	}	
};

export default ClockComponent;