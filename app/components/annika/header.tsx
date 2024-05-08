/* 'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from './data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from './active-section-context'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed rounded-lg top-1/2 bottom-1/2 left-0 h-[50vh] w-[6rem]    bg-green-100 bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:left-6 sm:w-[6rem]  dark:bg-gray-50 dark:border-black/40 dark:bg-opacity-75"
        initial={{ x: -100, y: '0%', opacity: 0 }}
        animate={{ x: 0, y: '0%', opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-1/2 bottom-1/2 left-0 h-[75vh] py-2 sm:left-6 sm:w-[6rem]">
        <ul className="flex h-full flex-col items-center justify-start gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map(link => (
            <motion.li
              className="w-full flex items-center justify-center relative px-3 py-3"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }} // initial state
              animate={{ y: 0, opacity: 1 }} // animate to this state which is transitioning the li from the left to the right
            >
              <Link
                className={clsx(
                  'flex items-center justify-center w-full hover:text-gray-950 transition hover:underline dark:text-purple-900 dark:hover:text-slate-950 dark:hover:bg-purple-200',
                  {
                    'text-gray-950 dark:text-gray-300':
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-orange-300 rounded-full absolute inset-0 -z-10 dark:bg-orange-100"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
 */
