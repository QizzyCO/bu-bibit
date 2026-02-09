
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Artikel', href: '#artikel' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UQMAPdDxnO5jJbG4J8BDu6qOIkimWwotTw&s" 
            alt="Logo" 
            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
          />
          <span className={`text-xl font-bold font-serif transition-colors duration-300 ${isScrolled ? 'text-secondary' : 'text-white'}`}>
            Bu Bibit
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium hover:text-secondary transition-colors duration-200 ${isScrolled ? 'text-white' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://gofood.co.id/solo/restaurant/nasi-uduk-bebek-goreng-bu-bibit-banjarsari-0956045f-553b-418f-9e0f-41e9d101363a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            Pesan Online
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen border-t border-white/10' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white text-lg font-medium hover:text-secondary py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://gofood.co.id/solo/restaurant/nasi-uduk-bebek-goreng-bu-bibit-banjarsari-0956045f-553b-418f-9e0f-41e9d101363a"
            className="bg-secondary text-primary text-center px-5 py-3 rounded-xl font-bold mt-4"
          >
            Pesan via GoFood
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
