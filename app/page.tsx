'use client'
import Hero from './components/Hero'
import TjansterCards from './components/homepagebanners/TjansterCards'
import OmOss from './components/om-oss/OmOss'
import Tillganglighet from './components/Tillganglighet'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-sky-100 dark:bg-sky-950 pt-5 md:pt-10 lg:pt-20 min-h-screen">
        <Tillganglighet />
      </div>
      <TjansterCards />
      <OmOss />
    </>
  )
}
