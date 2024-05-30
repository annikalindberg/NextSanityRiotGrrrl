'use client'
import Hero from './components/Hero'
import TjansterCards from './components/homepagebanners/TjansterCards'
import OmOss from './components/om-oss/OmOss'
import Tillganglighet from './components/Tillganglighet'
import ErbjudandeCards from './components/homepagebanners/ErbjudandenCards'

export default function Home() {
  return (
    <>
      <Hero />
      <ErbjudandeCards />

      <TjansterCards />
      <div className="bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-950 dark:to-cyan.950 pt-5 md:pt-10 lg:pt-20 min-h-screen">
        <Tillganglighet />
      </div>
      <OmOss />
    </>
  )
}
