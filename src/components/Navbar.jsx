import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white p-4">
      <div className="container mx-auto max-w-screen-xl flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-auto w-auto max-h-24" /> 
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contato</Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">Serviços</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
