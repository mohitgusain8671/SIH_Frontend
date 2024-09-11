import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { Form } from 'react-router-dom';

const serviceData = {
  service1: {
    title: 'Crop Recommendation',
    description: "Receive expert guidance on crop selection based on comprehensive soil nutrient profiles, pH balance, and structural composition.",
    img: 'https://www.posteezy.com/sites/default/files/styles/olivero_hero/public/2023-11/NKrHsv62KDuB5OM9WRfuRb2N23xozvmoUtQs0rYy.jpg?itok=Ed2RI4Qz',
    details: 'Our Crop Recommendation service provides thorough analysis of soil composition, nutrient content, and pH balance to offer tailored crop selection guidance. By focusing on soil health and crop compatibility, we help farmers maximize yield and sustain long-term soil vitality using advanced tools and precise data.'
  },
  service2: {
    title: 'Tailored Fertilizer Recommendations',
    description: 'Receive precise fertilizer types and quantities based on soil health, crop type, and weather patterns.',
    img: 'https://www.canr.msu.edu/contentAsset/image/b2258920-95fc-4b68-bbe3-8af2c8482a58/fileAsset/filter/Resize,Crop,Jpeg/resize_w/600/crop_w/600/crop_h/400/crop_x/0/crop_y/0/jpeg_q/70',
    details: "Optimize your crop's potential with tailored fertilizer recommendations. Based on detailed analysis of soil health, crop type, and real-time weather patterns, our service helps ensure you're applying the right type and amount of fertilizer for maximum yield."
  },
  service3: {
    title: "Fertilizer Quantity",
    description: "Get precise fertilizer recommendations based on your soil's condition, crop requirements, and prevailing weather patterns.",
    img: "https://www.treehugger.com/thmb/jBgEMYNJOtE2dP1uCuom4nALcuI=/2119x1414/filters:fill(auto,1)/GettyImages-1184603603-f21902e1e7384efe8e639ed66b70d6f3.jpg",
    details: "Maximize crop yield and sustainability with our Fertilizer Quantity service. We assess your soil health, crop demands, and current weather trends to recommend the right type and amount of fertilizers. This ensures efficient resource usage and healthier crops while minimizing environmental impact."
  },
  service4: {
    title: "Farmers Profit",
    description: "",
    img: "https://thumbs.dreamstime.com/z/money-bag-background-agricultural-crops-hand-farmer-startups-profit-agribusiness-lending-subsidizing-farmers-169752424.jpg",
    details: "Coming Soon...."
  },
  service5: {
    title: "Weather Pattern Monitoring",
    description: "",
    img: "https://www.agriculture.com/thmb/N_RtxCPc-0fWFxqJgfFBJHCRHmU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health20Change20Notification_Image-2-db294ac72eed42b7a2bed53ece0190c3.jpg",
    details: "Coming Soon...."
  },
  service6: {
    title: "Soil Health Analysis",
    description: "",
    img: "https://thumbs.dreamstime.com/z/money-bag-background-agricultural-crops-hand-farmer-startups-profit-agribusiness-lending-subsidizing-farmers-169752424.jpg",
    details: "Coming Soon...."
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
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        {/* Image on the left side */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text on the right side */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg mb-4">{service.description}</p>
          <p className="text-base mb-7">{service.details}</p>
          <Link
            to={`/form?serviceId=${serviceId}`}
            className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors"
          >
            Check it out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
