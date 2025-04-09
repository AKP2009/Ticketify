import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Ticketify</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Current Openings</a></li>
            <li><a href="#">Press Release</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li><a href="#">24/7 Customer Care</a></li>
            <li><a href="#">Resend Booking Confirmation</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Theaters</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon">
              <div className="icon-circle">f</div>
            </a>
            <a href="#" className="social-icon">
              <div className="icon-circle">t</div>
            </a>
            <a href="#" className="social-icon">
              <div className="icon-circle">in</div>
            </a>
            <a href="#" className="social-icon">
              <div className="icon-circle">ig</div>
            </a>
          </div>
          <div className="newsletter">
            <p>Subscribe to our newsletter</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="logo">Ticketify</div>
        <p className="copyright">© 2025 Ticketify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;