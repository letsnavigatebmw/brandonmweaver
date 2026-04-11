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
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
Brandon Weaver grew up in Los Angeles, educated at one of the city's most selective private schools, surrounded by the children of people who had already made it. The expectation in his house was clear: medicine or education. Safe, respected, durable.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
He chose neither.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
Instead, he followed a thread. It took him from <span className="font-bold text-white">USC's Annenberg School</span> to <span className="font-bold text-white">Harvard's Kennedy School of Government</span> in Cambridge, to <span className="font-bold text-white">Northwestern's Kellogg School</span> of Management. Three institutions. Three distinct worldviews. One persistent question underneath all of them: how do you build something that actually matters?
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
That question got sharper on the ground. Living and working across the UK, South Africa, New York, Boston, Miami, Dallas, and Los Angeles taught him something no classroom could: that commerce and community are not opposites. They're in constant negotiation. The best builders are fluent in both.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
From leading <span className="font-bold text-white">Diageo's</span> luxury portfolio vision across Africa to scaling and eventually selling a PE-backed hospitality platform, <span className="font-bold text-white">Brandon built a career at the intersection of connectivity, creativity, and opportunity. He didn't inherit a playbook. He wrote one.</span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
That same instinct brought him to real estate technology. Navigate wasn't a pivot. It was the logical conclusion of two decades spent watching an industry resist modernisation until someone forces the issue.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
But the thread running through all of it isn't the résumé. It's the relationships. Brandon moves through rooms differently, not as the loudest voice, but as the most connected one. <span className="font-bold text-white">He builds relationship capital the way others build financial capital: deliberately, generously, and with a long time horizon.</span> The "plug" who knows someone for everything, and shares that access freely.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
In a world increasingly mediated by algorithms, Brandon's conviction is simple. <span className="font-bold text-white">Success moves at the speed of connectivity.</span>
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
