import React, { Suspense, PureComponent, lazy } from "react";
import "../theme/App.scss";
import Axios from "axios";
import thumb from "../assets/thumb.png";
import noimg from "../assets/noimg.jpeg";
import Jumbo from "../components/Jumbo";

const RecentCard = lazy(() => import("../components/Recentcard"));

class Home extends PureComponent {
  recentAction =
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/msraj085%40gmail.com_dev/default/yrcwebapi_get_recent_events";
  constructor() {
    super();
    this.state = {
      recentEvent: [],
      isloading: true,
    };
  }
  async componentDidMount() {
    await Axios.get(this.recentAction).then((res) => {
      this.setState({ recentEvent: res.data.result, isloading: false });
    });
  }

  render() {
    return (
      <>
        <div className="app">
          <div className="spacer-6"></div>
          <Jumbo image={thumb}></Jumbo>
          <main>
            <h3 className="margin-l-1">Recent Posts</h3>
            <div className="envelope" id="envelope">
              {this.state.isloading === true ? (
                <strong className="margin-l-05">Loading...</strong>
              ) : (
                this.state.recentEvent.map((data) => (
                  <Suspense fallback={<div></div>} key={data.id}>
                    <RecentCard
                      title={data.title}
                      imgurl={data.imgurl}
                      noimg={noimg}
                      imgtag={data.imgtag}
                      desc={data.desc}
                    ></RecentCard>
                  </Suspense>
                ))
              )}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Home;
