import Stats from './Stats'
import InfinityBox from './InfinityBox'

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
      <div className="border-b border-gray-800 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-serif mb-12" style={{ color: '#c8b99a' }}>Many Rooms, One <span className="italic">Frequency</span></h2>

          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 italic">
My professional and personal story has been largely shaped by the power of connectivity. The inertia that comes from human connection allows me to be as comfortable in a boardroom as I am sharing life lessons with a stranger. My work is guided by a deep belief in our <span className="font-bold text-white">collective potential.</span> Modern leadership is about instilling in others the belief that <span className="font-bold text-white">they have the ability to transform their reality.</span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 italic">
As a citizen of the world, I have learned to always be curious, to invest in relationships, and to exercise empathy and patience for things you don't quite understand. While my journey is far from linear, working across continents and companies, serving as a custodian for some of the world's most iconic luxury brands, and launching a software platform to address an archaic and broken process, it has taught me that I am a natural problem solver, inspired by a relentless pursuit of growth, a gift for bringing people together, and a <span className="font-bold text-white">rare authenticity that stands out in a world of AI and artifice.</span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed italic">
For me, it's not just about building businesses. It's about <span className="font-bold text-white">building bridges, one real conversation at a time.</span>
            </p>
          </div>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="pt-12 pb-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
              Core Capabilities
            </p>
            <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
              What I <span style={{ fontStyle: 'italic' }}>Do</span>
            </h2>
            <p className="text-gray-400 text-lg">
              The core competencies that drive growth, operational excellence, and sustainable value creation.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800 mb-16" />

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
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

          {/* Takeaway Statement */}
          <p className="text-gray-400 text-lg leading-relaxed italic">
            I operate at the intersection of revenue, marketing, and product—ensuring strategy translates into execution and measurable growth. My focus: aligning product, go-to-market, and unit economics to build defensible revenue growth.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Infinity Box */}
      <InfinityBox />
    </section>
  )
}
