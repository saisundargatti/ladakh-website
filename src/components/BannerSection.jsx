import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/bannersection.css";

const BannerSection = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="info-section">
          <div className="text-section">
            <h1 className="title">Work from Ladakh</h1>
            <p className="subtitle">
              India's first true digital tourism ecosystem
            </p>
            <div className="social-buttons">
              <button className="icon-button">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button className="icon-button">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </div>
          </div>
          <div className="image-section">
            <img
              src="/src/assets/istockphoto-1218830644-612x612.jpg"
              alt="Ladakh landscape"
              className="landscape-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
