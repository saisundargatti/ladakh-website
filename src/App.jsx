import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";
import Discover from "./components/DiscoverSection";
import Services from "./components/ServicesSection";
import Footer from "./components/Footer";
import GuestInfo from "./components/GuestInfo";
import BookingSection from "./components/BookingSection";
import OrderConfirmation from "./components/OrderConfirmation";
import { BookingProvider } from "./components/Context";
import "./App.css";

const App = () => (
  <BookingProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerSection />
              <BookingSection />
              <Discover />
              <Services />
            </>
          }
        />
        <Route
          path="/guest-info"
          element={
            <>
              <GuestInfo />
              <BookingSection />
            </>
          }
        />
        <Route
          path="/order-confirmation"
          element={
            <>
              <OrderConfirmation />
              <BookingSection />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  </BookingProvider>
);

export default App;
