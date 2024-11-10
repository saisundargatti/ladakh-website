import React from "react";
import "../styles/services.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Services = () => {
  const services = [
    {
      title: "High Speed Internet",
      icon: "wifi",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      title: "Healthy Meals",
      icon: "utensils",
      description:
        "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
    },
    {
      title: "Homely Stay",
      icon: "home",
      description:
        "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space.",
    },
    {
      title: "Transportation",
      icon: "car",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      title: "Food Delivery",
      icon: "bicycle",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      title: "Tourism",
      icon: "suitcase",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      title: "Job",
      icon: "briefcase",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      title: "Rental Service",
      icon: "car",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      title: "Online Shop",
      icon: "shopping-cart",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
  ];

  return (
    <div className="services" id="services">
      <h2>Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <i className={`fa fa-${service.icon} service-icon`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
