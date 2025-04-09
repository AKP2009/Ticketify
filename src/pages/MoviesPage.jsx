import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoviesPage.css';
import { movies } from '../data/movieData';
import Navbar from '../components/Navbar';

const MoviesPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();
  
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };
  
  const handleBookTicket = (movieId) => {
    // Close the movie details modal
    setSelectedMovie(null);
    // Navigate to the booking page with the movie ID
    navigate(`/booking/${movieId}`);
  };

  // Function to safely get an image
  const getMovieImage = (movie) => {
    try {
      // Use a placeholder image if the movie image URL isn't working
      if (!movie.image || movie.image.includes('https://')) {
        return `/api/placeholder/300/450`;
      }
      // For local images, try to use the correct path
      return movie.image;
    } catch (error) {
      console.error(`Error loading image for ${movie.title}:`, error);
      return `/api/placeholder/300/450`;
    }
  };

  return (
    <div className="movies-page">
      <Navbar />
      <div className="movies-container">
        <div className="movies-grid">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="movie-card"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="movie-image-container">
                <img src={getMovieImage(movie)} alt={movie.title} />
              </div>

              <div className="movie-info-card">
                <h3>{movie.title}</h3>
                <p className="movie-genre">{movie.genre}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedMovie && (
          <div className="movie-details-overlay">
            <div className="movie-details">
              <button className="close-button" onClick={closeMovieDetails}>×</button>
              <div className="movie-details-content">
                <div className="movie-poster">
                  <img 
                    src={getMovieImage(selectedMovie)} 
                    alt={selectedMovie.title} 
                    className="detail-poster-image"
                  />
                </div>
                <div className="movie-info">
                  <h2>{selectedMovie.title}</h2>
                  <p><strong>Director:</strong> {selectedMovie.director}</p>
                  <p><strong>Genre:</strong> {selectedMovie.genre}</p>
                  <p><strong>Duration:</strong> {selectedMovie.duration}</p>
                  <p><strong>Release Date:</strong> {selectedMovie.releaseDate}</p>
                  <p><strong>Rating:</strong> ★ {selectedMovie.rating}</p>
                  <p><strong>Cast:</strong> {selectedMovie.cast.join(', ')}</p>
                  <p className="movie-description">{selectedMovie.description}</p>
                  <div className="showtimes">
                    <h3>Showtimes</h3>
                    <div className="showtime-buttons">
                      {selectedMovie.showTimes.map((time, index) => (
                        <button key={index} className="showtime-btn">{time}</button>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={selectedMovie.trailerLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="trailer-button"
                  >
                    Watch Trailer
                  </a>
                  <button 
                    className="ticket-button"
                    onClick={() => handleBookTicket(selectedMovie.id)}
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;