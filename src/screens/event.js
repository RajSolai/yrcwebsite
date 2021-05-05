import React from "react";
import Axios from "axios";
import { CircularProgress } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      imgurl: "",
      tag: "",
      desc: "",
      story: "",
      isloading: true,
    };
  }
  componentWillMount() {
    this.getData().catch((err) => {
      throw err;
    });
  }
  async getData() {
    let articleid = this.props.match.params.id;
    await Axios.get(
      "https://vec-yrc-api.herokuapp.com/event/" + articleid
    ).then((res) => {
      this.setState({
        date: res.data.uploaddate,
        title: res.data.title,
        imgurl: res.data.imgurl,
        tag: res.data.imgtag,
        story: res.data.story,
        desc: res.data.desc,
        isloading: false,
      });
    });
  }
  render() {
    if (this.state.isloading) {
      return (
        <div className="app">
          <div className="spacer-6">
            <CircularProgress color="secondary"></CircularProgress>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app">
          <div className="spacer-6"></div>
          <h1>{this.state.title}</h1>
          <h4>{this.state.date}</h4>
          <div className="article">
            <img
              src={this.state.imgurl}
              height="500"
              width="600"
              alt={this.state.tag}
            />
            <p style={{ padding: "1rem" }}>
              <ReactMarkdown source={this.state.story} escapeHtml={false} />
            </p>
          </div>
        </div>
      );
    }
  }
}

export default Event;
