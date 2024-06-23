import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Header = () => (
  <header className="relative text-center mb-24 overflow-hidden rounded-3xl shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] transform -skew-y-6 origin-top-left"></div>
    <div className="relative z-10 py-24 px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-lg">
        Get in Touch
      </h1>
      <p className="text-2xl md:text-4xl text-white font-light italic max-w-3xl mx-auto">
        We're here to assist you
      </p>
    </div>
  </header>
);

const ContactInfo = () => (
  <div className="grid md:grid-cols-2 gap-12 mb-16">
    <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h2 className="text-4xl font-semibold mb-8 text-[#EB2227] border-b-4 border-[#FCEE1F] pb-4 inline-block">Contact Information</h2>
      <div className="space-y-6">
        <ContactItem icon={FaPhoneAlt} text="+91 9450672781" />
        <ContactItem icon={FaEnvelope} text="RamjiNamkeen@gmail.com" />
        <ContactItem icon={FaMapMarkerAlt} text="Bhikhapur Road, Deoria, Uttar Pradesh, India" />
      </div>
    </div>
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Replace with actual Google Map embed code */}
      <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gray-200">
        {/* <span className="text-2xl font-semibold text-gray-600">Google Map Here</span> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d223.16242375303437!2d83.79968478648277!3d26.500860313715894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbhikhampur%20road%20nahar%20deoria!5e0!3m2!1sen!2sin!4v1719139919223!5m2!1sen!2sin" className='h-full w-full'></iframe>
      </div>
    </div>
  </div>
);

const ContactItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-4 text-xl">
    <div className="bg-[#FCEE1F] p-3 rounded-full">
      <Icon className="text-3xl text-[#EB2227]" />
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);

const SocialMedia = () => (
  <div className="text-center bg-white p-12 rounded-3xl shadow-2xl">
    <h2 className="text-4xl font-semibold mb-8 text-[#EB2227]">Connect With Us</h2>
    <div className="flex justify-center space-x-8">
      {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
        <a key={index} href="" className="text-4xl text-[#EB2227] hover:text-[#FCEE1F] transition duration-300 transform hover:scale-110">
          <Icon />
        </a>
      ))}
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        <Header />
        <ContactInfo />
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactPage