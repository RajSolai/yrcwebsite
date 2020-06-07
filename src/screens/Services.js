import React from "react";
import { Grow, List, ListItemText } from "@material-ui/core";

class Services extends React.Component {
  render() {
    return (
      <Grow in={true}>
        <div className="app justify">
          <div className="spacer"></div>
          <div className="about-para">
            <h1>Servies of SRM VEC YRC</h1>
            <List>
              <h4>
                The activities of Indian Red Cross society are grouped into four
                main areas:
              </h4>
              <ListItemText>
                Promoting humanitarian principles and values;
              </ListItemText>
              <ListItemText>Disaster response;</ListItemText>
              <ListItemText>Disaster preparedness; and</ListItemText>
              <ListItemText>Health and Care in the Community.</ListItemText>
            </List>
            <div>
              <List>
                <h3>Health and Care in the Community.</h3>
                <ListItemText>
                  Social Emergency Response Volunteering (SERV),
                </ListItemText>
                <ListItemText>Blood Banking</ListItemText>
                <ListItemText>Education and Training Programs,</ListItemText>
                <ListItemText>Livelihood programs</ListItemText>
                <ListItemText>First Aiding,</ListItemText>
                <ListItemText>Youth Awareness Programs</ListItemText>
                <ListItemText>Partnership for Resilience (PFR)</ListItemText>
              </List>
            </div>
            <div>
              <p>
                These aim to make communities more aware of the risks they may
                face and know how to reduce their vulnerability and how to cope
                with when a disaster strikes. Many people die due to poor
                accessibility to even the most basic health services and
                elementary health education. Health and community care has
                become a cornerstone of humanitarian assistance and accounts for
                a large part of Red Cross spending. Through these programmes,
                the Red Cross aims to enable communities to reduce their
                vulnerability to disease and be prepared for facing and
                responding to various public health crises.
              </p>
              <p>
                Guiding and supporting the development of its Societies is one
                of the fundamental tasks of IRCS/YRC and runs through the above
                four core areas. Likewise Capacity building programmes and
                activities include : management and volunteer training,
                improving branch structures, planning, fund-raising and gender
                equality. Which will create the opportunity for Red Cross
                Societies to network .
              </p>
              <h5>Other Major activities include:</h5>
              <p>
                Hospital services <br /> HIV/AIDS awareness <br /> Building home
                for the needy <br /> Vocational training <br /> Tracing
                activities <br /> Maternity , child and family welfar <br />{" "}
                Nursing <br /> Preparedness and prevention of communicable &
                infectious diseases <br /> Fire Relief operations <br />
                Accident rescues etc
              </p>
            </div>
          </div>
        </div>
      </Grow>
    );
  }
}

export default Services;
