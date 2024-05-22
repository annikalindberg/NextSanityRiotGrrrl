import React from 'react'
import ErbjudandeCards from '../components/homepagebanners/ErbjudandenCards'
import TjansterCards from '../components/homepagebanners/TjansterCards'

export const metadata = {
  title: 'Erbjudanden hos NextToEdit - en schysst webbyrå i Stockholm',
  description:
    'Här hittar du våra aktuella erbjudanden med rabatterade priser på webbdesign och webbutveckling. Ta del av våra kampanjer och boka din nya hemsida idag!',
}

export default function ErbjudandenPage() {
  return (
    <div className="bg-gradient-to-t from-blue-100 to-rose-100 dark:bg-gradient-to-t dark:from-rose-950 dark:to-teal-950 pt-10 pb-10">
      <section className="max-w-3xl mx-auto px-4 ">
        <h1 className="mt-5 ml-6">Erbjudanden</h1>
        <ErbjudandeCards />
        <TjansterCards />
      </section>
    </div>
  )
}
