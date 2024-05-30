import { FaqTillganglighet } from '../components/Faq-tillganglighet'
import { Audits } from '../components/Audits'
import React from 'react'
import TjansterCards from '../components/homepagebanners/TjansterCards'

export const metadata = {
  title: 'Tillgänglighetsaudits | NextToEdit Tech Solutions',
  description:
    'Våra tester inkluderar en övergripande granskning av koden samt manuella tester av användarflödena. Vi använder verktyg som skärmläsare och tangentbordsnavigering för att säkerställa att alla element på din webbplats är tillgängliga för varje användare.',
}

export default function TillganglighetsAudits() {
  return (
    <div className="bg-gradient-to-t from-rose-100 to-yellow-50 dark:bg-gradient-to-t dark:to-indigo-950 dark:from-teal-950 pt-10 pb-10">
      <section className="max-w-3xl mx-auto px-4 ">
        <h1 className="mt-5 ml-6">Tillgänglighets-audits</h1>
        <Audits />
        <TjansterCards />
        <FaqTillganglighet />
      </section>
    </div>
  )
}
