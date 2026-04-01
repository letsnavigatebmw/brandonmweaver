import { Mail, Linkedin, Phone, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="pt-12 pb-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Get In Touch
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            Let's <span className="italic">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Reach out to explore Partnership Opportunities, Brand Strategy, GTM Execution or other if you have questions about how to get your brand back into growth mode.
          </p>
        </div>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
          Open to conversations about strategy, operations, growth, and building companies that matter. Ready to work together?
        </p>

        {/* Contact Options */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {/* Email (Work) */}
          <a
            href="mailto:brandon@aperturehospitality.com"
            className="group p-6 sm:p-8 border border-gray-800 rounded-lg hover:border-gold-400 transition-all min-h-[140px] flex flex-col justify-between"
          >
            <div>
              <Mail className="w-8 h-8 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Work Email</h3>
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2 text-xs sm:text-sm">
              brandon@aperturehospitality.com
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          {/* Email (Personal) */}
          <a
            href="mailto:Weaver.Brandon@gmail.com"
            className="group p-6 sm:p-8 border border-gray-800 rounded-lg hover:border-gold-400 transition-all min-h-[140px] flex flex-col justify-between"
          >
            <div>
              <Mail className="w-8 h-8 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Personal Email</h3>
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2 text-xs sm:text-sm">
              Weaver.Brandon@gmail.com
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+13106916419"
            className="group p-6 sm:p-8 border border-gray-800 rounded-lg hover:border-gold-400 transition-all min-h-[140px] flex flex-col justify-between sm:col-span-2 md:col-span-1"
          >
            <div>
              <Phone className="w-8 h-8 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Phone</h3>
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2 text-xs sm:text-sm">
              (310) 691-6419
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:brandon@aperturehospitality.com"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gold-400 text-black font-bold rounded-lg hover:bg-gold-300 transition-all transform hover:scale-105 text-base sm:text-lg min-h-[44px]"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}
