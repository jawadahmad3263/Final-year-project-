import React from "react";
import "../assets/style/aboutus.css";

const AboutUs = (props) => {
  return (
    <div className="about_company">
      <div className="about_contant">
        <div className="about_company_name text_7">
          {" "}
          About <span className="text__thin"> GOCO TRAVEL</span>{" "}
        </div>
        <div className="about_company_details text_8"></div>
        <div className="about_company_flex">
          <div className="about_company_details_left">
            <div>
              {" "}
              <b>Choice</b> <br />
              We go everywhere.
              <br /> Literally thousands of destinations.
              <br /> No station required. .
            </div>
          </div>
          <div className="about_company_details_right">
            <div>
              {" "}
              <b>Time Saving</b>
              <br />
              No need to trek across town, <br />
              catch a ride leaving near you.
            </div>
          </div>
          <div className="about_company_details_right">
            <div>
              {" "}
              <b>Community</b>
              <br />
              We take the time to get to know our members.
              <br /> All profiles and ratings are checked.
              <br /> IDs are properly verified.
              <br /> So you know who you’re travelling with.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
