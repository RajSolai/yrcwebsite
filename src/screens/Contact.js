import React from "react";
import Footer from "../components/footer";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <>
      <section>
        <div className="app">
          <div className="spacer-6"></div>
          <ContactCard
            name={"Mr. G.Anand"}
            position={"SRM VEC YRC Coordinator / Mech AP"}
            phoneno={"9443984385"}
            mailid={"gananth72@gmail.com"}
          ></ContactCard>
          <ContactCard
            name={"Mr. G.Vivekanandan"}
            position={"SRM VEC YRC Co Coordinator / IT AP"}
            phoneno={"9092756150"}
            mailid={"vivekmailtome@gmail.com"}
          ></ContactCard>
          <ContactCard
            name={"Mr. P.Saravanaperumal"}
            position={"SRM VEC YRC Chairman"}
            phoneno={"7358274345"}
            mailid={"saravanaperumal2000@gmail.com"}
          ></ContactCard>
          <ContactCard
            name={"Mr. Brian Dominic"}
            position={"SRM VEC YRC Senior Event Manager"}
            phoneno={"7305261307"}
            mailid={"briandominicd2021.eee@srmvalliammai.ac.in"}
          ></ContactCard>
          <ContactCard
            name={"Mr. S.Devanathan"}
            position={"SRM VEC YRC Senior Event Manager"}
            phoneno={"7550277281"}
            mailid={"devanathan486@gmail.com"}
          ></ContactCard>
          <ContactCard
            name={"Mr. U.S.Boopathiraaja"}
            position={"SRM VEC YRC Senior Event Manager"}
            phoneno={"9751012783"}
            mailid={"boopathiraaja812@gmail.com"}
          ></ContactCard>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Contact;
