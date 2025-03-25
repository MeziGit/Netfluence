import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Netfluence - Web, App & Software Development</title>
        <meta name="description" content="Explore our comprehensive range of web development, mobile app creation, software development, and digital marketing services at Netfluence. Customized solutions for businesses of all sizes." />
        <link rel="canonical" href="https://netfluence.com/services" />
        <meta name="keywords" content="web development services, mobile app development, custom software, SEO services, digital marketing, responsive design, e-commerce solutions" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Web Development",
                "description": "Custom website development with responsive design and modern frameworks.",
                "provider": {
                  "@type": "Organization",
                  "name": "Netfluence"
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile applications for iOS and Android.",
                "provider": {
                  "@type": "Organization",
                  "name": "Netfluence"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Custom Software Development",
                "description": "Tailored software solutions to meet specific business needs and challenges.",
                "provider": {
                  "@type": "Organization",
                  "name": "Netfluence"
                }
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Digital Marketing",
                "description": "Comprehensive digital marketing strategies including SEO, content marketing, and social media.",
                "provider": {
                  "@type": "Organization",
                  "name": "Netfluence"
                }
              }
            ]
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
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm inline-flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Web, App & Software Development
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Our <span className="text-accent">Services</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8"
            >
              We offer comprehensive digital solutions tailored to your business needs. From website development to custom software, our team delivers quality results that drive growth and engagement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-accent-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-accent-secondary/10 text-accent-secondary font-medium text-sm inline-flex items-center justify-center">
              What We Offer
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="card card-hover reveal group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-tertiary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-lg"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-accent-secondary text-3xl mb-6 p-4 bg-accent-secondary/10 rounded-lg w-fit transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <button
                      onClick={() => document.getElementById(service.id).scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center text-accent-secondary font-medium group/btn"
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-secondary group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                      <svg className="w-5 h-5 ml-2 transform transition-transform group-hover/btn:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          id={service.id} 
          key={service.id}
          className={`section relative overflow-hidden ${index % 2 === 0 ? 'bg-dark-card/30' : ''}`}
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid opacity-10"></div>
          
          {/* Gradient blobs - alternate positions */}
          {index % 2 === 0 ? (
            <>
              <div className="absolute -top-40 right-40 w-[550px] h-[550px] bg-accent/15 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
            </>
          ) : (
            <>
              <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-accent-secondary/15 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 right-40 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
            </>
          )}
          
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`order-${index % 2 === 0 ? '1' : '2'}`}
              >
                <div className="bg-dark-card/50 rounded-xl p-8 border border-dark-accent/30 hover:border-accent/30 transition-colors duration-300">
                  <div className="text-accent-secondary text-4xl mb-6 p-4 bg-accent-secondary/10 rounded-lg w-fit">
                    {service.icon}
                </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-white/80 mb-6">{service.detailedDescription}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent-secondary mt-1 mr-3 flex-shrink-0">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="btn btn-primary">
                    Get Started
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`order-${index % 2 === 0 ? '2' : '1'}`}
              >
                <div className="relative">
                  {/* Service illustration or image placeholder */}
                  <div className="bg-gradient-to-br from-accent/20 to-accent-tertiary/20 rounded-lg aspect-[4/3] flex items-center justify-center overflow-hidden border border-dark-accent">
                    <div className="text-6xl text-accent-secondary p-8">
                      {service.illustration}
                    </div>
                  </div>
                  
                  {/* Floating stats card */}
                  <div className="absolute -bottom-8 -right-8 bg-dark-card border border-dark-accent/70 rounded-lg p-4 shadow-xl w-48">
                    <div className="text-sm font-medium text-white/70 mb-1">Up Time</div>
                    <div className="text-2xl font-bold text-accent-secondary mb-2">{service.stats.upTime}</div>
                    <div className="w-full bg-dark-accent/50 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-accent-secondary h-full rounded-full" style={{ width: "99.9%" }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>
      ))}

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs */}
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-40 w-[450px] h-[450px] bg-accent-tertiary/10 rounded-full blur-3xl opacity-70"></div>
        
        <div className="container">
          <div className="bg-gradient-to-br from-dark-card to-dark-accent/20 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-3xl"></div>
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

// Services data with extended information
const services = [
  {
    id: "website-development",
    title: "Website Development",
    description: "From creating brand new innovative websites to updating pre-existing ones, we craft responsive, user-friendly sites that showcase your brand.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
    detailedDescription: "Our website development service focuses on creating custom, high-performance websites that not only look great but also drive results. We combine stunning design with robust functionality to deliver websites that stand out in today's competitive digital landscape.",
    features: [
      "Responsive design that works on all devices",
      "User-friendly navigation and intuitive interfaces",
      "SEO-optimized structure and content",
      "Fast loading speeds and performance optimization",
      "Custom functionality tailored to your needs",
      "Content management systems for easy updates"
    ],
    illustration: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full max-w-[150px]">
        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
      </svg>
    ),
    stats: {
      upTime: "99.9%"
    }
  },
  {
    id: "hosting",
    title: "Hosting",
    description: "Reliable hosting and maintenance of websites, databases, and servers to ensure your digital assets are secure and performing optimally.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.057l1.722-2.008z" />
        <path fillRule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
      </svg>
    ),
    detailedDescription: "Our hosting services provide a secure, reliable foundation for your website or application. We offer scalable solutions that grow with your business, ensuring optimal performance and minimal downtime even during traffic spikes.",
    features: [
      "99.9% uptime guarantee",
      "Daily backups and disaster recovery",
      "Advanced security measures and monitoring",
      "CDN integration for global performance",
      "Scalable resources that grow with your needs",
      "24/7 technical support and monitoring"
    ],
    illustration: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full max-w-[150px]">
        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
      </svg>
    ),
    stats: {
      upTime: "99.9%"
    }
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Developing cutting-edge software solutions tailored to your business needs for improved efficiency and productivity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>
    ),
    detailedDescription: "Our software development services create custom solutions that streamline your business operations, improve efficiency, and enhance productivity. We build scalable, secure, and user-friendly software tailored to your specific requirements.",
    features: [
      "Custom software design and development",
      "Legacy system modernization",
      "API development and integration",
      "Database design and management",
      "Quality assurance and testing",
      "Ongoing maintenance and support"
    ],
    illustration: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full max-w-[150px]">
        <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>
    ),
    stats: {
      upTime: "99.9%"
    }
  },
  {
    id: "application-development",
    title: "Application Development",
    description: "Creating and hosting high-performing applications that provide seamless experiences across all devices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
        <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
      </svg>
    ),
    detailedDescription: "Our application development services deliver custom mobile and web applications that help you engage users and streamline operations. We create intuitive, responsive applications that work flawlessly across all devices and platforms.",
    features: [
      "Native and cross-platform mobile apps",
      "Progressive web applications (PWAs)",
      "User-centric interface design",
      "Seamless third-party integrations",
      "Performance optimization",
      "Ongoing updates and maintenance"
    ],
    illustration: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full max-w-[150px]">
        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
        <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
      </svg>
    ),
    stats: {
      upTime: "99.9%"
    }
  }
];

export default ServicesPage; 