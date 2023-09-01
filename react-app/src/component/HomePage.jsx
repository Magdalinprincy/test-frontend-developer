import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [selectedDestination, setSelectedDestination] = useState('');

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="home-page relative">
      <h1>Welcome to our Travel Marketplace</h1>

      <div className="option card card-body ">
        {selectedDestination ? (
          <p className="h2">You've selected: {selectedDestination}</p>
        ) : (
          <p className="h2">Please select your preferred travel destination:</p>
        )}

        <div className=" d-flex button-container ">
          <button
            className="btn btn-success m-1"
            onClick={() => handleDestinationSelect('Beach Vacation')}
          >
            Beach Vacation
          </button>
          <button
            className="btn btn-success m-1"
            onClick={() => handleDestinationSelect('Mountain Adventure')}
          >
            Mountain Adventure
          </button>
          <button
            className="btn btn-success m-1"
            onClick={() => handleDestinationSelect('City Exploration')}
          >
            City Exploration
          </button>
        </div>

        {selectedDestination && (
          <Link className="h6 text-primary" to={`/subscription`}>
            Proceed to Subscription
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
