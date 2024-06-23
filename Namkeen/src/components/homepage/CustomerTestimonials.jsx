import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar , FaQuoteLeft } from 'react-icons/fa';

const CustomerTestimonials = () => {
  const allTestimonials = [
    {
      name: "Priya Sharma",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      quote: "Ramji's namkeen brings back childhood memories. The taste is authentic and delicious!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      quote: "The quality of Ramji Namkeen is unmatched. Every bite is a burst of flavor!",
      rating: 5,
    },
    {
      name: "Anjali Mehta",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      quote: "I love Ramji's snacks. They are perfect for every occasion and always fresh.",
      rating: 4,
    },
    {
      name: "Vikram Singh",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "Ramji Namkeen offers the best snacks in India. Their variety and taste are unbeatable.",
      rating: 5,
    }
    // Add more testimonials here
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  const handleViewMore = () => {
    setVisibleTestimonials(prevVisible => 
      prevVisible + 3 > allTestimonials.length ? allTestimonials.length : prevVisible + 3
    );
  };

  return (
    <section className="bg-white p-16 rounded-3xl shadow-2xl relative overflow-hidden">
      <h2 className="text-5xl font-bold mb-12 text-[#EB2227] text-center relative inline-block">
        Customer Testimonials
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FCEE1F]"></span>
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {allTestimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <img
                  className="h-16 w-16 rounded-full mr-4 border-4 border-[#FCEE1F]"
                  src={testimonial.photo}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#EB2227]">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <FaQuoteLeft className="text-4xl text-[#FCEE1F] mb-4" />
              <p className="text-gray-700 italic flex-grow">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleTestimonials < allTestimonials.length && (
        <div className="mt-16 text-center">
          <button 
            className="bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={handleViewMore}
          >
            View More Testimonials
          </button>
        </div>
      )}
    </section>
  );
};

export default CustomerTestimonials;