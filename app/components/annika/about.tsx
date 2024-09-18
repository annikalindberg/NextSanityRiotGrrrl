'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionDivider from './section-divider'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from './hooks'
import { FaRegFilePdf } from 'react-icons/fa'
import kaffekopp from '@/public/images/kaffekopp.svg'
import Image from 'next/image'

export default function About() {
  const { ref } = useSectionInView('Top', 0.5)

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h3 className="text-3xl text-center text-teal-900 dark:text-teal-50 font-bold">
        15 + års erfarenhet av tillgänglighetsarbete, projektledning och
        utbildning
      </h3>
      <p className="mt-8">
        Jag är en driven utvecklare med fokus på tillgänglighet och
        användbarhet. Jag har en passion för att skapa webbplatser som är
        optimerade utifrån tillgänglighet, SEO och användbarhet. Jag är grundare
        av NextToEdit Tech Solutions och är även konsult inom utbildaning
        (frontend och UX) tillgänglighetsgranskning av webbplatser och
        frontendutveckling. Kontakta mig för kontrakt eller samarbete.
      </p>

      <p className="font-medium mt-4">
        Med en bakgrund som utbildare och projektledare inom offentlig och
        ideell sektor har jag alltid drivits av att möta och lösa utmaningar.
        Efter över tio år i dessa roller tog jag steget in i tech-världen,
        vilket öppnade många nya dörrar och oanade möjligheter. I min roll som
        utbildare inom frontendutveckling kan jag kombinera min erfarenhet inom
        pedagogik, processledning och facilitering med min stora passion för
        frontendutveckling, UX-design och tillgänglighet. Jag är övertygad om
        att alla, med rätt förutsättningar, kan lära sig att koda. Min största
        drivkraft är att motivera, introducera och inspirera särskilt kvinnor,
        unga tjejer och underrepresenterade grupper att våga ta steget in i
        denna värld och visa att det går – så länge man hittar sitt eget sätt
        att känna trygghet och vågar testa och (miss)lyckas. Att kunna vara den
        förebild jag själv saknade när jag var yngre är en av mina största
        drivkrafter.
      </p>
      <hr className="w-10 h-1 mx-auto my-8 bg-cyan-600 border-0 rounded md:my-12 dark:bg-pink-500" />
      <h3 className="text-2xl text-center font-bold mb-8 mt-8 mr-5 text-cyan-800 dark:text-cyan-200">
        Driven och engagerad lagspelare som älskar nya utmaningar, att
        programmera och att dricka kaffe
      </h3>
      <p className="text-lg font-medium mt-14 text-center">
        Låt oss boka en förutsättningslös fika och prata om hur vi kan
        samarbeta!
      </p>
      <div className="flex flex-col items-center justify-around mt-4 md:flex-row">
        {/* Adjusted padding for smaller screens */}
        <Link
          href="https://www.annikalindberg-ts.com/#contact"
          className="group mt-6 bg-gradient-to-bl from-fuchsia-900 to-pink-600 text-white px-5 py-2 md:px-7 md:py-3 flex items-center md:gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-orange-900 active:scale-105 transition dark:text-stone-100 dark:hover:bg-red-900 cursor-pointer borderBlack"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Boka möte med mig - öppnas i ny flik"
          title="External link to Annikas contact form"
        >
          Boka möte med mig{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-5 transition" />
        </Link>
        <Image
          src={kaffekopp}
          alt="En kaffekopp"
          width={200}
          height={200}
          className="mb-12"
        />
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            className="group mb-6 bg-red-50 hover:bg-red-100 px-5 py-2 md:px-7 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:hover:text-white-50 dark:hover:bg-zinc-700 dark:bg-gradient-to-br from-zinc-900 to-cyan-900"
            href="/AnnikaLindberg-CV1.2.pdf"
            download="AnnikaLindberg-CV.pdf"
            aria-label="Ladda ner mitt CV som PDF - öppnas i ny flik"
          >
            Ladda ner mitt CV{' '}
            <HiDownload className="opacity-60 group-hover:translate-y- transition" />
            <FaRegFilePdf />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
