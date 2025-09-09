import React from "react";
import "../css/homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to ParkIn.AI Admin Site</h1>
      <p className="homepage-desc">
        This is the homepage. Use the navigation above to explore features for
        Investors, Individuals, and more.
      </p>
    </div>
  );
};

export default Homepage;
