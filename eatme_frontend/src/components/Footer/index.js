import React from "react";
import {
  footerLinks1,
  footerLinks2,
  footerLinks3,
  footerLinks4,
} from "../../constants/footer_constants";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        {footerLinks1.map((link, index) => (
          <a
            key={index}
            href="#"
            style={{ display: "block", marginBottom: "10px" }}
          >
            {link}
          </a>
        ))}
      </div>
      <div className="footer-section">
        {footerLinks2.map((link, index) => (
          <a
            key={index}
            href="#"
            style={{ display: "block", marginBottom: "10px" }}
          >
            {link}
          </a>
        ))}
      </div>
      <div className="footer-section">
        {footerLinks3.map((link, index) => (
          <a
            key={index}
            href="#"
            style={{ display: "block", marginBottom: "10px" }}
          >
            {link}
          </a>
        ))}
      </div>
      <div className="footer-section">
        {footerLinks4.map((link, index) => (
          <img
            key={index}
            src={link}
            alt="App Store and Google Play"
            style={{ width: "150px", marginBottom: "10px" }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
