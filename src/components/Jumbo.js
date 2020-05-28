import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "@material-ui/core";

class Jumbo extends React.Component {
  animateText(event) {
    let id = event.target.id;
    document.getElementById(id).innerHTML += " >>";
  }
  animateText2(event) {
    let id = event.target.id;
    document.getElementById(id).innerHTML = event.target.value;
  }
  render() {
    return (
      <Fade in={true}>
        <div
          style={{
            margin: "1rem",
          }}
        >
          <div className="jumbo">
            <div>
              <h2
                style={{
                  fontFamily: "Montserrat , sans-serif",
                  fontWeight: "900",
                }}
              >
                SRM VEC YRC
              </h2>
              <p>YRC Club of SRM Valliammi Engineering College</p>
              <div className="jumbo-btnbar">
                <Link to="/contact">
                  <button
                    className="jumbo-btn"
                    id="contact-btn"
                    onMouseOver={this.animateText}
                    onMouseLeave={this.animateText2}
                    value="Contact Us"
                  >
                    Contact us
                  </button>
                </Link>
                <Link to="/bld">
                  <button
                    className="jumbo-btn"
                    id="bld-btn"
                    onMouseOver={this.animateText}
                    onMouseLeave={this.animateText2}
                    value="Blood Donation"
                  >
                    Blood Donation
                  </button>
                </Link>
                <Link to="/vols">
                  <button
                    className="jumbo-btn"
                    id="vol-btn"
                    onMouseOver={this.animateText}
                    onMouseLeave={this.animateText2}
                    value="Volunteers"
                  >
                    Volunteers
                  </button>
                </Link>
              </div>
            </div>
            <div className="img-holder">
              <img src={this.props.image} alt="" className="jumbo-img" />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Jumbo;
