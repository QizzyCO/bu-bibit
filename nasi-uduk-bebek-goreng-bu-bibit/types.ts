
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  category: string;
  isBestSeller: boolean;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Atmosphere' | 'Food' | 'Moments';
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}
