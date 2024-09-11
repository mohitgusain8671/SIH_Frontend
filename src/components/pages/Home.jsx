import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-blue-500 text-white py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.9lO30owLXhKrVZk5SFPgPgHaE8?rs=1&pid=ImgDetMain')" }}
      >
        <div className="bg-opacity-50 py-20 px-4"> {/* Optional overlay */}
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-8">
            Your one-stop solution for all things related to our services.
          </p>
          <a
            href="#cta"
            className="bg-yellow-500 text-blue-900 py-2 px-4 rounded hover:bg-yellow-400 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
      

      {/* Featured Sections */}
      <section className="py-16 px-5 bg-slate-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-xl font-bold mb-4 text-blue-500">Feature One</h2>
            <p className="text-gray-700 font-bold">Crop Recommendation</p>
            <p className="text-gray-700">Crop Recommendation service for tailored crop selection based on soil composition, nutrient content, and pH balance to maximize yield.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-xl font-bold mb-4 text-blue-500">Feature Two</h2>
            <p className="text-gray-700 font-bold">Tailored Fertilizer Recommendations</p>
            <p className="text-gray-700">Receive precise fertilizer types and quantities based on soil health, crop type, and weather patterns</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-xl font-bold mb-4 text-blue-500">Feature Three</h2>
            <p className="text-gray-700 font-bold">Fertilizer Quantity</p>
            <p className="text-gray-700">Optimize fertilizer application by leveraging real-time weather data to ensure the right amount and timing for healthier crops.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-gray-800 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">Join us today and experience the difference.</p>
        <a href="/BecomeMember" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded hover:bg-yellow-400 transition-colors">
          Become a Member
        </a>
        <div className="my-10 border-t border-green-500" />
      </section>
    </div>
  );
};

export default HomePage;
