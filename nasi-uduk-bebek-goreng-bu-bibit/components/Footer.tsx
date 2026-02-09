
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UQMAPdDxnO5jJbG4J8BDu6qOIkimWwotTw&s" alt="Logo" className="h-12 border-2 border-secondary rounded-full" />
               <span className="text-2xl font-serif font-bold text-secondary">Bu Bibit</span>
            </div>
            <p className="text-white/70 max-w-md leading-relaxed mb-8">
              Pusat kuliner Nasi Uduk dan Bebek Goreng terfavorit di Solo. Menjaga tradisi rasa dengan bumbu autentik dan pelayanan yang hangat untuk kebahagiaan setiap pelanggan.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-contain" style={{ maskImage: `url(https://cdn.simpleicons.org/${social})`, WebkitMaskImage: `url(https://cdn.simpleicons.org/${social})` }}></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-secondary">Tautan Cepat</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-secondary transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-secondary transition-colors">Tentang Kami</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Menu Favorit</a></li>
              <li><a href="#testimoni" className="hover:text-secondary transition-colors">Apa Kata Mereka</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-secondary">Bantuan</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#lokasi" className="hover:text-secondary transition-colors">Lokasi Cabang</a></li>
              <li><a href="#kontak" className="hover:text-secondary transition-colors">Kontak Bisnis</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Karier</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Nasi Uduk Bebek Goreng Bu Bibit. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <span>Dibuat dengan ❤️ di Solo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
