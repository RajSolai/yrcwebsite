import React from "react";
import Paper from "@material-ui/core/Paper";
import usericon from "../assets/usericon.png";
import "./../theme/components.scss";

const VolunteerCard = (props) => {
  return (
    <>
      <div className="margin-1">
        <Paper elevation={2}>
          <div className="fb">
            <img
              alt={props.name}
              src={props.imgsrc === "" || null ? usericon : props.imgsrc}
              height="250"
              width="200"
            ></img>
            <ul className="list-no-style">
              <li>
                <p>
                  <strong>NAME : </strong> {props.name}
                </p>
              </li>
              <li>
                <p>
                  <strong>YEAR : </strong>
                  {props.year}
                </p>
              </li>
              <li>
                <p>
                  <strong>DEPT : </strong>
                  {props.dept}
                </p>
              </li>
            </ul>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default VolunteerCard;
