import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Navbar from './components/Navbar'; // Importar o componente Navbar

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Usar o componente Navbar */}
        <div className="container mx-auto max-w-screen-xl p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
