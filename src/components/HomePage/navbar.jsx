import React from 'react';
import { Link } from 'react-router-dom';

const routeList = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/vision',
    label: 'Our Vision',
  },
  {
    href: '/about-us',
    label: 'About us',
  },
  {
    href: '/services',
    label: 'Our Services',
  },
  {
    href: '/contact-us',
    label: 'Contact Us',
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-5 bg-[#3de5bb31] hover:bg-[#acdbcf] transition-colors duration-300">
      {/* Logo */}
      <div className="w-16 hover:scale-110 transition-transform duration-300">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/623/682/original/agriculture-business-logo-template-unique-green-vector-image.jpg"
          alt="Logo"
        />
      </div>

      {/* Links */}
      <div className="flex space-x-5">
        <ul className="list-none flex space-x-5">
          {routeList.map((route, index) => (
            <li
              key={index}
              className="hover:scale-110 transition-transform duration-300"
            >
              <Link
                to={route.href}
                className="font-bold text-gray-800 hover:text-[#f45d4c]"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
