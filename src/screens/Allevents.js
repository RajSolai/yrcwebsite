import React from "react";
import EventCard from "../components/EventCard";
import Axios from "axios";
import { CircularProgress } from "@material-ui/core";

class Allevents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isloading: true,
    };
  }
  componentDidMount() {
    Axios.get("https://yrc-vec-api.herokuapp.com/events").then((res) => {
      this.setState({ events: res.data, isloading: false });
    });
  }
  render() {
    return (
      <div className="app">
        <div className="spacer-6"></div>
        <div className="envelope">
          {this.state.isloading === true ? (
            <div className="skeletal-box">
              <CircularProgress color="secondary"></CircularProgress>
              <strong style={{ marginLeft: ".5rem" }}>Loading</strong>
            </div>
          ) : (
            this.state.events.map((data) => (
              <EventCard
                date={data.uploaddate}
                imgsrc={data.imgurl}
                imgtag={data.imgtag}
                title={data.title}
                story={data.story}
              ></EventCard>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Allevents;
