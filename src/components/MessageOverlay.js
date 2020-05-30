import React, { Component } from "react";
import { Fade, Paper } from "@material-ui/core";

class MessageOverlay extends Component {
  render() {
    if (this.props.variant === "success") {
      return (
        <Fade in={true}>
          <Paper
            style={{
              backgroundColor: "#a8df65",
              padding: ".5rem",
              borderRadius: "8px",
              margin: "1rem",
              color: "#fff",
            }}
          >
            {this.props.message}
          </Paper>
        </Fade>
      );
    } else if (this.props.variant === "error") {
      return (
        <Fade in={true}>
          <Paper
            style={{
              backgroundColor: "#e43f5a",
              padding: ".5rem",
              borderRadius: "8px",
              margin: "1rem",
              color: "#fff",
            }}
          >
            {this.props.message}
          </Paper>
        </Fade>
      );
    } else {
      return (
        <Fade in={true}>
          <Paper
            style={{
              backgroundColor: "#0e9aa7",
              padding: ".5rem",
              borderRadius: "8px",
              margin: "1rem",
              color: "#fff",
            }}
          >
            {this.props.message}
          </Paper>
        </Fade>
      );
    }
  }
}

export default MessageOverlay;
