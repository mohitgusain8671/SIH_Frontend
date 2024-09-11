import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., sending data to an API)
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-100 text-black py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We would love to hear from you. Reach out to us using the form below.</p>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-5">
        <div className="container mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

          {submitted && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <p className="text-center">Thank you for reaching out! We will get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 px-5 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Contact Information</h2>
          <p className="text-gray-700 mb-4">Feel free to reach out to us through the following methods:</p>
          <p className="text-gray-700 mb-2">📍 1234, New Delhi - 110051 , Delhi, India</p>
          <p className="text-gray-700 mb-2">📞 (123) 456-7890</p>
          <p className="text-gray-700 mb-2">✉️ contact@agroMinds.com</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
