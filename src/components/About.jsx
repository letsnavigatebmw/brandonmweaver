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
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            I'm a <span className="text-gold-400 font-bold">growth architect</span> and <span className="text-gold-400 font-bold">strategic operator</span> with 15+ years building and scaling commercial organizations across hospitality, spirits, and real estate technology. Currently building <span className="font-bold">Navigate</span>, a prospecting intelligence platform modernizing residential real estate. Previously led commercial teams at Lacure, Sonder, Bonotel, and Diageo—where I spearheaded award-winning campaigns (Cannes Golden Lion) and delivered measurable revenue growth. I combine analytical rigor with creative problem-solving to drive unit economics, operating model design, and high-performing teams.
          </p>
        </div>

        {/* What I Do Section */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">
          What I Do
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
