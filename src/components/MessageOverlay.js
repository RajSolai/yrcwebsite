import React from "react";
import { Paper } from "@material-ui/core";

const MessageOverlay = (props) => {
    if (props.variant === "success") {
      return (
        <>
          <Paper
            style={{
              backgroundColor: "#a8df65",
              padding: ".5rem",
              borderRadius: "8px",
              margin: "1rem",
              color: "#fff",
            }}
          >
            {props.message}
          </Paper>
        </>
      );
    } else if (props.variant === "error") {
      return (
        <>
          <Paper
            style={{
              backgroundColor: "#e43f5a",
              padding: ".5rem",
              borderRadius: "8px",
              margin: "1rem",
              color: "#fff",
            }}
          >
            {props.message}
          </Paper>
        </>
      );
    } else {
      return (
        <>
          <Paper
            style={{
              backgroundColor: "#0e9aa7",
              padding: ".5rem",
              borderRadius: "8px",
              margin: "1rem",
              color: "#fff",
            }}
          >
            {props.message}
          </Paper>
        </>
      );
    }
}

export default MessageOverlay;
