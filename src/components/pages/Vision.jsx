import React from 'react';

const VisionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="text-white py-40 text-center"
        style={{
          backgroundImage: 'url("https://th.bing.com/th/id/OIP.-zlBAXGpdIz3-iqNIyDIVwAAAA?rs=1&pid=ImgDetMain")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        >      
       
      </section>

      {/* Vision Details */}
      <section className="py-12 px-5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What We Stand For</h2>
          <p className="text-gray-700 mb-6">
            Our vision is to revolutionize the industry by implementing cutting-edge solutions and fostering a culture of continuous improvement. We aim to be the leader in our field by embracing innovation and striving for excellence in every aspect of our work.
          </p>
          <p className="text-gray-700">
            We believe in the power of teamwork, transparency, and accountability. Our commitment to these values drives us to achieve extraordinary results and make a positive impact on the communities we serve.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-200 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Us on Our Journey</h2>
        <p className="mb-6">Be a part of our mission to make a difference. Learn more about how you can get involved.</p>
        <a href="/BecomeMember" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors">
          Become a Member
        </a>
      </section>
    </div>
  );
};

export default VisionPage;
