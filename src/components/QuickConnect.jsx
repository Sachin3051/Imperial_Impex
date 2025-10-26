import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const QuickConnect = () => {
  return (
    <div className="w-full bg-blue-gradient text-white py-3 px-6 flex justify-between items-center">
      <span className="font-medium text-lg">Quick Connect : 7448217068 </span>

      <div className="flex gap-4 text-white text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default QuickConnect;
