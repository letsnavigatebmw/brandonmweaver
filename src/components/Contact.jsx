import { Mail, Linkedin, Twitter, Send } from 'lucide-react'

export default function Contact() {
  const social = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:brandon@navigatenow.com',
      label: 'brandon@navigatenow.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/brandonweaver',
      label: '@brandonweaver',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/brandonweaver',
      label: '@brandonweaver',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-300">
            Have an idea, partnership opportunity, or just want to chat?
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {social.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.name !== 'Email' ? '_blank' : undefined}
                rel={item.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group bg-slate-700/30 border border-slate-600 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item.label}
                </p>
              </a>
            )
          })}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-12 text-center">
          <Send className="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 className="text-2xl font-bold text-white mb-3">Ready to connect?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Drop me a line at brandon@navigatenow.com
          </p>
          <a
            href="mailto:brandon@navigatenow.com"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Send Email
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-center text-sm">
            Or connect on{' '}
            <a
              href="https://linkedin.com/in/brandonweaver"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or{' '}
            <a
              href="https://twitter.com/brandonweaver"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
