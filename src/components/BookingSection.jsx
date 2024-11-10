import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faArrowRight,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/bookingsection.css";

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [buttonState, setButtonState] = useState("book");
  const [rooms, setRooms] = useState(1);
  const [isBookButtonEnabled, setIsBookButtonEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const roomPrice = 12430; // Room cost in INR
  const navigate = useNavigate();

  const { name, email, phoneNumber, adults, numChildren } = useBooking();

  const totalAmount = rooms * roomPrice;

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCheckIn(today);
    setCheckOut("");
  }, []);

  useEffect(() => {
    if (checkIn && checkOut && checkOut >= checkIn) {
      setIsBookButtonEnabled(true);
      setErrorMessage("");
    } else {
      setIsBookButtonEnabled(false);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    if (name && email && phoneNumber && adults) {
      setErrorMessage("");
    }
  }, [name, email, phoneNumber, adults]);

  const handleButtonClick = () => {
    if (buttonState === "amount") {
      if (!name || !email || !phoneNumber || !adults) {
        setErrorMessage("Please enter all guest details before proceeding.");
        return;
      }
      setButtonState("finalAmount");
      navigate("/order-confirmation");
    } else if (buttonState === "book") {
      setButtonState("amount");
      navigate("guest-info");
    }
  };

  return (
    <div className="booking-card">
      <div className="booking-content">
        <div className="date-picker">
          <label htmlFor="check-in" className="date-label">
            CHECK-IN
          </label>
          <div className="date-input-wrapper">
            <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
            <input
              type="date"
              id="check-in"
              className="date-input"
              value={checkIn}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
        </div>
        <div className="date-picker">
          <label htmlFor="check-out" className="date-label">
            CHECK-OUT
          </label>
          <div className="date-input-wrapper">
            <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
            <input
              type="date"
              id="check-out"
              className="date-input"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="room-picker">
          <span className="room-label">ROOMS</span>
          <div className="room-controls">
            <button
              className="room-button"
              onClick={() => setRooms(Math.max(1, rooms - 1))}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="room-count">{rooms}</span>
            <button className="room-button" onClick={() => setRooms(rooms + 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="booking-button-container">
          {buttonState === "book" && (
            <button
              className="book-button"
              onClick={handleButtonClick}
              disabled={!isBookButtonEnabled}
            >
              BOOK
            </button>
          )}
          {buttonState === "amount" && (
            <div className="amount-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="amount-button" onClick={handleButtonClick}>
                  ₹ {totalAmount}
                </button>
                <div
                  style={{
                    backgroundColor: "blue",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    padding: "9px",
                    marginTop: "28px",
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                </div>
              </div>
              <p className="amount-message">Click to pay the total amount</p>
            </div>
          )}
          {buttonState === "finalAmount" && (
            <button className="final-amount-button" onClick={handleButtonClick}>
              ₹ {totalAmount}
            </button>
          )}
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default BookingSection;
