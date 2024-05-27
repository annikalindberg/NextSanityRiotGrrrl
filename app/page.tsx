'use client'
import Hero from './components/Hero'
import TjansterCards from './components/homepagebanners/TjansterCards'
import OmOss from './components/om-oss/OmOss'
import Tillganglighet from './components/Tillganglighet'
import ErbjudandeCards from './components/homepagebanners/ErbjudandenCards'
import BlogCards from './components/BlogCards'

export default function Home() {
  return (
    <>
      <Hero />
      <ErbjudandeCards />
      <div className="bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-950 dark:to-cyan.950 pt-5 md:pt-10 lg:pt-20 min-h-screen">
        <Tillganglighet />
      </div>
      <TjansterCards />
      <OmOss />
      <div className="bg-gradient-to-t from-slate-100 to-cyan-100 dark:from-green-950 dark:to-rose-950 pt-5 md:pt-10 lg:pt-20 min-h-screen">
        <h2 className="text-3xl font-bold text-center">
          Senaste från vår blogg
        </h2>
        <BlogCards />
      </div>
    </>
  )
}
