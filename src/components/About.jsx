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
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Bio Section */}
        <div className="mb-20 pb-20 border-b border-gray-800">
          <h3 className="text-gold-400 font-bold uppercase tracking-wide mb-6">Global Executive | Relationship Builder | P&L Leader</h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-6">
            I'm a global commercial executive and founder with more than two decades of experience leading growth, transformation, and disciplined financial performance across consumer brands, hospitality, real estate, and technology-enabled platforms. I've built and repositioned businesses across publicly traded multinationals, private equity-backed enterprises, and venture-stage companies, with a focus on aligning product strategy, distribution, and unit economics to create durable enterprise value.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            Currently, I'm Co-Founder and CEO of <a href="https://navigatenow.com" target="_blank" rel="noopener noreferrer" className="font-bold text-gold-400 hover:text-gold-300 transition-colors">Navigate</a>, a prospecting intelligence platform modernizing residential real estate. I've restructured ownership, stabilized operations, redesigned pricing, and renegotiated core partnerships to materially improve unit economics. Navigate now serves 60k+ agents through a strategic partnership with Compass. Prior roles include Chief Commercial Officer at Lacure, executive leadership at Sonder Hospitality and Bonotel (Carlyle-backed $300M platform), and commercial leadership at Diageo managing luxury brands like Johnnie Walker and Cîroc. I hold an MBA from Northwestern's Kellogg School, an MPA from Harvard Kennedy School, and a BA from USC.
          </p>
        </div>

        {/* What I Do Section */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16" style={{ color: '#c8b99a' }}>
          What I <span className="italic">Do</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-2 border-l-2 border-gold-400 pl-6">
              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-base text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
