import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MoviesPage from './pages/MoviesPage';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/booking/:movieId" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/concerts" element={<HomePage />} /> {/* Replace with actual ConcertsPage when available */}
        <Route path="/events" element={<HomePage />} /> {/* Replace with actual EventsPage when available */}
      </Routes>
    </>
  );
}

export default App;