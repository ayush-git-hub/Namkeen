import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBoxOpen, FaEnvelope, FaFileAlt, FaTimes, FaBars } from 'react-icons/fa';

import logo from '../../assets/logo.png'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { to: "/", text: "Home", icon: FaHome },
    { to: "/about", text: "About Us", icon: FaInfoCircle },
    { to: "/products", text: "Products", icon: FaBoxOpen },
    { to: "/contact", text: "Contact Us", icon: FaEnvelope },
    { to: "/term&cond", text: "Terms & Conditions", icon: FaFileAlt },
  ];

  return (
    <header className="bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          <img src={logo} alt="Logo" className="h-16"/>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 
                `text-white hover:text-[#FCEE1F] transition duration-300 text-lg font-semibold flex items-center ${isActive ? 'bg-white bg-opacity-20 rounded-lg px-2 py-1' : ''}`
              }
            >
              <item.icon className="mr-2" />
              {item.text}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white hover:text-[#FCEE1F] text-3xl transition duration-300"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div className={`z-50 fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#FCEE1F] to-[#EB2227] shadow-2xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button 
            className="text-white hover:text-[#FCEE1F] float-right text-3xl transition duration-300"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <nav className="mt-12 flex flex-col space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => 
                  `text-white hover:text-[#FCEE1F] text-xl flex items-center transition duration-300 ${isActive ? 'font-bold bg-white bg-opacity-20 rounded-lg px-2 py-1' : ''}`
                }
                onClick={toggleSidebar}
              >
                <item.icon className="mr-2" />
                {item.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;