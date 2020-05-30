import React from "react";
import {
  Grow,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { PhoneRounded, MailRounded } from "@material-ui/icons";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Mr. G.Anand",
          position: "SRM VEC YRC Coordinator / Mech AP",
          phoneno: "9443984385",
          mailid: "gananth72@gmail.com",
        },
        {
          name: "Mr. G.Vivekanandan",
          position: "SRM VEC YRC Co Coordinator / IT AP",
          phoneno: "9092756150",
          mailid: "vivekmailtome@gmail.com",
        },
        {
          name: "Mr. P.Saravanaperumal",
          position: "SRM VEC YRC Chairman",
          phoneno: "7358274345",
          mailid: "saravanaperumal2000@gmail.com",
        },
        {
          name: "Mr. Brian Domnic",
          position: "SRM VEC YRC Senior Event Manager",
          phoneno: "7305261307",
          mailid: "briandominic.awesome@gmail.com",
        },
        {
          name: "Mr. Devanathan",
          position: "SRM VEC YRC Senior Event Manager",
          phoneno: "7550277281",
          mailid: "devanathan486@gmail.com",
        },
        {
          name: "Mr. Boopathiraaja",
          position: "SRM VEC YRC Senior Event Manager",
          phoneno: "9751012783",
          mailid: "boopathiraaja812@gmail.com",
        },
      ],
    };
  }

  render() {
    return (
      <Grow in={true}>
        <div className="app">
          <div className="spacer"></div>
          {this.state.contacts.map((data) => (
            <Paper
              style={{ padding: "1rem", margin: "1rem", borderRadius: "8px" }}
              elevation={5}
            >
              <h2>{data.name}</h2>
              <Divider></Divider>
              <p>{data.position}</p>
              <Divider></Divider>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PhoneRounded />
                  </ListItemIcon>
                  <ListItemText>{data.phoneno}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MailRounded />
                  </ListItemIcon>
                  <ListItemText>{data.mailid}</ListItemText>
                </ListItem>
              </List>
            </Paper>
          ))}
        </div>
      </Grow>
    );
  }
}

export default Contact;
