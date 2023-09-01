import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import HomePage from './component/HomePage';
import SubscriptionPage from './component/SubscriptionPage';
import ContentAccessPage from './component/ContentAccessPage';
import './App.css';

function App() {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {' '}
          {/* Changed from Switch */}
          <Route
            path="/"
            element={<HomePage onSelect={handleDestinationSelect} />}
          />
          <Route
            path="/subscription"
            element={
              <SubscriptionPage
                selectedDestination={selectedDestination}
                onSelectPlan={handlePlanSelect}
              />
            }
          />
          <Route
            path="/content-access"
            element={<ContentAccessPage selectedPlan={selectedPlan} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
