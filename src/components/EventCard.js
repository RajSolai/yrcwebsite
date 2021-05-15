import React from "react";
import "./../theme/components.scss";

const EventCard = (props) => {
    return (
      <>
        <div className="card">
          <img
            src={props.imgsrc}
            alt={props.imgtag}
            className="card-img"
          />
          <div className="card-content">
            <h4
              style={{
                color: "grey",
              }}
            >
              {props.date}
            </h4>
            <h2 className="card-title">{props.title}</h2>
            <div className="story">
              <p>{props.story}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default EventCard;
