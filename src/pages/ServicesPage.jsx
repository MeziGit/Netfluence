import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Netfluence - Web, App & Software Development</title>
        <meta name="description" content="We specialize in custom website development, mobile app development, and bespoke software solutions for businesses of all sizes." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-dark-bg pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm inline-flex items-center justify-center mb-4">
                Our Expertise
              </span>
            </motion.div>
            
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Specialized Digital<br/>Development Services
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We create custom digital solutions that combine beautiful design with powerful functionality to help your business thrive online.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="card card-hover relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Service connector line to show relationship between services */}
                {index < services.length - 1 && (
                  <div className="absolute hidden lg:block h-px w-16 bg-accent/30 -right-16 top-14 z-0"></div>
                )}
                
                <div className="p-8">
                  <div className="text-accent-secondary bg-accent-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-accent-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="inline-flex items-center text-accent-secondary font-medium group">
                    <span>Discuss Your Project</span>
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-dark-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-accent-tertiary/10 text-accent-tertiary font-medium text-sm inline-flex items-center justify-center mb-4">
              Our Process
            </span>
            <h2 className="mb-6">How We Build Digital Solutions</h2>
            <p className="text-lg text-white/80">
              Our development methodology ensures we deliver high-quality, user-centered digital products that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <motion.div 
                key={index} 
                className="card relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="absolute -top-4 -left-4 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-dark-bg">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm inline-flex items-center justify-center mb-4">
              Our Tech Stack
            </span>
            <h2 className="mb-6">Technologies We Use</h2>
            <p className="text-lg text-white/80">
              We work with cutting-edge technologies to build modern, scalable, and maintainable digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="card flex flex-col items-center justify-center p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="w-12 h-12 mb-4 opacity-80">{tech.icon}</div>
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-bg">
        <div className="container">
          <div className="bg-gradient-to-br from-dark-card to-dark-accent/20 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Digital Solution?</h2>
                <p className="text-lg text-white/80 mb-0">
                  Let's discuss how we can help bring your ideas to life with our expert development services.
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

// Services data
const services = [
  {
    id: 1,
    title: "Website Development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "We create responsive, user-friendly websites that showcase your brand and drive conversions.",
    features: [
      "Custom website design and development",
      "Responsive and mobile-friendly design",
      "E-commerce websites and online stores",
      "Content management systems (CMS)",
      "Progressive Web Apps (PWAs)",
      "SEO-friendly structure and performance optimization"
    ]
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    description: "We build native and cross-platform mobile apps that provide seamless user experiences on iOS and Android.",
    features: [
      "iOS and Android native app development",
      "Cross-platform app development (React Native, Flutter)",
      "UI/UX design for mobile applications",
      "App testing and quality assurance",
      "App store submission and optimization",
      "App maintenance and continuous improvement"
    ]
  },
  {
    id: 3,
    title: "Custom Software Development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: "We develop tailored software solutions that solve your specific business challenges and improve efficiency.",
    features: [
      "Business process automation",
      "Custom web applications",
      "Enterprise software solutions",
      "API development and integration",
      "Database design and optimization",
      "Legacy system modernization",
      "Cloud-based solutions"
    ]
  }
];

// Development process data
const developmentProcess = [
  {
    title: "Discovery",
    description: "We thoroughly analyze your business needs, target audience, and project requirements to create a solid foundation."
  },
  {
    title: "Design",
    description: "We create wireframes, prototypes, and visual designs to establish the look and feel of your digital solution."
  },
  {
    title: "Development",
    description: "Our expert developers build your solution using clean, maintainable code and best development practices."
  },
  {
    title: "Testing & Launch",
    description: "We rigorously test your product for quality, performance, and security before a smooth deployment."
  }
];

// Technologies data
const technologies = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10.2001C13.0042 10.2001 13.8 10.9959 13.8 12.0001C13.8 13.0042 13.0042 13.8001 12 13.8001C10.9958 13.8001 10.2 13.0042 10.2 12.0001C10.2 10.9959 10.9958 10.2001 12 10.2001Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 17.8001C15.1997 17.8001 17.8 15.1998 17.8 12.0001C17.8 8.8004 15.1997 6.20007 12 6.20007C8.80029 6.20007 6.20001 8.8004 6.20001 12.0001C6.20001 15.1998 8.80029 17.8001 12 17.8001ZM12 16.2001C14.3142 16.2001 16.2 14.3142 16.2 12.0001C16.2 9.6859 14.3142 7.80007 12 7.80007C9.68581 7.80007 7.80001 9.6859 7.80001 12.0001C7.80001 14.3142 9.68581 16.2001 12 16.2001Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C16.4183 22 20 17.5228 20 12C20 6.47715 16.4183 2 12 2C7.58172 2 4 6.47715 4 12C4 17.5228 7.58172 22 12 22ZM12 20.4C15.5346 20.4 18.4 16.6421 18.4 12C18.4 7.35786 15.5346 3.6 12 3.6C8.46538 3.6 5.6 7.35786 5.6 12C5.6 16.6421 8.46538 20.4 12 20.4Z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 1.69432C11.6983 1.69432 11.4054 1.77351 11.1476 1.92413L3.33055 6.28618C2.80914 6.59528 2.5 7.13008 2.5 7.70764V16.294C2.5 16.8716 2.80914 17.4064 3.33056 17.7155L11.1476 22.0775C11.4054 22.2282 11.6983 22.3073 12 22.3073C12.3017 22.3073 12.5946 22.2282 12.8524 22.0775L20.6694 17.7155C21.1909 17.4064 21.5 16.8716 21.5 16.294V7.70764C21.5 7.13008 21.1909 6.59528 20.6694 6.28618L12.8524 1.92413C12.5946 1.77351 12.3017 1.69432 12 1.69432ZM4.5 8.3216L11.25 12.0009V20.357L4.5 16.6778V8.3216ZM12.75 20.357V12.0009L19.5 8.3216V16.6778L12.75 20.357ZM19.0155 7.00118L12.75 3.63249V3.63249L12 3.1967L11.25 3.63249L4.98452 7.00118L12 10.6729L19.0155 7.00118Z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "React Native",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14.4001C13.3255 14.4001 14.4 13.3256 14.4 12.0001C14.4 10.6745 13.3255 9.6001 12 9.6001C10.6745 9.6001 9.60001 10.6745 9.60001 12.0001C9.60001 13.3256 10.6745 14.4001 12 14.4001Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 18.4001C15.5346 18.4001 18.4 15.5347 18.4 12.0001C18.4 8.46545 15.5346 5.6001 12 5.6001C8.46538 5.6001 5.60001 8.46545 5.60001 12.0001C5.60001 15.5347 8.46538 18.4001 12 18.4001ZM12 16.8001C14.6509 16.8001 16.8 14.651 16.8 12.0001C16.8 9.34916 14.6509 7.2001 12 7.2001C9.34906 7.2001 7.20001 9.34916 7.20001 12.0001C7.20001 14.651 9.34906 16.8001 12 16.8001Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.9996 4.00012C6.99956 2.66679 2.66628 6.00012 3.99961 12.0001C2.66628 18.0001 6.99956 21.3334 11.9996 20.0001C16.9996 21.3334 21.3329 18.0001 19.9996 12.0001C21.3329 6.00012 16.9996 2.66679 11.9996 4.00012ZM11.9996 5.60012C15.9996 4.52402 19.4755 6.80012 18.3994 12.0001C19.4755 17.2001 15.9996 19.4762 11.9996 18.4001C7.99956 19.4762 4.52377 17.2001 5.59987 12.0001C4.52377 6.80012 7.99956 4.52402 11.9996 5.60012Z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "Vue.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0017 3L12.0017 8.09L9.0017 3H2.0017L12.0017 21L22.0017 3H15.0017Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Angular",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 5.4L5.1 16.2L12 21L18.9 16.2L20 5.4L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Flutter",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 15L12 20L21 11H15.5L7 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 9L12 4L21 13H15.5L7 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.33 2 8 3.54 8 5V7H16V8H8H6C4.53 8 3 9.21 3 11V16C3 17.79 4.53 19 6 19H7V17.5C7 15.83 8.47 14.5 10 14.5H14C15.5 14.5 17 13.25 17 11.5V5C17 3.54 15.63 2 12 2ZM9 5.5C9.83 5.5 10.5 6.17 10.5 7C10.5 7.83 9.83 8.5 9 8.5C8.17 8.5 7.5 7.83 7.5 7C7.5 6.17 8.17 5.5 9 5.5Z" fill="currentColor"/>
        <path d="M17 11V13.5H8V18C8 19.46 8.33 22 12 22C15.67 22 16 19.46 16 18V16H12V15H16H18C19.47 15 21 13.79 21 12V7C21 5.21 19.47 4 18 4H17V7.5C17 9.17 15.53 10.5 14 10.5H10C8.5 10.5 7 11.75 7 13.5V14H17V11ZM15 18.5C15.83 18.5 16.5 19.17 16.5 20C16.5 20.83 15.83 21.5 15 21.5C14.17 21.5 13.5 20.83 13.5 20C13.5 19.17 14.17 18.5 15 18.5Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14.5L4.5 17L7 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 14.5L19.5 17L17 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12L10 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7L6 6L7 3M3 7L6 8L9 7M3 7L5 9L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 7L18 6L17 3M21 7L18 8L15 7M21 7L19 9L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 6 6 6 14C6 18 8.5 20.5 9.5 21.5C10 22 10.5 22 11 22.5C11 22.5 11.5 21 12 19.5C12.5 18 13 15 13 15C13 15 18 13.5 18 9.5C18 5.5 14 4 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.9983 15C11.4983 12.5 9.99835 8.1 9.99835 7C9.49835 8 8.49835 10 8.49835 14.5C8.49835 19 11.9983 21 11.9983 21C11.9983 21 12.4983 18 12.4983 15H11.9983Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "Firebase",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 17.5L16.5 6.5L12.5 2.5L10.527 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 17.5L15.5 6.5L12.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.5 17.5L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.5 17.5L19.5 17.5L12 22.5L4.5 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21V3H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 10.5V8H18V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.5 10.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 13.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 13.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10.5V8H11V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 8C7.5 6 9.5 5 11.5 5H13C13 6.5 13 8 12 9.5C11 11 9 12 7 12H5.5C5.5 10.5 5.5 10 6.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 16C7.5 14 9.5 13 11.5 13H13C13 14.5 13 16 12 17.5C11 19 9 20 7 20H5.5C5.5 18.5 5.5 18 6.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 8C15.5 6 17.5 5 19.5 5H21C21 6.5 21 8 20 9.5C19 11 17 12 15 12H13.5C13.5 10.5 13.5 10 14.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 16C15.5 14 17.5 13 19.5 13H21C21 14.5 21 16 20 17.5C19 19 17 20 15 20H13.5C13.5 18.5 13.5 18 14.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default ServicesPage; 