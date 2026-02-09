
import React from 'react';

const ContactAndLocation: React.FC = () => {
  return (
    <div id="lokasi" className="bg-cream">
      {/* Map Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Lokasi Kami</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Mampir Ke Warung Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jl. Letjen Suprapto No.111, Banyuanyar, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57137
            </p>
          </div>

          <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 overflow-hidden reveal active">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.6355279824115!2d110.80562738481152!3d-7.541518654411681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a141d8b14429b%3A0x4b8377cb9ba28fa2!2sNasi%20Uduk%20Bebek%20Goreng%20Bu%20Bibit!5e1!3m2!1sid!2sid!4v1770644472846!5m2!1sid!2sid"
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal active">
              <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Kontak Kami</h2>
              <h3 className="text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight">Terhubung Dengan <br/> Bu Bibit Sekarang</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Telepon / WhatsApp</h4>
                    <p className="text-lg text-primary font-medium hover:text-accent cursor-pointer">0856-2864-449</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/bebekgoreng_bubibit/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-primary font-medium hover:text-accent"
                    >
                      @bebekgoreng_bubibit
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Pesan Online</h4>
                    <a 
                      href="https://gofood.co.id/solo/restaurant/nasi-uduk-bebek-goreng-bu-bibit-banjarsari-0956045f-553b-418f-9e0f-41e9d101363a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary font-medium hover:text-accent"
                    >
                      GoFood Indonesia
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                 <a href="https://gofood.co.id/solo/restaurant/nasi-uduk-bebek-goreng-bu-bibit-banjarsari-0956045f-553b-418f-9e0f-41e9d101363a" className="flex-1 bg-secondary text-primary py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg">
                    Order via GoFood
                 </a>
                 <a href="https://wa.me/628562864449" className="flex-1 bg-primary text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg">
                    WhatsApp Kami
                 </a>
              </div>
            </div>

            <div className="bg-cream p-10 rounded-3xl reveal active">
               <h4 className="text-2xl font-serif font-bold text-primary mb-6">Jam Operasional</h4>
               <ul className="space-y-4">
                 <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Senin - Minggu</span>
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">10.00 - 22.00</span>
                 </li>
                 <li className="text-sm text-gray-500 italic mt-6">
                    * Buka setiap hari kecuali hari libur nasional besar (cek Instagram kami untuk update terkini).
                 </li>
               </ul>
               <div className="mt-10">
                  <h5 className="font-bold text-primary mb-2">Catatan Tambahan:</h5>
                  <p className="text-gray-600 text-sm">
                    Kami merekomendasikan reservasi jika Anda datang bersama rombongan lebih dari 10 orang untuk memastikan kenyamanan tempat.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactAndLocation;
