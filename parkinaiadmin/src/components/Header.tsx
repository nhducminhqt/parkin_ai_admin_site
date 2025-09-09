import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header: React.FC = () => {
  return (
    <header className="theme-header">
      <div className="container">
        <div className="header-wrap">
          <div className="logo">
            <Link aria-label="Parkin" to="/">
              <img
                src="/logoparkin.png"
                alt="Parkin Logo"
                style={{ height: 60 }}
              />
            </Link>
            <nav className="header-nav">
              <Link to="/" className="header-nav-link">
                Home
              </Link>
              <Link to="/investor" className="header-nav-link">
                Investor
              </Link>
              <Link to="/individuals" className="header-nav-link">
                Individuals
              </Link>
              <Link to="/more" className="header-nav-link">
                More
              </Link>
            </nav>
          </div>
          <div className="menu-section">
            <Link to="/login">
              <button className="header-login-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
