import React, { useState } from "react";
import "../Nav/Nav.css";
import { FaBars } from "react-icons/fa";
import stockLogo from "../../assets/stock.svg";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Toggle menu");
  };

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img alt="Stock" src={stockLogo} />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars style={{ fontSize: "24px", cursor: "pointer" }} />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/stock-price">Stock Price Viewer</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};
