import React, { Suspense } from "react";
import Axios from "axios";
import { CircularProgress } from "@material-ui/core";

const EventCard = React.lazy(() => import("../components/EventCard"));

class Allevents extends React.Component {
  constructor() {
    super();
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
            this.state.events.map((data,key) => (
              <Suspense fallback={<p></p>} key={key}>
                <EventCard
                  date={data.uploaddate}
                  imgsrc={data.imgurl}
                  imgtag={data.imgtag}
                  title={data.title}
                  story={data.story}
                ></EventCard>
              </Suspense>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Allevents;
