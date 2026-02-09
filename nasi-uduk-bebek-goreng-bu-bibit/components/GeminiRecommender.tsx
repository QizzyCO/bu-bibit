
import React, { useState } from 'react';
import { getMenuRecommendation } from '../services/geminiService';

const GeminiRecommender: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState<{ recommendation: string; reason: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;
    
    setLoading(true);
    const result = await getMenuRecommendation(mood);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-secondary text-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
        <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </button>

      {/* Recommender Modal */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-6 text-white relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white">✕</button>
            <h4 className="font-serif text-xl font-bold text-secondary mb-1">AI Menu Assistant</h4>
            <p className="text-xs text-white/70">Bingung pilih menu? Tanya AI Bu Bibit!</p>
          </div>
          
          <div className="p-6">
            {!recommendation ? (
              <form onSubmit={handleAskAI}>
                <label className="block text-sm font-bold text-gray-700 mb-2">Lagi pengen apa atau gimana perasaanmu?</label>
                <textarea 
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="Misal: Lagi laper banget pengen yang pedes renyah..."
                  className="w-full p-4 bg-cream rounded-xl border-none focus:ring-2 focus:ring-primary text-sm min-h-[100px] mb-4"
                />
                <button 
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : 'Dapatkan Rekomendasi ✨'}
                </button>
              </form>
            ) : (
              <div className="animate-in fade-in duration-500">
                <div className="bg-secondary/10 p-4 rounded-xl mb-4 border border-secondary/20">
                  <span className="text-xs font-bold text-accent uppercase block mb-1">Menu Untukmu:</span>
                  <h5 className="text-xl font-serif font-bold text-primary">{recommendation.recommendation}</h5>
                </div>
                <p className="text-sm text-gray-600 italic mb-6 leading-relaxed">
                  "{recommendation.reason}"
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => { setRecommendation(null); setMood(''); }}
                    className="flex-1 border border-gray-200 text-gray-500 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
                  >
                    Tanya Lagi
                  </button>
                  <a 
                    href="#menu" 
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-bold text-center hover:bg-accent"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiRecommender;
