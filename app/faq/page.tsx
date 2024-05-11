import React from 'react'
import { FaqTillganglighet } from '../components/Faq-tillganglighet'
import { Metadata } from 'next'
import { FaqWebbutveckling } from '../components/Faq-webbutveckling'

export const metadata = {
  title:
    'Varför är tillgänglighet viktigt och vad vinner du på att ha en handkodad hemsida? | NextToEdit Tech Solutions',
  description:
    'Tillgänglighet är en viktig del av att skapa en webbplats som är användbar för alla. Lär dig mer om varför tillgänglighet är viktigt och hur du kan göra din webbplats mer tillgänglig. Varför en handkodad hemsida är en bra investering',
}

export default function Faq() {
  return (
    <>
      <h1 className="pl-4 lg:pl-12">Vanliga frågor</h1>

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
