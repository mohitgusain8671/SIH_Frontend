import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-md max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Fertilizer Recommendations</h2>
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
  }).isRequired
};

export default Results;
