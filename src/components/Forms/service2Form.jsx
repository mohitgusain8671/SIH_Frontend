import { useState } from "react";
import MapComponent from '../mapComponent';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Service2Form = ()=>{
    const [nitrogenContent, setNitrogenContent] = useState('');
    const [phosphorus, setPhosphorus] = useState('');
    const [potassium, setPotassium] = useState('');
    const [locationData, setLocationData] = useState({ lat: '', lng: '' });
    const [cropType, setCropType] = useState('');
    const [soilType, setSoilType] = useState('');
    const [moisture, setMoisture] = useState('');
    const navigate = useNavigate();
    const serviceId = 2;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const recommendations = {
        nitrogenContent,
        phosphorus,
        potassium,
        
        cropType,
        soilType,
        moisture,
        
        latitude: locationData.lat, // Include latitude in recommendations
        longitude: locationData.lng, // Include longitude in recommendations
        fertilizer: 'Recommended Fertilizer A',
        quantity: '50 kg per hectare'
      };
      try {
        const response = await axios.post('https://agromindsbackend-production.up.railway.app/agroTech/api/v1/fertilizer-predict', recommendations,{
          headers:{
              'Content-Type': 'application/json',
          }
        });
        console.log("Line 30",response);
      //   setResults(response.data);
        navigate('/results?serviceId=service2', { state: { results: response.data } });
      } catch (error) {
        // Handle error
        console.error('There was an error!', error.response ? error.response.data : error.message);
      }
    };

    const cropTypes = [
        'Wheat',
        'Maize',
        'Sugarcane',
        'Cotton',
        'Tobacco',
        'Paddy',
        'Barley',
        'Millets',
        'Oil Seeds',
        'Pulses',
        'Ground Nuts',
      ];
    
      // Define available soil types
      const soilTypes = [
        'Clayey',
        'Sandy',
        'Loamy',
        'Red',
        'Black',
      ];

    return(
        <div className="flex justify-center items-center py-12 bg-gray-100">
        <form className="w-full max-w-lg bg-white p-8 shadow-lg rounded-md" >
          <h2 className="text-2xl font-bold mb-6 text-center">Enter the Data for Fertilizer recommendation</h2>
     
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
            <div className="flex justify-center">
          <Link
            to={`/results?serviceId=service2`}
            onClick={handleSubmit}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-transform transform hover:scale-105 duration-300"
          >
            View Results
          </Link>
        </div>
       
        </form>
        </div>  
    )
}