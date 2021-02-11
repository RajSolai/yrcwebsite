import React from "react";
import { TextField, Paper } from "@material-ui/core";
import Axios from "axios";
import { Link } from "react-router-dom";
import MessageOverlay from "../components/MessageOverlay";
import Footer from "../components/footer";

class Bldonation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      email: "",
      bldgrp: "",
      hospitalname: "",
      rtp: "",
    };
    this.uploadbldRq = this.uploadbldRq.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  async uploadbldRq() {
    let data = {
      name: this.state.name,
      contact: this.state.contact,
      email: this.state.email,
      bldgrp: this.state.bldgrp,
      hospitalname: this.state.hospitalname,
      relationtopatient: this.state.rtp,
    };
    await Axios.post("https://yrc-vec-api.herokuapp.com/bldreq", data)
      .then((res) => {
        document.getElementById("feedback").style.display = "inline";
        console.dir(res);
      })
      .catch((err) => {
        console.dir(err);
        alert("ERROR OCCURED IN UPLOAD");
      });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <>
        <section>
          <div className="app">
            <div className="spacer-6"></div>
            <Link to="bldonors" className="link">
              <Paper
                className="animated-notice"
                style={{
                  margin: "1rem",
                  padding: ".5rem",
                  backgroundColor: "#e84a5f",
                  color: "#fff",
                }}
              >
                <h1 style={{ textAlign: "center" }}>
                  Click here to Register Yourself as Blood Donor !
                </h1>
              </Paper>
            </Link>
            <div className="form">
              <h2>Request for Blood</h2>
              <TextField
                label="Enter Your Name"
                variant="outlined"
                onChange={this.handleInputChange}
                fullWidth
                style={{ margin: 8 }}
                name="name"
                value={this.state.name}
              />
              <br></br>
              <TextField
                label="Enter Your Contact Number"
                variant="outlined"
                fullWidth
                onChange={this.handleInputChange}
                style={{ margin: 8 }}
                name="contact"
                value={this.state.contact}
              />
              <br></br>
              <TextField
                style={{ margin: 8 }}
                fullWidth
                onChange={this.handleInputChange}
                label="Enter Your Email address"
                variant="outlined"
                name="email"
                value={this.state.email}
              />
              <br></br>
              <TextField
                label="Enter the blood group needed"
                fullWidth
                onChange={this.handleInputChange}
                style={{ margin: 8 }}
                variant="outlined"
                name="bldgrp"
                value={this.state.bldgrp}
              />
              <br></br>
              <h6>
                <em>Only Govt,. Hospitals are Allowed due to Restrictions</em>
              </h6>
              <TextField
                style={{ margin: 8 }}
                fullWidth
                onChange={this.handleInputChange}
                label="Enter the hospital Name with address"
                variant="outlined"
                name="hospitalname"
                value={this.state.hospitalname}
              />
              <br></br>
              <TextField
                style={{ margin: 8 }}
                fullWidth
                onChange={this.handleInputChange}
                label="Enter Your Relationship with patient"
                variant="outlined"
                name="rtp"
                value={this.state.rtp}
              />
              <br></br>
              <div
                id="feedback"
                style={{
                  display: "none",
                }}
              >
                <MessageOverlay
                  variant="success"
                  message=" Thanks for requesting ,soon you will be informed about the donor"
                ></MessageOverlay>
              </div>
              <button onClick={this.uploadbldRq}>Submit Request</button>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
  }
}

export default Bldonation;
