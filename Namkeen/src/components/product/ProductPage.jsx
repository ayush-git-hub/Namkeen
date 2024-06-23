import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import database from './database';

const ProductPage = () => {
  const [categories, setCategories] = useState(database.categories);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        <Header />
        <div className="space-y-8">
          {categories.map((category) => (
            <CategoryAccordion
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onToggle={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <header className="relative text-center mb-24 overflow-hidden rounded-3xl shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] transform -skew-y-6 origin-top-left"></div>
    <div className="relative z-10 py-24 px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-lg">
        Our Products
      </h1>
      <p className="text-2xl md:text-4xl text-white font-light italic max-w-3xl mx-auto">
        Explore our delicious range of traditional namkeens
      </p>
    </div>
  </header>
);

const CategoryAccordion = ({ category, isActive, onToggle }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
      <button
        className="w-full bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] text-white p-6 text-left text-3xl font-bold focus:outline-none transition-all duration-300 hover:from-[#fdf056] hover:to-[#f72d32] flex justify-between items-center"
        onClick={onToggle}
      >
        <span>{category.name}</span>
        <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} className="h-8 w-8" />
      </button>
      {isActive && (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-[#EB2227]">{product.name}</h3>
        <p className="text-lg text-gray-800">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;