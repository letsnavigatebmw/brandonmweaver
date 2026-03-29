import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Differentiator from './components/Differentiator'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Differentiator />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
