
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import ContactAndLocation from './components/ContactAndLocation';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Simple intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Menu />
      </div>
      <div className="reveal">
        <Gallery />
      </div>
      <div className="reveal">
        <Articles />
      </div>
      <Testimonials />
      <div className="reveal">
        <ContactAndLocation />
      </div>
      <Footer />
    </div>
  );
};

export default App;
