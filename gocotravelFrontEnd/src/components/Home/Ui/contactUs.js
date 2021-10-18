import React from "react";
import "../assets/style/contactUs.css";
import phone from "../assets/icons/cell-phone-clip-art-3.png";

const ContactUs = (props) => {
  return (
    <div className="contactus_main">
      <div className="contactus_details">
        <div className="contactus_left">
          <div>
            <img src={phone} style={{ width: "50%" }} />
          </div>
        </div>
        <div className="contactus_right">
          <div className="context">
            <div className="call_us">
              {" "}
              Call US
              <span className="text__thin"> 24 Hours</span>
            </div>
            <div className="phoneno">0313-9748014</div>
          </div>
          <div className="text_6">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ulla-
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
