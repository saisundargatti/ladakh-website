import React, { createContext, useState, useContext } from "react";

// Create a context for booking
const BookingContext = createContext();

// Create a provider component
export const BookingProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adults, setAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0); // Changed from 'children' to 'numChildren'

  return (
    <BookingContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        adults,
        setAdults,
        numChildren,
        setNumChildren, // Use 'numChildren' here
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Create a custom hook to use the context
export const useBooking = () => {
  return useContext(BookingContext);
};
