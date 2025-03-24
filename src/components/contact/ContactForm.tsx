import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    service: 'web',
    budget: '',
  });
  
  const [activeInput, setActiveInput] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          service: 'web',
          budget: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setFormSuccess(false), 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="glass p-6 md:p-8 rounded-2xl relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMnYxOS42YzAgMS4yMzItLjk2OCAyLjItMi4xOTggMi4ySDE4Yy0xLjIzIDAtMi4yLTEuMDQ1LTIuMi0yLjJWMjAuMmMwLTEuMjMyIDEuMDQ3LTIuMiAyLjItMi4yaDkuMDc2IiBzdHJva2U9IiM0NDQiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGZpbGw9IiM0NDQiIGQ9Ik0yNCA5djlIMTVWOXoiLz48cGF0aCBkPSJNNDUgMjcuNDE3YzEuMjMgMCAyLjE5OC45NjggMi4xOTggMi4ydjE5LjZjMCAxLjIzMi0uOTY4IDIuMi0yLjE5OCAyLjJIMjdjLTEuMjMgMC0yLjItMS4wNDUtMi4yLTIuMlYyOS42MTdjMC0xLjIzMiAxLjA0Ny0yLjIgMi4yLTIuMmg5LjA3NiIgc3Ryb2tlPSIjNDQ0IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBmaWxsPSIjNDQ0IiBkPSJNMzMgMTguNDE3djlIMjR2LTl6Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      
      <h3 className="text-2xl font-display font-bold mb-8 text-center">Get in Touch</h3>
      
      {formSuccess ? (
        <div className="bg-green-500 bg-opacity-10 border border-green-500 text-green-500 rounded-lg p-4 mb-6 animate-fade-in">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-xl mr-2"></i>
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name input */}
          <div className="relative">
            <label 
              htmlFor="name"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                activeInput === 'name' || formData.name
                  ? 'text-xs text-accent -top-2 bg-gray-900 px-2'
                  : 'text-gray-400 top-3'
              }`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setActiveInput('name')}
              onBlur={() => setActiveInput('')}
              className={`w-full bg-gray-800 border py-3 px-4 rounded-lg outline-none transition-all duration-300 ${
                formErrors.name 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-700 focus:border-accent'
              }`}
            />
            {formErrors.name && (
              <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
            )}
          </div>
          
          {/* Email input */}
          <div className="relative">
            <label 
              htmlFor="email"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                activeInput === 'email' || formData.email
                  ? 'text-xs text-accent -top-2 bg-gray-900 px-2'
                  : 'text-gray-400 top-3'
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setActiveInput('email')}
              onBlur={() => setActiveInput('')}
              className={`w-full bg-gray-800 border py-3 px-4 rounded-lg outline-none transition-all duration-300 ${
                formErrors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-700 focus:border-accent'
              }`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
          
          {/* Phone input (optional) */}
          <div className="relative">
            <label 
              htmlFor="phone"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                activeInput === 'phone' || formData.phone
                  ? 'text-xs text-accent -top-2 bg-gray-900 px-2'
                  : 'text-gray-400 top-3'
              }`}
            >
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setActiveInput('phone')}
              onBlur={() => setActiveInput('')}
              className="w-full bg-gray-800 border border-gray-700 py-3 px-4 rounded-lg outline-none transition-all duration-300 focus:border-accent"
            />
          </div>
          
          {/* Subject input */}
          <div className="relative">
            <label 
              htmlFor="subject"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                activeInput === 'subject' || formData.subject
                  ? 'text-xs text-accent -top-2 bg-gray-900 px-2'
                  : 'text-gray-400 top-3'
              }`}
            >
              Subject (optional)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setActiveInput('subject')}
              onBlur={() => setActiveInput('')}
              className="w-full bg-gray-800 border border-gray-700 py-3 px-4 rounded-lg outline-none transition-all duration-300 focus:border-accent"
            />
          </div>
          
          {/* Service selection */}
          <div className="relative">
            <label 
              htmlFor="service"
              className="text-xs text-accent absolute -top-2 left-4 bg-gray-900 px-2"
            >
              Service Type
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              onFocus={() => setActiveInput('service')}
              onBlur={() => setActiveInput('')}
              className="w-full bg-gray-800 border border-gray-700 py-3 px-4 rounded-lg outline-none transition-all duration-300 focus:border-accent appearance-none"
            >
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App</option>
              <option value="software">Custom Software</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-4 top-3 pointer-events-none text-gray-400">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          
          {/* Budget selection */}
          <div className="relative">
            <label 
              htmlFor="budget"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                activeInput === 'budget' || formData.budget
                  ? 'text-xs text-accent -top-2 bg-gray-900 px-2'
                  : 'text-gray-400 top-3'
              }`}
            >
              Budget (optional)
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              onFocus={() => setActiveInput('budget')}
              onBlur={() => setActiveInput('')}
              className="w-full bg-gray-800 border border-gray-700 py-3 px-4 rounded-lg outline-none transition-all duration-300 focus:border-accent appearance-none"
            >
              <option value="">Select your budget</option>
              <option value="$1k-$5k">$1,000 - $5,000</option>
              <option value="$5k-$10k">$5,000 - $10,000</option>
              <option value="$10k-$25k">$10,000 - $25,000</option>
              <option value="$25k+">$25,000+</option>
            </select>
            <div className="absolute right-4 top-3 pointer-events-none text-gray-400">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        
        {/* Message textarea */}
        <div className="relative">
          <label 
            htmlFor="message"
            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
              activeInput === 'message' || formData.message
                ? 'text-xs text-accent -top-2 bg-gray-900 px-2'
                : 'text-gray-400 top-3'
            }`}
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setActiveInput('message')}
            onBlur={() => setActiveInput('')}
            className={`w-full bg-gray-800 border py-3 px-4 rounded-lg outline-none transition-all duration-300 resize-none ${
              formErrors.message 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-700 focus:border-accent'
            }`}
          ></textarea>
          {formErrors.message && (
            <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
          )}
        </div>
        
        {/* Submit button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`button-effect button-3d bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-md font-medium transition-all duration-300 min-w-[200px] flex items-center justify-center ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
      
      <div className="mt-10 pt-8 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent bg-opacity-10 text-accent mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h4 className="text-lg font-medium mb-1">Email</h4>
            <a href="mailto:info@netfluence.ca" className="text-gray-400 hover:text-accent transition-colors">
              info@netfluence.ca
            </a>
          </div>
          
          <div>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent bg-opacity-10 text-accent mb-4">
              <i className="fas fa-phone"></i>
            </div>
            <h4 className="text-lg font-medium mb-1">Phone</h4>
            <a href="tel:+15147927781" className="text-gray-400 hover:text-accent transition-colors">
              (514) 792-7781
            </a>
          </div>
          
          <div>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent bg-opacity-10 text-accent mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h4 className="text-lg font-medium mb-1">Location</h4>
            <p className="text-gray-400">
              Montreal, QC, Canada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 