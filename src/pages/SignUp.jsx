import React from 'react';
import Navbar from '../components/Navbar';
import './Signup.css';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <main className="signup-container">
        <div className="signup-box">
          <h2>Create an Account</h2>
          <div className="input-box">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="signup-buttons">
            <button className="cta-button">Sign Up</button>
            <p>Already have an account? <a href="/signin">Login</a></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
