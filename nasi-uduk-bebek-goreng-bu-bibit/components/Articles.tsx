
import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { ArticleItem } from '../types';

const Articles: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="artikel" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Blog Kuliner</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Cerita Di Balik Dapur Bu Bibit</h3>
          </div>
          <button className="text-primary font-bold hover:text-accent transition-colors border-b-2 border-primary pb-1">Lihat Semua Cerita</button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {ARTICLES.map((article) => (
            <div key={article.id} className="group flex flex-col bg-cream rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="overflow-hidden aspect-[16/9]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="text-accent text-sm font-medium mb-3 block">{article.date}</span>
                <h4 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <button 
                  onClick={() => setActiveArticle(article)}
                  className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-accent transition-colors"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
          <div className="bg-cream max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative animate-in slide-in-from-bottom-10 duration-500">
            <button 
              className="absolute top-6 right-6 bg-white/50 backdrop-blur-md rounded-full p-2 text-primary hover:bg-secondary transition-colors z-10"
              onClick={() => setActiveArticle(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="max-h-[90vh] overflow-y-auto custom-scrollbar">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full aspect-video object-cover" />
              <div className="p-8 md:p-12">
                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">{activeArticle.date}</span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 leading-tight">{activeArticle.title}</h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {activeArticle.content}
                </div>
                <div className="mt-12 pt-12 border-t border-gray-200 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-serif italic text-xl">B</div>
                  <div>
                    <p className="font-bold text-primary">Admin Bu Bibit</p>
                    <p className="text-sm text-gray-500">Penulis Konten Kuliner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Articles;
