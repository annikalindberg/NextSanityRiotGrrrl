import React from 'react'
import { FaqTillganglighet } from '../components/Faq-tillganglighet'
import { FaqWebbutveckling } from '../components/Faq-webbutveckling'
import Webbutveckling from '../components/Webbutveckling'

export const metadata = {
  title:
    'FAQ om Webbutveckling och Tillgänglighet – Guide till Skräddarsydda Webbplatser',

  description:
    'Utforska våra FAQs för att förstå hur skräddarsydd webbutveckling och tillgänglighetsoptimering kan förbättra din webbnärvaro. Lär dig om fördelarna med handkodade sidor och hur tillgängliga webbplatser gynnar alla användare.',
}

export default function Faq() {
  return (
    <>
      <h1 className="pl-4 lg:pl-12">FAQ tillgänglighet och Webbutveckling</h1>

      <section className="max-w-3xl mx-auto px-4   ">
        <div className=" p-6 md:p-10" aria-label="Frequently Asked Questions">
          <FaqTillganglighet />
        </div>
        <div className=" p-6 md:p-10" aria-label="Frequently Asked Questions">
          <FaqWebbutveckling />
        </div>
      </section>
    </>
  )
}
