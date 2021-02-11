import React from "react";
import Footer from "../components/footer";

class Services extends React.Component {
  render() {
    return (
      <>
        <article>
          <div className="app">
            <div className="spacer-6"></div>
            <div className="about-para">
              <h1>Servies of SRM VEC YRC</h1>
              <ul>
                <h4>
                  The activities of Indian Red Cross society are grouped into
                  four main areas:
                </h4>
                <li>Promoting humanitarian principles and values;</li>
                <li>Disaster response;</li>
                <li>Disaster preparedness; and</li>
                <li>Health and Care in the Community.</li>
              </ul>
              <div className="slide-in-1">
                <ul>
                  <h3>Health and Care in the Community.</h3>
                  <li>Social Emergency Response Volunteering (SERV),</li>
                  <li>Blood Banking</li>
                  <li>Education and Training Programs,</li>
                  <li>Livelihood programs</li>
                  <li>First Aiding,</li>
                  <li>Youth Awareness Programs</li>
                  <li>Partnership for Resilience (PFR)</li>
                </ul>
              </div>
              <div className="slide-in-2">
                <p>
                  These aim to make communities more aware of the risks they may
                  face and know how to reduce their vulnerability and how to
                  cope with when a disaster strikes. Many people die due to poor
                  accessibility to even the most basic health services and
                  elementary health education. Health and community care has
                  become a cornerstone of humanitarian assistance and accounts
                  for a large part of Red Cross spending. Through these
                  programmes, the Red Cross aims to enable communities to reduce
                  their vulnerability to disease and be prepared for facing and
                  responding to various public health crises.
                </p>
                <p>
                  Guiding and supporting the development of its Societies is one
                  of the fundamental tasks of IRCS/YRC and runs through the
                  above four core areas. Likewise Capacity building programmes
                  and activities include : management and volunteer training,
                  improving branch structures, planning, fund-raising and gender
                  equality. Which will create the opportunity for Red Cross
                  Societies to network .
                </p>
                <h5>Other Major activities include:</h5>
                <div className="slide-in-2">
                  <p>
                    Hospital services <br /> HIV/AIDS awareness <br /> Building
                    home for the needy <br /> Vocational training <br /> Tracing
                    activities <br /> Maternity , child and family welfar <br />{" "}
                    Nursing <br /> Preparedness and prevention of communicable &
                    infectious diseases <br /> Fire Relief operations <br />
                    Accident rescues etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <Footer></Footer>
      </>
    );
  }
}

export default Services;
