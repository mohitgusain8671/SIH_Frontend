import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// Mock result data for each service
const resultsData = {
  service1: {
    soilHealth: 'Good',
    cropType: 'Wheat',
    weather: 'Sunny',
    fertilizer: 'Nitrogen',
    quantity: '20kg per acre'
  },
  service2: {
    soilHealth: 'Moderate',
    cropType: 'Corn',
    weather: 'Rainy',
    fertilizer: 'Phosphorus',
    quantity: '15kg per acre'
  },
  service3: {
    soilHealth: 'Poor',
    cropType: 'Rice',
    weather: 'Humid',
    fertilizer: 'Potassium',
    quantity: '10kg per acre'
  },
  service4: {
    soilHealth: 'N/A',
    cropType: 'N/A',
    weather: 'N/A',
    fertilizer: 'N/A',
    quantity: 'N/A'
  },
  service5: {
    soilHealth: 'Excellent',
    cropType: 'Barley',
    weather: 'Cool',
    fertilizer: 'Nitrogen-Phosphate mix',
    quantity: '12kg per acre'
  }
};

const Results = () => {
  const { serviceId } = useParams(); // Get serviceId from URL params
  const results = resultsData[serviceId] || {}; // Get results for the corresponding serviceId

  if (!results) {
    return <p>Results not found.</p>;
  }

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-md max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Desired Recommendations are here !!</h2>
        <p><strong>Soil Health:</strong> {results.soilHealth || 'N/A'}</p>
        <p><strong>Crop Type:</strong> {results.cropType || 'N/A'}</p>
        <p><strong>Weather Conditions:</strong> {results.weather || 'N/A'}</p>
        <hr className="my-4" />
        <p><strong>Recommended Fertilizer:</strong> {results.fertilizer || 'N/A'}</p>
        <p><strong>Recommended Quantity:</strong> {results.quantity || 'N/A'}</p>
      </div>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.shape({
    soilHealth: PropTypes.string,
    cropType: PropTypes.string,
    weather: PropTypes.string,
    fertilizer: PropTypes.string,
    quantity: PropTypes.string
  })
};

export default Results;
