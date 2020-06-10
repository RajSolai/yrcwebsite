import React from "react";

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
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    let temp = localStorage.getItem("tempxx");
    let jsondata = JSON.parse(temp);
    console.log(jsondata);
    this.setState({
      date: jsondata.uplaoddate,
      title: jsondata.title,
      imgurl: jsondata.imgurl,
      tag : jsondata.imgtag,
      decs: jsondata.desc,
      story: jsondata.story,
    });
  }
  render() {
    return (
      <div className="app">
        <div className="spacer-6"></div>
        <h1>{this.state.title}</h1>
        <div className="article">
          <img src={this.state.imgurl} height="500" width="600" alt={this.state.tag} />
          <p style={{padding:"2rem"}}>{this.state.story}</p>
        </div>
      </div>
    );
  }
}

export default Event;
