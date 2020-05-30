import React from "react";
import Axios from "axios";
import { Grow, TextField } from "@material-ui/core";
import MessageOverlay from "../components/MessageOverlay";

class DonorReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      work: "",
      bldgrp: "",
      pdh: "",
      weight: "",
      medical_history: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.postEvent = this.postEvent.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  async postEvent() {
    let data = {
      name: this.state.name,
      age: this.state.age,
      work: this.state.work,
      bldgrp: this.state.bldgrp,
      pdh: this.state.pdh,
      weight: this.state.weight,
      medical_history: this.state.medical_history,
    };
    if (this.state.age >= 18 && this.state.age < 49) {
      await Axios.post("https://yrc-vec-api.herokuapp.com/bldonors", data)
        .then((res) => {
          document.getElementById("feedback").style.display = "inline";
          console.dir(res);
        })
        .catch((err) => {
          console.dir(err);
          alert("ERROR OCCURED IN UPLOAD");
        });
    } else {
      document.getElementById("ageError").style.display = "inline";
    }
  }
  render() {
    return (
      <Grow in={true}>
        <div className="app">
          <div className="spacer"></div>
          <div className="form">
            <h2>Register as Donor</h2>
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
              label="Enter Your Age"
              variant="outlined"
              onChange={this.handleInputChange}
              fullWidth
              style={{ margin: 8 }}
              name="age"
              value={this.state.age}
            />
            <br></br>
            <TextField
              label="Enter Your Area of Work"
              variant="outlined"
              onChange={this.handleInputChange}
              fullWidth
              style={{ margin: 8 }}
              name="work"
              value={this.state.work}
            />
            <br></br>
            <TextField
              label="Enter Your Blood Group"
              variant="outlined"
              onChange={this.handleInputChange}
              fullWidth
              style={{ margin: 8 }}
              name="bldgrp"
              value={this.state.bldgrp}
            />
            <br></br>
            <TextField
              label="Enter Pre-BloodDonation History"
              variant="outlined"
              onChange={this.handleInputChange}
              fullWidth
              style={{ margin: 8 }}
              name="pdh"
              value={this.state.pdh}
            />
            <br></br>
            <TextField
              label="Enter Your Weight"
              variant="outlined"
              onChange={this.handleInputChange}
              fullWidth
              style={{ margin: 8 }}
              name="weight"
              value={this.state.weight}
            />
            <br></br>
            <TextField
              label="Enter any Surgical History (if any)"
              variant="outlined"
              onChange={this.handleInputChange}
              fullWidth
              style={{ margin: 8 }}
              name="medical_history"
              value={this.state.medical_history}
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
                message="Thanks for Registering as a donor!"
              ></MessageOverlay>
            </div>
            <div
              id="ageError"
              style={{
                display: "none",
              }}
            >
              <MessageOverlay
                variant="error"
                message="Age must be between 18 to 49"
              ></MessageOverlay>
            </div>
            <button onClick={this.postEvent}>Submit Request</button>
          </div>
        </div>
      </Grow>
    );
  }
}

export default DonorReg;
