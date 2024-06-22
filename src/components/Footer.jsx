import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 Horizon Engenharia. Todos os direitos reservados.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
