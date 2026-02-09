
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimoni" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-12 opacity-10">
         <svg className="w-64 h-64" viewBox="0 0 100 100" fill="currentColor">
           <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
           <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" fill="none" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Testimoni</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Apa Kata Mereka?</h3>
        </div>

        <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={testimonial.id}
              className={`absolute inset-0 transition-all duration-1000 flex flex-col items-center text-center ${idx === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}
            >
              <div className="mb-6 relative">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full border-4 border-secondary shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl">“</div>
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-secondary text-2xl">★</span>
                ))}
              </div>

              <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed max-w-3xl">
                "{testimonial.text}"
              </p>

              <div>
                <h4 className="text-xl font-bold text-secondary">{testimonial.name}</h4>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-3 rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-12 bg-secondary' : 'w-3 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
