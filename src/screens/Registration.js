import React from "react";
import Axios from "axios";
import {
  Grow,
  TextField,
  Container,
  LinearProgress,
} from "@material-ui/core";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import MessageOverlay from "../components/MessageOverlay";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarurl: "",
      name: "",
      year: "",
      contact: "",
      dept: "",
    };
    const firebaseConfig = {
      apiKey: "AIzaSyAHelhgKLvfbvvtPpK7cmloP6PlLoF5hNM",
      authDomain: "yrc-vec-web.firebaseapp.com",
      databaseURL: "https://yrc-vec-web.firebaseio.com",
      projectId: "yrc-vec-web",
      storageBucket: "yrc-vec-web.appspot.com",
      messagingSenderId: "409070488123",
      appId: "1:409070488123:web:27b16c59e82b83be4baa1e",
      measurementId: "G-0676PHE2LT",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.postEvent = this.postEvent.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleProgress() {
    this.setState({ process: "UPLOADING IMAGE" });
  }
  handleUploadSuccess(filename) {
    firebase
      .storage()
      .ref("avatars")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("progress").style.display = "inline";
        this.setState({ avatarurl: url, process: "100% uploaded" });
      });
  }
  handleUploadError() {
    alert("Image Upload error");
  }
  handleUploadStart() {
    document.getElementById("spinner").style.display = "inline";
  }
  async postEvent() {
    let data = {
      avatarurl: this.state.avatarurl,
      name: this.state.name,
      contact: this.state.contact,
      dept: this.state.dept,
      year: this.state.year,
    };
    await Axios.post("https://yrc-vec-api.herokuapp.com/volunteers", data)
      .then((res) => {
        document.getElementById("feedback").style.display = "inline";
        console.dir(res);
      })
      .catch((err) => {
        console.dir(err);
        alert("ERROR OCCURED IN UPLOAD");
      });
  }
  render() {
    return (
      <Grow in={true}>
        <div className="app">
          <div className="spacer"></div>
          <Container>
            <div className="form">
              <h2>Register as YRC Volunteer</h2>
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
              <div
                style={{
                  margin: "1rem",
                }}
              >
                <label
                  style={{
                    backgroundColor: "#e84a5f",
                    color: "#fff",
                    padding: 10,
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  Select your DP
                  <FileUploader
                    hidden
                    accept="image/*"
                    storageRef={firebase.storage().ref("avatars")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                  />
                </label>
              </div>
              <br></br>
              <div id="spinner" style={{ display: "none" }}>
                <LinearProgress color="secondary"></LinearProgress>
                <p style={{ fontWeight: "600", color: "#ed1c24" }}>
                  Uploading Image
                </p>
              </div>
              <span
                className="progress"
                id="progress"
                role="img"
                aria-label="msg"
                style={{ display: "none", color: "green", margin: "1rem" }}
              >
              DP Uploaded Succesfully 🤩
              </span>
              <br></br>
              <TextField
                label="Enter Your Year"
                variant="outlined"
                fullWidth
                onChange={this.handleInputChange}
                style={{ margin: 8 }}
                name="year"
                value={this.state.year}
              />
              <br></br>
              <TextField
                style={{ margin: 8 }}
                fullWidth
                onChange={this.handleInputChange}
                label="Enter Your Department"
                variant="outlined"
                name="dept"
                value={this.state.dept}
              />
              <br></br>
              <TextField
                style={{ margin: 8 }}
                fullWidth
                onChange={this.handleInputChange}
                label="Enter Your Contact Number"
                variant="outlined"
                name="contact"
                value={this.state.contact}
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
                  message="Thank you for Registering !"
                ></MessageOverlay>
              </div>
              <button onClick={this.postEvent}>Register</button>
            </div>
          </Container>
        </div>
      </Grow>
    );
  }
}

export default Registration;
