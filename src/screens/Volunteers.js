import React from "react";
import Axios from "axios";
import VolunteerCard from "../components/VolunteerCard";
import { Fade, Paper, Backdrop, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

class Volunteers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    Axios.get("https://yrc-vec-api.herokuapp.com/volunteers").then((data) => {
      this.setState({ list: data.data });
    });
  }
  render() {
    return (
      <Fade in={true}>
        <div className="app">
          <div className="spacer"></div>
          <Link to="newvols" className="link">
            <Paper
              className="animated-notice"
              style={{
                margin: "1rem",
                padding: ".5rem",
                backgroundColor: "#900c3f",
                color: "#fff",
              }}
            >
              <h1 style={{ textAlign: "center" }}>
                Click here to Register Yourself as Volunteer !
              </h1>
            </Paper>
          </Link>
          <div>
            {this.state.list === null ? (
              <Backdrop>
                <CircularProgress color="inherit" />
              </Backdrop>
            ) : (
              this.state.list.map((data) => (
                <div>
                  <VolunteerCard
                    imgsrc={data.avatarurl}
                    name={data.name}
                    year={data.year}
                    dept={data.dept}
                  ></VolunteerCard>
                </div>
              ))
            )}
          </div>
        </div>
      </Fade>
    );
  }
}

export default Volunteers;
