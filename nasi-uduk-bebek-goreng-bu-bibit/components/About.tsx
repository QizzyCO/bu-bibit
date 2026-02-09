
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative reveal active">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZzPEV18kPEwdhODlEgAu0mx4KVpiZIdUWw&s" 
              alt="Restaurant Atmosphere" 
              className="relative z-10 rounded-2xl shadow-2xl border-8 border-white object-cover aspect-[4/5] w-full"
            />
          </div>
          
          <div className="reveal active">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Tentang Kami</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
              Kelezatan Autentik <br/> Di Jantung Kota Surakarta
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <strong>Nasi Uduk Bebek Goreng Bu Bibit</strong> telah menjadi destinasi kuliner favorit bagi masyarakat Solo, mahasiswa, hingga wisatawan. Kami menyajikan hidangan khas Indonesia yang dimasak dengan cinta dan rempah pilihan.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Halal 100%</h4>
                  <p className="text-sm text-gray-500">Bahan segar & pilihan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Terjangkau</h4>
                  <p className="text-sm text-gray-500">Rp 25.000 - 50.000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Lengkap</h4>
                  <h4 className="font-bold text-primary">Lengkap</h4>
                  <p className="text-sm text-gray-500">Dine-in & Delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Nyaman</h4>
                  <p className="text-sm text-gray-500">Trendi & Santai</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary rounded-2xl text-white">
              <h4 className="font-bold text-secondary mb-2 italic">Informasi Pelayanan:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Melayani makan di tempat, bawa pulang, dan antar tanpa bertemu.</li>
                <li>• Pembayaran: Saat ini hanya menerima <strong>Tunai (Cash)</strong>.</li>
                <li>• Target: Mahasiswa, Turis, Keluarga & Profesional.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
