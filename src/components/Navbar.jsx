import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ clientName }) => {
  return (
    <nav className="bg-blue-950 text-white p-4">
      <div className="container mx-auto max-w-screen-xl flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-auto w-auto max-h-24" />
          <span className="ml-4 text-lg">Olá, {clientName}!</span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-lg font-normal hover:font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-lg font-normal hover:font-semibold">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-normal hover:font-semibold">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
