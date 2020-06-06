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
          {/* <div className="jumbotron red">
            <div className="img-box">
              <img
                src={veclogo}
                height="150"
                width="150"
                alt=""
                className="jumbo-img"
              />
              <img src={cross} height="150" width="150" alt="" />
            </div>
            <div className="title-box">
              <h1>SRM VEC YRC</h1>
              <p>
                Youth Red Cross club of<br></br> SRM Valliammi Enginnering
                College
              </p>
            </div>
          </div>
          <div className="jumbotron no-m-p">
            <Link to="" className="link">
              <div className="jumbo-box green">
                <h2>Contact us</h2>
              </div>
            </Link>
            <Link className="link" to="bld">
              <div className="jumbo-box red">
                <h2>Blood Donation</h2>
              </div>
            </Link>
            <Link className="link" to="vols">
              <div className="jumbo-box purple">
                <h2>Volunteers</h2>
              </div>
            </Link>
          </div> */}
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
