import React from "react";
import { Grow } from "@material-ui/core";
import ContactCard from "../components/ContactCard";

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
          name: "Mr. Brian Dominic",
          position: "SRM VEC YRC Senior Event Manager",
          phoneno: "7305261307",
          mailid: "briandominicd2021.eee@srmvalliammai.ac.in",
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
            <ContactCard
              name={data.name}
              position={data.position}
              phoneno={data.phoneno}
              mailid={data.mailid}
            ></ContactCard>
          ))}
        </div>
      </Grow>
    );
  }
}

export default Contact;
