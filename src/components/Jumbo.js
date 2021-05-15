import React from "react";
import { Link } from "react-router-dom";
import "./../theme/components.scss";

const Jumbo = (props) => {
  return (
    <>
      <div className="margin-1">
        <div className="jumbo">
          <div>
            <h2 className="jumbo-title">SRM-VEC YRC</h2>
            <p className="jumbo-content">
              YRC Club of SRM <wbr /> Valliammi <wbr /> Engineering College
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
            <img src={props.image} alt="SRM VEC YRC" className="jumbo-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbo;
