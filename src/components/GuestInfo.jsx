import React, { useState, useEffect } from "react";
import { useBooking } from "./Context"; // Import useBooking hook
import "../styles/guestinfo.css";

function GuestInfo() {
  const {
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    adults,
    setAdults,
    numChildren,
    setNumChildren,
  } = useBooking() || {};

  // Check if context values are undefined and set initial states accordingly
  const [localName, setLocalName] = useState(name || "");
  const [localEmail, setLocalEmail] = useState(email || "");
  const [localPhoneNumber, setLocalPhoneNumber] = useState(phoneNumber || "");
  const [localAdults, setLocalAdults] = useState(adults || 1);
  const [localNumChildren, setLocalNumChildren] = useState(numChildren || 0);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    adults: "",
    numChildren: "",
  });

  // Validation functions
  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/; // Only letters and spaces
    return regex.test(name) ? "" : "Name must only contain letters and spaces.";
  };

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Email pattern
    return regex.test(email) ? "" : "Please enter a valid email address.";
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/; // Only 10 digits allowed
    return regex.test(phone) ? "" : "Phone number must be 10 digits.";
  };

  const validateAdults = (adults) => {
    return adults >= 1 ? "" : "Number of adults must be at least 1.";
  };

  const validateNumChildren = (numChildren) => {
    return numChildren >= 0 ? "" : "Number of children cannot be negative.";
  };

  const handleChange = (e, setterFunction, field) => {
    const value = e.target.value;
    setterFunction(value);

    let errorMessage;
    switch (field) {
      case "name":
        errorMessage = validateName(value);
        break;
      case "email":
        errorMessage = validateEmail(value);
        break;
      case "phoneNumber":
        errorMessage = validatePhoneNumber(value);
        break;
      case "adults":
        errorMessage = validateAdults(value);
        break;
      case "numChildren":
        errorMessage = validateNumChildren(value);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };

  // Update the context values when the local state changes
  useEffect(() => {
    if (setName) setName(localName);
    if (setEmail) setEmail(localEmail);
    if (setPhoneNumber) setPhoneNumber(localPhoneNumber);
    if (setAdults) setAdults(localAdults);
    if (setNumChildren) setNumChildren(localNumChildren);
  }, [
    localName,
    localEmail,
    localPhoneNumber,
    localAdults,
    localNumChildren,
    setName,
    setEmail,
    setPhoneNumber,
    setAdults,
    setNumChildren,
  ]);

  return (
    <>
      <div className="guest-info">
        <h2>Fill in the Guest Details</h2>
        <div className="guest-details">
          <div className="guest-detail-item">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={localName}
              onChange={(e) => handleChange(e, setLocalName, "name")}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="guest-detail-item">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={localEmail}
              onChange={(e) => handleChange(e, setLocalEmail, "email")}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
        <div className="guest-details-two">
          <div className="guest-detail-item">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              value={localPhoneNumber}
              onChange={(e) =>
                handleChange(e, setLocalPhoneNumber, "phoneNumber")
              }
              maxLength="10"
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </div>
          <div className="guest-summary">
            <div className="guest-summary-item">
              <label htmlFor="adults">Adults:</label>
              <input
                type="number"
                id="adults"
                value={localAdults}
                onChange={(e) => handleChange(e, setLocalAdults, "adults")}
                min="1"
              />
              {errors.adults && <span className="error">{errors.adults}</span>}
            </div>
            <div className="guest-summary-item">
              <label htmlFor="numChildren">Children:</label>
              <input
                type="number"
                id="numChildren"
                value={localNumChildren}
                onChange={(e) =>
                  handleChange(e, setLocalNumChildren, "numChildren")
                }
                min="0"
              />
              {errors.numChildren && (
                <span className="error">{errors.numChildren}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuestInfo;
