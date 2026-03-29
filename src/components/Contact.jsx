import { Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-black">
          Get in Touch
        </h2>

        <p className="text-lg text-gray-800 font-sans mb-12 max-w-2xl">
          Open to conversations about strategy, operations, growth, and startups. Interested in working together or just want to connect?
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email */}
          <a
            href="mailto:brandon@navigatenow.com"
            className="p-8 border border-gray-300 rounded hover:border-black transition-colors group"
          >
            <Mail className="w-8 h-8 text-black mb-4" />
            <h3 className="text-lg font-serif font-bold text-black mb-2">Email</h3>
            <p className="text-gray-700 font-sans group-hover:text-black transition-colors">
              brandon@navigatenow.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/brandonweaver"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 border border-gray-300 rounded hover:border-black transition-colors group"
          >
            <Linkedin className="w-8 h-8 text-black mb-4" />
            <h3 className="text-lg font-serif font-bold text-black mb-2">LinkedIn</h3>
            <p className="text-gray-700 font-sans group-hover:text-black transition-colors">
              Connect on LinkedIn
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
