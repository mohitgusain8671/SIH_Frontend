import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-md max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Fertilizer Recommendations</h2>
        <p><strong>Soil Health:</strong> {results.soilHealth}</p>
        <p><strong>Crop Type:</strong> {results.cropType}</p>
        <p><strong>Weather Conditions:</strong> {results.weather}</p>
        <hr className="my-4" />
        <p><strong>Recommended Fertilizer:</strong> {results.fertilizer}</p>
        <p><strong>Recommended Quantity:</strong> {results.quantity}</p>
      </div>
    </div>
  );
};

export default Results;
