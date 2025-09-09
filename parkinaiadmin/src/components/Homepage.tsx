import React from "react";
import "../css/homepage.css";

const Homepage: React.FC = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="homepage-banner">
        <img
          src="/logoparkin.png"
          alt="Parkin Logo"
          className="homepage-banner-logo"
        />
        <h1 className="homepage-banner-title">
          Smart Parking for Smart Cities
        </h1>
        <p className="homepage-banner-desc">
          ParkIn.AI - The future of parking is here. Hassle-free, secure, and
          intelligent parking solutions for everyone.
        </p>
        <button className="homepage-banner-cta">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="homepage-section">
        <h2 className="homepage-section-title">Why Choose ParkIn.AI?</h2>
        <div className="homepage-features">
          <div className="homepage-feature">
            AI-powered parking recommendations
          </div>
          <div className="homepage-feature">
            Real-time availability & booking
          </div>
          <div className="homepage-feature">Seamless digital payments</div>
          <div className="homepage-feature">
            Private & public lots integration
          </div>
        </div>
        <div className="homepage-section-content">
          Experience the convenience of finding and booking your parking spot in
          seconds. Our platform leverages AI and big data to optimize your
          parking experience.
        </div>
      </section>

      {/* Process Section */}
      <section className="homepage-section">
        <h2 className="homepage-section-title">How It Works</h2>
        <div className="homepage-features">
          <div className="homepage-feature">Search for available spots</div>
          <div className="homepage-feature">Book instantly via app/web</div>
          <div className="homepage-feature">Park and pay digitally</div>
          <div className="homepage-feature">Enjoy stress-free parking</div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
