import fashionDataJson from "./fashionData.json";

export interface PersonalBrand {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  bioShort: string;
  bioExtended: string;
  mission: string;
  vision: string;
  heroImage: string;
  contactImage: string;
  aboutImage: string;
  stats: { label: string; value: string }[];
  stylePillars?: Record<string, string>;
  measurements?: Record<string, string>;
  skills: { name: string; level: number; desc: string }[];
}

export interface VariantItem {
  name: string;
  color?: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  photographer: string;
  designer: string;
  location: string;
  year: string;
  description: string;
  objectPosition?: string;
  details?: string;
  variants?: VariantItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  icon?: string;
  highlights?: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  city?: string;
}

export interface BlogSection {
  heading: string;
  text: string;
  images?: string[];
  wideImage?: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: string;
  intro?: string;
  quote?: string;
  sections?: BlogSection[];
}

export interface WomenCollectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  variants?: VariantItem[];
}

export interface WomenCollection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  items: WomenCollectionItem[];
}

export const personalBrand = fashionDataJson.personalBrand as PersonalBrand;
export const portfolioItems = fashionDataJson.portfolio as PortfolioItem[];
export const services = fashionDataJson.services as ServiceItem[];
export const testimonials = fashionDataJson.testimonials as TestimonialItem[];
export const blogPosts = fashionDataJson.blogPosts as BlogPostItem[];
export const brandPartners = fashionDataJson.brandPartners;
export const navigation = fashionDataJson.navigation;
export const contact = fashionDataJson.contact;
export const womenFashionCollections = (fashionDataJson as unknown as { womenFashionCollections: WomenCollection[] }).womenFashionCollections || [];

export default fashionDataJson;
