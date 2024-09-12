import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationInput = ({ onLocationChange }) => {
  const [position, setPosition] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [inputLocation, setInputLocation] = useState('');

  const MapEvents = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]); // Update marker position
        onLocationChange({ lat, lng }); // Notify parent component

        const name = await reverseGeocode(lat, lng);
        setLocationName(name); // Update location name
      }
    });
    return null;
  };

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      const data = await response.json();
      return data.display_name; // Return the formatted address
    } catch (error) {
      console.error('Error fetching location name:', error);
      return 'Location name not available';
    }
  };

  const handleLocationInput = async () => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${inputLocation}&format=json`);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const newPosition = [parseFloat(lat), parseFloat(lon)];
        setPosition(newPosition);
        onLocationChange({ lat: newPosition[0], lng: newPosition[1] });

        const name = await reverseGeocode(newPosition[0], newPosition[1]);
        setLocationName(name);
      } else {
        alert('Location not found');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      alert('Error fetching location');
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-lg underline mt-10 font-bold mb-2">Enter Location Name</label>
      <input
        type="text"
        value={inputLocation}
        onChange={(e) => setInputLocation(e.target.value)}
        className="border rounded w-full py-2 px-3 text-gray-700 mb-4"
        placeholder="e.g., Eiffel Tower, Paris"
      />
      <button
        type="button"
        onClick={handleLocationInput}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-transform transform hover:scale-105 duration-300"
      >
        Find Location
      </button>
      
      <label className="block text-gray-700 text-lg font-bold mb-2 mt-4">Find in Map Instead ? <br/> Locate and mark your current location</label>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapEvents />
        {position && (
          <Marker position={position}>
            <Popup>
              <div>
                <p>Latitude: {position[0]}</p>
                <p>Longitude: {position[1]}</p>
                <p>{locationName}</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

LocationInput.propTypes = {
  onLocationChange: PropTypes.func.isRequired,
};

export default LocationInput;
