// import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-16">
          {/* Company Information */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto mx-auto md:mx-0"
            />
            <h2 className="text-xl font-semibold mt-4">Your Company</h2>
            <p className="mt-2 text-gray-400">
              1234 Street Name, City, State, 12345
            </p>
            <p className="mt-2 text-gray-400">Email: info@yourcompany.com</p>
            <p className="mt-2 text-gray-400">Phone: (123) 456-7890</p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center md:flex-row md:space-x-16">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center">
                    <FaFacebook className="mr-2" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center">
                    <FaTwitter className="mr-2" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center">
                    <FaInstagram className="mr-2" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center">
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
