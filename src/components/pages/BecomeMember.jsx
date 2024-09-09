import React, { useState } from 'react';

const BecomeAMemberPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
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
    // Add form submission logic here (e.g., sending data to an API)
    setSubmitted(true);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Become a Member</h1>
        <p className="text-lg">Join our community and make a difference. Fill out the form below to get started.</p>
      </section>

      {/* Membership Benefits */}
      <section className="py-12 px-5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Exclusive Access</h3>
              <p className="text-gray-700">Get exclusive access to members-only events and resources.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Networking Opportunities</h3>
              <p className="text-gray-700">Connect with like-minded individuals and professionals in our community.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Special Discounts</h3>
              <p className="text-gray-700">Enjoy discounts on various products and services available to members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-12 px-5">
        <div className="container mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up Now</h2>

          {submitted && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <p className="text-center">Thank you for your interest in becoming a member! We will be in touch with you soon.</p>
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
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Why do you want to join?</label>
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
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BecomeAMemberPage;
