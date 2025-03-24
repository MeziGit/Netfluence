import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Netfluence - Web, App & Software Development</title>
        <meta 
          name="description" 
          content="Learn about Netfluence, our journey, our team of experts, and our dedication to creating exceptional digital solutions."
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blob */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              About <span className="text-accent">Netfluence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-8"
            >
              We're a team of passionate developers and designers building exceptional digital experiences.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="bg-dark-card p-1 rounded-lg shadow-xl relative z-10">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-dark-accent/30 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-accent/20">Our Story</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-lg"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Founded in 2020, Netfluence began with a simple mission: to create digital solutions that drive 
                  real business impact. What started as a small team of passionate developers has grown into a
                  full-service digital development agency.
                </p>
                <p>
                  We believe that exceptional digital products are born at the intersection of beautiful design and
                  powerful functionality. Our team combines technical expertise with creative thinking to deliver
                  solutions that exceed expectations.
                </p>
                <p>
                  Today, we're proud to work with clients ranging from innovative startups to established enterprises,
                  helping them transform their ideas into digital reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-dark-card/50 relative">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-white/70">
              These principles guide everything we do, from how we develop products to how we interact with clients.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-dark-card p-8 rounded-lg border border-white/5 hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-accent text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-white/70">
              We're a diverse group of passionate developers, designers, and digital strategists 
              committed to crafting exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-dark-card rounded-lg overflow-hidden group"
              >
                <div className="aspect-[3/4] bg-dark-accent/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent/20">{member.initials}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="py-20 bg-dark-card/50 relative">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-white/70">
              From our humble beginnings to where we are today, this timeline highlights key milestones in our evolution.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative z-10 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16 last:mb-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <div className="bg-dark-card p-6 rounded-lg border border-white/5">
                    <span className="text-accent font-medium">{item.year}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
                
                <div className="w-2/12"></div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-tertiary/20 opacity-30"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto bg-dark-card rounded-2xl p-12 border border-white/5">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Whether you're looking to build a new website, develop a mobile app, or create custom software,
                we're here to help turn your vision into reality.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-full transition-colors duration-300"
              >
                Get in Touch
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Sample data for values
const values = [
  {
    icon: "✨",
    title: "Excellence",
    description: "We strive for excellence in everything we do, from the code we write to the designs we create."
  },
  {
    icon: "🔍",
    title: "Attention to Detail",
    description: "We believe that the small details make a big difference in creating exceptional digital experiences."
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We embrace new technologies and approaches to solve complex problems with creative solutions."
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "We view our client relationships as partnerships, working together to achieve shared goals."
  },
  {
    icon: "⏱️",
    title: "Efficiency",
    description: "We value efficiency in our processes to deliver quality solutions on time and within budget."
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    description: "We're committed to learning and evolving to stay at the forefront of digital development."
  }
];

// Sample data for team members
const teamMembers = [
  {
    initials: "JD",
    name: "John Doe",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in software development, John leads our team with vision and technical expertise."
  },
  {
    initials: "JS",
    name: "Jane Smith",
    role: "Lead Developer",
    bio: "Jane specializes in full-stack development and has architected solutions for Fortune 500 companies."
  },
  {
    initials: "MR",
    name: "Mike Roberts",
    role: "UX/UI Designer",
    bio: "Mike combines aesthetic sensibility with user-centered design principles to create intuitive interfaces."
  },
  {
    initials: "AL",
    name: "Anna Lee",
    role: "Project Manager",
    bio: "Anna ensures our projects are delivered on time and exceed client expectations through meticulous planning."
  }
];

// Sample data for timeline
const timeline = [
  {
    year: "2020",
    title: "Netfluence is Born",
    description: "Starting with just three developers, we launched our company with a focus on web development."
  },
  {
    year: "2021",
    title: "Expanding Services",
    description: "Added mobile app development to our services and grew our team to include dedicated designers."
  },
  {
    year: "2022",
    title: "First Major Client",
    description: "Secured our first enterprise client, developing a custom software solution that transformed their operations."
  },
  {
    year: "2023",
    title: "Office Expansion",
    description: "Moved to a larger office space and expanded our team to include specialists in various technologies."
  },
  {
    year: "Present",
    title: "Global Reach",
    description: "Now working with clients across multiple countries, delivering high-quality digital solutions worldwide."
  }
];

export default AboutPage; 