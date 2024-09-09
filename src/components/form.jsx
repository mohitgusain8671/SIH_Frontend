import React, { useState } from 'react';

const Form = ({ setResults }) => {
  const [soilHealth, setSoilHealth] = useState('');
  const [cropType, setCropType] = useState('');
  const [weather, setWeather] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendations = {
      soilHealth,
      cropType,
      weather,
      fertilizer: 'Recommended Fertilizer A',
      quantity: '50 kg per hectare'
    };
    setResults(recommendations);
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <form className="w-full max-w-lg bg-white p-8 shadow-lg rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Soil & Crop Data</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Soil Health</label>
          <input 
            type="text" 
            value={soilHealth}
            onChange={(e) => setSoilHealth(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700"
            placeholder="e.g., pH level, nitrogen content" 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Crop Type</label>
          <input 
            type="text" 
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700"
            placeholder="e.g., Wheat, Corn" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Weather Conditions</label>
          <input 
            type="text" 
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700"
            placeholder="e.g., Rainy, Dry, Humid" 
          />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
          Get Fertilizer Recommendations
        </button>
      </form>
    </div>
  );
};

export default Form;
