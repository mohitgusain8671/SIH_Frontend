// import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-wrap justify-between">
                    {/* Company Info */}
                    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4">AgroMinds</h2>
                        <p className="mb-4">1234, New Delhi - 110051 , Delhi, India</p>
                        <p className="mb-4">Phone: (123) 456-7890</p>
                        <p>Email: <a href="mailto:info@agroMinds.com" className="text-green-400 hover:underline">info@company.com</a></p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><Link to="/" className="block py-1 hover:text-green-400">Home</Link></li>
                            <li><Link to="/about-us" className="block py-1 hover:text-green-400">About Us</Link></li>
                            <li><Link to="/services" className="block py-1 hover:text-green-400">Services</Link></li>
                            <li><Link to="/contact-us" className="block py-1 hover:text-green-400">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full lg:w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-400 text-sm">© 2024 AgroMinds. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
