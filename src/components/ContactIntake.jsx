import { useState } from 'react'
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react'

export default function ContactIntake() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    industry: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const industries = [
    'Real Estate',
    'Technology',
    'Hospitality',
    'Consumer Brands',
    'Private Equity',
    'Venture Capital',
    'Consulting',
    'Marketing & Advertising',
    'Operations',
    'Other',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Submit to Formspree with form-encoded data
      const formBody = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        industry: formData.industry,
        message: formData.message,
      })

      const response = await fetch(
        'https://formspree.io/f/mzdkjkpa',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formBody,
        }
      )

      // With no-cors mode, assume success if no exception was thrown
      setSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        industry: '',
        message: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to submit. Please email directly: brandon@navigatenow.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="pt-12 pb-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-6">
            Get In Touch
          </p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6" style={{ color: '#c8b99a' }}>
            Let's <span className="italic">Talk</span>
          </h2>
          <p className="text-gray-400 text-lg">
            I'm interested in building what's next—partnering with ambitious teams, contributing where I can add real value, and helping turn ideas into something tangible. If that resonates, let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="p-8 bg-green-900/20 border border-green-600 rounded-lg text-center">
                <p className="text-green-400 font-bold text-lg mb-2">Thanks for reaching out!</p>
                <p className="text-gray-400">I'll review your request and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="Brandon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="Weaver"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select an industry...</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    What are you looking for? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Tell me about your project, what you're building, or how we might work together..."
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-900/20 border border-red-600 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-gold-400 text-black font-bold rounded-lg hover:bg-gold-300 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-widest font-bold mb-4">
                  Other Ways to Connect
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:brandon@navigatenow.com"
                className="group p-6 border border-gray-800 rounded-lg hover:border-gold-400 transition-all flex flex-col justify-between min-h-[120px]"
              >
                <Mail className="w-6 h-6 text-gold-400 mb-3 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-400 text-xs group-hover:text-gold-400 transition-colors">
                    brandon@navigatenow.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+13106916419"
                className="group p-6 border border-gray-800 rounded-lg hover:border-gold-400 transition-all flex flex-col justify-between min-h-[120px]"
              >
                <Phone className="w-6 h-6 text-gold-400 mb-3 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Phone</h3>
                  <p className="text-gray-400 text-xs group-hover:text-gold-400 transition-colors">
                    (310) 691-6419
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/brandonmweaver"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-gray-800 rounded-lg hover:border-gold-400 transition-all flex flex-col justify-between min-h-[120px]"
              >
                <Linkedin className="w-6 h-6 text-gold-400 mb-3 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">LinkedIn</h3>
                  <p className="text-gray-400 text-xs group-hover:text-gold-400 transition-colors flex items-center gap-1">
                    Connect
                    <ArrowRight size={12} />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
