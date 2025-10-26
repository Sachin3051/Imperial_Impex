import React from 'react';
import Apeda from '../assets/Apeda.png'
import GST from '../assets/GST.png'
import msme from '../assets/msme.png'
import DGFT from '../assets/DGFT.jpeg'
import MCI from '../assets/MCI.png'

const images = [MCI, DGFT, msme, GST, Apeda];

const License = () => {
  return (
    <section id='license' className="w-full bg-slate-800 py-12">
      <h2 className="text-gradient text-3xl font-semibold text-center mb-8">
        Associates and Cretified With
      </h2>

      <div className="overflow-x-auto scrollbar-hidden">
        <div className="flex w-max animate-scroll gap-6 px-6">
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index}`}
              className="w-40 h-40 bg-white rounded-xl p-4 object-contain shadow-md shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default License;
