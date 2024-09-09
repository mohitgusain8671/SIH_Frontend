// import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { Form } from 'react-router-dom';

const serviceData = {
  service1: {
    title: 'Soil Health Analysis',
    description: 'Get detailed insights into soil nutrients, pH levels, and structure for optimal crop growth.',
    img: 'https://via.placeholder.com/800x400?text=Soil+Health+Analysis',
    details: 'Our Soil Health Analysis service provides comprehensive insights into soil composition, nutrient levels, pH balance, and other critical factors affecting soil health. This information is crucial for optimizing crop yield and maintaining healthy soil conditions. We use advanced techniques and tools to deliver precise and actionable results.'
  },
  service2: {
    title: 'Weather Pattern Monitoring',
    description: 'Track real-time weather data to make timely fertilizer and farming decisions.',
    img: 'https://via.placeholder.com/800x400?text=Weather+Pattern+Monitoring',
    details: 'Stay ahead of weather changes with our Weather Pattern Monitoring service. We provide real-time data and forecasts to help you make informed decisions about when to apply fertilizers, water your crops, and take other critical actions based on current and expected weather conditions.'
  },
  service3: {
    title: 'Tailored Fertilizer Recommendations',
    description: 'Receive precise fertilizer types and quantities based on soil health, crop type, and weather patterns.',
    img: 'https://via.placeholder.com/800x400?text=Tailored+Fertilizer+Recommendations',
    details: 'Optimize your fertilizer use with our Tailored Fertilizer Recommendations service. We analyze your soil health, crop requirements, and weather patterns to provide customized fertilizer recommendations. This approach ensures that you use the right fertilizers in the right amounts, improving crop yields and sustainability.'
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <div className="service-detail container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <img src={service.img} alt={service.title} className="w-full h-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-lg mb-4">{service.description}</p>
      <p className="text-base mb-7">{service.details}</p>
      <Link to={`/form`} className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors">
        Check it out
      </Link>
    </div>
  );
};

export default ServiceDetail;
