import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

//This is the data base for the slide show //So you can any data in this formate.
const Slideshow = () => {
  const images = [
    {
      url: 'https://t3.ftcdn.net/jpg/05/76/92/34/240_F_576923467_t15N0WSng6M73DIdJ1lDTIsUiDnCOdkX.jpg',
      alt: 'Slide 1',
      title: 'Welcome to Ramji Namkeen',
      subtitle: 'Discover our delicious snacks',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/05/04/17/32/240_F_504173267_MtfaxtfOGxg9gOBxXpqkhfB0shuUHJwj.jpg',
      alt: 'Slide 2',
      title: 'Explore Our Collection',
      subtitle: 'Find your favorite flavors',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/03/97/76/91/240_F_397769147_Rv3ZanrumJjQDYpiDmKoKuoJwaO3lhP3.jpg',
      alt: 'Slide 3',
      title: 'Taste the Tradition',
      subtitle: 'Authentic flavors since 1990',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/01/16/93/13/240_F_116931322_ohtDjbEo4cjGhwe7xNVKdvR6En74Xp5C.jpg',
      alt: 'Slide 4',
      title: 'Quality Ingredients',
      subtitle: 'Made with the finest ingredients',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] rounded-3xl shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center px-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {image.title}
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light">
                {image.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-3xl text-white p-3 rounded-full focus:outline-none z-10 hover:bg-opacity-50 transition duration-300"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-3xl text-white p-3 rounded-full focus:outline-none z-10 hover:bg-opacity-50 transition duration-300"
      >
        <FaChevronRight />
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow