'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from './hooks'
import { useActiveSectionContext } from './active-section-context'
import { FaRegFilePdf } from 'react-icons/fa'

export default function Intro() {
  const { ref } = useSectionInView('Top', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      ref={ref}
      id="top"
      className="mb-28 max-w-[45rem] sm:mb-0 scroll-mt-[100rem]"
    >
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
        className="mb-10 mt-9 px-4 text-2xl text-center font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="font-bold text-fuchsia-950 dark:text-pink-50 mb-8">
          I am Annika, a developer with people skills and passion for code
        </div>
        <div className=" text-teal-900 dark:text-teal-50 mb-20">
          I have over 15+ years of experience working with accessibility in
          various ways.
        </div>{' '}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-bl from-fuchsia-900 to-pink-600  text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-orange-900 active:scale-105 transition dark:text-stone-100 dark:hover:bg-red-900 cursor-pointer borderBlack"
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-5 transition" />
        </Link>
        <a
          className="group bg-red-50 hover:bg-red-100 px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:hover:text-white-50 dark:hover:bg-zinc-700 dark:bg-gradient-to-br from-zinc-900 to-cyan-900"
          href="/AnnikaLindberg-CV1.2.pdf"
          download="AnnikaLindberg-CV.pdf"
          aria-label="Download Annikas CV - opens in new tab"
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y- transition" />
          <FaRegFilePdf />
        </a>
        <Link
          className="bg-white-50 p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
          href="https://www.linkedin.com/in/annika-lindberg-frontend-developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Annikas Linkedin profile page - opens in new tab"
          title="External link to Annikas LinkedIn"
        >
          <BsLinkedin />
        </Link>

        <Link
          className="bg-white-50 p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
          href="https://github.com/annikalindberg"
          target="_blank"
          rel="noopener noreferrer"
          title="External link to Annikas GitHub"
          aria-label="Visit Annikas Github profile page - opens in new tab"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  )
}
