// import React from 'react';
import { Link } from 'react-router-dom';
const Services = () => {
    const servicesData = [
        {
            img: 'https://www.posteezy.com/sites/default/files/styles/olivero_hero/public/2023-11/NKrHsv62KDuB5OM9WRfuRb2N23xozvmoUtQs0rYy.jpg?itok=Ed2RI4Qz',
            title: 'Crop Recommendations',
            description: "Receive expert guidance on crop selection based on comprehensive soil nutrient profiles, pH balance, and structural composition.",
            id: 'service1',
        },
        {
            img: 'https://www.canr.msu.edu/contentAsset/image/b2258920-95fc-4b68-bbe3-8af2c8482a58/fileAsset/filter/Resize,Crop,Jpeg/resize_w/600/crop_w/600/crop_h/400/crop_x/0/crop_y/0/jpeg_q/70',
            title: 'Tailored Fertilizer Recommendations',
            description: 'Receive precise fertilizer types and quantities based on soil health, crop type, and weather patterns.',
            id: 'service2',
        },
        {
            img: 'https://www.treehugger.com/thmb/jBgEMYNJOtE2dP1uCuom4nALcuI=/2119x1414/filters:fill(auto,1)/GettyImages-1184603603-f21902e1e7384efe8e639ed66b70d6f3.jpg',
            title: 'Fertilizer Quantity',
            description: "Leverage real-time weather patterns to optimize the amount and timing of fertilizer application for improved crop health.",
            id: 'service3',
        },
        {
            img: 'https://thumbs.dreamstime.com/z/money-bag-background-agricultural-crops-hand-farmer-startups-profit-agribusiness-lending-subsidizing-farmers-169752424.jpg',
            title: 'Farmers Profit',
            description: "Coming Soon....",
            id: 'service4',
        },
        {
            img: 'https://www.agriculture.com/thmb/N_RtxCPc-0fWFxqJgfFBJHCRHmU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health20Change20Notification_Image-2-db294ac72eed42b7a2bed53ece0190c3.jpg',
            title: 'Weather Pattern Monitoring',
            description: 'Coming Soon....',
            id: 'service5',
        },
        {
            img: 'https://th.bing.com/th/id/OIP.RbeQfQImnmjEc7gpwFvsbgHaDf?rs=1&pid=ImgDetMain',
            title: 'Soil Health Analysis',
            description: 'Coming Soon....',
            id: 'service6',
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
