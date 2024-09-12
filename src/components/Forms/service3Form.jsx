import  { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const Service3Form = ({ setResults }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const serviceId = 3;


  const [cropType, setCropType] = useState('');
  const [fertilizerName, setFertilizerName] = useState('');
  const [nitrogenContent, setNitrogenContent] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [potassium, setPotassium] = useState('');
 // New state for location data

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recommendations = {
      nitrogenContent,
      phosphorus,
      potassium,
      cropType,
      fertilizerName,
      fertilizer: 'Recommended Fertilizer A',
      quantity: '50 kg per hectare'
    };  
    try {
      const response = await axios.post('http://localhost:8080/agroTech/api/v1/crop-predict', recommendations);
      // Handle success
      // setResults(response.data);
      navigate('/results?serviceId=service1', { state: { results: response.data } });
    } catch (error) {
      // Handle error
      console.error('There was an error!', error);
    }
  };

  // Define available crop types
  const cropTypes = [
    'Wheat',
    'Corn',
    'Rice',
    'Soybean',
    'Barley',
    'Maze',
    'Jute',
    'Cotton',
    'Coconut',
    'Papaya',
    'Orange',
    'Apple',
    'Muskmelon',
    'Watermelon',
    'Grapes',
    'Mango',
    'Banana',
    'Pomegranate',
    'Lentil',
    'Chickpea',
    'Coffee',
  ];

  const fertilizerNames = [
    'Urea',
    '10-26-26',
    '14-35-14',
    '17-17-17',
    '20-20',
    '28-28',
    'DAP',
    '28-28',
  ];

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <form className="w-full max-w-lg bg-white p-8 shadow-lg rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Enter the Data for Fertilizer Quantity</h2>
        {/* SERVICE 3 - FERTILIZER QUANTITY*/}

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

            <div className="mb-8">
              <label className="block text-gray-700 text-lg font-bold mb-2 underline">Fertilizer Name</label>
              <select 
                value={fertilizerName}
                onChange={(e) => setFertilizerName(e.target.value)}
                className="border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="" disabled>Select a fertilizer</option>
                {fertilizerNames.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>          
      

        <div className="flex justify-center">
          <Link
            to={`/results?serviceId=${serviceId}`}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-transform transform hover:scale-105 duration-300"
          >
            View Results
          </Link>
        </div>

      </form>
    </div>
  );
};

// Form.propTypes = {
//   setResults: PropTypes.func.isRequired,
// };

export default Service3Form;
