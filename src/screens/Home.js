import React, { Suspense } from "react";
import "../theme/App.scss";
import Axios from "axios";
import thumb from "../assets/thumb.png";
import noimg from "../assets/noimg.jpeg";
import Jumbo from "../components/Jumbo";
import Footer from "../components/footer";

const RecentCard = React.lazy(() => import("../components/Recentcard"));

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentEvent: [],
      isloading: true,
    };
    //this.openPost = this.openPost.bind(this);
  }
  async componentDidMount() {
    await Axios.get("https://vec-yrc-api.herokuapp.com/recents").then((res) => {
      this.setState({ recentEvent: res.data, isloading: false });
    }).catch(err=>{
      throw err;
    });
  }
  // async openPost(datas) {
  //   let temp = JSON.stringify(datas);
  //   await localStorage.setItem("tempxx", temp);
  //   this.props.history.push("/article");
  // }
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
                <div className="skeletal-box">
                  <strong style={{ marginLeft: ".5rem" }}>Loading...</strong>
                </div>
              ) : (
                this.state.recentEvent.map((data,key) => (
                  <Suspense fallback={<div></div>} key={key}>
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
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
