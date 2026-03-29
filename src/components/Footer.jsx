export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-serif font-bold text-gray-900">
              bw
            </a>
            <p className="text-gray-600 font-sans mt-2 text-sm">
              Founder @ Navigate
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-semibold text-gray-900 mb-4 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-gray-600 font-sans text-sm">
              <li>
                <a href="#about" className="hover:text-yellow-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-semibold text-gray-900 mb-4 text-sm uppercase tracking-widest">
              Social
            </h4>
            <ul className="space-y-2 text-gray-600 font-sans text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/brandonweaver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/brandonweaver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:brandon@navigatenow.com" className="hover:text-yellow-600 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm font-sans">
            © {currentYear} Brandon Weaver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
