import React from 'react'
import { FaqTillganglighet } from '../components/Faq-tillganglighet'
import { FaqWebbutveckling } from '../components/Faq-webbutveckling'
import faq from '@/public/images/faq.svg'
import Image from 'next/image'

export const metadata = {
  title:
    'Vanliga frågor och svar om Webbutveckling och Tillgänglighet – Guide till Skräddarsydda Webbplatser',

  description:
    'Vad innebär "handkodad" hemsida och vilka är fördelarna för dig med en handkodad hemsida jämfört med att använda mallar och "drag-and-drop-plattformar" som metod? Vad tjänar jag på att min hemsida är tillgänglighetsoptimerad? Här har vi samlat de vanligaste frågorna våra användare har kring våra tjänster inom webbutveckling och tillgänglighet.',
}

export default function Faq() {
  return (
    <>
      <div className="flex flex-row justify-between ">
        <h1 className="pl-4 lg:pl-12">Vanliga frågor och svar</h1>
        <Image src={faq} alt="Vanliga frågor och svar" />
      </div>
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
