import React from 'react';
import styles, { layout } from '../style';
import fruits from '../assets/fruits.jpeg'
import vegetable from '../assets/Vegetable.jpeg'
import  grocery from '../assets/grocery.jpeg'


const images = [fruits, vegetable, grocery];
const Billing = () => {
  return (
    <section id='product' className="w-full bg-slate-800 py-12">
      <h2 className="text-gradient text-3xl font-semibold text-center mb-8">
        Our Products Here
      </h2>

      <div className="overflow-hidden max-w-[768px] mx-auto">
  <div className="flex w-max animate-scroll gap-6 px-6">
    {[...images, ...images].map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Product ${index}`}
        className="w-60 h-60 rounded-xl p-4 object-contain shadow-md shrink-0"
      />
    ))}
  </div>
</div>

    </section>
  );
};

export default Billing;
