import React from "react";
import { Link } from "react-router-dom";
import "./../theme/components.scss";

class Jumbo extends React.Component { 
  render() {
    return (
      <>
        <div
          style={{
            margin: "1rem",
          }}
        >
          <div className="jumbo">
            <div>
              <h2
                className="jumbo-title"
                style={{
                  fontFamily: "Montserrat , sans-serif",
                  fontWeight: "900",
                }}
              >
                SRM-VEC YRC
              </h2>
              <p className="jumbo-content">
                YRC Club of SRM <wbr/> Valliammi <wbr/> Engineering College
              </p>
              <div className="jumbo-btnbar">
                <Link to="/contact">
                  <button
                    className="jumbo-btn"
                    id="contact-btn"
                    value="Contact Us"
                  >
                    Contact Us
                  </button>
                </Link>
                {/* <Link to="/bld">
                  <button
                    className="jumbo-btn"
                    id="bld-btn"
                    value="Blood Donation"
                  >
                    Blood Donation
                  </button>
                </Link> */}
                <Link to="/vols">
                  <button
                    className="jumbo-btn"
                    id="vol-btn"
                    value="YRC Volunteers"
                  >
                    YRC Volunteers
                  </button>
                </Link>
              </div>
            </div>
            <div className="img-holder">
              <img src={this.props.image} alt="" className="jumbo-img" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Jumbo;
