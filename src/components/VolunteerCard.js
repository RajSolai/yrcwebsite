import React from "react";
import { Grow, Paper } from "@material-ui/core";
import usericon from "../assets/usericon.png";
import "./../theme/components.scss";

class VolunteerCard extends React.Component {
  render() {
    return (
      <Grow in={true}>
        <div
          style={{
            margin: "1rem",
          }}
        >
          <Paper elevation={3}>
            <div className="fb">
              <img
                alt={this.props.name}
                src={
                  this.props.imgsrc === "" || null
                    ? usericon
                    : this.props.imgsrc
                }
                height="250"
                width="200"
              ></img>
              <ul className="list-no-style">
                <li>
                  <p>
                    <strong>NAME : </strong> {this.props.name}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>YEAR : </strong>
                    {this.props.year}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>DEPT : </strong>
                    {this.props.dept}
                  </p>
                </li>
              </ul>
            </div>
          </Paper>
        </div>
      </Grow>
    );
  }
}

export default VolunteerCard;
