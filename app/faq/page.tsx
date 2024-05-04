'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaqAccordion } from '@/components/ui/Faq-accordion'

export default function Faq() {
  return (
    <main className="max-w-3xl mx-auto px-4  ">
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <h1>Faq</h1>
        <FaqAccordion />
      </motion.section>
    </main>
  )
}
