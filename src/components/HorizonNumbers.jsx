import React from 'react';

const HorizonNumbers = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Nossos Números</h2>
        <div className="flex justify-around">
          <div>
            <p className="text-4xl font-bold">100+</p>
            <p>Clientes Satisfeitos</p>
          </div>
          <div>
            <p className="text-4xl font-bold">200+</p>
            <p>Projetos Completos</p>
          </div>
          <div>
            <p className="text-4xl font-bold">300+</p>
            <p>Consultas Realizadas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizonNumbers;
