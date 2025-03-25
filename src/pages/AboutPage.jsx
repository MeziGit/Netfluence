import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import johnAbbottImage from '../assets/images/John-Abbott-College.jpg';
import ryanImage from '../assets/images/ryan-meziane.jpg';
import kuiImage from '../assets/images/kui-hua.jpg';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Netfluence - Web, App & Software Development</title>
        <meta 
          name="description" 
          content="Learn about Netfluence, our journey, our team of experts, and our dedication to creating exceptional digital solutions. Trusted by businesses across industries."
        />
        <link rel="canonical" href="https://netfluence.com/about" />
        <meta name="keywords" content="digital agency team, web developers, app developers, software experts, Montreal tech company, custom solutions" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Netfluence",
            "description": "Learn about Netfluence, our journey, our team of experts, and our dedication to creating exceptional digital solutions.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Netfluence",
              "url": "https://netfluence.com",
              "foundingDate": "2020",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Ryan Meziane"
                },
                {
                  "@type": "Person",
                  "name": "Kui Hua"
                }
              ],
              "description": "Netfluence is a digital agency specializing in web development, mobile apps, and custom software solutions."
            }
          }
        `}</script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blob */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm inline-flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Our Story
              </span>
            </motion.div>
            
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
      <section className="py-20 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - varied asymmetric positioning */}
        <div className="absolute top-10 right-1/6 w-[700px] h-[400px] bg-accent-secondary/15 rounded-full blur-3xl rotate-6"></div>
        <div className="absolute -bottom-72 -left-20 w-[500px] h-[700px] bg-accent-tertiary/10 rounded-full blur-3xl -rotate-12"></div>
        <div className="absolute top-2/3 left-1/4 w-[250px] h-[250px] bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="bg-dark-card p-1 rounded-lg shadow-xl relative z-10">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                    <img 
                      src={johnAbbottImage} 
                      alt="John Abbott College" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-lg"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Founded in May 2024, Netfluence began as the vision of two ambitious students who wanted to become entrepreneurs after graduating from John Abbott College. With our computer science backgrounds and passion for technology, we set out to create digital solutions that drive real business impact.
                </p>
                <p>
                  We believe that exceptional digital products are born at the intersection of beautiful design and
                  powerful functionality. Our team combines technical expertise with creative thinking to deliver
                  solutions that exceed expectations.
                </p>
                <p>
                  As recent graduates embarking on our entrepreneurial journey, we bring fresh perspectives and innovative approaches to web and software development. Our academic foundation from John Abbott College, combined with our passion for cutting-edge technology, enables us to create outstanding digital experiences for clients seeking modern solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - horizontal positioning */}
        <div className="absolute -top-96 right-72 w-[900px] h-[500px] bg-accent/10 rounded-full blur-3xl -rotate-6"></div>
        <div className="absolute bottom-40 -left-96 w-[800px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl rotate-15"></div>
        <div className="absolute top-1/4 right-1/3 w-[350px] h-[350px] bg-accent-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container">
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
      <section className="py-20 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - diagonal positioning */}
        <div className="absolute top-0 right-1/5 w-[450px] h-[700px] bg-accent/15 rounded-full blur-3xl rotate-30"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-accent-secondary/10 rounded-full blur-3xl -rotate-30"></div>
        <div className="absolute top-1/2 right-2/3 w-[300px] h-[300px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-white/70">
              With over 5 years of computer science programming knowledge, our small but efficient team delivers exceptional digital solutions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-dark-card rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 border border-dark-accent hover:border-accent/30"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-dark-accent/30 to-accent/5 relative overflow-hidden">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">{member.name}</h3>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">{member.role}</span>
                  </div>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - layered with varying opacity */}
        <div className="absolute -top-20 left-1/4 w-[650px] h-[450px] bg-accent/10 rounded-full blur-3xl opacity-50 rotate-12"></div>
        <div className="absolute bottom-40 right-0 w-[500px] h-[600px] bg-accent-tertiary/15 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-secondary/20 rounded-full blur-3xl opacity-60"></div>
        
        <div className="container">
          <div className="bg-gradient-to-br from-dark-card to-dark-accent/20 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 -right-32 w-96 h-80 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-1/4 w-80 h-96 bg-accent-tertiary/15 rounded-full blur-3xl rotate-45"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
                <p className="text-lg text-white/80 mb-0">
                  Let's discuss how our team can help build a website, app, or software solution tailored to your unique needs.
                </p>
              </div>
              
              <Link to="/contact" className="btn btn-primary whitespace-nowrap">
                Start a Project
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
    name: "Ryan Meziane",
    role: "Full Stack Developer & Co-founder",
    initials: "RM",
    bio: "Computer Science graduate from John Abbott College with 5+ years of programming experience. Currently pursuing a Bachelor's degree while working on client projects.",
    photo: ryanImage
  },
  {
    name: "Kui Hua Wang",
    role: "Full Stack Developer & Co-founder",
    initials: "KW",
    bio: "Computer Science graduate from John Abbott College with extensive programming knowledge. Currently working towards a Bachelor's degree while developing innovative solutions.",
    photo: kuiImage
  }
];

export default AboutPage; 