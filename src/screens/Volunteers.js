import React, { Suspense } from "react";
import Axios from "axios";
import { Paper, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../theme/components.scss";

const VolunteerCard = React.lazy(()=>import("../components/VolunteerCard"));

class Volunteers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isloading: true,
    };
  }
  async componentDidMount() {
    await Axios.get("https://vec-yrc-api.herokuapp.com/volunteers").then((data) => {
      this.setState({ list: data.data, isloading: false });
    });
  }
  render() {
    return (
      <>
        <section>
          <div className="app">
            <div className="spacer-6"></div>
            <Link to="newvols" className="link">
              <Paper
                className="animated-notice"
                style={{
                  margin: "1rem",
                  padding: ".5rem",
                  backgroundColor: "#900c3f",
                  color: "#fff",
                }}
              >
                <h1 style={{ textAlign: "center" }}>
                  Click here to Register Yourself as Volunteer !
                </h1>
              </Paper>
            </Link>
            <main className="vol-cont">
              {this.state.isloading === true ? (
                <div className="skeletal-box">
                  <CircularProgress color="secondary"></CircularProgress>
                  <strong style={{ marginLeft: ".5rem" }}>Loading</strong>
                </div>
              ) : (
                this.state.list.map((data) => (
                  <Suspense fallback={<p></p>} key={data.id}>
                    <VolunteerCard
                      imgsrc={data.avatarurl}
                      name={data.name}
                      year={data.year}
                      dept={data.dept}
                    ></VolunteerCard>
                  </Suspense>
                ))
              )}
            </main>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
  }
}

export default Volunteers;
