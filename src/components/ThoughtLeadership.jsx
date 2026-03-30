export default function ThoughtLeadership() {
  const publications = [
    {
      title: 'State of Direct Mail Prospecting',
      publication: 'Navigate Resources',
      link: 'https://drive.google.com/file/d/16txU_pi9ye4EMDwKhkJTrTksAeaBSkGZ/view?usp=drive_link',
      type: 'Guide',
    },
    {
      title: 'State of Real Estate Prospecting',
      publication: 'Navigate Resources',
      link: 'https://drive.google.com/file/d/1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ/view?usp=drive_link',
      type: 'Guide',
    },
    {
      title: 'AI for Real Estate Agents',
      publication: 'Navigate Resources',
      link: 'https://drive.google.com/file/d/1OpsHBHZcgio_Ve77Ggr0blMCF3TAnOH0/view?usp=drive_link',
      type: 'Guide',
    },
    {
      title: 'Direct Mail Tactics Playbook',
      publication: 'Navigate Resources',
      link: 'https://drive.google.com/file/d/1j7KrEw7T9UnlABRtyQ_k2919I_w1b71E/view?usp=drive_link',
      type: 'Playbook',
    },
    {
      title: 'AI Voice Agents in Real Estate',
      publication: 'Navigate Resources',
      link: 'https://drive.google.com/file/d/1IX3ZzK5OUwjKrS9EyCJkE1gDGQCAfG3O/view?usp=drive_link',
      type: 'Guide',
    },
  ]

  const podcasts = []

  return (
    <section id="thought-leadership" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Thought Leadership</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, articles, and podcast appearances on startups, real estate technology, and building at scale.
          </p>
        </div>

        {/* Resources & Guides */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Resources & Guides</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <a
                key={index}
                href={pub.link}
                className="group p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-yellow-500 transition-all hover:bg-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                      {pub.type}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-2 group-hover:text-yellow-400 transition-colors">
                      {pub.title}
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{pub.publication}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
