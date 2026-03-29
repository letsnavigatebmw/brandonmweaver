export default function About() {
  const services = [
    {
      title: 'Commercial Strategy & Revenue Architecture',
      description: 'Building unit economics that scale. Designing operating models that work.',
    },
    {
      title: 'Operating Model & Unit Economics',
      description: 'Getting the fundamentals right. Making the math work before everything else.',
    },
    {
      title: 'Growth & Market Expansion',
      description: 'Taking what works and expanding it. Avoiding the trap of chasing growth.',
    },
    {
      title: 'Turnaround & Optimization',
      description: 'Finding inefficiency and fixing it. Restoring momentum to stalled operations.',
    },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-black">
          What I Do
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-serif font-bold text-black">
                {service.title}
              </h3>
              <p className="text-base text-gray-700 font-sans leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
