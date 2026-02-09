
import { MenuItem, GalleryItem, ArticleItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Bebek Goreng Spesial',
    description: 'Bebek goreng empuk dengan bumbu rempah rahasia, disajikan dengan sambal korek pedas.',
    priceRange: 'Rp 35.000 - 45.000',
    category: 'Bebek Goreng',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800'
  },
  {
    id: '2',
    name: 'Nasi Uduk Komplit',
    description: 'Nasi uduk gurih santan dengan taburan bawang goreng, telur balado, dan tempe orek.',
    priceRange: 'Rp 25.000 - 30.000',
    category: 'Nasi Uduk',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800'
  },
  {
    id: '3',
    name: 'Ayam Goreng Kampung',
    description: 'Ayam kampung pilihan yang digoreng garing di luar namun tetap juicy di dalam.',
    priceRange: 'Rp 30.000 - 40.000',
    category: 'Lainnya',
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800'
  },
  {
    id: '4',
    name: 'Teh Pilihan Bu Bibit',
    description: 'Seduhan teh khas Solo yang wangi, kental, dan sepet (Wasgitel).',
    priceRange: 'Rp 5.000 - 8.000',
    category: 'Minuman',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800'
  },
  {
    id: '5',
    name: 'Pisang Goreng Keju',
    description: 'Pisang raja goreng manis dengan taburan keju cheddar dan susu kental manis.',
    priceRange: 'Rp 15.000 - 20.000',
    category: 'Dessert',
    isBestSeller: false,
    image: 'https://i.pinimg.com/1200x/cc/25/23/cc25236a216e164e3e0bc953af7f7baf.jpg'
  },
  {
    id: '6',
    name: 'Es Jeruk Peras',
    description: 'Jeruk peras murni yang menyegarkan dahaga setelah menyantap hidangan pedas.',
    priceRange: 'Rp 8.000 - 12.000',
    category: 'Minuman',
    isBestSeller: false,
    image: 'https://i.pinimg.com/1200x/59/bb/fd/59bbfd2e5107ecc820fc0a8f39e1620f.jpg'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800', title: 'Suasana Malam', category: 'Atmosphere' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800', title: 'Bebek Goreng Renyah', category: 'Food' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', title: 'Keluarga Bahagia', category: 'Moments' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800', title: 'Nasi Uduk Wangi', category: 'Food' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800', title: 'Interior Nyaman', category: 'Atmosphere' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800', title: 'Pelayanan Ramah', category: 'Moments' },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'a1',
    title: 'Kenapa Nasi Uduk Bebek Goreng Bu Bibit Jadi Favorit di Solo',
    excerpt: 'Solo dikenal dengan kulinernya yang beragam, namun ada satu tempat yang selalu ramai dikunjungi: Bu Bibit.',
    content: 'Sejak didirikan, Nasi Uduk Bu Bibit telah mempertahankan resep tradisional yang diwariskan turun-temurun. Kunci kelezatannya terletak pada pemilihan bebek muda yang diungkep dengan rempah pilihan selama berjam-jam sehingga dagingnya sangat empuk dan bumbunya meresap sampai ke tulang. Dipadukan dengan nasi uduk yang gurih beraroma santan dan daun salam, hidangan ini menjadi paket lengkap yang tak tertandingi di kota Solo.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800',
    date: '12 Maret 2024'
  },
  {
    id: 'a2',
    title: 'Tips Menikmati Bebek Goreng yang Gurih dan Renyah',
    excerpt: 'Makan bebek goreng ada seninya! Simak tips dari kami agar pengalaman makan Anda semakin maksimal.',
    content: 'Untuk mendapatkan sensasi terbaik, mulailah dengan mencicipi kulit bebeknya yang garing. Kemudian, ambil sedikit daging bebek dan campurkan dengan sambal korek yang kami sediakan. Jangan lupa untuk menyantapnya bersama nasi uduk selagi hangat. Penutup yang sempurna adalah segelas Teh Wasgitel (Wangi, Panas, Sepet, Legi) yang menjadi ciri khas minuman di Solo untuk menetralisir rasa lemak setelah makan.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800',
    date: '5 April 2024'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Andi Saputra',
    role: 'Wisatawan Jakarta',
    text: 'Bebeknya luar biasa empuk! Sambal koreknya nampol banget. Setiap ke Solo wajib mampir ke sini.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=andi'
  },
  {
    id: 't2',
    name: 'Siti Rahma',
    role: 'Mahasiswa UNS',
    text: 'Harganya sangat bersahabat untuk kantong mahasiswa, tapi rasanya bintang lima. Nasi uduknya juara!',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=siti'
  },
  {
    id: 't3',
    name: 'Budi Hartono',
    role: 'Warga Lokal Solo',
    text: 'Langganan keluarga sejak dulu. Kualitas rasa tidak pernah berubah, tetap enak dan gurih.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=budi'
  }
];
