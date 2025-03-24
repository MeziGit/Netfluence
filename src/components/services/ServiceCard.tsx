import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isRightAligned?: boolean;
}

const ServiceCard = ({ icon, title, description, isRightAligned }: ServiceCardProps) => {
  return (
    <div className="service-card glass glass-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMnYxOS42YzAgMS4yMzItLjk2OCAyLjItMi4xOTggMi4ySDE4Yy0xLjIzIDAtMi4yLTEuMDQ1LTIuMi0yLjJWMjAuMmMwLTEuMjMyIDEuMDQ3LTIuMiAyLjItMi4yaDkuMDc2IiBzdHJva2U9IiM0NDQiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGZpbGw9IiM0NDQiIGQ9Ik0yNCA5djlIMTVWOXoiLz48cGF0aCBkPSJNNDUgMjcuNDE3YzEuMjMgMCAyLjE5OC45NjggMi4xOTggMi4ydjE5LjZjMCAxLjIzMi0uOTY4IDIuMi0yLjE5OCAyLjJIMjdjLTEuMjMgMC0yLjItMS4wNDUtMi4yLTIuMlYyOS42MTdjMC0xLjIzMiAxLjA0Ny0yLjIgMi4yLTIuMmg5LjA3NiIgc3Ryb2tlPSIjNDQ0IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBmaWxsPSIjNDQ0IiBkPSJNMzMgMTguNDE3djlIMjR2LTl6Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className={`flex flex-col ${isRightAligned ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className="service-icon w-14 h-14 flex items-center justify-center rounded-xl bg-gray-800 text-accent mb-6 relative overflow-hidden">
          <i className={`${icon} text-2xl z-10`}></i>
          <div className="absolute inset-0 bg-accent opacity-10"></div>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4">{title}</h3>
        
        <p className="text-gray-300 mb-6 max-w-sm">{description}</p>
        
        <div className="mt-auto">
          <a 
            href="#contact" 
            className={`inline-flex items-center text-accent hover:text-accent-light font-medium transition-colors duration-300 group ${
              isRightAligned ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            Learn More 
            <i className={`fas fa-arrow-right transition-transform duration-300 ${
              isRightAligned ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'
            }`}></i>
          </a>
        </div>
      </div>
      
      {/* Hover accent line */}
      <div className={`absolute ${isRightAligned ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'} top-0 w-1 h-0 bg-accent transition-all duration-300 group-hover:h-full`}></div>
    </div>
  );
};

export default ServiceCard; 