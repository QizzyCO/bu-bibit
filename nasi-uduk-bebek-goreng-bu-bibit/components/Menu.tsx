
import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<string>('Semua');

  const categories = useMemo(() => {
    const cats = new Set(MENU_ITEMS.map(item => item.category));
    return ['Semua', ...Array.from(cats)];
  }, []);

  const filteredItems = useMemo(() => {
    return filter === 'Semua' 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter(item => item.category === filter);
  }, [filter]);

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Menu Kami</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Pilih Hidangan Favoritmu</h3>
          <p className="text-gray-600 italic">"Rasa legendaris yang memanjakan lidah setiap gigitannya."</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                filter === cat 
                  ? 'bg-primary border-primary text-white scale-105 shadow-xl' 
                  : 'bg-transparent border-primary/10 text-primary hover:border-primary/40 hover:bg-primary/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-serif italic text-xl">
            Menu kategori ini belum tersedia...
          </div>
        )}
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-secondary relative flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
      {item.isBestSeller && (
        <div className="absolute top-4 right-4 z-10 bg-secondary text-primary px-3 py-1 rounded-full text-[10px] font-black shadow-lg uppercase tracking-tighter">
          Terlaris
        </div>
      )}
      
      <div className="overflow-hidden aspect-[4/3]">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-accent text-[10px] font-bold uppercase tracking-widest block mb-1">
            {item.category}
          </span>
          <h4 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight">
            {item.name}
          </h4>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/10">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase">Harga Mulai</span>
            <span className="text-primary font-black text-lg">{item.priceRange}</span>
          </div>
          <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all shadow-md group-hover:shadow-secondary/50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
