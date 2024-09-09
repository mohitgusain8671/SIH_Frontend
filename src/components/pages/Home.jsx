// import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Your one-stop solution for all things related to our services.</p>
        <a href="#cta" className="bg-yellow-500 text-blue-900 py-2 px-4 rounded hover:bg-yellow-400 transition-colors">
          Get Started
        </a>
      </section>

      {/* Featured Sections */}
      <section className="py-16 px-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Feature One</h2>
            <p className="text-gray-700">Description of the first feature. Explain what makes it special.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Feature Two</h2>
            <p className="text-gray-700">Description of the second feature. Highlight its benefits.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Feature Three</h2>
            <p className="text-gray-700">Description of the third feature. Explain its unique aspects.</p>
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
