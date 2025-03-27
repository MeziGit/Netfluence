import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    budget: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, info: { error: false, msg: null } });
    
    // The form will be handled by Netlify Forms
    // This is just for UX feedback
    try {
      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Thank you for your message! We'll be in touch soon." }
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        budget: ''
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Something went wrong. Please try again later." }
      });
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Us | Netfluence - Get in Touch for Digital Solutions</title>
        <meta name="description" content="Contact Netfluence for custom web development, mobile apps, and software solutions. Reach our team for a free consultation and let's discuss your project needs." />
        <link rel="canonical" href="https://netfluence.com/contact" />
        <meta name="keywords" content="contact digital agency, web development consultation, app development contact, software development inquiry, Montreal digital agency" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Netfluence",
            "image": "https://netfluence.com/images/logo.png",
            "url": "https://netfluence.com",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Digital Street",
              "addressLocality": "Montreal",
              "addressRegion": "Quebec",
              "postalCode": "H2X 3Y7",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.5017,
              "longitude": -73.5673
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          }
        `}</script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs */}
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
              <span className="px-4 py-1.5 rounded-full bg-accent-tertiary/10 text-accent-tertiary font-medium text-sm inline-flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="5.25" width="18" height="13.5" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Get in Touch
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Let's <span className="text-accent">Connect</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-8"
            >
              Have a project in mind? We'd love to hear about it and discuss how we can help.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 section-after-hero relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - radial positioning with overlap */}
        <div className="absolute -top-96 right-1/3 w-[900px] h-[600px] bg-accent-secondary/15 rounded-full blur-3xl rotate-15"></div>
        <div className="absolute bottom-0 -left-60 w-[700px] h-[500px] bg-accent-tertiary/10 rounded-full blur-3xl -rotate-12"></div>
        <div className="absolute top-2/3 right-20 w-[300px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-dark-card rounded-lg p-8 border border-white/5 sticky top-28">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Phone</h3>
                      <p className="text-white/70 mb-1">Call us directly at:</p>
                      <a href="tel:5147927781" className="text-accent hover:underline">(514) 792-7781</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <p className="text-white/70 mb-1">Send us an email at:</p>
                      <a href="mailto:info@netfluence.ca" className="text-accent hover:underline">info@netfluence.ca</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Location</h3>
                      <p className="text-white/70 mb-1">Based in:</p>
                      <p className="text-white">Montreal, QC, Canada</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-medium text-lg mb-4">Connect with us</h3>
                  <div className="flex space-x-4">
                    {socialsData.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-dark-accent/30 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-card rounded-lg p-8 border border-white/5 relative overflow-hidden">
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  {formStatus.info.msg && (
                    <div 
                      className={`mb-6 p-4 rounded-lg ${formStatus.info.error ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}
                    >
                      {formStatus.info.msg}
                    </div>
                  )}
                  
                  <form 
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleFormSubmit}
                  >
                    {/* Hidden Netlify form fields */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                          Your Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-dark-accent/30 border border-white/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                          Your Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-dark-accent/30 border border-white/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-white/80 mb-2 text-sm">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-accent/30 border border-white/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-white/80 mb-2 text-sm">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-accent/30 border border-white/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    
                    {/* Subject */}
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-white/80 mb-2 text-sm">
                        Subject <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-accent/30 border border-white/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    {/* Budget */}
                    <div className="mb-6">
                      <label htmlFor="budget" className="block text-white/80 mb-2 text-sm">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full appearance-none px-4 py-3 rounded-lg bg-dark-accent/30 border border-white/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors text-white/90"
                        >
                          <option value="" className="bg-dark-card text-white">Select a budget range</option>
                          <option value="less than $5k" className="bg-dark-card text-white">Less than $5,000</option>
                          <option value="$5k-$10k" className="bg-dark-card text-white">$5,000 - $10,000</option>
                          <option value="$10k-$25k" className="bg-dark-card text-white">$10,000 - $25,000</option>
                          <option value="$25k-$50k" className="bg-dark-card text-white">$25,000 - $50,000</option>
                          <option value="$50k+" className="bg-dark-card text-white">$50,000+</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                        Your Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg bg-dark-accent/30 border border-white/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={formStatus.submitting}
                        className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-full transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {formStatus.submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Gradient blobs - corner-anchored */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[600px] bg-accent/15 rounded-full blur-3xl rotate-45"></div>
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[600px] bg-accent-secondary/10 rounded-full blur-3xl -rotate-30"></div>
        <div className="absolute top-20 right-1/3 w-[250px] h-[250px] bg-accent-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-white/70">
              Have questions about our services? Here are some commonly asked questions and answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="mb-6 bg-dark-card rounded-lg p-6 border border-white/5 hover:border-accent/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Sample data for social media links
const socialsData = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/netfluenceinc/',
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/netfluenceinc/',
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.284 2 8.944 2.01 7.877 2.06 6.813 2.11 6.088 2.28 5.45 2.525c-.659.256-1.217.6-1.775 1.157C3.12 4.236 2.776 4.794 2.52 5.45 2.275 6.088 2.109 6.813 2.06 7.877 2.01 8.944 2 9.284 2 12c0 2.716.01 3.056.06 4.123.05 1.064.22 1.79.465 2.427.256.659.6 1.217 1.157 1.775.558.557 1.116.901 1.774 1.157.638.245 1.363.415 2.427.465 1.067.05 1.407.06 4.123.06s3.056-.01 4.123-.06c1.064-.05 1.79-.22 2.427-.465.659-.256 1.217-.6 1.775-1.157.557-.558.901-1.116 1.157-1.774.245-.638.415-1.363.465-2.427.05-1.067.06-1.407.06-4.123s-.01-3.056-.06-4.123c-.05-1.064-.22-1.79-.465-2.427-.256-.659-.6-1.217-1.157-1.775-.558-.557-1.116-.901-1.774-1.157-.638-.245-1.363-.415-2.427-.465-1.067-.05-1.407-.06-4.123-.06zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.182.466-.399.8-.748 1.15-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344-.466-.182-.8-.399-1.15-.748-.35-.35-.566-.684-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.064A5.136 5.136 0 006.864 12 5.136 5.136 0 0012 17.136 5.136 5.136 0 0017.136 12 5.136 5.136 0 0012 6.864zm0 8.468A3.333 3.333 0 018.667 12 3.333 3.333 0 0112 8.668 3.333 3.333 0 0115.332 12 3.333 3.333 0 0112 15.332zm6.536-8.668a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
      </svg>
    ),
  },
];

// Sample data for FAQ
const faqData = [
  {
    question: "What types of projects do you work on?",
    answer: "We specialize in web development, mobile app development, and custom software solutions. Our expertise ranges from simple landing pages to complex enterprise applications."
  },
  {
    question: "How long does it typically take to build a website or app?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web or mobile application could take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer ongoing maintenance and support packages to keep your digital products running smoothly. Our support services include regular updates, bug fixes, security patches, and performance optimizations."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer transparent pricing based on project requirements. After an initial consultation, we provide a detailed quote outlining all costs. We can work with fixed-price contracts or hourly rates depending on your needs."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of technologies including React, Angular, Vue.js, Node.js, PHP, Python, Swift, Kotlin, and more. Our technology stack is adaptable to your project requirements and business goals."
  }
];

export default ContactPage; 