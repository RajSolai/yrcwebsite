import React from "react";
import "./theme/App.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./screens/Home";
import Event from "./screens/event";
import Volunteers from "./screens/Volunteers";
import Bldonation from "./screens/Bldonation";
import Registration from "./screens/Registration";
import DonorReg from "./screens/DonorReg";
import Allevents from "./screens/Allevents";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Services from "./screens/Services";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="nav-bar">
          <ul className="nav-list">
            <li className="nav-itemp">
              <Link to="/" className="link">
                <p className="brand">SRM-VEC-YRC</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="link">
                <span className="nav-link">Events</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="link">
                <span className="nav-link">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="link">
                <span className="nav-link">About</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/vols" exact component={Volunteers}></Route>
            <Route path="/bld" exact component={Bldonation}></Route>
            <Route path="/newvols" exact component={Registration}></Route>
            <Route path="/bldonors" exact component={DonorReg}></Route>
            <Route path="/events" exact component={Allevents}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/services" exact component={Services}></Route>
            <Route path="/event/:id" exact component={Event}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
