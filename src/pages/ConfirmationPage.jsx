import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;
  
  // Generate a random booking reference
  const generateBookingReference = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  // Generate random seat numbers
  const generateSeatNumbers = (count) => {
    const rows = 'ABCDEFGHIJKLM';
    const seats = [];
    
    for (let i = 0; i < count; i++) {
      const row = rows[Math.floor(Math.random() * rows.length)];
      const seatNum = Math.floor(Math.random() * 20) + 1;
      seats.push(`${row}${seatNum}`);
    }
    
    return seats.join(', ');
  };
  
  const bookingReference = generateBookingReference();
  const seatNumbers = generateSeatNumbers(bookingData?.seats || 1);
  const bookingDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const handleReturn = () => {
    navigate('/movies');
  };
  
  // Function to safely get an image
  const getMovieImage = (image) => {
    try {
      if (!image || image.includes('https://')) {
        return `/api/placeholder/300/450`;
      }
      return image;
    } catch (error) {
      console.error(`Error loading image:`, error);
      return `/api/placeholder/300/450`;
    }
  };
  
  if (!bookingData) {
    return (
      <>
        <Navbar />
        <div className="confirmation-error">
          <h2>Booking information not found</h2>
          <button onClick={handleReturn} className="return-btn">Return to Movies</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="confirmation-page">
      <Navbar />
      
      <div className="confirmation-container">
        <div className="confirmation-header">
          <h1>Booking Confirmed!</h1>
          <p>Thank you for booking with Ticketify. Your ticket details are below.</p>
        </div>
        
        <div className="ticket-card">
          <div className="ticket-header">
            <div className="ticketify-logo">Ticketify</div>
            <div className="booking-ref">Ref: {bookingReference}</div>
          </div>
          
          <div className="ticket-content">
            <div className="ticket-poster">
              <img src={getMovieImage(bookingData.posterImage)} alt={bookingData.movieTitle} />
            </div>
            
            <div className="ticket-details">
              <h2>{bookingData.movieTitle}</h2>
              <div className="customer-name">
                <span>Reserved for: {bookingData.customerName}</span>
              </div>
              
              <div className="ticket-info-grid">
                <div className="ticket-info-item">
                  <label>Date</label>
                  <span>{bookingDate}</span>
                </div>
                <div className="ticket-info-item">
                  <label>Time</label>
                  <span>{bookingData.showtime}</span>
                </div>
                <div className="ticket-info-item">
                  <label>Seats</label>
                  <span>{bookingData.seats}</span>
                </div>
                <div className="ticket-info-item">
                  <label>Seat Numbers</label>
                  <span>{seatNumbers}</span>
                </div>
                <div className="ticket-info-item">
                  <label>Total Price</label>
                  <span>Rs {bookingData.totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="ticket-footer">
            <div className="barcode">
              <div className="barcode-lines"></div>
              <div className="barcode-number">{bookingReference}</div>
            </div>
            <p className="ticket-note">Please present this ticket at the entrance. E-tickets are also sent to your registered email.</p>
          </div>
        </div>
        
        <div className="confirmation-actions">
          <button className="print-btn">Print Ticket</button>
          <button onClick={handleReturn} className="return-btn">Return to Movies</button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ConfirmationPage;