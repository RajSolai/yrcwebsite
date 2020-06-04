import React from "react";
import { Grow } from "@material-ui/core";

class About extends React.Component {
  render() {
    return (
      <Grow in={true}>
        <div class="app justify">
          <div className="spacer"></div>
          <h1>About Us</h1>
          <p className="about-para">
            We Youth Red Cross Club of SRM Valliammai Engineering College was
            inagurated on the year of 2008 <br/> under the Management of ICRS : Indian
            Red Cross Society
          </p>
        </div>
      </Grow>
    );
  }
}

export default About;
