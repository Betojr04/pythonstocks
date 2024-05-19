import React from "react";
import { HeroSection } from "../../components/Hero/HeroSection.js";
import FeaturesSection from "../../components/Featrures/FeaturesSection.js";
import AboutSection from "../../components/About/AboutSection.js";
import { TestimonialsSection } from "../../components/Testimonial/TestimnonialsSection.js";
import { CallToActionSection } from "../../components/CallToAction/CallToActionSection.js";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
};

export default LandingPage;
