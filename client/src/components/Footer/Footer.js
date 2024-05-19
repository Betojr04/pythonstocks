import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size="1.5em" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size="1.5em" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="1.5em" />
          </a>
        </div>
        <div className="footer-contact">
          <p>123 Stock St, Market City</p>
          <p>Email: info@stockplatform.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Stock Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};
