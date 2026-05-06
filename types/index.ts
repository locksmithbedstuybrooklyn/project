export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: string; // Long-form markdown content
  icon: string;
  image: string;
  keywords: string[];
  updatedAt: Date;
  videoUrl?: string;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: string; // Long-form neighborhood profile
  image: string;
  serviceAreas: string[];
  neighborhoods: string[];
  updatedAt: Date;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  keywords: string[];
  publishedAt: Date;
  updatedAt: Date;
  author: string;
  category: string;
  image: string;
  videoUrl?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  content: string;
  rating: number;
  date: Date;
}

export interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  vehicleType?: string;
  propertyType?: string;
  location: string;
  description: string;
  createdAt: Date;
}
