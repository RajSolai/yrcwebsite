import React, { Component, lazy, Suspense } from "react";
import Axios from "axios";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../theme/components.scss";

const VolunteerCard = lazy(() => import("../components/VolunteerCard"));

class Volunteers extends Component {
  actionUrl =
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/msraj085%40gmail.com_dev/default/yrcwebapi_get_volunteers";
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isloading: true,
    };
  }
  componentDidMount() {
    Axios.get(this.actionUrl).then((data) => {
      console.log(data);
      this.setState({ list: data.data.result, isloading: false });
    });
  }
  render() {
    return (
      <>
        <main>
          <div className="app">
            <div className="spacer-6"></div>
            <Link to="newvols" className="link">
              <Paper className="animated-notice">
                <h1 style={{ textAlign: "center" }}>
                  Click here to Register Yourself as Volunteer !
                </h1>
              </Paper>
            </Link>
            <div className="vol-cont">
              {this.state.isloading === true ? (
                <strong className="margin-l-05">Loading...</strong>
              ) : (
                this.state.list.map((data, key) => (
                  <Suspense fallback={<div></div>} key={key}>
                    <VolunteerCard
                      imgsrc={data.avatarurl}
                      name={data.name}
                      year={data.year}
                      dept={data.dept}
                    ></VolunteerCard>
                  </Suspense>
                ))
              )}
            </div>
          </div>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default Volunteers;
