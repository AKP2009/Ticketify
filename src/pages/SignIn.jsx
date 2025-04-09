import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add your authentication logic if needed.
    // After successful sign in, navigate to the homepage:
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <div className="signin-container">
        <div className="signin-box">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <div className="signin-buttons">
              <button type="submit" className="cta-button">Sign In</button>
              <p>
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
