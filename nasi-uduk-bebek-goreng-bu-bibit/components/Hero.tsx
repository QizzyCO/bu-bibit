
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/gps-cs-s/AHVAwepigkVSm3GeCLJEQCmAfn419mzUoiZtE4pIB_sKrBx4fwNf2mNxDX_HCKMI3UMIAXbuYgAoi6_mG0Y7CkrWR_a06ATtrbKU2wkn_Vv2btLPkuhRRJhXdv13TSOi-Srv1FwIM7P6dCmnszs=w408-h306-k-no")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-primary/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UQMAPdDxnO5jJbG4J8BDu6qOIkimWwotTw&s" 
            alt="Logo" 
            className="h-32 mx-auto drop-shadow-2xl border-4 border-secondary rounded-full bg-white p-1 transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
          Nasi Uduk <span className="text-secondary">Bebek Goreng</span> <br/> 
          Legendaris di Solo
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-8 text-white/90 text-lg md:text-xl">
          <span className="text-secondary">★★★★☆</span>
          <span>Rating 4.4</span>
          <span className="hidden md:inline mx-2 opacity-50">|</span>
          <span>2.425+ Ulasan Pelanggan</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-10 py-4 bg-secondary text-primary rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl"
          >
            Lihat Menu
          </a>
          <a 
            href="https://gofood.co.id/solo/restaurant/nasi-uduk-bebek-goreng-bu-bibit-banjarsari-0956045f-553b-418f-9e0f-41e9d101363a"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl"
          >
            Pesan Online
          </a>
        </div>
      </div>

      {/* Decorative arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse text-white/50">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
