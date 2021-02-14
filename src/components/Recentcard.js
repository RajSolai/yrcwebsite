import React from "react";

class RecentCard extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <img
            src={
              this.props.imgurl === "" || null
                ? this.props.noimg
                : this.props.imgurl
            }
            alt={this.props.imgtag}
            className="card-img"
          />
          <div className="card-content">
            <h2 className="card-title">{this.props.title}</h2>
            <div className="story">
              <p>{this.props.desc}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecentCard;
