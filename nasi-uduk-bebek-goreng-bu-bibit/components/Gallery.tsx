
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="galeri" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Galeri Kami</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Momen & Cita Rasa</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-lg"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary text-sm font-bold uppercase mb-1">{item.category}</span>
                <h4 className="text-white text-xl font-serif font-bold">{item.title}</h4>
              </div>
              {/* Decorative cross overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
                 <span className="text-white text-2xl">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <button 
            className="absolute top-6 right-6 text-white hover:text-secondary p-2 transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-500"
            />
            <div className="text-center text-white">
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">{selectedImage.category}</p>
              <h4 className="text-2xl font-serif font-bold">{selectedImage.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
