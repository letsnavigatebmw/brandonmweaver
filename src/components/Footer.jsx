export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-serif font-bold text-black">
              BW
            </a>
            <p className="text-gray-700 font-sans mt-2 text-sm">
              CEO @ Navigate
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-12">
            <div>
              <h4 className="font-sans font-semibold text-black mb-3 text-sm uppercase tracking-widest">
                Navigation
              </h4>
              <ul className="space-y-2 text-gray-700 font-sans text-sm">
                <li>
                  <a href="#about" className="hover:text-black transition-colors">
                    What I Do
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-black transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-black transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-sans font-semibold text-black mb-3 text-sm uppercase tracking-widest">
                Social
              </h4>
              <ul className="space-y-2 text-gray-700 font-sans text-sm">
                <li>
                  <a
                    href="https://linkedin.com/in/brandonweaver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:brandon@navigatenow.com" className="hover:text-black transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm font-sans">
            © {currentYear} Brandon Weaver.
          </p>
        </div>
      </div>
    </footer>
  )
}
