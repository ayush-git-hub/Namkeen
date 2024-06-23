import React from 'react';
import { useState } from 'react';

const Header = () => (
  <header className="relative text-center mb-24 overflow-hidden rounded-3xl shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] transform -skew-y-6 origin-top-left"></div>
    <div className="relative z-10 py-24 px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-lg">
        Our Story
      </h1>
      <p className="text-2xl md:text-4xl text-white font-light italic max-w-3xl mx-auto">
        Crafting Tradition, Delivering Excellence
      </p>
    </div>
  </header>
);

const CompanyHistory = () => (
  <section className="bg-white p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
    <div className="relative z-10">
      <h2 className="text-5xl md:text-6xl font-bold mb-12 text-[#EB2227] border-b-4 border-[#FCEE1F] pb-4 inline-block">
        Our Journey
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <p className="text-xl leading-relaxed text-gray-800">
            Vinod Kumar Chaurasia embarked on his journey from the humble town of Deoria, Uttar Pradesh, India. Fueled by hard work and dedication, he founded our company with a vision to bring high-quality namkeen to every household.
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="text-xl leading-relaxed text-gray-800">
            Throughout his journey, his wife stood by his side, providing unwavering support and encouragement, driving him to success. Their story is one of resilience, tradition, and passion for excellence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Timeline = () => {
  const events = [
    { year: 2000, event: "Foundation of our company in Deoria, Uttar Pradesh." },
    { year: 2005, event: "Expansion of production facility to meet growing demand." },
    { year: 2010, event: "Introduction of new product lines, over 50 varieties of namkeen." },
    { year: 2015, event: "Recognition as a leading namkeen brand in North India." },
    { year: 2020, event: "Celebrated 20 years of delivering quality snacks." },
  ];

  return (
    <section className="bg-[#FCEE1F] p-12 rounded-3xl shadow-2xl">
      <h2 className="text-5xl font-bold mb-12 text-[#EB2227] text-center">Milestones</h2>
      <div className="space-y-8">
        {events.map((item, index) => (
          <div key={index} className="flex items-center space-x-6 bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0 w-24 h-24 bg-[#EB2227] text-white rounded-full flex items-center justify-center font-bold text-2xl">{item.year}</div>
            <div className="flex-grow text-lg lg:text-xl text-gray-800">{item.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MissionVision = () => (
  <section className="mb-24">
    <h2 className="text-5xl font-bold mb-12 text-center text-[#EB2227]">Mission & Vision</h2>
    <div className="grid md:grid-cols-2 gap-12">
      <div className="bg-[#EB2227] text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-3xl font-semibold mb-6">Our Mission</h3>
        <p className="text-xl leading-relaxed">
          To become India's largest snack and namkeen company in the next 5 to 6 years, driven by our commitment to quality, tradition, and customer satisfaction.
        </p>
      </div>
      <div className="bg-[#FCEE1F] text-[#EB2227] p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-3xl font-semibold mb-6">Our Vision</h3>
        <p className="text-xl leading-relaxed">
          To be a household name in India, synonymous with trust and quality, innovating while preserving our traditional methods.
        </p>
      </div>
    </div>
  </section>
);

const OurProcess = () => (
  <section className="mb-24 bg-white p-12 rounded-3xl shadow-2xl">
    <h2 className="text-5xl font-bold mb-8 text-[#EB2227] text-center">Our Process</h2>
    <p className="text-xl mb-8 text-gray-800 text-center max-w-3xl mx-auto">
      Our namkeen is crafted using traditional methods passed down through generations. We prioritize using high-quality ingredients and maintain super hygiene standards throughout our production process.
    </p>
    <div className="bg-[#FCEE1F] p-6 lg:p-8 rounded-2xl shadow-lg">
      <p className="text-3xl font-semibold mb-6 text-[#EB2227] text-center">Visual Content</p>
      <div className="relative h-96 w-full flex justify-center items-center">
      <iframe src="https://www.youtube.com/embed/L7dF5NSO2NI?si=M_OEO__Ou6nou_Pl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='h-full w-full rounded-lg'></iframe>
      </div>
    </div>
  </section>
);

const Team = () => {
  const allTeamMembers = [
      { 
        name: "Vinod Kumar Chaurasia", 
        position: "Founder & CEO", 
        bio: "The visionary behind our brand, started this journey with a passion for quality and tradition.",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      { 
        name: "Aryan Kumar Chaurasia", 
        position: "Head of Marketing", 
        bio: "Leading our marketing efforts with innovative strategies and a keen understanding of the market.",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
      },
      { 
        name: "Priya Singh", 
        position: "Chief Operating Officer", 
        bio: "Ensuring smooth operations and overseeing the day-to-day activities of our company.",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      { 
        name: "Rajesh Patel", 
        position: "Head of Sales", 
        bio: "Driving our sales team towards achieving ambitious targets and expanding our reach.",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
      },
      { 
        name: "Anjali Mehta", 
        position: "Product Development Manager", 
        bio: "Innovating and improving our product line to meet customer expectations.",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      { 
        name: "Vikram Singh", 
        position: "Finance Manager", 
        bio: "Managing the financial health of our company with expertise and precision.",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
      },
      { 
        name: "Nisha Sharma", 
        position: "HR Manager", 
        bio: "Fostering a positive work environment and taking care of our team's well-being.",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
      },
      { 
        name: "Amit Verma", 
        position: "IT Manager", 
        bio: "Overseeing the technology infrastructure and ensuring seamless IT operations.",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
      }
];

  const [visibleMembers, setVisibleMembers] = useState(3);

  const handleViewMore = () => {
    setVisibleMembers(prevVisible => 
      prevVisible + 3 > allTeamMembers.length ? allTeamMembers.length : prevVisible + 3
    );
  };

  return (
    <section className="bg-[#FCEE1F] p-12 rounded-3xl shadow-2xl relative overflow-hidden">
      <h2 className="text-5xl font-bold mb-12 text-[#EB2227] text-center relative inline-block">
        Our Team
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#EB2227]"></span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {allTeamMembers.slice(0, visibleMembers).map((member, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex justify-center items-center">
              <img src={member.image} alt="" className='w-full h-full rounded-full'/>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#EB2227] text-center">{member.name}</h3>
            <p className="font-medium mb-4 text-lg text-gray-600 text-center">{member.position}</p>
            <p className="text-lg text-gray-800 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
      {visibleMembers < allTeamMembers.length && (
        <div className="mt-16 text-center">
          <button 
            className="bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={handleViewMore}
          >
            View More Team Members
          </button>
        </div>
      )}
    </section>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        <Header />
        <CompanyHistory />
        <Timeline />
        <MissionVision />
        <OurProcess />
        <Team />
      </div>
    </div>
  );
};

export default AboutPage;