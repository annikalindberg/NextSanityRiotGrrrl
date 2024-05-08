'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { FaRegFilePdf } from 'react-icons/fa'

export default function AnnikSocialLinks() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium bg-gradient-to-br from-cyan-100 to-cyan-900 dark:bg-gradient-to-br from-blue-200 to-purple-200 text-slate-800 rounded-lg p-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <Link
        href="https://www.annikalindberg-ts.com/#contact"
        className="group bg-gradient-to-bl from-fuchsia-900 to-pink-600  text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-orange-900 active:scale-105 transition dark:text-stone-100 dark:hover:bg-red-900 cursor-pointer borderBlack"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Boka möte med mig - öppnas i ny flik"
        title="External link to Annikas contact form"
      >
        Boka möte med mig{' '}
        <BsArrowRight className="opacity-70 group-hover:translate-x-5 transition" />
      </Link>
      <a
        className="group bg-rose-700 text-white hover:bg-red-950 px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:hover:text-white-50 dark:hover:bg-zinc-700 dark:bg-gradient-to-br from-zinc-900 to-cyan-900"
        href="/AnnikaLindberg-CV1.2.pdf"
        download="AnnikaLindberg-CV.pdf"
        aria-label="Download Annikas CV - opens in new tab"
      >
        Ladda ner mitt CV{' '}
        <HiDownload className="opacity-80 group-hover:translate-y- transition" />
        <FaRegFilePdf />
      </a>
      <div className="flex-row flex items-center justify-center gap-2 ">
        {' '}
        <p className="text-sm">Lägg till mig på LinkedIn</p>
        <Link
          className="bg-rose-600 p-3 text-slate-950 dark:bg-rose-600 dark:text-slate-950 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://www.linkedin.com/in/annika-lindberg-frontend-developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Annikas Linkedin profile page - opens in new tab"
          title="External link to Annikas LinkedIn"
        >
          {' '}
          <BsLinkedin />
        </Link>
        <p className="text-sm">och GitHub</p>
        <Link
          className="bg-rose-600 p-3 text-slate-950 dark:bg-rose-600 dark:text-slate-950 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://github.com/annikalindberg"
          target="_blank"
          rel="noopener noreferrer"
          title="External link to Annikas GitHub"
          aria-label="Visit Annikas Github profile page - opens in new tab"
        >
          <FaGithubSquare />
        </Link>
      </div>
    </motion.div>
  )
}
