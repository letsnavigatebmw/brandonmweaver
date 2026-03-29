import { Mail, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const contacts = [
    {
      name: 'Email',
      icon: Mail,
      label: 'brandon@navigatenow.com',
      href: 'mailto:brandon@navigatenow.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/brandonweaver',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/brandonweaver',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-gray-900">
          Get in Touch
        </h2>

        <p className="text-lg text-gray-700 font-sans mb-16">
          Have a project in mind or want to discuss real estate technology? I'd love to hear from you.
        </p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.name !== 'Email' ? '_blank' : undefined}
                rel={item.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-400 transition-colors text-center group"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-gray-700 group-hover:text-yellow-600 transition-colors" />
                <h3 className="font-sans font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-900">{item.label}</p>
              </a>
            )
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center frame-border bg-white p-12">
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Let's Create Something Great
          </h3>
          <p className="text-gray-700 font-sans mb-8">
            Send me an email or connect on social media.
          </p>
          <a
            href="mailto:brandon@navigatenow.com"
            className="inline-block px-8 py-4 bg-yellow-500 text-gray-900 font-sans font-bold rounded-lg hover:bg-yellow-600 transition-colors text-lg"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}
