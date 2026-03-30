export default function About() {
  const services = [
    {
      title: 'P&L Management',
      description: 'Full P&L ownership across pricing strategy, unit economics, and financial modeling. Reduced data enrichment costs by 25% through vendor negotiation and demand-based optimization.',
    },
    {
      title: 'Go-to-Market Strategy',
      description: 'GTM execution, demand generation, and sales leadership. Built Compass partnership driving +75% trial participation and 90% trial-to-paid conversion.',
    },
    {
      title: 'Operating Model Design',
      description: 'Re-architected sales organizations, supply portfolios, and cross-functional workflows to align inventory with demand and improve execution.',
    },
    {
      title: 'Team Building',
      description: 'Led organizations from 20 to 65 people across Sales, Marketing, Operations, and Client Services. Recognized for sales leadership and performance management.',
    },
  ]

  return (
    <section id="about" className="bg-black">
      {/* Full-width Bio Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto py-24 px-6">
          <h3 className="text-gold-400 font-bold uppercase tracking-wide mb-6">Global Executive | Relationship Builder | P&L Leader</h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            I'm a global commercial executive and founder with more than two decades of experience leading growth, transformation, and disciplined financial performance across consumer brands, hospitality, real estate, and technology-enabled platforms. I've built and repositioned businesses across publicly traded multinationals, private equity-backed enterprises, and venture-stage companies, with a focus on aligning product strategy, distribution, and unit economics to create durable enterprise value.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Currently, I'm Co-Founder and CEO of <a href="https://navigatenow.com" target="_blank" rel="noopener noreferrer" className="font-bold text-gold-400 hover:text-gold-300 transition-colors">Navigate</a>, a prospecting intelligence platform modernizing residential real estate. I've restructured ownership, stabilized operations, redesigned pricing, and renegotiated core partnerships to materially improve unit economics. Navigate now serves 60k+ agents through a strategic partnership with Compass. Prior roles include Chief Commercial Officer at Lacure, executive leadership at Sonder Hospitality and Bonotel (Carlyle-backed $300M platform), and commercial leadership at Diageo managing luxury brands like Johnnie Walker and Cîroc. I hold an MBA from Northwestern's Kellogg School, an MPA from Harvard Kennedy School, and a BA from USC.
          </p>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-24 px-6">
          {/* What I Do Section */}
        <div className="mb-20">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Core Capabilities
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            What I <span style={{ fontStyle: 'italic' }}>Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            The core competencies that drive growth, operational excellence, and sustainable value creation.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-16" />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
