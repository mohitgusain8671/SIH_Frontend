import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Results = ({ results: propResults }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const serviceId = query.get('serviceId');

  // If results are passed via props, use them; otherwise, try to get them from location.state
  const results = propResults || location.state?.recommendations;

  // Helper function to display either the result value or a placeholder
  const displayField = (value, placeholder = 'Data not available') => value || placeholder;

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Desired Results are Here !!</h2>

        {serviceId === 'service1' && (
          <div>
            <h3 className="text-xl font-bold mb-2 underline">Crop Recommendation Results</h3>

            {/* Displaying recommended crop details */}
            <div className="mb-4">
              <img
                src={results?.croprDetails?.image || 'https://th.bing.com/th/id/OIP.leUcEChYZIbEsnNYuhNvmAHaE8?rs=1&pid=ImgDetMain'}
                alt={results?.croprDetails?.name || 'Default Crop'}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <p><strong>Recommended Crop:</strong> {displayField(results?.croprDetails?.name)}</p>
              <p><strong>Crop ID:</strong> {displayField(results?.croprDetails?.cropID)}</p>
            </div>

            {/* Displaying crop's optimal conditions */}
            <h4 className="font-bold mb-2">Optimal Conditions:</h4>
            <p><strong>Optimal pH:</strong> {displayField(results?.croprDetails?.optimal_ph_min)} - {displayField(results?.croprDetails?.optimal_ph_max)}</p>
            <p><strong>Optimal Temperature:</strong> {displayField(results?.croprDetails?.optimal_temp_min)}°C - {displayField(results?.croprDetails?.optimal_temp_max)}°C</p>
            <p><strong>Optimal Moisture:</strong> {displayField(results?.croprDetails?.optimal_moisture_min)}% - {displayField(results?.croprDetails?.optimal_moisture_max)}%</p>

            {/* Displaying recommended NPK levels */}
            <h4 className="font-bold mt-4 mb-2">Recommended NPK Levels:</h4>
            <p><strong>Nitrogen (N):</strong> {displayField(results?.croprDetails?.N)} kg/ha</p>
            <p><strong>Phosphorus (P):</strong> {displayField(results?.croprDetails?.P)} kg/ha</p>
            <p><strong>Potassium (K):</strong> {displayField(results?.croprDetails?.K)} kg/ha</p>

            {/* Displaying input data */}
            <h4 className="font-bold mt-4 mb-2">Input Data:</h4>
            <p><strong>Nitrogen (N) Input:</strong> {displayField(results?.input?.N[0])} kg/ha</p>
            <p><strong>Phosphorus (P) Input:</strong> {displayField(results?.input?.P[0])} kg/ha</p>
            <p><strong>Potassium (K) Input:</strong> {displayField(results?.input?.K[0])} kg/ha</p>
            <p><strong>Temperature:</strong> {displayField(results?.input?.Temperature[0])}°C</p>
            <p><strong>Humidity:</strong> {displayField(results?.input?.Humidity[0])}%</p>
            <p><strong>pH Level:</strong> {displayField(results?.input?.PH[0])}</p>
            <p><strong>Rainfall:</strong> {displayField(results?.input?.Rainfall[0])} mm</p>
          </div>
        )}

        {serviceId === 'service2' && (
          <div>
            <h3 className="text-xl font-bold mb-2 underline">Fertilizer Recommendation Results</h3>

            {/* Displaying fertilizer details */}
            <div className="mb-4">
              <h4 className="font-bold mb-2">Fertilizer Details:</h4>
              <p><strong>Fertilizer Name:</strong> {displayField(results?.fertilizerDetails?.name)}</p>
              <p><strong>Description:</strong> {results?.fertilizerDetails?.description?.map((desc, index) => (
                <li key={index}>{desc}</li>
              )) || 'No description available'}</p>
              <p><strong>Organic Methods:</strong> {results?.fertilizerDetails?.organic_methods?.map((method, index) => (
                <li key={index}>{method}</li>
              )) || 'No organic methods available'}</p>
              <p><strong>Nitrogen Content:</strong> {displayField(results?.fertilizerDetails?.N2_content)}%</p>
              <p><strong>Phosphorus Content:</strong> {displayField(results?.fertilizerDetails?.Phosphorus_Content)}%</p>
              <p><strong>Potassium Content:</strong> {displayField(results?.fertilizerDetails?.Potassium_content)}%</p>
            </div>

            {/* Displaying input data */}
            <h4 className="font-bold mt-4 mb-2">Input Data:</h4>
            <p><strong>Moisture:</strong> {displayField(results?.input?.Moisture)}%</p>
            <p><strong>Soil Type:</strong> {displayField(results?.input?.Soil_Type)}</p>
            <p><strong>Crop Type:</strong> {displayField(results?.input?.Crop_Type)}</p>
            <p><strong>Nitrogen:</strong> {displayField(results?.input?.Nitrogen)} kg/ha</p>
            <p><strong>Potassium:</strong> {displayField(results?.input?.Potassium)} kg/ha</p>
            <p><strong>Phosphorus:</strong> {displayField(results?.input?.Phosphorous)} kg/ha</p>
            <p><strong>Temperature:</strong> {displayField(results?.input?.Temperature)}°C</p>
            <p><strong>Humidity:</strong> {displayField(results?.input?.Humidity)}%</p>
          </div>
        )}

        {serviceId === 'service3' && (
          <div>
            <h3 className="text-xl font-bold mb-2 underline">Fertilizer Quantity Results</h3>

            {/* Displaying fertilizer quantity results */}
            <div className="mb-4">
              <h4 className="font-bold mb-2">Fertilizer Amount:</h4>
              <p><strong>Recommended Amount:</strong> {displayField(results?.FertilizerAmount)}</p>

              {/* Displaying fertilizer and crop details */}
              <h4 className="font-bold mb-2 mt-4">Fertilizer Details:</h4>
              <p><strong>Fertilizer Name:</strong> {displayField(results?.FertilizerDetail?.name)}</p>
              <p><strong>Description:</strong> {results?.FertilizerDetail?.description?.map((desc, index) => (
                <li key={index}>{desc}</li>
              )) || 'No description available'}</p>
              <p><strong>Organic Methods:</strong> {results?.FertilizerDetail?.organic_methods?.map((method, index) => (
                <li key={index}>{method}</li>
              )) || 'No organic methods available'}</p>
              <p><strong>Nitrogen Content:</strong> {displayField(results?.FertilizerDetail?.N2_content)}%</p>
              <p><strong>Phosphorus Content:</strong> {displayField(results?.FertilizerDetail?.Phosphorus_Content)}%</p>
              <p><strong>Potassium Content:</strong> {displayField(results?.FertilizerDetail?.Potassium_content)}%</p>

              {/* Displaying crop details */}
              <h4 className="font-bold mb-2 mt-4">Crop Details:</h4>
              <img
                src={results?.CropDetail?.image || 'https://th.bing.com/th/id/OIP.leUcEChYZIbEsnNYuhNvmAHaE8?rs=1&pid=ImgDetMain'}
                alt={results?.CropDetail?.name || 'Default Crop'}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <p><strong>Crop Name:</strong> {displayField(results?.CropDetail?.name)}</p>
              <p><strong>Crop ID:</strong> {displayField(results?.CropDetail?.cropID)}</p>
              <p><strong>Optimal pH:</strong> {displayField(results?.CropDetail?.optimal_ph_min)} - {displayField(results?.CropDetail?.optimal_ph_max)}</p>
              <p><strong>Optimal Temperature:</strong> {displayField(results?.CropDetail?.optimal_temp_min)}°C - {displayField(results?.CropDetail?.optimal_temp_max)}°C</p>
              <p><strong>Optimal Moisture:</strong> {displayField(results?.CropDetail?.optimal_moisture_min)}% - {displayField(results?.CropDetail?.optimal_moisture_max)}%</p>
              <p><strong>Nitrogen (N):</strong> {displayField(results?.CropDetail?.N)} kg/ha</p>
              <p><strong>Phosphorus (P):</strong> {displayField(results?.CropDetail?.P)} kg/ha</p>
              <p><strong>Potassium (K):</strong> {displayField(results?.CropDetail?.K)} kg/ha</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.object,
};

export default Results;
