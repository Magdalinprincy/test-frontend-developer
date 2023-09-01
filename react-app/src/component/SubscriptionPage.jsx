import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionPage = ({ selectedDestination }) => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const navigate = useNavigate();
  const handlePurchase = () => {
    // Simulate a successful purchase
    // For this example, we'll just show an alert.
    setSelectedPlan('');
    alert('Congratulations! You have successfully purchased access.');
    navigate('/content-access');
  };

  return (
    <div className="subscription-page container">
      <h1 className="text-primary">Subscription Page</h1>
      <p className="h5">Details of the itinerary go here...</p>

      {!selectedPlan ? (
        <div>
          <p className="h5">
            Select a subscription plan for {selectedDestination}:
          </p>

          <div className="plans d-flex justify-content-evenly">
            <div className="standard card card-body bd-info">
              <h3>Standard Plan</h3>
              <ul>
                <li>Monthly price: \$10</li>
                <li>Includes:</li>
                <ul>
                  <li>Access to all standard content</li>
                  <li>10% discount on special content</li>
                  <li>1 free monthly tour</li>
                </ul>
                <li>Free trial: 1 week</li>
              </ul>

              <button
                className="btn btn-success"
                onClick={() => handlePlanSelect('standard')}
              >
                Standard Plan
              </button>
            </div>

            <div className="special card card-body bd-info">
              <h3>Special Plan</h3>
              <ul>
                <li>Monthly price: \$20</li>
                <li>Includes:</li>
                <ul>
                  <li>Access to all standard and special content</li>
                  <li>20% discount on all content</li>
                  <li>2 free monthly tours</li>
                  <li>Priority customer support</li>
                </ul>
                <li>Free trial: 1 month</li>
              </ul>
              <button
                className="btn btn-success"
                onClick={() => handlePlanSelect('special')}
              >
                Special Plan
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>
            You have selected the{' '}
            {selectedPlan === 'standard' ? 'Standard' : 'Special'} Plan.
          </p>
          <button className="btn btn-success" onClick={handlePurchase}>
            Purchase Access
          </button>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;
