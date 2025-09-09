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

      {/* How to Pay for Parking Section */}
      <section className="howtopay-parking">
        <div className="container">
          <div className="section-title">
            <h3 className="main-title">How to Pay for Parking</h3>
            <div className="content sub-title">
              <p>
                Explore simple and convenient ways to handle your parking
                payments, designed to fit your needs and ensure a seamless
                experience.
              </p>
            </div>
          </div>
          <div className="howtopay-parking-listing">
            <div className="regular slider">
              <a
                className="howtopay-parking-list"
                href="/variable-parking-tariff"
              >
                <div className="howtopay-parking-image">
                  <img
                    alt="Variable parking tariff"
                    title="Variable parking tariff"
                    loading="lazy"
                    width="416"
                    height="416"
                    decoding="async"
                    src="https://cms.parkin.ae/sites/default/files/2025-04/Variable-Parking-Tariff2_3.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="howtopay-parking-content">
                  <h4>Variable parking tariff</h4>
                  <div className="content">
                    <p>
                      Check parking rates based on zone codes and peak hours to
                      take advantage of variable tariffs so you can plan smarter
                      and save more.
                    </p>
                  </div>
                </div>
                <div className="theme-button-border">Learn More</div>
              </a>
              <a className="howtopay-parking-list" href="/parking-information">
                <div className="howtopay-parking-image">
                  <img
                    alt="Parking Zone Guide"
                    title="Parking Zone Guide"
                    loading="lazy"
                    width="416"
                    height="416"
                    decoding="async"
                    src="https://cms.parkin.ae/sites/default/files/2025-08/_ANS2164%201.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="howtopay-parking-content">
                  <h4>Parking Zone Guide</h4>
                  <div className="content">
                    <p>
                      Discover zone-specific parking details, including fees and
                      operational hours. Optimise your parking choices and stay
                      informed to avoid fines.
                    </p>
                  </div>
                </div>
                <div className="theme-button-border">Learn More</div>
              </a>
              <a className="howtopay-parking-list" href="/offline-machine">
                <div className="howtopay-parking-image">
                  <img
                    alt="Parkin Machines"
                    title="Parkin Machines"
                    loading="lazy"
                    width="416"
                    height="416"
                    decoding="async"
                    src="https://cms.parkin.ae/sites/default/files/2024-12/Offline%20Parkin%20Machine_0.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="howtopay-parking-content">
                  <h4>Parkin Machines</h4>
                  <div className="content">
                    <p>
                      Explore available options and familiarise yourself with
                      how to operate offline parking machines, including the
                      payment processes.
                    </p>
                  </div>
                </div>
                <div className="theme-button-border">Learn More</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Discover the Key to Stress-Free Parking Section */}
      <div className="discover-the-key-inner-view">
        <div className="section-title">
          <h3 className="main-title">
            Discover the Key to Stress-Free Parking!
          </h3>
        </div>
        <div className="discover-the-key-list">
          <div className="discover-the-key-card">
            <div className="discover-the-key-card-icon">
              <img
                alt="Seamless Experience"
                title="Seamless Experience"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                src="https://cms.parkin.ae/sites/default/files/2024-08/explore_1.png"
                style={{ color: "transparent" }}
              />
            </div>
            <h4>Seamless Experience</h4>
            <p>Enjoy hassle-free parking with Parkin's intuitive solutions.</p>
          </div>
          <div className="discover-the-key-card">
            <div className="discover-the-key-card-icon">
              <img
                alt="Effortless Transactions"
                title="Effortless Transactions"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                src="https://cms.parkin.ae/sites/default/files/2024-08/explore_2.png"
                style={{ color: "transparent" }}
              />
            </div>
            <h4>Effortless Transactions</h4>
            <p>
              Easily manage all your parking needs, from booking to
              subscription, with Parkin user-friendly platform.
            </p>
          </div>
          <div className="discover-the-key-card">
            <div className="discover-the-key-card-icon">
              <img
                alt="24/7 Customer Support"
                title="24/7 Customer Support"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                src="https://cms.parkin.ae/sites/default/files/2024-08/explore_3.png"
                style={{ color: "transparent" }}
              />
            </div>
            <h4>24/7 Customer Support</h4>
            <p>
              Get reliable assistance round the clock for all your parking
              needs.
            </p>
          </div>
        </div>
      </div>

      {/* New Feature Section - Overlay Content on Image */}
      <section className="new-feature-section">
        <div className="container">
          <div className="new-feature-image-overlay-wrap">
            <img
              alt="New Feature!"
              title="New Feature!"
              loading="lazy"
              width="1312"
              height="384"
              decoding="async"
              src="https://cms.parkin.ae/sites/default/files/2024-08/new_feature.webp"
              className="new-feature-image"
              style={{
                color: "transparent",
                maxWidth: "100%",
                borderRadius: "16px",
              }}
            />
            <div className="new-feature-overlay-content">
              <h3 className="main-title">New Feature!</h3>
              <p className="sub-title">
                Take control and manage your subscription with ease from your
                Parkin dashboard. Renew your card, Update your vehicle details,
                or modify your subscription terms with just a few clicks.
              </p>
              <a
                className="theme-button-border border-white"
                aria-label="Learn More Button"
                href="/subscription"
              >
                Check it Out
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
