import React , {Suspense,lazy} from "react";
import Footer from "../components/footer";

const ContactCard = lazy(()=>import("../components/ContactCard"));

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
          name: "Mr. S.Devanathan",
          position: "SRM VEC YRC Senior Event Manager",
          phoneno: "7550277281",
          mailid: "devanathan486@gmail.com",
        },
        {
          name: "Mr. U.S.Boopathiraaja",
          position: "SRM VEC YRC Senior Event Manager",
          phoneno: "9751012783",
          mailid: "boopathiraaja812@gmail.com",
        },
      ],
    };
  }

  render() {
    return (
      <>
      <section>
        <div className="app">
          <div className="spacer-6"></div>
          <div>
            {this.state.contacts.map((data,key) => (
              <Suspense fallback={<div></div>} key={key}>
                <ContactCard
                  name={data.name}
                  position={data.position}
                  phoneno={data.phoneno}
                  mailid={data.mailid}
                ></ContactCard>
              </Suspense>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
      </>
    );
  }
}

export default Contact;
