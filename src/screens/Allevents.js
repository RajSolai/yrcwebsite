import React from "react";
import EventCard from "../components/EventCard";
import Axios from "axios";

class Allevents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    Axios.get("https://yrc-vec-api.herokuapp.com/events").then((res) => {
      this.setState({ events: res.data });
    });
  }
  render() {
    return (
      <div className="app">
        <div className="spacer"></div>
        <div className="envelope">
          {this.state.events.map((data) => (
            <EventCard
              date={data.uploaddate}
              imgsrc={data.imgurl}
              imgtag={data.imgtag}
              title={data.title}
              story={data.story}
            ></EventCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Allevents;
