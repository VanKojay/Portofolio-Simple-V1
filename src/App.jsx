import { portfolioData } from './data/portfolio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Quote from './components/Quote'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { personalInfo, hobbies, projects, quote } = portfolioData;

  return (
    <>
      <Navbar name={personalInfo.name} />
      <main>
        <Hero info={personalInfo} />
        <About info={personalInfo} />
        <Hobbies hobbies={hobbies} />
        <Projects projects={projects} />
        <Quote quote={quote} />
        <Contact info={personalInfo} />
      </main>
      <Footer name={personalInfo.name} />
    </>
  )
}

export default App
