import About from '../components/annika/about'
import Experience from '../components/annika/experience'
import Intro from '../components/annika/intro'
import Projects from '../components/annika/projects'
import SectionDivider from '../components/annika/section-divider'
import Skills from '../components/annika/skills'
import Header from '../components/annika/header'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-48 md:px-48  ">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
    </main>
  )
}
