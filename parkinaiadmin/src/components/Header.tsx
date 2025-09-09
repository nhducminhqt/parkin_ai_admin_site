import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      className="theme-header"
      style={{ background: "#fff", borderBottom: "1px solid #eee" }}
    >
      <div
        className="container"
        style={{ maxWidth: 1200, margin: "auto", padding: "0 16px" }}
      >
        <div
          className="header-wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Link aria-label="Parkin" to="/">
              <img
                src="/logoparkin.png"
                alt="Parkin Logo"
                style={{ height: 60 }}
              />
            </Link>
            <nav style={{ marginLeft: 32, display: "flex", gap: 24 }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#005060",
                  fontWeight: 600,
                }}
              >
                Home
              </Link>
              <Link
                to="/investor"
                style={{
                  textDecoration: "none",
                  color: "#005060",
                  fontWeight: 600,
                }}
              >
                Investor
              </Link>
              <Link
                to="/individuals"
                style={{
                  textDecoration: "none",
                  color: "#005060",
                  fontWeight: 600,
                }}
              >
                Individuals
              </Link>
              <Link
                to="/more"
                style={{
                  textDecoration: "none",
                  color: "#005060",
                  fontWeight: 600,
                }}
              >
                More
              </Link>
            </nav>
          </div>
          <div
            className="menu-section"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Link to="/login">
              <button
                style={{
                  padding: "8px 20px",
                  background: "#00DCB5",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
