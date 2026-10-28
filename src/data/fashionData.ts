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
  excerpt: string;
  image: string;
  author: string;
  intro?: string;
  quote?: string;
  sections?: BlogSection[];
}

const sections = fashionDataJson.Fashion.sections;

export const personalBrand = sections.About.variants.FashionAbout1 as unknown as PersonalBrand;
export const portfolioItems = sections.Gallery.variants.FashionGalleryPage1.items as PortfolioItem[];
export const services = sections.Services.variants.FashionServicesPage1.items as ServiceItem[];
export const testimonials = sections.Testimonials.variants.FashionTestimonials1.items as TestimonialItem[];
export const blogPosts = sections.Blog.variants.FashionBlogPage1.items as BlogPostItem[];
export const brandPartners = sections.BrandPartners?.variants?.FashionBrandPartners1?.items || [];
export const navigation = sections.SiteChrome.variants.FashionHeader1;
export const contact = sections.Contact.variants.FashionContactForm1;
export const portfolioCategories = sections.Gallery.variants.FashionGalleryPage1.categories || [];

export const fashionTemplateData = fashionDataJson.Fashion;

export function getSectionVariant<T = Record<string, unknown>>(sectionKey: string, variantKey: string): T | undefined {
  const s = (fashionDataJson as unknown as { Fashion: { sections: Record<string, { variants: Record<string, T> }> } })?.Fashion?.sections;
  return s?.[sectionKey]?.variants?.[variantKey];
}

export default fashionDataJson;
