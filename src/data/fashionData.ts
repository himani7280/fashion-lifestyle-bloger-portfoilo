import fashionDataJson from "./fashionData.json";

export interface HeroSlide {
  image: string;
  alt: string;
  line1: string;
  line2: string;
  objectPosition: string;
}

export interface PersonalBrand {
  name: string;
  heroImage: string;
  badge: string;
  spotlightTitleStart: string;
  spotlightTitleHighlight: string;
  spotlightQuote: string;
  spotlightParagraphs: string[];
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  spotlightStats: { label: string; value: string }[];
}

export interface VariantItem {
  name: string;
  color?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  objectPosition?: string;
  variants?: VariantItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

export interface ServiceSection {
  heading: string;
  text: string;
  wideImage?: string;
  images?: string[];
}

export interface ServiceDetailItem {
  id: string;
  suiteNumber: string;
  title: string;
  subtitle: string;
  heroImage: string;
  leadDescription: string;
  taraQuote: string;
  sections: ServiceSection[];
}

export interface PortraitPlate {
  id: string;
  plateNumber: string;
  title: string;
  location: string;
  year: string;
  image: string;
}

export interface Pillar {
  id: string;
  number: string;
  roman: string;
  title: string;
  tagline: string;
  description: string;
  quote: string;
  image: string;
}

export interface CuratedSphere {
  title: string;
  tagline: string;
  image: string;
  desc: string;
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

export const homeHero = sections.Hero.variants.FashionHomeHero1;
export const aboutHero = sections.Hero.variants.FashionAboutHero1;
export const portfolioHero = sections.Hero.variants.FashionPortfolioHero1;
export const servicesHero = sections.Hero.variants.FashionServicesHero1;
export const blogHero = sections.Hero.variants.FashionBlogHero1;
export const contactHero = sections.Hero.variants.FashionContactHero1;

export const personalBrand: PersonalBrand = sections.About.variants.FashionAbout1;
export const aboutPageData = sections.AboutPage.variants.FashionAboutPage1;
export const homeGalleryData = sections.Gallery.variants.FashionGallery1;
export const portfolioPageData = sections.Gallery.variants.FashionGalleryPage1;
export const portfolioItems: PortfolioItem[] = sections.Gallery.variants.FashionGalleryPage1.items;
export const servicesPageData = sections.Services.variants.FashionServicesPage1;
export const services: ServiceItem[] = sections.Services.variants.FashionServicesPage1.items;
export const serviceDetailsData = sections.Services.variants.FashionServiceDetail1;
export const serviceDetailsList: ServiceDetailItem[] = sections.Services.variants.FashionServiceDetail1.services;
export const testimonialsSectionData = sections.Testimonials.variants.FashionTestimonials1;
export const testimonials: TestimonialItem[] = sections.Testimonials.variants.FashionTestimonials1.items;
export const blogPageData = sections.Blog.variants.FashionBlogPage1;
export const blogPosts: BlogPostItem[] = sections.Blog.variants.FashionBlogPage1.items;
export const blogDetailData = sections.Blog.variants.FashionBlogDetail1;
export const navigation = sections.SiteChrome.variants.FashionHeader1;
export const footerData = sections.SiteChrome.variants.FashionFooter1;
export const contact = sections.Contact.variants.FashionContactForm1;
export const thankYouData = sections.ThankYou.variants.FashionThankYou1;

export const fonts = fashionDataJson.Fashion.fonts;
export const fashionTemplateData = fashionDataJson.Fashion;

const OBJECT_POS_CLASSES: Record<string, string> = {
  "50% 15%": "object-[50%_15%]",
  "50% 18%": "object-[50%_18%]",
  "50% 20%": "object-[50%_20%]",
  "50% 25%": "object-[50%_25%]",
  "50% 28%": "object-[50%_28%]",
  "64% 4%": "object-[64%_4%]",
};

export function getObjectPosClass(pos?: string): string {
  return (pos && OBJECT_POS_CLASSES[pos]) || "object-[50%_20%]";
}

const COLOR_BG_CLASSES: Record<string, string> = {
  "#0A0A0A": "bg-[#0A0A0A]",
  "#0D1B2A": "bg-[#0D1B2A]",
  "#0F0F0F": "bg-[#0F0F0F]",
  "#0F382A": "bg-[#0F382A]",
  "#111111": "bg-[#111111]",
  "#141414": "bg-[#141414]",
  "#162846": "bg-[#162846]",
  "#242526": "bg-[#242526]",
  "#7A1C24": "bg-[#7A1C24]",
  "#8B1E2E": "bg-[#8B1E2E]",
  "#9E6D38": "bg-[#9E6D38]",
  "#9E9E9E": "bg-[#9E9E9E]",
  "#B85D6C": "bg-[#B85D6C]",
  "#BF5700": "bg-[#BF5700]",
  "#C4A482": "bg-[#C4A482]",
  "#C9A96E": "bg-[#C9A96E]",
  "#D4AF37": "bg-[#D4AF37]",
  "#D9C9B4": "bg-[#D9C9B4]",
  "#DFC18A": "bg-[#DFC18A]",
  "#E0DED9": "bg-[#E0DED9]",
  "#E5C583": "bg-[#E5C583]",
  "#EDE6D6": "bg-[#EDE6D6]",
  "#F0EBE1": "bg-[#F0EBE1]",
  "#F7F5F0": "bg-[#F7F5F0]",
};

export function getColorBgClass(color?: string): string {
  return (color && COLOR_BG_CLASSES[color]) || "bg-[#C9A96E]";
}

export function getSectionVariant<T = Record<string, unknown>>(sectionKey: string, variantKey: string): T | undefined {
  const s = (fashionDataJson as unknown as { Fashion: { sections: Record<string, { variants: Record<string, T> }> } })?.Fashion?.sections;
  return s?.[sectionKey]?.variants?.[variantKey];
}

export default fashionDataJson;
