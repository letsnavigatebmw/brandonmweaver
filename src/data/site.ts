// Single source of truth for site content.
// Facts follow Brandon's 2026 CV. Anything marked CONFIRM still needs his sign-off.

export const person = {
  name: 'Brandon M. Weaver',
  shortName: 'Brandon Weaver',
  url: 'https://www.brandonmweaver.com',
  email: 'weaver.brandon@gmail.com',
  location: 'Los Angeles, CA',
  linkedin: 'https://www.linkedin.com/in/brandonmweaver',
  instagram: 'https://www.instagram.com/bmarkweaver',
  youtube: 'https://www.youtube.com/@BrandonMWeaver',
  substack: 'https://expandyouraperture.substack.com',
  execBio: '/Brandon_M_Weaver_Executive_Bio.pdf',
  formspree: 'https://formspree.io/f/mzdkjkpa',
  description:
    'Brandon M. Weaver is a commercial executive and brand builder with 20+ years across spirits, luxury hospitality, travel and real estate technology. Former COO of Bonotel, GM of Stillhouse Spirits, CCO of Lacure and Founder of Aperture Hospitality.',
};

export const stats = [
  { value: '500K+', label: 'Cases Shipped in One Year Across Two Captain Morgan Launches at Diageo North America' },
  { value: '$268M', label: 'Gross Revenue at Bonotel, Where I Was COO Through Its Sale to Certares' },
  { value: '700+', label: 'Rooms Opened Building Sonder California From a Team of One' },
  { value: '$51M', label: 'Gross Booking Value Led as CCO of Lacure, 65 People in 45+ Countries' },
];

export const logos = [
  { name: 'Diageo', src: '/logos/diageo.png', h: 22 },
  { name: 'Bonotel Exclusive Travel', src: '/logos/bonotel.png', h: 34 },
  { name: 'Sonder', src: '/logos/sonder.png', h: 26 },
  { name: 'Lacure Villas', src: '/logos/lacure.png', h: 24 },
  { name: 'Stillhouse Spirits Co.', src: '/logos/brands/stillhouse.png', h: 40 },
  { name: 'GE Money', src: '/logos/ge-money.png', h: 40 },
  { name: 'UBS', src: '/logos/ubs.png', h: 34 },
  { name: 'Moët Hennessy', src: '/logos/moet-hennessy.png', h: 22 },
];

export const schools: { name: string; sub: string; src?: string; h?: number }[] = [
  { name: 'Kellogg', sub: 'Northwestern · MBA', src: '/logos/kellogg.png', h: 34 },
  { name: 'Harvard Kennedy School', sub: 'MPA, Economics', src: '/logos/hks.png', h: 40 },
  { name: 'USC Annenberg', sub: 'BA, Communication', src: '/logos/usc-annenberg.png', h: 44 },
];

export const testimonials = [
  {
    quote:
      'Brandon has a unique ability to connect strategy with execution. He consistently identified opportunities others missed, built alignment across teams, and helped us accelerate expansion.',
    name: 'Ari Afshar',
    title: 'Founder & CEO, Voyage Real Estate',
  },
  {
    quote:
      'Working with Brandon felt like having a true strategic partner rather than an outside advisor. He challenged our assumptions in the right ways and translated complex growth objectives into practical, measurable actions.',
    name: 'Michael Silver',
    title: 'President, Foto Comercio',
  },
  {
    quote:
      'Brandon brings a rare blend of luxury brand expertise, commercial leadership, and authentic relationship-building. He never loses sight of revenue and operational performance.',
    name: 'Andy Borenzweig',
    title: 'Founder & CEO, Beverly Spirits',
  },
];

export type Role = {
  company: string;
  place: string;
  years: string;
  title: string;
  summary: string;
  headline: string; // one line used on the homepage
  bullets: string[];
  url?: string;
  partners?: string;
};

export const roles: Role[] = [
  {
    company: 'Aperture Hospitality',
    place: 'Los Angeles',
    years: '2018 – Present',
    title: 'Founder & Principal',
    url: 'https://www.aperturehospitality.com',
    headline: 'Advisory practice for spirits, consumer and hospitality brands, including an RTD launch for Beverly Spirits.',
    summary:
      'An advisory practice providing commercial strategy, distribution and growth support to spirits, consumer and hospitality brands.',
    bullets: [
      'Advise super-premium brands Perro Verde (mezcal) and Beverly Spirits (North American whisky) on sales and marketing strategy, distributor and importer selection, placement, negotiation and fundraising.',
      'For the Beverly Spirits RTD, own pack architecture, can design and pricing, and build route-to-market in California and New York with Southern Glazer’s and LibDib.',
      'Swarm (2026): built the demand model and phased go-to-market plan for an AI compute marketplace and supported a $3M seed raise.',
      'Build financial models, valuations, business cases and investor materials for growth-stage clients including Wilbur Labs, Boatsetter and Voyage Real Estate.',
    ],
  },
  {
    company: 'Navigate',
    place: 'Los Angeles',
    // CONFIRM: CV says August 2026; Brandon says operations paused in May 2026
    years: '2024 – 2026',
    title: 'Founder',
    url: 'https://letsnavigatenow.com',
    headline: 'Founded an AI-native real estate data platform. Reached 60% trial-to-paid and cut data costs 25%.',
    summary:
      'Founded and led an AI-native real estate data platform, directing an eight-person team across product, data and go-to-market.',
    bullets: [
      'Led discovery, design and launch, then rebuilt the platform as AI-native based on user feedback.',
      'Defined the AI roadmap: natural-language search, predictive scoring, agentic outreach and closed-loop learning.',
      'Designed tiered pricing and an enterprise expansion path, reaching 60% trial-to-paid conversion.',
      'Restructured data procurement from fixed to usage-based pricing, cutting costs 25%.',
    ],
  },
  {
    company: 'Lacure Villas',
    place: 'Toronto',
    years: '2021 – 2023',
    title: 'Chief Commercial Officer',
    url: 'https://www.lacurevillas.com',
    headline: 'Led 65 people across ~1,500 luxury villas in 45+ countries. Grew GBV 13.2%.',
    summary:
      'Led a 65-person organization across sales, marketing, partnerships, contracting and client services for approximately 1,500 luxury villas in 45+ countries, with $51M in gross booking value.',
    bullets: [
      'Ran point on acquisitions in Anguilla and the South of France, integrating contracting, systems and standards, with both market GMs reporting to me.',
      'Launched co-branded programs with American Express Platinum, Visa and NetJets, expanding distribution partnerships 15% and raising GBV per trip 8%.',
      'Delivered +13.2% GBV and +9.4% bookings by pruning the portfolio and launching the Reserve Collection.',
      'Standardized contracting, onboarding and quality governance, tying contracts to CRM, ERP and booking systems before inventory went live.',
    ],
    partners: 'American Express, Visa, NetJets, VistaJet, Belmond, Sisley Paris',
  },
  {
    company: 'Sonder',
    place: 'Los Angeles',
    years: '2019 – 2021',
    title: 'Area General Manager, California',
    url: 'https://www.sonder.com',
    headline: 'Built Sonder California from scratch: four markets, seven properties, 700+ rooms, a team of one to 45.',
    summary:
      'Built Sonder’s California region from inception across Los Angeles, Orange County, Palm Springs and San Francisco.',
    bullets: [
      'Launched four markets and opened seven properties (700+ rooms), scaling from a team of one to 45 across operations, guest experience, real estate, revenue and sales.',
      'Built the market-entry framework across five submarkets and four asset classes, weighing regulation, demand and economics.',
      'Built the path-to-profitability model: $8.5M revenue at 23% contribution margin in 2021.',
      'Redesigned service, staffing and cost models through COVID-19, delivering a 240 RevPAR Index and lifting CSAT from 70% to 78%.',
    ],
  },
  {
    company: 'Stillhouse Spirits Co.',
    place: 'Los Angeles',
    // CONFIRM: CV says October 2018; Brandon says September 2018
    years: '2018 – 2019',
    title: 'General Manager & Head of Marketing',
    headline: 'Ran a $12M Bacardi-backed spirits brand with full P&L. Grew depletions 7.5% and launched Classic Vodka.',
    summary:
      'Joined Bacardi-backed Stillhouse Spirits, a $12M national spirits brand, from BLKBOX, with full P&L ownership.',
    bullets: [
      'Led a 30-person organization and built operating cadences tied to financial targets, delivering +7.5% depletions in Q1 2019.',
      'Rebuilt the 2019 plan around one platform and three drivers: awareness, recruitment and winning with the shopper.',
      'Led the March 2019 launch of Stillhouse Classic Vodka with a $1.2M consumer plan and a People.com exclusive.',
      'Directed a $620K geo-targeted digital plan around Walmart, Kroger, Publix, Total Wine and BevMo; social engagement averaged 6% per post against a 3 to 4% norm.',
    ],
  },
  {
    company: 'BLKBOX',
    place: 'New York',
    years: '2018',
    title: 'Managing Director',
    headline: 'Raised a $1.5M growth round. Shaped the retail strategy that won Stillhouse placement in Walmart and Publix.',
    summary:
      'Led a $3M data-driven marketing company serving 30+ brands, including Samsung, P&G and RB, with a proprietary machine-learning analytics platform.',
    bullets: [
      'Won a Brand Accelerator engagement with Mondelēz’s Nabisco portfolio (Ritz, belVita, Honey Maid) for personalized direct-to-consumer bundles.',
      'For client Stillhouse Spirits, shaped the retail strategy that helped win Walmart (140 stores), Publix (220) and a Kroger test.',
      'Raised a $1.5M growth round, building the three-year operating model and SaaS revenue plan.',
      'Led the relaunch strategy for P&G’s $5.5M Pantene Gold Series program across Walmart, Target and Amazon.',
    ],
  },
  {
    company: 'Bonotel Exclusive Travel',
    place: 'Las Vegas',
    years: '2014 – 2017',
    title: 'Chief Operating Officer',
    url: 'https://www.bonotel.com',
    headline: 'COO of a Carlyle-backed luxury travel platform. Worked with Moelis on its 2017 sale to Certares.',
    summary:
      'COO of a Carlyle-backed luxury travel distribution platform, helping grow gross revenue from $229M to $268M (2014 to 2016) and leading a 60+ person organization.',
    bullets: [
      'With lead advisor Moelis, led diligence, management presentations and the buyer roadshow for the 2017 sale to Certares.',
      'Launched Bonotel Sports with PrimeSport and led the acquisition that created BEYOND by Bonotel.',
      'Designed a three-tier partner program trading exclusive rates for marketing exposure, enrolling 546 hotels and growing revenue 44% across 23 Four Seasons properties.',
      'Overhauled hotel contracting and added forecasting tools for account teams across 2,180+ partners.',
    ],
    partners: 'Four Seasons, Abercrombie & Kent, Quintessentially, Kensington Tours, Virgin Holidays, Flight Centre, TUI',
  },
  {
    company: 'Diageo',
    place: 'New York & Cape Town',
    years: '2011 – 2014',
    title: 'Regional Marketing Manager',
    url: 'https://www.diageo.com',
    headline: 'Owned the Captain Morgan Black Spiced and Sherry Spice launches: 550,000 cases in year one.',
    summary:
      'Led brand and commercial strategy for Diageo’s Reserve luxury portfolio in Africa and its North American rum portfolio in the U.S.',
    bullets: [
      'Owned the 2012 launches of Captain Morgan Black Spiced and Sherry Spice: 375,000 and 175,000 cases in year one, ~$48M in combined shipment value.',
      'Led Johnnie Walker, Cîroc, Don Julio, Bulleit and Tanqueray strategy, contributing to +7% Reserve sales in Africa.',
      'Wrote Johnnie Walker’s F15 South Africa communication strategy, targeting ~$94M in net sales (+17%), and led the Keep Walking South Africa and King of Flavour campaigns.',
      'Oversaw about $35M a year in national media for Captain Morgan.',
    ],
  },
  {
    company: 'GE Consumer Finance',
    place: 'Los Angeles',
    years: '2003 – 2007',
    title: 'Business Development Representative',
    headline: 'Led a 20-person team supporting $500M+ in originations. GE Sales Leadership Award, 2006.',
    summary: 'Sales and loan securitization roles in GE’s wholesale residential mortgage lending business.',
    bullets: [
      'Led a 20-person team supporting $500M+ in mortgage originations and $2.5B+ in securitizations.',
      'Received GE’s Sales Leadership Award (2006).',
    ],
  },
  {
    company: 'UBS',
    place: '',
    years: '2002 – 2003',
    title: 'Financial Analyst',
    headline: 'Financial analyst in UBS’s private bank. First role after USC.',
    summary: 'Financial analyst in UBS’s private banking business, my first role after graduating from USC.',
    bullets: [],
  },
];

export const launches = [
  'Captain Morgan Black Spiced',
  'Captain Morgan Sherry Spice',
  'Stillhouse Classic Vodka',
  'BEYOND by Bonotel',
  'Bonotel Sports',
  'Lacure Reserve Collection',
  'Beverly Spirits RTD',
  'Navigate',
];

export const capabilities = [
  { title: 'Company Strategy & P&L', proof: 'Full P&L for $12M Stillhouse Spirits; COO of Bonotel, a $268M gross revenue platform.' },
  { title: 'Fundraising & Board Partnership', proof: 'Raised a $1.5M growth round at BLKBOX, supported a $3M seed for Swarm, and led diligence with Moelis on the sale of Bonotel.' },
  { title: 'Brand Launch & Innovation', proof: 'Owned the Captain Morgan Black Spiced launch: 375,000 cases and ~$33M in shipment value in year one.' },
  { title: 'Grocery, Mass & Independent Retail', proof: 'Helped win Walmart (140 stores), Publix (220) and a Kroger test for Stillhouse.' },
  { title: 'DTC & Ecommerce', proof: 'Won Mondelēz’s Brand Accelerator for personalized direct-to-consumer Nabisco bundles; relaunched Pantene Gold Series across Walmart, Target and Amazon.' },
  { title: 'Pricing, Margin & Trade Spend', proof: 'Built a three-tier partner program that grew revenue 44% across 23 Four Seasons properties; cut Navigate’s data costs 25%.' },
  { title: 'Forecasting & Operating Cadence', proof: 'Built the operating cadence behind +7.5% depletions at Stillhouse in Q1 2019; rolled out forecasting across 2,180+ Bonotel partners.' },
  { title: 'Team & Culture Building', proof: 'Scaled Sonder California from a team of one to 45; led a 65-person organization at Lacure across 45+ countries.' },
];

// Brands I've Worked With carousel, in display order. Entries without `src` render as typeset names.
export type Brand = { name: string; src?: string; h?: number };
export const brands: Brand[] = [
  { name: 'Johnnie Walker', src: '/logos/brands/johnniewalker.png', h: 28 },
  { name: 'Dom Pérignon', src: '/logos/brands/domperignon.png', h: 48 },
  { name: 'Audemars Piguet', src: '/logos/brands/audemarspiguet.png', h: 36 },
  { name: 'Stillhouse', src: '/logos/brands/stillhouse.png', h: 48 },
  { name: 'Four Seasons', src: '/logos/brands/fourseasons.png', h: 53 },
  { name: 'American Express', src: '/logos/brands/amex.png', h: 56 },
  { name: 'Aman', src: '/logos/brands/aman.png', h: 30 },
  { name: 'Captain Morgan', src: '/logos/brands/captainmorgan.png', h: 39 },
  { name: 'Beverly Spirits' },
  { name: 'Southern Glazer’s Wine & Spirits', src: '/logos/brands/southernglazers.png', h: 66 },
  { name: 'NFL', src: '/logos/brands/nfl.png', h: 66 },
  { name: 'Belmond', src: '/logos/brands/belmond.png', h: 50 },
  { name: 'Don Julio', src: '/logos/brands/donjulio.png', h: 43 },
  { name: 'Chase', src: '/logos/brands/chase.png', h: 30 },
  { name: 'Boatsetter', src: '/logos/brands/boatsetter.png', h: 32 },
  { name: 'Perro Verde' },
  { name: 'Dorchester Collection', src: '/logos/brands/dorchester.png', h: 22 },
  { name: 'Samsung', src: '/logos/brands/samsung.png', h: 24 },
  { name: 'Cîroc', src: '/logos/brands/ciroc.png', h: 37 },
  { name: 'Marriott', src: '/logos/brands/marriott.png', h: 36 },
  { name: 'Pantene' },
  { name: 'NetJets', src: '/logos/brands/netjets.png', h: 35 },
  { name: 'Faena', src: '/logos/brands/faena.png', h: 30 },
  { name: 'Tanqueray', src: '/logos/brands/tanqueray.png', h: 54 },
  { name: 'U.S. Army', src: '/logos/brands/usarmy.png', h: 30 },
  { name: 'Ritz' },
  { name: 'Hyatt', src: '/logos/brands/hyatt.png', h: 34 },
  { name: 'P&G', src: '/logos/brands/pg.png', h: 56 },
  { name: 'Bulleit', src: '/logos/brands/bulleit.png', h: 54 },
  { name: 'St. James’s Hotel & Club', src: '/logos/brands/stjamess.png', h: 60 },
  { name: 'belVita' },
  { name: 'Mondelēz', src: '/logos/brands/mondelez.png', h: 36 },
  { name: 'Verizon', src: '/logos/brands/verizon.png', h: 32 },
  { name: 'Hilton', src: '/logos/brands/hilton.png', h: 40 },
  { name: 'Sisley Paris', src: '/logos/brands/sisley.png', h: 62 },
  { name: 'VistaJet' },
  { name: 'Auberge Collection', src: '/logos/brands/auberge.png', h: 26 },
  { name: 'Bacardi', src: '/logos/brands/bacardi.png', h: 38 },
  { name: 'Pelican Hill', src: '/logos/brands/pelicanhill.png', h: 58 },
  { name: 'Compass', src: '/logos/brands/compass.png', h: 26 },
  { name: 'Dowling Street', src: '/logos/brands/dowlingstreet.png', h: 28 },
  { name: 'SkinCeuticals', src: '/logos/brands/skinceuticals.png', h: 28 },
  { name: 'Visa', src: '/logos/brands/visa.png', h: 27 },
  { name: 'Abercrombie & Kent' },
];

export const principles = [
  {
    title: 'Connectivity Is the Advantage',
    body: 'Most operators see their function in isolation. I connect revenue, operations and strategy. The edge is never in one thing. It is in how the pieces fit.',
  },
  {
    title: 'Alignment Creates Scale',
    body: 'You can’t scale misalignment. Unit economics, go-to-market and operations only compound when they pull in the same direction.',
  },
  {
    title: 'Results Over Storytelling',
    body: 'I optimize for what works, not what looks good in a deck. Data over narrative. Efficiency over elegance.',
  },
];

export const education = [
  { school: 'Kellogg School of Management, Northwestern University', degree: 'MBA, Corporate Finance', year: '2011' },
  { school: 'Harvard Kennedy School', degree: 'Master in Public Administration, Economics', year: '2011' },
  { school: 'University of Southern California', degree: 'BA, Communication (Annenberg); Minor, Business Administration (Marshall)', year: '2002' },
];

export const advisory = [
  { org: 'Dowling Street', role: 'Board Member & Strategic Advisor', note: 'Boutique adaptive-leadership consultancy', years: '2021 – Present' },
  { org: 'The Runda Lab', role: 'Strategic Advisor', note: 'AI-focused venture lab', years: '2023 – Present' },
  { org: 'Swarm', role: 'Advisor', note: 'AI compute marketplace', years: '2026 – Present' },
  { org: 'WES Brands', role: 'Strategic Advisor', note: 'Premium spirits portfolio company', years: '2021 – 2023' },
];

export const culture = ['French Montana', 'G-Eazy', 'Ryan Leslie', 'Burna Boy', 'Black Coffee'];
export const celebrityFounders = [
  { name: 'Jamie Foxx', brand: 'Brown Sugar Bourbon' },
  { name: 'Mark Wahlberg', brand: 'Flecha Azul Tequila' },
  { name: 'Gal Gadot', brand: 'Aspen Vodka' },
  { name: 'Benicio Del Toro', brand: 'Perro Verde' },
  { name: 'Nacho Figueras', brand: 'Dom Pérignon' },
  { name: 'Michael Bublé', brand: 'Fraser & Thompson' },
];
export const cultureCos = ['Universal Music', 'Sony Music', 'Complex', 'The FADER'];

export const interests = ['Football, American and European', 'Travel', 'Art', 'Fashion', 'Architecture & design', 'Mentoring'];
