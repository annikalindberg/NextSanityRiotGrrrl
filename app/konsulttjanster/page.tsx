import About from '../components/annika/about'
import Experience from '../components/annika/experience'
import Intro from '../components/annika/intro'
import Projects from '../components/annika/projects'
import SectionDivider from '../components/annika/section-divider'
import Skills from '../components/annika/skills'
import AnnikaSocialLinks from '../components/annika/annikaSocialLinks'

export const metadata = {
  title: 'Annika Edit Lindberg - Frontendutvecklare med Fullstack-kompetens',
  description:
    'Annika Edit Lindberg är en frontendutvecklare som skapar webbplatser optimerade utifrån tillgänglighet, SEO och användbarhet. Annika är grundare av NextToEdit Tech Solutions och är även konsult inom tillgänglighet och Frontendutveckling. Kontakta henne för kontrakt eller samarbete.',
}
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
