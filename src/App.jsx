import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Differentiator from './components/Differentiator'
import ThoughtLeadership from './components/ThoughtLeadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Differentiator />
      <ThoughtLeadership />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
