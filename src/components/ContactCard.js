import React from "react";
import {
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { PhoneRounded, MailRounded } from "@material-ui/icons";

class ContactCard extends React.Component {
  render() {
    return (
      <Paper
        style={{ padding: "1rem", margin: "1rem", borderRadius: "8px" }}
        elevation={5}
      >
        <h2>{this.props.name}</h2>
        <Divider></Divider>
        <p>{this.props.position}</p>
        <Divider></Divider>
        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneRounded />
            </ListItemIcon>
            <ListItemText>{this.props.phoneno}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailRounded />
            </ListItemIcon>
            <ListItemText>{this.props.mailid}</ListItemText>
          </ListItem>
        </List>
      </Paper>
    );
  }
}

export default ContactCard;
