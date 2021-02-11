import React, { Component } from "react";
import { Paper } from "@material-ui/core";

class MessageOverlay extends Component {
  render() {
    if (this.props.variant === "success") {
      return (
        <div>
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
        </div>
      );
    } else if (this.props.variant === "error") {
      return (
        <div>
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
        </div>
      );
    } else {
      return (
        <div>
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
        </div>
      );
    }
  }
}

export default MessageOverlay;
