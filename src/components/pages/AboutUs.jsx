import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">Discover who we are and what we do.</p>
      </section>

      {/* About Us Details */}
      <section className="py-12 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-gray-700 mb-6 text-center">
            Founded with a vision to make a difference, our organization has been dedicated to providing exceptional services and creating value for our clients. With a passionate team and a commitment to excellence, we have grown and evolved over the years, always staying true to our core values.
          </p>
          <p className="text-gray-700 text-center">
            Our team is composed of industry experts and dedicated professionals who work tirelessly to achieve our goals. Together, we strive to create innovative solutions and deliver outstanding results for our clients and partners.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-5 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-700">Chief Operating Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Alice Johnson</h3>
              <p className="text-gray-700">Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-300 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
        <p className="mb-6">Get in touch with us to find out more about our services and opportunities.</p>
        <a href="/contact-us" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUsPage;
