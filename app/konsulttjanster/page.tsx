import About from '../components/annika/about'
import Experience from '../components/annika/experience'
import Intro from '../components/annika/intro'
import Projects from '../components/annika/projects'
import SectionDivider from '../components/annika/section-divider'
import Skills from '../components/annika/skills'
import AnnikaSocialLinks from '../components/annika/annikaSocialLinks'

export default function Home() {
  return (
    <article className="flex flex-col items-center px-4  ">
      {/*    <Header /> */}
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <AnnikaSocialLinks />
    </article>
  )
}
