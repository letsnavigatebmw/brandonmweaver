import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PodcastShort from './components/PodcastShort'
import Projects from './components/Projects'
import Education from './components/Education'
import Differentiator from './components/Differentiator'
import RightNow from './components/RightNow'
import ApertureHospitality from './components/ApertureHospitality'
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
      <ApertureHospitality />
      <Differentiator />
      <RightNow />
      <ThoughtLeadership />
      <PodcastShort />
      <Education />
      <ContactIntake />
      <Footer />
    </div>
  )
}

export default App
