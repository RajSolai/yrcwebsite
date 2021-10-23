import React, { PureComponent, Suspense, lazy } from "react";
import Axios from "axios";

const EventCard = lazy(() => import("../components/EventCard"));

class Allevents extends PureComponent {
  actionUrl =
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/msraj085%40gmail.com_dev/default/yrcwebapi_get_events";
  constructor() {
    super();
    this.state = {
      events: [],
      isloading: true,
    };
  }
  async componentDidMount() {
    await Axios.get(this.actionUrl).then((res) => {
      this.setState({ events: res.data.result, isloading: false });
    });
  }
  render() {
    return (
      <>
        <div className="app">
          <div className="spacer-6"></div>
          <div className="envelope">
            {this.state.isloading === true ? (
              <strong className="margin-l-05">Loading</strong>
            ) : (
              this.state.events.map((data, key) => (
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
      </>
    );
  }
}

export default Allevents;
