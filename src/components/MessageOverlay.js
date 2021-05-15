import React from "react";
import Paper from "@material-ui/core/Paper";

const MessageOverlay = (props) => {
  if (props.variant === "success") {
    return (
      <>
        <Paper className="overlay-paper overlay-ok">{props.message}</Paper>
      </>
    );
  } else if (props.variant === "error") {
    return (
      <>
        <Paper className="overlay-paper overlay-error">{props.message}</Paper>
      </>
    );
  } else {
    return (
      <>
        <Paper className="overlay-paper">{props.message}</Paper>
      </>
    );
  }
};

export default MessageOverlay;
