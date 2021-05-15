import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import PhoneRounded from "@material-ui/icons/PhoneRounded";
import MailRounded from "@material-ui/icons/MailRounded";

const ContactCard = (props) => {
  return (
    <>
      <Paper
        style={{
          padding: "1rem",
          margin: "1rem",
          borderRadius: "8px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        elevation={5}
      >
        <h2>{props.name}</h2>
        <Divider></Divider>
        <p>{props.position}</p>
        <Divider></Divider>
        <ul className="list-no-style">
          <li>
            <PhoneRounded />
            <a href={"tel:" + props.phoneno} className="hyper-link">
              <p>{props.phoneno}</p>
            </a>
          </li>
          <li>
            <MailRounded />
            <a href={"mailto:" + props.mailid} className="hyper-link">
              <p>{props.mailid}</p>
            </a>
          </li>
        </ul>
      </Paper>
    </>
  );
};

export default ContactCard;
