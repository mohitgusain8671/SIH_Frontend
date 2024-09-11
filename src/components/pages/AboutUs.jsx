import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-4">

      {/* Hero Section */}
      <section
        className="bg-green-600 text-white py-20 text-center"
        style={{
          backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/007/931/694/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        >      
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
                src="/src/assets/images/vikas.png"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Vikas</h3>
              <p className="text-gray-700">Machine Learning and Data Science Expert</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/src/assets/images/sahil.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sahil Chauhan</h3>
              <p className="text-gray-700">Team Leader <br/> Full Stack Web Developer </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/src/assets/images/mohit.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mohit Gusain</h3>
              <p className="text-gray-700">Full Stack Web Developer</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/src/assets/images/aryaman.png"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Aryaman Tandon</h3>
              <p className="text-gray-700">Full Stack Web Developer</p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/src/assets/images/vani.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Vani Rastogi</h3>
              <p className="text-gray-700">Full Stack Web Developer</p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/src/assets/images/abhishek.png"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Kumar Abhishek</h3>
              <p className="text-gray-700">Full Stack Web Developer</p>
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
