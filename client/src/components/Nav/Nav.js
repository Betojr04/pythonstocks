import React from "react";
import "../Nav/Nav.css";
import { FaBars } from "react-icons/fa";

import stockLogo from "../../assets/stock.svg";

export const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img alt="Stock" src={stockLogo} />
      </div>
      <div className="menu">
        <FaBars style={{ fontSize: "24px", cursor: "pointer" }} />
      </div>
    </nav>
  );
};
