import React from 'react';
import { Link } from 'react-router-dom'; // Using react-router for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Ticketify</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/concerts">Concerts</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/signin">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;