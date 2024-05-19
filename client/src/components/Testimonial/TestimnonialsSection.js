import React from "react";
import "./TestimonialsSection.css";

export const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>
            "This platform has transformed my trading experience. The real-time
            analytics are spot on!"
          </p>
          <h4>John Doe</h4>
        </div>
        <div className="testimonial">
          <p>
            "I love the instant notifications. I never miss an important market
            move."
          </p>
          <h4>Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};
