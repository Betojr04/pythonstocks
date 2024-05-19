import React from "react";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to PyStocks</h1>
        <p>Your gateway to stock market insights</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};
