import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import MapComponent from './mapComponent'; // Import the MapComponent

const Form = ({ setResults }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const serviceId = query.get('serviceId');

  const [nitrogenContent, setNitrogenContent] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [potassium, setPotassium] = useState('');
  const [phLevel, setPhLevel] = useState('');
  const [moisture, setMoisture] = useState('');
  const [cropType, setCropType] = useState('');
  const [soilType, setSoilType] = useState('');
  const [locationData, setLocationData] = useState({ lat: '', lng: '' }); // New state for location data

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendations = {
      nitrogenContent,
      phosphorus,
      potassium,
      phLevel,
      cropType,
      soilType,
      moisture,
      latitude: locationData.lat, // Include latitude in recommendations
      longitude: locationData.lng, // Include longitude in recommendations
      fertilizer: 'Recommended Fertilizer A',
      quantity: '50 kg per hectare'
    };
    setResults(recommendations);
    navigate('/results'); // Navigate to results page
  };

  // Define available crop types
  const cropTypes = [
    'Wheat',
    'Corn',
    'Rice',
    'Soybean',
    'Barley',
    'Oats'
  ];

  // Define available soil types
  const soilTypes = [
    'Clay',
    'Sandy',
    'Loamy',
    'Peaty',
    'Saline',
    'Silt'
  ];

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <form className="w-full max-w-lg bg-white p-8 shadow-lg rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Enter the Data Related to Your Crops</h2>

        {/* SERVICE 1 - CROP */}
        {serviceId === 'service1' && (
          <>
            <div className="mb-6 ">
              <h3 className="text-xl font-bold mb-2 underline">Soil Health</h3>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nitrogen Content</label>
                <input 
                  type="text" 
                  value={nitrogenContent}
                  onChange={(e) => setNitrogenContent(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 25 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phosphorus Content</label>
                <input 
                  type="text" 
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 15 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Potassium Content</label>
                <input 
                  type="text" 
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 20 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">pH Level</label>
                <input 
                  type="text" 
                  value={phLevel}
                  onChange={(e) => setPhLevel(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 6.5" 
                />
              </div>
            </div>

            <div className="mb-8">
              <MapComponent onLocationChange={(loc) => setLocationData(loc)} />
            </div>
            {/* Fields for Latitude and Longitude */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
              <input
                type="text"
                value={locationData.lat}
                readOnly
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Latitude"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
              <input
                type="text"
                value={locationData.lng}
                readOnly
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Longitude"
              />
            </div>
          </>
        )}


        {/* SERVICE 2 - FERTILIZER RECOMMENDATION*/}
        {serviceId === 'service2' && (
          <>
            <div className="mb-6 ">
              <h3 className="text-xl font-bold mb-2 underline">Soil Health</h3>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nitrogen Content</label>
                <input 
                  type="text" 
                  value={nitrogenContent}
                  onChange={(e) => setNitrogenContent(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 25 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phosphorus Content</label>
                <input 
                  type="text" 
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 15 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Potassium Content</label>
                <input 
                  type="text" 
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 20 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Soil Moisture</label>
                <input 
                  type="text" 
                  value={moisture}
                  onChange={(e) => setMoisture(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 10, 20 " 
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-lg font-bold mb-2 underline">Crop Type</label>
              <select 
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="" disabled>Select a crop type</option>
                {cropTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-lg underline font-bold mb-2">Soil Type</label>
              <select 
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="" disabled>Select a soil type</option>
                {soilTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <MapComponent onLocationChange={(loc) => setLocationData(loc)} />
            </div>

            {/* Fields for Latitude and Longitude */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
              <input
                type="text"
                value={locationData.lat}
                readOnly
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Latitude"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
              <input
                type="text"
                value={locationData.lng}
                readOnly
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Longitude"
              />
            </div>
          </>
        )}

        
        {/* SERVICE 3 - FERTILIZER QUANTITY*/}
        {serviceId === 'service3' && (
          <>
            <div className="mb-6 ">
              <h3 className="text-xl font-bold mb-2 underline">Soil Health</h3>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nitrogen Content</label>
                <input 
                  type="text" 
                  value={nitrogenContent}
                  onChange={(e) => setNitrogenContent(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 25 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phosphorus Content</label>
                <input 
                  type="text" 
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 15 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Potassium Content</label>
                <input 
                  type="text" 
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 20 kg/ha" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Soil Moisture</label>
                <input 
                  type="text" 
                  value={moisture}
                  onChange={(e) => setMoisture(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g., 10, 20 " 
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-lg font-bold mb-2 underline">Crop Type</label>
              <select 
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="" disabled>Select a crop type</option>
                {cropTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-lg underline font-bold mb-2">Soil Type</label>
              <select 
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="" disabled>Select a soil type</option>
                {soilTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <MapComponent onLocationChange={(loc) => setLocationData(loc)} />
            </div>

            {/* Fields for Latitude and Longitude */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
              <input
                type="text"
                value={locationData.lat}
                readOnly
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Latitude"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
              <input
                type="text"
                value={locationData.lng}
                readOnly
                className="border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Longitude"
              />
            </div>
          </>
        )}

        <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
          Get Results
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default Form;
