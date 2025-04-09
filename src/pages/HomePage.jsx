import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Footer from '../components/Footer';
import { movies } from '../data/movieData';
import { concerts } from '../data/ConcertData';

import {events} from '../data/EventData';
// Import all banner images
import ColdPlayImage from '../data/ColdplayBig.png';
import ComicConBig from '../data/ComicConBig.png';
import PromotionBig from '../data/Promotion.png';
import GabberBig from '../data/Gabbar.png';
const bannerImages = [
  {
    image: GabberBig,  // Using the imported image directly
    title: "Latest Blockbuster Movies",
    subtitle: "Book your tickets now for an immersive experience"
  },
  {
    // Replace with your actual imported image
    image: ColdPlayImage, // Temporarily using placeholder until you import the actual image
    title: "Live Concerts This Month",
    subtitle: "Don't miss your favorite artists performing live"
  },
  {
    // Replace with your actual imported image
    image: ComicConBig, // Temporarily using placeholder until you import the actual image
    title: "Exciting Events Near You",
    subtitle: "Discover unique entertainment experiences"
  },
  {
    // Replace with your actual imported image
    image: PromotionBig, // Temporarily using placeholder until you import the actual image
    title: "Special Weekend Offers",
    subtitle: "Limited time discounts on select shows"
  }
];

const HomePage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  // Function to safely get an image
  const getItemImage = (item) => {
    try {
      if (!item.image || item.image.includes('https://')) {
        return `/api/placeholder/300/180`;
      }
      return item.image;
    } catch (error) {
      console.error(`Error loading image for ${item.title}:`, error);
      return `/api/placeholder/300/180`;
    }
  };

  // Auto-rotate banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Entertainment section component to reduce repetition
  const EntertainmentSection = ({ title, items, linkTo }) => (
    <div className="entertainment-section">
      <div className="section-header">
        <h2>{title}</h2>
        <Link to={linkTo} className="view-all-link">View All</Link>
      </div>
      <div className="items-row">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-image-container">
              <img src={getItemImage(item)} alt={item.title} />
            </div>
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="home-page">
      <div className="banner-carousel">
        {bannerImages.map((banner, index) => (
          <div 
            key={index} 
            className={`banner-slide ${index === currentBanner ? 'active' : ''}`}
            // Use the image property directly instead of url
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="banner-content">
              <h1>{banner.title}</h1>
              <p>{banner.subtitle}</p>
              <Link to="/movies" className="banner-cta">Explore Now</Link>
            </div>
          </div>
        ))}
        
        <div className="carousel-indicators">
          {bannerImages.map((_, index) => (
            <button 
              key={index}
              className={`indicator ${index === currentBanner ? 'active' : ''}`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>
      </div>

      <div className="content-container">
        <EntertainmentSection title="Latest Movies" items={movies.slice(0, 4)} linkTo="/movies" />
        <EntertainmentSection title="Upcoming Concerts" items={concerts} linkTo="/concerts" />
        <EntertainmentSection title="Featured Events" items={events} linkTo="/events" />
      </div>
      
      {/* Add the Footer component here */}
      <Footer />
    </div>
  );
};

export default HomePage;