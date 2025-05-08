import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
}: TestimonialProps) => {
  return (
    <div className="relative bg-gray-900/50 p-8 rounded-lg border border-gray-700 h-full flex flex-col">
      {/* Quote mark decoration */}
      <div className="absolute -top-4 -left-2 text-6xl text-accent opacity-20 select-none">
        "
      </div>

      <p className="text-gray-300 italic mb-6 relative z-10">{quote}</p>

      <div className="mt-auto">
        <div className="h-px w-12 bg-accent mb-4"></div>
        <h4 className="text-white font-bold">{author}</h4>
        <p className="text-gray-400 text-sm">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Netfluence completely transformed our online presence. Their attention to detail and creative approach helped us stand out in a crowded market.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "GrowFast Inc.",
    },
    {
      quote:
        "Working with Netfluence was a game-changer for our business. They delivered a custom software solution that streamlined our operations and increased productivity by 45%.",
      author: "Michael Chen",
      position: "CEO",
      company: "TechFlow Systems",
    },
    {
      quote:
        "The mobile app developed by Netfluence exceeded our expectations. User engagement increased by 70% within the first month of launch.",
      author: "Emily Roberts",
      position: "Product Manager",
      company: "ConnectApp",
    },
    {
      quote:
        "Professional, responsive, and incredibly talented. Netfluence helped us bring our vision to life with exceptional quality and attention to detail.",
      author: "David Williams",
      position: "Founder",
      company: "Innovate Studios",
    },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with Netfluence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
