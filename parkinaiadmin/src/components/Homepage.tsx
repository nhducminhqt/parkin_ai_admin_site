import React, { useState, useEffect, useRef } from "react";
import "../css/homepage.css";

const bannerSlides = [
  {
    image:
      "https://cms.parkin.ae/sites/default/files/2025-04/Variable-parking-tariff_3.jpg",
    title: "Variable parking tariff",
    subtitle:
      "On 4 April 2025, we’ll roll out a new parking tariff to help you find parking faster, enjoy better access in busy areas, and pay less when demand is low.",
  },
  {
    image:
      "https://cms.parkin.ae/sites/default/files/2025-04/About-Parkin_3_0.jpg",
    title: "Smart Parking for Smart Cities",
    subtitle:
      "ParkIn.AI - The future of parking is here. Hassle-free, secure, and intelligent parking solutions for everyone.",
  },
];

const Homepage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [fade, setFade] = useState(false);

  const handleNext = React.useCallback(() => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % bannerSlides.length);
      setFade(false);
    }, 400);
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, handleNext]);

  return (
    <div>
      {/* Banner Fade Section */}
      <section className="homepage-banner-carousel">
        <div
          className="homepage-banner-slide"
          style={{
            backgroundImage: `url(${bannerSlides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: fade ? 0 : 1,
          }}
        >
          <div className="homepage-banner-overlay">
            <div className="homepage-banner-slider-content">
              <h1 className="homepage-banner-title">
                {bannerSlides[current].title}
              </h1>
              <h2 className="homepage-banner-desc">
                {bannerSlides[current].subtitle}
              </h2>
            </div>
          </div>
        </div>
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
          <p>
            Experience the convenience of finding and booking your parking spot
            in seconds. Our platform leverages AI and big data to optimize your
            parking experience.
          </p>
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
