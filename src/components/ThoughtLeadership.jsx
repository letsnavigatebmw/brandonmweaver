export default function ThoughtLeadership() {
  const salesStrategy = [
    {
      title: 'How to Unlock New Growth Verticals in Mature Companies',
      type: 'Article',
      link: 'https://drive.google.com/file/d/1W2U8ZM8r7UYThKlk7oyIx-T8yOHyGCpE/view?usp=drive_link',
    },
    {
      title: 'Why Most GTM Strategies Fail Post-Series C',
      type: 'Article',
      link: 'https://drive.google.com/file/d/1UW0HlnfRpW3Lim32Cl1F4AhQv3QjHHcj/view?usp=drive_link',
    },
    {
      title: 'The Gap Between Marketing and Revenue—And How to Fix It',
      type: 'Article',
      link: 'https://drive.google.com/file/d/1rZHQaXVEpHxITLhQoI2gcFLmu6g_vZ2W/view?usp=drive_link',
    },
    {
      title: 'State of Real Estate Prospecting',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ/view?usp=drive_link',
    },
    {
      title: 'Direct Mail Tactics Playbook',
      type: 'Playbook',
      link: 'https://drive.google.com/file/d/1j7KrEw7T9UnlABRtyQ_k2919I_w1b71E/view?usp=drive_link',
    },
    {
      title: 'State of Direct Mail Prospecting',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/16txU_pi9ye4EMDwKhkJTrTksAeaBSkGZ/view?usp=drive_link',
    },
  ]

  const lessonsInLuxury = [
    {
      title: 'Feeling is the New Luxury',
      type: 'Article',
      link: 'https://drive.google.com/file/d/1eyd0vxq3D8xr8phIw2-w71P0EX7m5eVQ/view?usp=drive_link',
    },
    {
      title: "Don't Chase Them, Make Them Earn It!",
      type: 'E-Book',
      link: 'https://drive.google.com/file/d/1Dmr3uYRw38DMwO8oWA7j3FhN1AUU_AWn/view?usp=drive_link',
    },
    {
      title: 'Brand-to-Demand: How Luxury Brand Thinking Makes Performance Marketing Better',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/1pLur9KDw4xYY239aYOrxdXjsAd6iYjma/view?usp=drive_link',
    },
    {
      title: 'Revenue Management for Hotel Operators',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/1_RULaBkpiAy9TaxeFc_kM8z1ULpxUcyR/view?usp=drive_link',
    },
  ]

  const marketingStrategy = [
    {
      title: 'The Death of the Funnel: Why Modern B2C Marketing Needs a New Model',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/17OE9Ocp4-1WkogBV9cgbODbDJh3cg75E/view?usp=drive_link',
    },
    {
      title: 'What Spirits & Hospitality Taught Me About Emotional Brand Building at Scale',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/1YfnbifrFnvxLNGymwz_0AYF-VUF65cME/view?usp=drive_link',
    },
    {
      title: 'Multi-Channel Campaign Architecture — Lessons from Diageo to Startups',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/19Gnygvl0Dc6rOQlN3W6VZko2NuwnLLa4/view?usp=drive_link',
    },
  ]

  const lessonsInLeadership = [
    {
      title: 'The Noise is Real',
      type: 'E-Book',
      link: 'https://drive.google.com/file/d/1JCuKrMAria-dvPeLp_Urc47NuAj8MK8Q/view?usp=drive_link',
    },
    {
      title: 'Cross-Functional Leadership: Why the Best Operators Are Translators',
      type: 'E-Book',
      link: 'https://drive.google.com/file/d/1PC-FKhF8O684POd64LPEMKVkMUjP-H1B/view?usp=drive_link',
    },
  ]

  const aiStrategy = [
    {
      title: 'Why Most Companies Are Using AI Wrong',
      type: 'E-Book',
      link: 'https://drive.google.com/file/d/1E1TzaIwGLd9k3RL5BEHLMKTcSN7ckc2_/view?usp=drive_link',
    },
    {
      title: 'How Business Owners Can Hire AI that Actually Works',
      type: 'E-Book',
      link: 'https://drive.google.com/file/d/1cWYFp0SNl31v31qKWCrwhq4Takw_aF4M/view?usp=drive_link',
    },
    {
      title: 'Smart Data is Rewriting the Rules of Real Estate',
      type: 'Article',
      link: 'https://drive.google.com/file/d/1YkFlaFdyYXXr9nyXIlxC9iiQop1ljF19/view?usp=drive_link',
    },
    {
      title: 'AI is the New Edge',
      type: 'Article',
      link: 'https://drive.google.com/file/d/1laCqPlyPNNp3eOKVY6U94ukJro2rnafO/view?usp=drive_link',
    },
    {
      title: 'AI for Real Estate Agents',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/1OpsHBHZcgio_Ve77Ggr0blMCF3TAnOH0/view?usp=drive_link',
    },
    {
      title: 'AI Voice Agents in Real Estate',
      type: 'Guide',
      link: 'https://drive.google.com/file/d/1IX3ZzK5OUwjKrS9EyCJkE1gDGQCAfG3O/view?usp=drive_link',
    },
  ]

  const ContentGrid = ({ items }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-700 rounded-xl p-6 bg-gray-950/30 hover:bg-gray-900 hover:border-gray-600 transition-all"
        >
          <p className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-4">
            {item.type}
          </p>
          <h3 className="text-lg font-serif text-white mb-6 leading-tight">
            {item.title}
          </h3>
          <p className="text-gold-400 font-bold uppercase tracking-widest text-xs">
            Read →
          </p>
        </a>
      ))}
    </div>
  )

  return (
    <section id="thought-leadership" className="py-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Insights & Expertise
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            Thought <span className="italic">Leadership</span>
          </h2>
          <p className="text-gray-400 text-lg">
            I write on building businesses at scale, commercial strategy, and leadership. Here's what I've learned.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-12" />

        {/* Sales Strategy */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-8" style={{ color: '#c8b99a' }}>
            Sales Strategy
          </h3>
          <ContentGrid items={salesStrategy} />
        </div>

        {/* Lessons in Luxury */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-8" style={{ color: '#c8b99a' }}>
            Lessons in <span className="italic">Luxury</span>
          </h3>
          <ContentGrid items={lessonsInLuxury} />
        </div>

        {/* Marketing Strategy */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-8" style={{ color: '#c8b99a' }}>
            Marketing Strategy
          </h3>
          <ContentGrid items={marketingStrategy} />
        </div>

        {/* Lessons in Leadership */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-8" style={{ color: '#c8b99a' }}>
            Lessons in <span className="italic">Leadership</span>
          </h3>
          <ContentGrid items={lessonsInLeadership} />
        </div>

        {/* AI Strategy */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-8" style={{ color: '#c8b99a' }}>
            AI Strategy
          </h3>
          <ContentGrid items={aiStrategy} />
        </div>
      </div>
    </section>
  )
}
