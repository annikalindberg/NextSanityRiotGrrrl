'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section id="top" className=" max-w-[45rem] sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/images/annika.png"
              alt="Annika portrait"
              width={384}
              height={384}
              quality="100"
              priority={true}
              className="h-24 w-24 sm:h-48 sm:w-48 rounded-xl object-cover border-[0.rem] sm:border-[0.2rem] border-gray-300 shadow-xl mb-3"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 left-0 text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.h1
        className="px-4 text-2xl text-center font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {' '}
        <div className="font-bold text-fuchsia-950 dark:text-pink-50 ">
          Annika{' '}
        </div>
        <div className=" text-teal-900 dark:text-teal-50 mb-20">
          Konsult inom Frontend och Fullstack-utveckling
        </div>{' '}
      </motion.h1>
    </section>
  )
}
