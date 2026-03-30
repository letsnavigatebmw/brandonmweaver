import { Mail, Linkedin, Phone, ArrowRight } from 'lucide-react'

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
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email (Work) */}
          <a
            href="mailto:brandon@navigatenow.com"
            className="group p-8 border border-gray-800 rounded-lg hover:border-gold-400 transition-all"
          >
            <Mail className="w-8 h-8 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">Work Email</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2 text-sm">
              brandon@navigatenow.com
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          {/* Email (Personal) */}
          <a
            href="mailto:Weaver.Brandon@gmail.com"
            className="group p-8 border border-gray-800 rounded-lg hover:border-gold-400 transition-all"
          >
            <Mail className="w-8 h-8 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">Personal Email</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2 text-sm">
              Weaver.Brandon@gmail.com
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+13106916419"
            className="group p-8 border border-gray-800 rounded-lg hover:border-gold-400 transition-all"
          >
            <Phone className="w-8 h-8 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2 text-sm">
              (310) 691-6419
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:brandon@navigatenow.com"
            className="inline-block px-8 py-4 bg-gold-400 text-black font-bold rounded-lg hover:bg-gold-300 transition-all transform hover:scale-105 text-lg"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}
