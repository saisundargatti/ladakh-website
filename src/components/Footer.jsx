import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <h2>Brisphere</h2>
        <p>Spituk, Ladakh,</p>
        <p>India, 194101</p>
        <p>+91 - 7764997033</p>
        <p>amit.jha6700@gmail.com</p>
        <a href="#" className="location-button">
          Location
        </a>
      </div>
    </footer>
  );
};

export default Footer;
