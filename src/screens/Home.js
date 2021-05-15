import React , {Suspense , PureComponent , lazy} from "react";
import "../theme/App.scss";
import Axios from "axios";
import thumb from "../assets/thumb.png";
import noimg from "../assets/noimg.jpeg";
import Jumbo from "../components/Jumbo";

const RecentCard = lazy(() => import("../components/Recentcard"));

class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      recentEvent: [],
      isloading: true,
    };
  }
  async componentDidMount() {
    await Axios.get("https://vec-yrc-api.herokuapp.com/recents").then((res) => {
      this.setState({ recentEvent: res.data, isloading: false });
    }).catch(err=>{
      throw err;
    });
  }

  render() {
    return (
      <>
        <div className="app">
          <div className="spacer-6"></div>
          <Jumbo image={thumb}></Jumbo>
          <main>
            <h3 style={{ marginLeft: "1rem" }}>Recent Posts</h3>
            <div className="envelope" id="envelope">
              {this.state.isloading === true ? (
                  <strong style={{ marginLeft: ".5rem" }}>Loading...</strong>
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
