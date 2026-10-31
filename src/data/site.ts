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
  // CONFIRM: exact Substack URL for "Expand Your Aperture"
  substack: 'https://expandyouraperture.substack.com',
  execBio: 'https://drive.google.com/file/d/1XO_GTYhCTan_CFLp6-IsaTrERrkLmjWM/view?usp=sharing',
  formspree: 'https://formspree.io/f/mzdkjkpa',
  description:
    'Brandon M. Weaver is a commercial executive and brand builder with 20+ years across spirits, luxury hospitality, travel and real estate technology. Former COO of Bonotel, GM of Stillhouse Spirits, CCO of Lacure and Founder of Aperture Hospitality.',
};

export const stats = [
  { value: '550K', label: 'Cases shipped in year one across two Captain Morgan launches at Diageo' },
  { value: '$268M', label: 'Gross revenue at Bonotel, where I was COO through its sale to Certares' },
  { value: '700+', label: 'Rooms opened building Sonder California from a team of one' },
  { value: '$51M', label: 'Gross booking value led as CCO of Lacure, 65 people in 45+ countries' },
];

export const logos = [
  { name: 'Diageo', src: '/logos/diageo.png', h: 22 },
  { name: 'Bonotel Exclusive Travel', src: '/logos/bonotel.png', h: 34 },
  { name: 'Sonder', src: '/logos/sonder.png', h: 26 },
  { name: 'Lacure Villas', src: '/logos/lacure.png', h: 40 },
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
];

export const principles = [
  {
    title: 'Connectivity is the advantage',
    body: 'Most operators see their function in isolation. I connect revenue, operations and strategy. The edge is never in one thing. It is in how the pieces fit.',
  },
  {
    title: 'Alignment creates scale',
    body: 'You can’t scale misalignment. Unit economics, go-to-market and operations only compound when they pull in the same direction.',
  },
  {
    title: 'Results over storytelling',
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

export const culture = ['Pharrell Williams', 'French Montana', 'G-Eazy', 'Ryan Leslie', 'Burna Boy', 'Black Coffee'];
export const cultureCos = ['Universal Music', 'Sony Music', 'Complex', 'The FADER'];

export const interests = ['Football, American and European', 'Travel', 'Art', 'Fashion', 'Architecture & design', 'Mentoring'];
