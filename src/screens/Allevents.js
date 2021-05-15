import React, { PureComponent, Suspense, lazy } from "react";
import Axios from "axios";

const EventCard = lazy(() => import("../components/EventCard"));

class Allevents extends PureComponent {
  constructor() {
    super();
    this.state = {
      events: [],
      isloading: true,
    };
  }
  async componentDidMount() {
    await Axios.get("https://vec-yrc-api.herokuapp.com/events").then((res) => {
      this.setState({ events: res.data, isloading: false });
    });
  }
  render() {
    return (
      <>
        <div className="app">
          <div className="spacer-6"></div>
          <div className="envelope">
            {this.state.isloading === true ? (
              <strong style={{ marginLeft: ".5rem" }}>Loading</strong>
            ) : (
              this.state.events.map((data) => (
                <Suspense fallback={<p></p>} key={data.id}>
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
      </>
    );
  }
}

export default Allevents;
