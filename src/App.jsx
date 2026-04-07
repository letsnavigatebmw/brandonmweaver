import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Differentiator from './components/Differentiator'
import RightNow from './components/RightNow'
import ThoughtLeadership from './components/ThoughtLeadership'
import ContactIntake from './components/ContactIntake'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Differentiator />
      <RightNow />
      <ThoughtLeadership />
      <Education />
      <ContactIntake />
      <Footer />
    </div>
  )
}

export default App
