export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface StylingProject {
  id: string;
  title: string;
  subtitle: string;
  section: "editorial" | "occasion" | "creative";
  category:
    | "Casual & Street Style"
    | "Ethnic & Traditional Styling"
    | "Western & Contemporary Looks"
    | "Party & Evening Wear"
    | "Office & Formal Styling"
    | "Wedding & Festive Styling";
  categorySlug: string;
  image: string;
  outfit: string;
  colorPalette: ColorSwatch[];
  stylingConcept: string;
  occasion: string;
  accessories: string;
  featured?: boolean;
}

export interface StylingCategoryInfo {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  lookCount: number;
}

export const STYLING_CATEGORIES: StylingCategoryInfo[] = [
  {
    id: "casual-street",
    title: "Casual & Street Style",
    slug: "casual-street",
    description: "Relaxed silhouettes, tailored denim, elevated linen layering, and effortless city aesthetics.",
    image: "/images/casual-banner.webp",
    lookCount: 12,
  },
  {
    id: "ethnic-traditional",
    title: "Ethnic & Traditional Styling",
    slug: "ethnic-traditional",
    description: "Heritage handlooms, draped Banarasi silks, royal embroidery, and artisanal Indian couture.",
    image: "/images/ethnic-banner.webp",
    lookCount: 16,
  },
  {
    id: "western-contemporary",
    title: "Western & Contemporary Looks",
    slug: "western-contemporary",
    description: "Modern co-ord ensembles, asymmetrical cuts, minimalist draping, and contemporary European tailoring.",
    image: "/images/western-banner.webp",
    lookCount: 14,
  },
  {
    id: "party-evening",
    title: "Party & Evening Wear",
    slug: "party-evening",
    description: "High-octane glamour, shimmering sequins, fluid satin slip gowns, and dramatic midnight cocktail looks.",
    image: "/images/party-banner.webp",
    lookCount: 15,
  },
  {
    id: "office-formal",
    title: "Office & Formal Styling",
    slug: "office-formal",
    description: "Structured power blazers, crisp monochrome suiting, architectural collars, and sophisticated board aesthetics.",
    image: "/images/office-banner.webp",
    lookCount: 11,
  },
  {
    id: "wedding-festive",
    title: "Wedding & Festive Styling",
    slug: "wedding-festive",
    description: "Regal bridal lehengas, ornate zardozi motifs, ceremonial dupattas, and grand wedding celebration ensembles.",
    image: "/images/wedding-banner.webp",
    lookCount: 18,
  },
];

export const STYLING_PROJECTS: StylingProject[] = [
  // ── SECTION 1: FASHION EDITORIAL LOOKS ──
  {
    id: "editorial-crimson-velvet",
    title: "The Crimson Velvet Narrative",
    subtitle: "Vogue India Haute Editorial",
    section: "editorial",
    category: "Party & Evening Wear",
    categorySlug: "party-evening",
    image: "/images/tara-pillar-chromatics.jpg",
    outfit: "Sculpted crimson velvet mermaid gown with a plunging sweetheart neckline and structured corsetry.",
    colorPalette: [
      { name: "Crimson Noir", hex: "#7E181E" },
      { name: "Espresso Brown", hex: "#30241F" },
      { name: "Dusty Rose", hex: "#E8C8C3" },
      { name: "Soft Champagne", hex: "#F5EDE5" },
    ],
    stylingConcept:
      "A dramatic exploration of high-contrast editorial drama. The heavy drape of deep crimson velvet is juxtaposed with architectural shoulders and minimal jewellery, allowing the silhouette to command the frame.",
    occasion: "High-Fashion Editorial & Red Carpet Gala",
    accessories: "Vintage antique diamond ear cuffs, matte oxblood stiletto pumps, and clean slicked-back chignon.",
    featured: true,
  },
  {
    id: "editorial-architectural-monochrome",
    title: "Architectural Noir & Ivory",
    subtitle: "Elle Magazine Fall Feature",
    section: "editorial",
    category: "Office & Formal Styling",
    categorySlug: "office-formal",
    image: "/images/model-suit.jpg",
    outfit: "Structured double-breasted charcoal wool power suit paired with an ivory silk crepe pussy-bow blouse.",
    colorPalette: [
      { name: "Charcoal Slate", hex: "#2B2B2B" },
      { name: "Espresso", hex: "#30241F" },
      { name: "Cream White", hex: "#FFFDF9" },
      { name: "Blush Beige", hex: "#F5EDE5" },
    ],
    stylingConcept:
      "Deconstructing masculine corporate suiting into feminine power elegance. The sharp padded lapels and razor-sharp trouser pleats are softened by fluid ivory silk drapery.",
    occasion: "Executive Leadership Summit & Editorial Cover",
    accessories: "Brushed gold geometric brooch, structured leather top-handle tote, and pointed patent leather loafers.",
    featured: true,
  },
  {
    id: "editorial-botanical-haute",
    title: "Petals & Heritage Organza",
    subtitle: "Harper's Bazaar Botanical Mood",
    section: "editorial",
    category: "Ethnic & Traditional Styling",
    categorySlug: "ethnic-traditional",
    image: "/images/model-roses.jpg",
    outfit: "Pastel blush organza saree embroidered with fine resham threadwork, draped over an unlined raw-silk bustier.",
    colorPalette: [
      { name: "Dusty Rose", hex: "#E8C8C3" },
      { name: "Soft Sand", hex: "#F5EDE5" },
      { name: "Antique Sage", hex: "#8A9A86" },
      { name: "Deep Mocha", hex: "#30241F" },
    ],
    stylingConcept:
      "An homage to romantic botanical poetry. Using sheer organza layers to create translucency, complemented by fresh floral styling and soft contouring to emulate royal Awadh portraiture.",
    occasion: "Ceremonial Afternoon Soirée & Editorial Shoot",
    accessories: "Polki and uncut diamond jhumkas, mother-of-pearl clutch, and blush satin mojris.",
    featured: true,
  },
  {
    id: "editorial-studio-sculpture",
    title: "Sculptural Contemporary Silhouette",
    subtitle: "L'Officiel Minimalist Series",
    section: "editorial",
    category: "Western & Contemporary Looks",
    categorySlug: "western-contemporary",
    image: "/images/model-studio.jpg",
    outfit: "Asymmetric draping ivory crepe sheath with cut-out waist detailing and cape sleeve extension.",
    colorPalette: [
      { name: "Porcelain Cream", hex: "#FFFDF9" },
      { name: "Desert Beige", hex: "#F5EDE5" },
      { name: "Espresso Core", hex: "#30241F" },
      { name: "Rose Whisper", hex: "#E8C8C3" },
    ],
    stylingConcept:
      "Focusing purely on line, form, and negative space. The minimalist ivory canvas highlights modern tailoring without superficial embellishments.",
    occasion: "Contemporary Art Biennale Opening",
    accessories: "Sculpted molten silver choker, minimalist acrylic clutch, and strappy nude heel mules.",
    featured: false,
  },

  // ── SECTION 2: OCCASION-BASED STYLING ──
  {
    id: "occasion-royal-sangeet",
    title: "Royal Jaipur Sangeet Ensemble",
    subtitle: "Palace Wedding Celebrations",
    section: "occasion",
    category: "Wedding & Festive Styling",
    categorySlug: "wedding-festive",
    image: "/images/wedding-bridal.webp",
    outfit: "Hand-embossed crimson and antique gold raw silk lehenga with a dual-drape tissue dupatta.",
    colorPalette: [
      { name: "Heritage Crimson", hex: "#8B1E22" },
      { name: "Antique Gold", hex: "#D4AF37" },
      { name: "Champagne Cream", hex: "#FFFDF9" },
      { name: "Espresso Shadow", hex: "#30241F" },
    ],
    stylingConcept:
      "Engineered for celebration and grandeur. The heavy zardozi border is balanced by a sheer gold tissue veil, ensuring the wearer can move and dance effortlessly while commanding royal presence.",
    occasion: "Grand Wedding Reception & Sangeet Night",
    accessories: "Handcrafted meenakari necklace set, emerald cocktail ring, and custom velvet embellished juttis.",
    featured: true,
  },
  {
    id: "occasion-twilight-gala",
    title: "Midnight Noir Starlight Gown",
    subtitle: "Black-Tie Charity Gala",
    section: "occasion",
    category: "Party & Evening Wear",
    categorySlug: "party-evening",
    image: "/images/party-gowns.webp",
    outfit: "Fluid midnight black georgette gown with cascading micro-crystal shoulder drape and open back.",
    colorPalette: [
      { name: "Midnight Noir", hex: "#161616" },
      { name: "Espresso Brown", hex: "#30241F" },
      { name: "Sterling Silver", hex: "#D8D8D8" },
      { name: "Dusty Mauve", hex: "#E8C8C3" },
    ],
    stylingConcept:
      "Classic Hollywood allure meets modern Parisian drape. The cascading crystal element acts as built-in jewelry, allowing the rest of the styling to remain sleek, refined, and confident.",
    occasion: "Black-Tie Philanthropy Gala & Film Premiere",
    accessories: "Solitaire diamond drop earrings, minaudière evening box clutch, and satin ankle-strap stilettos.",
    featured: false,
  },
  {
    id: "occasion-banarasi-heritage",
    title: "The Banarasi Heirloom Drape",
    subtitle: "Festive Temple & Diwali Soirée",
    section: "occasion",
    category: "Ethnic & Traditional Styling",
    categorySlug: "ethnic-traditional",
    image: "/images/ethnic-sarees.webp",
    outfit: "Authentic hand-woven Katan silk Banarasi saree in deep emerald and warm mustard with zari border.",
    colorPalette: [
      { name: "Deep Emerald", hex: "#1E4738" },
      { name: "Warm Mustard", hex: "#C79C3E" },
      { name: "Beige Silk", hex: "#F5EDE5" },
      { name: "Espresso Accent", hex: "#30241F" },
    ],
    stylingConcept:
      "Honoring generational artisan textile heritage. Styled with traditional seedha pallu drape and a boat-neck brocade blouse with elbow sleeves.",
    occasion: "Diwali Royale & Traditional Wedding Muhurtham",
    accessories: "Temple gold chokers with ruby cabochons, gajra floral hair wreath, and heritage potli bag.",
    featured: true,
  },
  {
    id: "occasion-power-boardroom",
    title: "Monochrome Executive Sharpness",
    subtitle: "Annual Corporate Keynote",
    section: "occasion",
    category: "Office & Formal Styling",
    categorySlug: "office-formal",
    image: "/images/office-blazers.webp",
    outfit: "Tailored camel wool single-breasted blazer with matching cigarette trousers and fine cashmere knit top.",
    colorPalette: [
      { name: "Warm Camel", hex: "#B88E5E" },
      { name: "Cream Ivory", hex: "#FFFDF9" },
      { name: "Espresso Espresso", hex: "#30241F" },
      { name: "Soft Sand", hex: "#F5EDE5" },
    ],
    stylingConcept:
      "Warm neutral power dressing. Moving away from stark black suiting to rich camel and cream creates approachable authority and impeccable taste.",
    occasion: "Board of Directors Presentation & Global Summit",
    accessories: "Swiss gold tank watch, minimalist leather envelope folio, and Italian leather pointed pumps.",
    featured: false,
  },

  // ── SECTION 3: CREATIVE OUTFIT COMBINATIONS ──
  {
    id: "creative-oversized-blazer-silk",
    title: "Oversized Tailoring & Fluid Silk",
    subtitle: "High-Low Texture Clash",
    section: "creative",
    category: "Western & Contemporary Looks",
    categorySlug: "western-contemporary",
    image: "/images/model-blazer.jpg",
    outfit: "Oversized men's cut tweed blazer layered over a bias-cut dusty rose silk slip skirt and ribbed turtleneck.",
    colorPalette: [
      { name: "Espresso Wool", hex: "#30241F" },
      { name: "Dusty Rose Silk", hex: "#E8C8C3" },
      { name: "Oatmeal Beige", hex: "#F5EDE5" },
      { name: "Warm Cream", hex: "#FFFDF9" },
    ],
    stylingConcept:
      "A masterclass in textural tension: masculine vs. feminine, rigid wool vs. liquid silk, structured vs. fluid. Creating an effortless balance for the modern tastemaker.",
    occasion: "Fashion Week Front Row & Gallery Preview",
    accessories: "Chunky chain-link gold necklace, slouchy leather shoulder pouch, and square-toe ankle boots.",
    featured: true,
  },
  {
    id: "creative-street-denim-couture",
    title: "Urban Denim & Tailored Trench",
    subtitle: "Elevated Street Aesthetics",
    section: "creative",
    category: "Casual & Street Style",
    categorySlug: "casual-street",
    image: "/images/casual-banner.webp",
    outfit: "Wide-leg Japanese selvedge denim paired with an oversized double-faced cotton trench and crisp poplin shirt.",
    colorPalette: [
      { name: "Deep Indigo", hex: "#2C3E50" },
      { name: "Warm Trench Beige", hex: "#EADBCE" },
      { name: "Pure Cream", hex: "#FFFDF9" },
      { name: "Espresso Trim", hex: "#30241F" },
    ],
    stylingConcept:
      "Re-imagining utilitarian essentials through haute proportions. The cuff fold, dramatic trench storm flap, and unbuttoned shirt collar convey casual nonchalance.",
    occasion: "SoHo Gallery Walk & Creative Client Consultation",
    accessories: "Retro tortoiseshell sunglasses, canvas tote with leather trim, and retro low-profile court sneakers.",
    featured: true,
  },
  {
    id: "creative-fusion-corset-saree",
    title: "Contemporary Corsetry with Draped Heritage",
    subtitle: "East Meets West Innovation",
    section: "creative",
    category: "Ethnic & Traditional Styling",
    categorySlug: "ethnic-traditional",
    image: "/images/ethnic-banner.webp",
    outfit: "Hand-boned leather corset belt cinching a pre-pleated chiffon metallic saree with palazzo pants.",
    colorPalette: [
      { name: "Antique Copper", hex: "#A86D48" },
      { name: "Espresso Leather", hex: "#30241F" },
      { name: "Dusty Rose Glow", hex: "#E8C8C3" },
      { name: "Beige Crepe", hex: "#F5EDE5" },
    ],
    stylingConcept:
      "Breaking conventional ethnic draping rules. By replacing the traditional petticoat with tailored trousers and using a corset structure, the saree transforms into an edgy global statement.",
    occasion: "Creative Industry Awards & Afterparty",
    accessories: "Architectural metal ear climber, metallic micro-bag, and pointed chrome heels.",
    featured: false,
  },
  {
    id: "creative-cocktail-sequin-knit",
    title: "High-Octane Sequin with Relaxed Knit",
    subtitle: "Effortless Party Styling",
    section: "creative",
    category: "Party & Evening Wear",
    categorySlug: "party-evening",
    image: "/images/party-sequin.webp",
    outfit: "Champagne micro-sequin midi pencil skirt paired with an oversized brushed mohair crewneck sweater.",
    colorPalette: [
      { name: "Champagne Sequin", hex: "#D4C29A" },
      { name: "Dusty Rose Knit", hex: "#E8C8C3" },
      { name: "Warm Cream", hex: "#FFFDF9" },
      { name: "Espresso Dark", hex: "#30241F" },
    ],
    stylingConcept:
      "The Scandinavian art of 'gammeldags' comfort combined with evening glamour. The fluffy soft texture of the knit tempers the blinding shine of the sequins for understated luxury.",
    occasion: "Winter Rooftop Cocktail Party & Private Dinner",
    accessories: "Sculptural resin bangles, miniature satin pouch, and kitten-heel slingbacks.",
    featured: false,
  },
];
