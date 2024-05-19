import React from "react";
import { FaChartLine, FaUserShield, FaBell } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Key Features</h2>
      <div className="features-container">
        <div className="feature">
          <FaChartLine size="2em" />
          <h3>Real-Time Analytics</h3>
          <p>Get the latest stock market insights and trends.</p>
        </div>
        <div className="feature">
          <FaUserShield size="2em" />
          <h3>Secure Platform</h3>
          <p>Your data is protected with top-notch security measures.</p>
        </div>
        <div className="feature">
          <FaBell size="2em" />
          <h3>Instant Notifications</h3>
          <p>Receive alerts for important stock movements.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
