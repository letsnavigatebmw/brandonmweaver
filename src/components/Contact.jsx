import { Mail, Linkedin, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
          Let's Connect
        </h2>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
          Open to conversations about strategy, operations, growth, and building companies that matter. Ready to work together?
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:brandon@navigatenow.com"
            className="group p-8 border border-gray-800 rounded-lg hover:border-yellow-400 transition-all"
          >
            <Mail className="w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2">
              brandon@navigatenow.com
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/brandonweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border border-gray-800 rounded-lg hover:border-yellow-400 transition-all"
          >
            <Linkedin className="w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2">
              Connect on LinkedIn
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:brandon@navigatenow.com"
            className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105 text-lg"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}
