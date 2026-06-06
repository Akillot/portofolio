import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <Hero />
        <Projects />
        <Resume />
        <Footer />
      </div>
    </div>
  )
}

export default App
