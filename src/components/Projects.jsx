import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      name: 'Navigate',
      role: 'Founder',
      image: 'bg-gradient-to-br from-orange-400 to-red-500',
      description: 'Real estate prospecting platform with intelligent list building and automated outreach.',
      link: 'https://navigatenow.com',
      tags: ['Product', 'Strategy', 'Development'],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-gray-900">
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="frame-border bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <p className="text-sm font-sans text-gray-600 uppercase tracking-widest mb-2">
                    {project.role}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-lg text-gray-700 font-sans max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Image placeholder */}
                <div className={`${project.image} h-48 md:h-64 rounded-lg mb-8 flex items-center justify-center`}>
                  <p className="text-white font-serif text-2xl font-bold text-center px-4">
                    {project.name}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 font-sans text-sm rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-sans font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Visit Project
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-700 font-sans mb-4">
            Available for new projects and collaborations.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-sans font-bold rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  )
}
