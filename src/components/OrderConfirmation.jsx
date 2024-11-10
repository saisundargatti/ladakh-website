import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useBooking } from "./Context";
import "../styles/orderconfirmation.css";

function OrderConfirmation() {
  const { name, email, phoneNumber, adults, numChildren } = useBooking() || {};

  return (
    <div className="order-confirmation">
      <div className="order-details">
        <h2>{name}</h2>
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <p>
          {adults} Adults and {numChildren} Children
        </p>
      </div>
      <div className="order-status">
        <FontAwesomeIcon icon={faCheckCircle} size="2x" color="green" />
        <h3>Order Complete</h3>
        <p>Have questions?</p>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default OrderConfirmation;
