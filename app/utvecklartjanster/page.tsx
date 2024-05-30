import { FaqWebbutveckling } from '@/app/components/Faq-webbutveckling'
import Webbutveckling from '../components/Webbutveckling'
import React from 'react'
import TjansterCards from '../components/homepagebanners/TjansterCards'

export const metadata = {
  title: 'Webbplatsutveckling | NextToEdit Tech Solutions',
  description:
    'NextToEdit Tech Solutions erbjuder skräddarsydda webbplatser som växer med dig. Välj en lösning som växer med din verksamhet.',
}

export default function UtvecklarTjanster() {
  return (
    <section className="max-w-3xl mx-auto px-4  ">
      <Webbutveckling />
      <TjansterCards />
      <FaqWebbutveckling />
    </section>
  )
}
