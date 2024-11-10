import React from "react";
import "../styles/discover.css";

const Discover = () => {
  const testimonials = [
    {
      name: "Arjun Raghav",
      rating: "★★★★★",
      text: "I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
      image:
        "https://images.pexels.com/photos/20873729/pexels-photo-20873729/free-photo-of-man-taking-picture-in-car-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Anand Solanki",
      rating: "★★★★★",
      text: "I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
      image:
        "https://images.pexels.com/photos/20873729/pexels-photo-20873729/free-photo-of-man-taking-picture-in-car-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your actual image URL
    },
    {
      name: "Arjun Raghav",
      rating: "★★★★★",
      text: "I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
      image:
        "https://images.pexels.com/photos/20873729/pexels-photo-20873729/free-photo-of-man-taking-picture-in-car-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your actual image URL
    },
    {
      name: "Anand Solanki",
      rating: "★★★★★",
      text: "I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
      image:
        "https://images.pexels.com/photos/20873729/pexels-photo-20873729/free-photo-of-man-taking-picture-in-car-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your actual image URL
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="discover" id="discover">
      <h2>Discover</h2>
      <div class="image-container">
        <img src="/src/assets/ladakh-2300904_640.jpg" alt="ladakh-pic" />
      </div>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <div className="testimonial-name">
                {testimonial.name}
                <span>{testimonial.rating}</span>
              </div>
              <p>{testimonial.text}</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
