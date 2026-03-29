export default function About() {
  const services = [
    {
      title: 'Commercial Strategy',
      description: 'Building unit economics that scale. Designing operating models that work.',
    },
    {
      title: 'Operating Model',
      description: 'Getting the fundamentals right. Making the math work before everything else.',
    },
    {
      title: 'Growth & Expansion',
      description: 'Taking what works and expanding it. Avoiding the trap of chasing growth.',
    },
    {
      title: 'Optimization',
      description: 'Finding inefficiency and fixing it. Restoring momentum to stalled operations.',
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
            <div key={index} className="space-y-2 border-l-2 border-yellow-400 pl-6">
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
