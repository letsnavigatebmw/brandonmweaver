export default function ThoughtLeadership() {
  const publications = [
    {
      title: 'Building Scalable Real Estate Prospecting Tools',
      publication: 'Tech Startup Insights',
      link: '#',
      type: 'Article',
    },
    {
      title: 'The Future of AI in Real Estate',
      publication: 'Modern Business Magazine',
      link: '#',
      type: 'Article',
    },
    {
      title: 'Navigating Early-Stage Startup Challenges',
      publication: 'Founder\'s Journal',
      link: '#',
      type: 'Article',
    },
  ]

  const podcasts = [
    {
      title: 'Scaling Real Estate Tech from Zero to One',
      podcast: 'The Startup Journey Podcast',
      link: '#',
      date: 'Coming Soon',
    },
    {
      title: 'Founder Stories: Navigate Early & Often',
      podcast: 'Founder Talks',
      link: '#',
      date: 'Coming Soon',
    },
  ]

  return (
    <section id="thought-leadership" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Thought Leadership</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, articles, and podcast appearances on startups, real estate technology, and building at scale.
          </p>
        </div>

        {/* Publications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Publications</h3>
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

        {/* Podcasts */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Podcast Appearances</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {podcasts.map((podcast, index) => (
              <a
                key={index}
                href={podcast.link}
                className="group p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-yellow-500 transition-all hover:bg-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                      Podcast
                    </span>
                    <h4 className="text-xl font-bold text-white mt-2 group-hover:text-yellow-400 transition-colors">
                      {podcast.title}
                    </h4>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">{podcast.podcast}</p>
                  <span className="text-xs text-gray-500">{podcast.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
