import { ExternalLink, Code2 } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      name: 'Navigate',
      role: 'Founder',
      description:
        'A modern real estate prospecting platform that combines intelligent list building, automated outreach, and CRM functionality to help agents close more deals faster.',
      highlights: ['List Intelligence', 'Automated Outreach', 'CRM Integration', 'Analytics Dashboard'],
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AI/ML'],
      status: 'Live & Growing',
      color: 'from-blue-600 to-cyan-600',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">{project.role}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white`}>
                  {project.status}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-slate-300 hover:border-slate-500 transition-colors"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Technology
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg text-sm text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-4 border-t border-slate-700">
                <a
                  href="https://navigatenow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Visit Site
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-slate-800/30 border border-slate-700 rounded-xl">
          <div className="flex items-start gap-4">
            <Code2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Building in Public</h3>
              <p className="text-slate-400">
                Interested in startup life, product development, or fundraising? Connect with me on social or email. I love discussing product strategy, team building, and the challenges (and joys) of founding a company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
