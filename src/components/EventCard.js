import React from "react";
import "./components.css";
import { Grow } from "@material-ui/core";

class EventCard extends React.Component {
  render() {
    return (
      <Grow in={true}>
        <div className="card">
          <img
            src={this.props.imgsrc}
            alt={this.props.imgtag}
            className="card-img"
          />
          <div className="card-content">
            <h4
              style={{
                color: "grey",
              }}
            >
              {this.props.date}
            </h4>
            <h2 className="card-title">{this.props.title}</h2>
            <div className="story">
              <p>{this.props.story}</p>
            </div>
          </div>
        </div>
      </Grow>
    );
  }
}

export default EventCard;
