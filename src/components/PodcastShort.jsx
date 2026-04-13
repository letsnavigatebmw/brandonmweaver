export default function PodcastShort() {
  const mainPodcast = {
    title: "AI, Data, and the Human Touch with Brandon Weaver",
    platform: "YouTube",
    url: 'https://www.youtube.com/@BrandonMWeaver/videos',
  }

  const shorts = [
    {
      title: "It's Not Happening to You, It's Happening for You",
      platform: "YouTube",
      url: 'https://youtube.com/shorts/MvYFAvVDfZ8',
    },
    {
      title: "Moving Prospects from Indifference to Indebted",
      platform: "YouTube",
      url: 'https://youtube.com/shorts/AckWa5ML22w',
    },
    {
      title: "The World Doesn't Reward Talent...",
      platform: "YouTube",
      url: 'https://youtube.com/shorts/S7OGIjX4rLc',
    },
    {
      title: "Opportunity Moves at The Speed of Connectivity",
      platform: "YouTube",
      url: 'https://youtube.com/shorts/DvXgIrExZkA?si=wRcLDQvk5_x9Da_a',
    },
  ]

  return (
    <section id="podcast" className="py-8 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Featured Content
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            Featured <span className="italic">Podcasts & Media</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-8" />

        {/* Main Podcast Card */}
        <a
          href={mainPodcast.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-8 border-2 border-gold-400 rounded-2xl p-6 md:p-8 bg-gray-950/50 hover:bg-gray-900 transition-all hover:border-gold-300"
        >
          <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">
            Podcast
          </p>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-4" style={{ color: '#c8b99a' }}>
            {mainPodcast.title}
          </h3>
          <p className="text-gray-400">
            {mainPodcast.platform}
          </p>
        </a>

        {/* Podcast Shorts Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {shorts.map((short, index) => (
            <a
              key={index}
              href={short.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-700 rounded-xl p-4 bg-gray-950/30 hover:bg-gray-900 hover:border-gray-600 transition-all"
            >
              <p className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-3">
                Podcast
              </p>
              <h4 className="text-lg font-serif text-white mb-3">
                {short.title}
              </h4>
              <p className="text-gray-500 text-sm">
                {short.platform}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
