import About from "./components/About.tsx"
import Contact from "./components/Contact.tsx"
import Education from "./components/Eductaion.tsx"
import Hero from "./components/Hero.tsx"
import Projects from "./components/Projects.tsx"
import Navbar from "./layouts/Navbar.tsx"

function App() {


  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>

    </div>
  )
}

export default App
