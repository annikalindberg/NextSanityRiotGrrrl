'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaqWebbutveckling } from '@/app/components/Faq-webbutveckling'
import { FaqTillganglighet } from '@/app/components/Faq-tillganglighet'
import BottomLogo from '@/public/images/BottomLogo.png'
import TillganglighetLogo from '@/public/images/TopLogo.png'
import Image from 'next/image'

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
        <h1>Vanliga frågor</h1>
        <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between ">
          <h2>Tillgänglighet</h2>
          <Image
            width={300}
            height={300}
            src={TillganglighetLogo}
            alt="TillganglighetLogo"
            className="mt-10 md:w-300 md:mt-2 md:mb-12"
          />
        </div>{' '}
        <FaqTillganglighet />{' '}
        <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between ">
          <h2>Webbutveckling</h2>
          <Image
            width={300}
            height={300}
            src={BottomLogo}
            alt="Logo"
            className="mt-10 md:mt-12 md:w-300"
          />
        </div>{' '}
        <FaqWebbutveckling />
      </motion.section>
    </main>
  )
}
