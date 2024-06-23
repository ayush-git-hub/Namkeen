import React from 'react'
import Slideshow from './Slideshow';
import Introduction from './Introduction';
import FeatureProducts from './FeaturedProducts';
import CustomerTestimonials from './CustomerTestimonials';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-32">
        <Slideshow />
        <Introduction />
        <FeatureProducts />
        <CustomerTestimonials />
      </div>
    </div>
  );
};

export default HomePage;