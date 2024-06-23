import React from 'react';
import { FaBook, FaShieldAlt, FaUserLock, FaBalanceScale, FaEnvelope } from 'react-icons/fa';

const Header = () => (
  <header className="relative text-center mb-24 overflow-hidden rounded-3xl shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] transform -skew-y-6 origin-top-left"></div>
    <div className="relative z-10 py-24 px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-lg">
        Terms and Conditions
      </h1>
      <p className="text-2xl md:text-4xl text-white font-light italic max-w-3xl mx-auto">
        Please read these terms carefully
      </p>
    </div>
  </header>
);

const Content = () => (
  <div className="grid md:grid-cols-2 gap-12 mb-16">
    {sections.map((section, index) => (
      <Section key={index} {...section} />
    ))}
  </div>
);

const Section = ({ title, content, icon: Icon }) => (
  <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
    <div className="flex items-center mb-6">
      <div className="bg-[#FCEE1F] p-3 rounded-full mr-4">
        <Icon className="text-3xl text-[#EB2227]" />
      </div>
      <h2 className="text-2xl font-semibold text-[#EB2227]">{title}</h2>
    </div>
    <p className="text-gray-700">{content}</p>
  </div>
);

const Contact = () => (
  <div className="text-center bg-white p-12 rounded-3xl shadow-2xl">
    <h2 className="text-4xl font-semibold mb-8 text-[#EB2227]">Questions?</h2>
    <p className="text-xl mb-6">If you have any questions about these terms, please contact us:</p>
    <div className="flex justify-center items-center space-x-4 text-xl">
      <div className="bg-[#FCEE1F] p-3 rounded-full">
        <FaEnvelope className="text-3xl text-[#EB2227]" />
      </div>
      <span className="text-gray-700">contact@ramjinamkeen.com</span>
    </div>
  </div>
);

const sections = [
  {
    title: "Introduction",
    content: "Welcome to Ramji Namkeen's website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.",
    icon: FaBook
  },
  {
    title: "Use of the Website",
    content: "You agree to use our website for lawful purposes only and in a way that does not infringe upon the rights of others or restrict their use of the website.",
    icon: FaShieldAlt
  },
  {
    title: "Privacy Policy",
    content: "Your use of our website is also governed by our Privacy Policy. Please review it to understand how we collect and use your information.",
    icon: FaUserLock
  },
  {
    title: "Intellectual Property",
    content: "All content on this website, including text, images, and logos, is the property of Ramji Namkeen and protected by copyright laws.",
    icon: FaBalanceScale
  },
  {
    title: "Payments and Refunds",
    content: "All payments are processed securely. Refunds are subject to our refund policy, which can be found on our website.",
    icon: FaShieldAlt
  },
  {
    title: "Changes to Terms",
    content: "Ramji Namkeen reserves the right to modify these terms at any time. We will notify users of any significant changes.",
    icon: FaBook
  }
];

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        <Header />
        <Content />
        <Contact />
      </div>
    </div>
  );
};

export default TermsAndConditions;