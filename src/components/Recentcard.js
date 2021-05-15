import React from "react";

const RecentCard = (props) => {
    return (
      <>
        <div className="card">
          <img
            src={
              props.imgurl === "" || null
                ? props.noimg
                : props.imgurl
            }
            alt={props.imgtag}
            className="card-img"
          />
          <div className="card-content">
            <h2 className="card-title">{props.title}</h2>
            <div className="story">
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default RecentCard;
