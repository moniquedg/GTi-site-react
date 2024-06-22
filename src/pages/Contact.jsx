import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import offices from '../data/offices.json'; 
import contactHeader from '../assets/header-contacts.jpg'; 

const Contact = () => {
  return (
    <div>
      <div className="relative">
        <img src={contactHeader} alt="Contato" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contato</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-screen-xl py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-950">Nossas Sedes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offices.map((office) => (
            <div key={office.id} className="bg-white shadow-md p-4 rounded-lg flex items-center">
              <FaMapMarkerAlt className="text-blue-950 mr-2" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-950">{office.city}</h3>
                <p>{office.address}</p>
                <p>{office.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-screen-xl py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-950">Entre em Contato Conosco</h2>
        <form className="bg-white shadow-md p-4 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Nome</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Mensagem</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-950 text-white py-2 px-4 rounded-md">Enviar</button>
        </form>
      </div>

      <div className="container mx-auto max-w-screen-xl py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-950">Nossas Redes Sociais</h2>
        <div className="flex space-x-6 text-blue-950">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook size={32} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter size={32} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
