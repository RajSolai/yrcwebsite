import React from "react";
import { SocialIcon } from "react-social-icons";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="contactbox">
            <div className="yrc-contact">
              <h3>Contact YRC :</h3>
              <p className="padding-1">
                <strong>Mr. G.Anand : </strong>9443984385
              </p>
              <p className="padding-1">
                <strong>Mr. G.Vivekanandan : </strong>9092756150
              </p>
            </div>
            <div className="vec-contact">
              <h3>Contact VEC :</h3>
              <p className="padding-1">
                <strong>VEC Office : </strong>044 - 27454784 / 726
              </p>
            </div>
          </div>
          <div className="socialicons">
            <p>Follow us on : </p>
            <SocialIcon
              className="margin-rl-1"
              url="http://www.facebook.com/"
            ></SocialIcon>
            <SocialIcon
              className="margin-rl-1"
              url="http://www.instagram.com/"
            ></SocialIcon>
            <SocialIcon
              className="margin-rl-1"
              url="http://www.youtube.com/"
            ></SocialIcon>
          </div>
          <div className="link-box">
            <p>Visit SRM VEC WEBSITE : </p>
            <a href="https://www.srmvalliammai.ac.in/"> srmvalliammai.ac.in</a>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
