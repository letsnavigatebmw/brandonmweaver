export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Text */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Brandon, a founder based in Santa Monica building <strong>Navigate</strong> — a modern prospecting platform designed for real estate agents.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              After seeing how outdated tools dominated the real estate industry, I decided to build something better. Navigate helps agents quickly identify, research, and connect with prospects using intelligent automation and modern workflows.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My background spans product, fundraising, and hands-on development. I'm passionate about solving real problems for professionals and building companies that last.
            </p>
          </div>

          {/* Right column - Stats/Skills */}
          <div className="space-y-8">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Navigate
              </h3>
              <p className="text-slate-200 mb-3">
                Real estate prospecting platform helping agents work smarter, not harder.
              </p>
              <p className="text-sm text-slate-400">
                Founded 2024 • Santa Monica, CA
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Focus Areas
              </h3>
              <ul className="space-y-2">
                <li className="text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Product & User Experience
                </li>
                <li className="text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Go-to-market Strategy
                </li>
                <li className="text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Sales & Customer Success
                </li>
                <li className="text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Full-stack Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
