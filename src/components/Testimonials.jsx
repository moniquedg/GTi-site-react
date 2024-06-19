import React from 'react';
import testimonials from '../data/testimonials.json';

const Testimonials = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Depoimentos</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="italic">"{testimonial.testimonial}"</p>
              <p className="text-right font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
