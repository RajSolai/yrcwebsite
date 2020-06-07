import React from "react";
import "../theme/App.scss";
import Axios from "axios";
import thumb from "../assets/thumb.png";
import RecentCard from "../components/Recentcard";
import noimg from "../assets/noimg.jpeg";
import Jumbo from "../components/Jumbo";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentEvent: [],
    };
    this.openPost = this.openPost.bind(this);
  }
  componentDidMount() {
    Axios.get("https://yrc-vec-api.herokuapp.com/recents").then((res) => {
      this.setState({ recentEvent: res.data });
    });
  }
  openPost(datas) {
    let temp = JSON.stringify(datas);
    localStorage.setItem("tempxx", temp);
    this.props.history.push("/article");
  }
  render() {
    return (
      <>
        <div className="app">
          <div className="spacer"></div>
          <Jumbo image={thumb}></Jumbo>
          <main>
            <h3 style={{ marginLeft: "1rem" }}>Recent Posts</h3>
            <div className="envelope" id="envelope">
              {this.state.recentEvent === [] ? (
                <h2 className="card-title">loading</h2>
              ) : (
                this.state.recentEvent.map((data) => (
                  <RecentCard
                    title={data.title}
                    imgurl={data.imgurl}
                    noimg={noimg}
                    imgtag={data.imgtag}
                    desc={data.desc}
                  ></RecentCard>
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
