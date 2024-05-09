import { FaqTillganglighet } from '../components/Faq-tillganglighet'
import { Audits } from '../components/Audits'
import React from 'react'

export const metadata = {
  title: 'Tillgänglighetsaudits | NextToEdit Tech Solutions',
  description:
    'Våra tester inkluderar en övergripande granskning av koden samt manuella tester av användarflödena. Vi använder verktyg som skärmläsare och tangentbordsnavigering för att säkerställa att alla element på din webbplats är tillgängliga för varje användare.',
}

export default function TillganglighetsAudits() {
  return (
    <section className="max-w-3xl mx-auto px-4  ">
      <Audits />
      <FaqTillganglighet />
    </section>
  )
}
