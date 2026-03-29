export default function Differentiator() {
  const principles = [
    {
      title: 'Connectivity is the Advantage',
      description: 'Most operators see their domain in isolation. I connect the dots across revenue, operations, and strategy. The advantage isn\'t in one thing—it\'s in seeing how everything fits.',
    },
    {
      title: 'Alignment Creates Scale',
      description: 'You can\'t scale misalignment. Every function needs to understand the same mission. Unit economics, go-to-market, operations—they all need to work together.',
    },
    {
      title: 'Real > Polished',
      description: 'I optimize for what actually works, not what looks good in a presentation. Data over narrative. Efficiency over elegance. Results over storytelling.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-black">
          How I Think
        </h2>

        <div className="space-y-12">
          {principles.map((principle, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-black">
                {principle.title}
              </h3>
              <p className="text-lg text-gray-800 font-sans max-w-3xl leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
