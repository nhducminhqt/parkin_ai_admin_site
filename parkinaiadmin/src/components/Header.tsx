import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css";

const Header: React.FC = () => {
  const location = useLocation();

  // Scroll to top whenever location changes
  useEffect(() => {
    // Small delay to ensure page is fully rendered
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetHref = e.currentTarget.getAttribute("href");

    // Always scroll to top when clicking navigation links
    window.scrollTo({ top: 0, behavior: "smooth" });

    // For same page navigation, prevent default to avoid unnecessary re-render
    if (location.pathname === targetHref) {
      e.preventDefault();
    }
  };
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
              <Link to="/" className="header-nav-link" onClick={handleNavClick}>
                Home
              </Link>
              <Link
                to="/investor"
                className="header-nav-link"
                onClick={handleNavClick}
              >
                Investor
              </Link>
              <Link
                to="/individuals"
                className="header-nav-link"
                onClick={handleNavClick}
              >
                Individuals
              </Link>
              <Link
                to="/about"
                className="header-nav-link"
                onClick={handleNavClick}
              >
                More
              </Link>
            </nav>
          </div>
          <div className="menu-section">
            <Link to="/login" onClick={handleNavClick}>
              <button className="header-login-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
