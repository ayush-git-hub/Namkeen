import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


import logo from '../../assets/logo.png'

const linkObj = {'Home' : '', 'About Us' : 'about', 'Products' :'products', 'Contact us' : 'contact' , 'Terms And Conditions' : 'term&cond'}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="bg-white p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#EB2227]">Ramji Namkeen</h3>
            <img src= {logo} alt="Ramji Snacks Logo" className="h-16 mb-4" />
            <div className="space-y-2">
              <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-[#FCEE1F]" />Bhikhampur Road, Deoria , U.P.</p>
              <p className="flex items-center"><FaPhoneAlt className="mr-2 text-[#FCEE1F]" />9450672781</p>
              <p className="flex items-center"><FaEnvelope className="mr-2 text-[#FCEE1F]" />RamjiNamkeen@gmail.com</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="bg-white p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#EB2227]">Quick Links</h3>
            <ul className="space-y-2">
              {Object.entries(linkObj).map(([key, value]) => (
                <li key={key}>
                  <Link to={`/${value}`} className="hover:text-[#EB2227] transition duration-300">
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="bg-white p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#EB2227]">Connect With Us</h3>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <a key={index} href="#" className="text-2xl text-[#EB2227] hover:text-[#FCEE1F] transition duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Information */}
          <div className="bg-white p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#EB2227]">Legal</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link to={`/term&cond`} className="hover:text-[#EB2227] transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p>&copy; {currentYear} Ramji Snacks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;