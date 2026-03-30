export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-white">
              Brandon M. Weaver
            </a>
            <p className="text-gray-500 mt-2 text-sm">
              CEO @ Navigate
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-16">
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
                Navigation
              </h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="#about" className="hover:text-yellow-500 transition-colors">
                    What I Do
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-yellow-500 transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#differentiator" className="hover:text-yellow-500 transition-colors">
                    How I Think
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
                Connect
              </h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a
                    href="https://linkedin.com/in/brandonweaver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:brandon@navigatenow.com" className="hover:text-yellow-500 transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} Brandon Weaver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
