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
