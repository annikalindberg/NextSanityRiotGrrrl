'use client'

import React from 'react'
import {
  frontendSkills,
  backendSkills,
  tillgänglighetSkills,
  generalSkills,
} from './data'
import { useSectionInView } from './hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h2>Frontend</h2>
      <ol className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {frontendSkills.map((frontendSkill, index) => (
          <motion.li
            className="bg-purple-100 text-slate-900 borderBlack rounded-xl px-5 py-3 dark:bg-purple-900 10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {frontendSkill}
          </motion.li>
        ))}
      </ol>
      <h2>Backend</h2>
      <ol className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {backendSkills.map((backendSkill, index) => (
          <motion.li
            className="bg-purple-100 text-slate-900 borderBlack rounded-xl px-5 py-3 dark:bg-purple-900 10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {backendSkill}
          </motion.li>
        ))}
      </ol>
      <h2>Tillgänglighet och SEO</h2>
      <ol className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {tillgänglighetSkills.map((tillgänglighetSkill, index) => (
          <motion.li
            className="bg-purple-100 text-slate-900 borderBlack rounded-xl px-5 py-3 dark:bg-purple-900 10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {tillgänglighetSkill}
          </motion.li>
        ))}
      </ol>
      <h2>Övriga Skills</h2>
      <ol className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {generalSkills.map((generalSkill, index) => (
          <motion.li
            className="bg-purple-100 text-slate-900 borderBlack rounded-xl px-5 py-3 dark:bg-purple-900 10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {generalSkill}
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
