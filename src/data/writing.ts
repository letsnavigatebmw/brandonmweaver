export type Piece = { title: string; type: string; category: string; url: string; featured?: boolean };

const d = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const categories = ['AI Strategy', 'Sales Strategy', 'Marketing Strategy', 'Lessons in Luxury', 'Leadership'] as const;

export const writing: Piece[] = [
  { title: "SaaS Isn't Dead. It's Finding Its True North", type: 'Article', category: 'AI Strategy', url: d('1ijl3R1nlgxhujY-NCLEC-bPnG3CbSZ_q'), featured: true },
  { title: 'Why Orchestration May Become the Most Valuable Layer in the AI Economy', type: 'White Paper', category: 'AI Strategy', url: d('1IFzrM78E6I18-f3Kvuz6DUW2j3A7G5lF') },
  { title: 'Why Most Companies Are Using AI Wrong', type: 'E-Book', category: 'AI Strategy', url: d('1E1TzaIwGLd9k3RL5BEHLMKTcSN7ckc2_') },
  { title: 'How Business Owners Can Hire AI That Actually Works', type: 'E-Book', category: 'AI Strategy', url: d('1cWYFp0SNl31v31qKWCrwhq4Takw_aF4M') },
  { title: 'Smart Data Is Rewriting the Rules of Real Estate', type: 'Article', category: 'AI Strategy', url: d('1YkFlaFdyYXXr9nyXIlxC9iiQop1ljF19') },
  { title: 'AI Is the New Edge', type: 'Article', category: 'AI Strategy', url: d('1laCqPlyPNNp3eOKVY6U94ukJro2rnafO') },
  { title: 'AI for Real Estate Agents', type: 'Guide', category: 'AI Strategy', url: d('1OpsHBHZcgio_Ve77Ggr0blMCF3TAnOH0') },
  { title: 'AI Voice Agents in Real Estate', type: 'Guide', category: 'AI Strategy', url: d('1IX3ZzK5OUwjKrS9EyCJkE1gDGQCAfG3O') },

  { title: 'The Hotel Exists Before the Opening', type: 'White Paper', category: 'Sales Strategy', url: d('1pWp7AO27qvfaEKEBtS3MtJ4TO5Um5yBl'), featured: true },
  { title: 'How to Unlock New Growth Verticals in Mature Companies', type: 'Article', category: 'Sales Strategy', url: d('1W2U8ZM8r7UYThKlk7oyIx-T8yOHyGCpE') },
  { title: 'Why Most GTM Strategies Fail Post-Series C', type: 'Article', category: 'Sales Strategy', url: d('1UW0HlnfRpW3Lim32Cl1F4AhQv3QjHHcj') },
  { title: 'Revenue Management for Hotel Operators', type: 'Guide', category: 'Sales Strategy', url: d('1_RULaBkpiAy9TaxeFc_kM8z1ULpxUcyR') },
  { title: 'State of Real Estate Prospecting', type: 'Guide', category: 'Sales Strategy', url: d('1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ') },
  { title: 'State of Direct Mail Prospecting', type: 'Guide', category: 'Sales Strategy', url: d('16txU_pi9ye4EMDwKhkJTrTksAeaBSkGZ') },
  { title: 'Direct Mail Tactics Playbook', type: 'Playbook', category: 'Sales Strategy', url: d('1j7KrEw7T9UnlABRtyQ_k2919I_w1b71E') },

  { title: 'What Spirits & Hospitality Taught Me About Emotional Brand Building at Scale', type: 'Guide', category: 'Marketing Strategy', url: d('1YfnbifrFnvxLNGymwz_0AYF-VUF65cME') },
  { title: 'Multi-Channel Campaign Architecture: Lessons from Diageo to Startups', type: 'Guide', category: 'Marketing Strategy', url: d('19Gnygvl0Dc6rOQlN3W6VZko2NuwnLLa4') },
  { title: 'The Gap Between Marketing and Revenue, and How to Fix It', type: 'Article', category: 'Marketing Strategy', url: d('1rZHQaXVEpHxITLhQoI2gcFLmu6g_vZ2W') },
  { title: 'The Death of the Funnel: Why Modern B2C Marketing Needs a New Model', type: 'Guide', category: 'Marketing Strategy', url: d('17OE9Ocp4-1WkogBV9cgbODbDJh3cg75E') },
  { title: 'The Data Is Already in the Stadium', type: 'Article', category: 'Marketing Strategy', url: d('1JoV2ce3DcIuaaFGC6P4aWm76hiC-IiJj') },
  { title: 'The Prospecting Problem Nobody Wants to Admit', type: 'Article', category: 'Marketing Strategy', url: d('1ctFTDmgkxhZETlKts_G7ZpU3KjAAkxvn') },

  { title: 'Brand-to-Demand: How Luxury Brand Thinking Makes Performance Marketing Better', type: 'Guide', category: 'Lessons in Luxury', url: d('1pLur9KDw4xYY239aYOrxdXjsAd6iYjma'), featured: true },
  { title: 'Beyond the Room Rate: What Ultra-Wealthy Spending Means for Luxury Hospitality', type: 'White Paper', category: 'Lessons in Luxury', url: d('10LaWoO6VXE5UkuNQSPx_wpOk56NnoMI_') },
  { title: 'Feeling Is the New Luxury', type: 'Article', category: 'Lessons in Luxury', url: d('1eyd0vxq3D8xr8phIw2-w71P0EX7m5eVQ') },
  { title: "Don't Chase Them, Make Them Earn It", type: 'E-Book', category: 'Lessons in Luxury', url: d('1Dmr3uYRw38DMwO8oWA7j3FhN1AUU_AWn') },

  { title: 'Cross-Functional Leadership: Why the Best Operators Are Translators', type: 'E-Book', category: 'Leadership', url: d('1PC-FKhF8O684POd64LPEMKVkMUjP-H1B') },
  { title: 'The Noise Is Real', type: 'E-Book', category: 'Leadership', url: d('1JCuKrMAria-dvPeLp_Urc47NuAj8MK8Q') },
];

export const videos = [
  { title: "It's Not Happening to You, It's Happening for You", id: 'MvYFAvVDfZ8' },
  { title: 'Moving Prospects from Indifference to Indebted', id: 'AckWa5ML22w' },
  { title: "The World Doesn't Reward Talent", id: 'S7OGIjX4rLc' },
  { title: 'Opportunity Moves at the Speed of Connectivity', id: 'DvXgIrExZkA' },
];
