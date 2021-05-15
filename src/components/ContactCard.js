import React from "react";
import { Paper, Divider } from "@material-ui/core";
import { PhoneRounded, MailRounded } from "@material-ui/icons";

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
