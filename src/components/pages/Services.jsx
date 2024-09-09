// import React from 'react';
import { Link } from 'react-router-dom';
const Services = () => {
    const servicesData = [
        {
            img: 'https://via.placeholder.com/600x400?text=Soil+Health+Analysis',
            title: 'Soil Health Analysis',
            description: 'Get detailed insights into soil nutrients, pH levels, and structure for optimal crop growth.',
            id: 'service1',
        },
        {
            img: 'https://via.placeholder.com/600x400?text=Weather+Pattern+Monitoring',
            title: 'Weather Pattern Monitoring',
            description: 'Track real-time weather data to make timely fertilizer and farming decisions.',
            id: 'service2',
        },
        {
            img: 'https://via.placeholder.com/600x400?text=Tailored+Fertilizer+Recommendations',
            title: 'Tailored Fertilizer Recommendations',
            description: 'Receive precise fertilizer types and quantities based on soil health, crop type, and weather patterns.',
            id: 'service3',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="bg-green-700 text-white py-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <p className="text-lg mb-8">
                    Discover the range of services we offer to help you achieve the best results in your farming efforts.
                </p>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                        >
                            <img src={service.img} alt={service.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <Link to={`/service/${service.id}`} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors">
                                   Learn More
                                </Link>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
