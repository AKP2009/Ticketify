import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingPage.css';
import { movies } from '../data/movieData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    // Find the movie by ID
    const selectedMovie = movies.find(m => m.id === parseInt(movieId));
    if (selectedMovie) {
      setMovie(selectedMovie);
      // Set the first showtime as default if available
      if (selectedMovie.showTimes && selectedMovie.showTimes.length > 0) {
        setSelectedShowtime(selectedMovie.showTimes[0]);
      }
    } else {
      setError('Movie not found');
    }
  }, [movieId]);
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedShowtime) {
      setError('Please select a showtime');
      return;
    }
    
    if (!customerName.trim()) {
      setError('Please enter your name');
      return;
    }
    
    // Navigate to confirmation page with booking details
    navigate('/confirmation', {
      state: {
        movieId: movie.id,
        movieTitle: movie.title,
        customerName: customerName,
        showtime: selectedShowtime,
        seats: selectedSeats,
        totalPrice: calculateTotalPrice(selectedSeats),
        posterImage: movie.image
      }
    });
  };
  
  // Calculate price (just an example calculation)
  const calculateTotalPrice = (seats) => {
    const basePrice = 100;
    return (basePrice * seats).toFixed(2);
  };
  
  // Function to safely get an image
  const getMovieImage = (movie) => {
    try {
      if (!movie.image || movie.image.includes('https://')) {
        return `/api/placeholder/300/450`;
      }
      return movie.image;
    } catch (error) {
      console.error(`Error loading image for ${movie.title}:`, error);
      return `/api/placeholder/300/450`;
    }
  };
  
  if (error) {
    return (
      <>
        <Navbar />
        <div className="booking-error">{error}</div>
        <Footer />
      </>
    );
  }
  
  if (!movie) {
    return (
      <>
        <Navbar />
        <div className="booking-loading">Loading...</div>
        <Footer />
      </>
    );
  }

  return (
    <div className="booking-page">
      <Navbar />
      
      <div className="booking-container">
        <div className="booking-content">
          <div className="movie-details-section">
            <div className="movie-poster">
              <img src={getMovieImage(movie)} alt={movie.title} />
            </div>
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Duration:</strong> {movie.duration}</p>
              <p><strong>Rating:</strong> ★ {movie.rating}</p>
              <p><strong>Director:</strong> {movie.director}</p>
            </div>
          </div>
          
          <div className="booking-form-section">
            <h2>Book Your Tickets</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="showtime">Select Showtime:</label>
                <select 
                  id="showtime" 
                  value={selectedShowtime} 
                  onChange={(e) => setSelectedShowtime(e.target.value)}
                  required
                >
                  {movie.showTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="seats">Number of Seats:</label>
                <div className="seats-selector">
                  <button 
                    type="button" 
                    className="seat-adjust-btn"
                    onClick={() => selectedSeats > 1 && setSelectedSeats(selectedSeats - 1)}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    id="seats" 
                    min="1" 
                    max="10"
                    value={selectedSeats} 
                    onChange={(e) => setSelectedSeats(parseInt(e.target.value))}
                    required
                  />
                  <button 
                    type="button" 
                    className="seat-adjust-btn"
                    onClick={() => selectedSeats < 10 && setSelectedSeats(selectedSeats + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="customerName">Your Name:</label>
                <input 
                  type="text" 
                  id="customerName" 
                  value={customerName} 
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="price-summary">
                <p>Price per ticket: Rs 100</p>
                <p className="total-price">Total Price: Rs {calculateTotalPrice(selectedSeats)}</p>
              </div>
              
              <button type="submit" className="proceed-btn">Proceed to Payment</button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingPage;