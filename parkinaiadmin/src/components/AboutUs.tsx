import React from "react";
import "../css/aboutus.css";

const AboutUs: React.FC = () => (
  <div className="about-container">
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">About Parkin</h1>
        <p className="hero-subtitle">
          Revolutionizing urban mobility with smart parking solutions
        </p>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="story-section">
      <div className="container">
        <div className="content-grid">
          <div className="text-content">
            <h2 className="section-title">Our Story</h2>
            <p className="section-text">
              Parkin was founded with a simple mission: to eliminate the stress
              of finding parking. We recognized that parking is one of the most
              frustrating aspects of urban life, causing unnecessary stress,
              wasted time, and increased pollution.
            </p>
            <p className="section-text">
              Our team of innovators and technologists came together to create a
              comprehensive parking ecosystem that connects drivers with
              available spaces, optimizes urban infrastructure, and creates new
              revenue opportunities for property owners.
            </p>
          </div>
          <div className="image-content">
            <img
              src="/about-hero.jpg"
              alt="Parkin Story"
              className="story-image"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision Section */}
    <section className="mission-section">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-card">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">
              To transform urban mobility by providing intelligent, seamless
              parking solutions that save time, reduce stress, and create
              sustainable cities.
            </p>
          </div>
          <div className="vision-card">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">
              To be the leading global platform that makes parking effortless,
              accessible, and environmentally responsible for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="values-section">
      <div className="container">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">🎯</div>
            <h4 className="value-title">Innovation</h4>
            <p className="value-text">
              We constantly push boundaries with cutting-edge technology and
              creative solutions.
            </p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h4 className="value-title">Trust</h4>
            <p className="value-text">
              We build reliable partnerships with our users, property owners,
              and communities.
            </p>
          </div>
          <div className="value-item">
            <div className="value-icon">🌱</div>
            <h4 className="value-title">Sustainability</h4>
            <p className="value-text">
              We're committed to reducing environmental impact through smarter
              urban planning.
            </p>
          </div>
          <div className="value-item">
            <div className="value-icon">⚡</div>
            <h4 className="value-title">Efficiency</h4>
            <p className="value-text">
              We optimize every interaction to save time and resources for all
              stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          A diverse group of passionate professionals dedicated to transforming
          urban mobility
        </p>
        <div className="team-grid">
          <div className="team-member">
            <img src="/team-ceo.jpg" alt="CEO" className="team-photo" />
            <h4 className="team-name">Sarah Johnson</h4>
            <p className="team-role">Chief Executive Officer</p>
            <p className="team-bio">
              Former urban planning director with 15+ years experience in smart
              city initiatives.
            </p>
          </div>
          <div className="team-member">
            <img src="/team-cto.jpg" alt="CTO" className="team-photo" />
            <h4 className="team-name">Michael Chen</h4>
            <p className="team-role">Chief Technology Officer</p>
            <p className="team-bio">
              AI and IoT expert who previously led innovation at leading tech
              companies.
            </p>
          </div>
          <div className="team-member">
            <img src="/team-coo.jpg" alt="COO" className="team-photo" />
            <h4 className="team-name">Emily Rodriguez</h4>
            <p className="team-role">Chief Operating Officer</p>
            <p className="team-bio">
              Operations specialist with expertise in scaling technology
              platforms globally.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Statistics Section */}
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">500K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Parking Spaces</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Partner Cities</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1M+</div>
            <div className="stat-label">Hours Saved</div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">
          Ready to Transform Your Parking Experience?
        </h2>
        <p className="cta-text">
          Join thousands of drivers who have already discovered the future of
          parking
        </p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Download App</button>
          <button className="cta-btn secondary">Contact Us</button>
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
