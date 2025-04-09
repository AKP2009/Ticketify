import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <main className="split-page">
        <div className="left-section">
          <div className="overlay">
            <h1>Your Gateway to Entertainment</h1>
            <p>Discover and book tickets for the latest movies, live concerts, and thrilling events.</p>
          </div>
        </div>
        <div className="right-section">
          <div className="right-content">
            <h2>Why Choose Ticketify?</h2>
            <ul className="features-list">
              <li><span>&#9733;</span> Access to exclusive events and premiers.</li>
              <li><span>&#9733;</span> Hassle-free booking experience.</li>
              <li><span>&#9733;</span> Special discounts on top shows.</li>
            </ul>
            <div className="cta-buttons">
              <Link to="/home" className="cta-button">Explore Now</Link>
              <Link to="/signup" className="cta-button secondary">Create an Account</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;