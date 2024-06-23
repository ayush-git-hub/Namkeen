import React from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section className="bg-white p-16 rounded-3xl shadow-2xl text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FCEE1F] to-[#EB2227]"></div>
      <h2 className="text-5xl font-bold mb-8 text-[#EB2227] relative inline-block">
        Welcome to Ramji Namkeen
        <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#FCEE1F] "></span>
      </h2>
      <p className="text-2xl mb-6 text-gray-600 font-light">Where Tradition Meets Taste</p>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        At Ramji Namkeen, we believe that every bite should be a journey through the rich heritage of Indian flavors. Our exquisite range of royal and traditional namkeen is crafted with the finest ingredients, ensuring that every morsel is a celebration of taste and tradition. 
        With a legacy of love and dedication, we bring you authentic flavors that have been cherished for generations. Discover the magic of Ramji Namkeen, where the essence of tradition and the joy of taste come together in perfect harmony.
      </p>
    </section>
  );
};

export default Introduction