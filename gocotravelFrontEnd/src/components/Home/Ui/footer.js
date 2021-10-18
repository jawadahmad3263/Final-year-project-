import React from "react";
import "../assets/style/footer.css";

import FooterFBIcon from "../assets/icons/footer-facebook-icon.svg";
import FooterInstagramIcon from "../assets/icons/footer-instagram-icon.svg";
import FooterLocationIcon from "../assets/icons/footer-location-icon.svg";

import FooterPhoneIcon from "../assets/icons/footer-phone-icon.svg";
import FooterTwitterIcon from "../assets/icons/footer-twitter-icon.svg";

const Footer = () => (
  <div className="footer-section mt-10-p">
    <div className="footer-top-section">
      <div className="ft">
        {" "}
        <span className="text_2">GOCO</span> TRAVEL
      </div>
    </div>

    <hr className="hhr" />

    <div className="footer-content d-flex">
      <div className="footer-office">
        <p className="footer-headings">OFFICE</p>
        <p className="footer-items d-flex align-items-center">
          <img alt="" src={FooterLocationIcon} />
          Flat 7 block 24 islamabad
        </p>
        <br />
        <p className="footer-items d-flex align-items-center">
          <img alt="" src={FooterPhoneIcon} />
          313-974-8014
        </p>
      </div>
      <div className="footer-services">
        <p className="footer-headings">SERVICES</p>
        <p className="footer-items">Taxi </p> <br />
        <p className="footer-items">Car Polling</p> <br />
        <p className="footer-items">Calling cab</p> <br />
        <p className="footer-items">Rent a car</p> <br />
      </div>
      <div className="footer-company">
        <p className="footer-headings">COMPANY</p>
        <p className="footer-items">About Us</p>
        <br />
        <p className="footer-items">Terms and Conditions</p>
      </div>
      <div className="footer-locations">
        <p className="footer-headings">LOCATIONS</p>
        <p className="footer-items">Islamabad</p>
        <br />

        <p className="footer-items">Boston</p>
        <br />

        <p className="footer-items">Ottawa</p>
        <br />
        <p className="footer-items">Toronto</p>
        <br />
      </div>
    </div>

    <hr className="hhr" />

    <div className="footer-copy-rights  justify-content-between">
      <h6 className="footer-items-copy">
        {" "}
        Copyright ©️ {new Date().getFullYear()}
      </h6>

      <div className="footer-social-icons d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <img alt="" src={FooterFBIcon} />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img alt="" src={FooterTwitterIcon} />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img alt="" src={FooterInstagramIcon} />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
