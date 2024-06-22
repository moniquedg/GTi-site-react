import React from 'react';
import servicesData from '../data/services.json';
import headerImage from '../assets/header-about.jpg';

const About = () => {
  return (
    <div>
      <div className="relative">
        <img src={headerImage} alt="Sobre Nós" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Sobre Nós</h1>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl py-8 px-4">
        <p className="text-lg mb-8 text-center">A <b>Horizon Engenharia</b> nasceu do encontro de engenheiros visionários com a missão de oferecer soluções inovadoras e sustentáveis para projetos de construção civil. Em apenas dois anos de trabalho árduo, consolidamos nossa presença no mercado local, conquistando a confiança de clientes e parceiros com projetos bem-sucedidos e um compromisso inabalável com a excelência.</p>   
        <p className="text-lg mb-8 text-center">Atendendo à crescente demanda por soluções integradas, expandimos nossa carteira de serviços para incluir consultoria em engenharia civil e gerenciamento de obras, posicionando-nos como uma empresa completa no setor. Nosso compromisso com a qualidade nos trouxe reconhecimento nacional, com prêmios e certificações que atestam nossos projetos inovadores e nossa contribuição para o desenvolvimento do país.</p>

        <p className="text-3xl font-bold mb-4 text-center">Conheça nossos serviços:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <div key={service.id} className="bg-blue-950 text-white shadow-xl p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2 text-center">{service.title}</h2>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
