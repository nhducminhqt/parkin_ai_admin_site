import React from "react";

const Homepage: React.FC = () => {
  return (
    <div style={{ padding: "40px 0", textAlign: "center" }}>
      <h1 style={{ color: "#005060", fontSize: 36, fontWeight: 700 }}>
        Welcome to ParkIn.AI Admin Site
      </h1>
      <p style={{ fontSize: 20, marginTop: 16 }}>
        This is the homepage. Use the navigation above to explore features for
        Investors, Individuals, and more.
      </p>
    </div>
  );
};

export default Homepage;
