import React from "react";
import "./AboutSection.css";

import about from "../../assets/about.jpeg";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Our platform is dedicated to providing the best stock market insights
          and tools for traders and investors. With real-time analytics, secure
          transactions, and instant notifications, we help you stay ahead in the
          market.
        </p>
      </div>
      <div className="about-image">
        <img src={about} alt="About Us" />
      </div>
    </section>
  );
};

export default AboutSection;
