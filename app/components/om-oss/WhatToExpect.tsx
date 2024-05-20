'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '@/public/assets/check.svg'
import gaffatejp from '@/public/images/gaffa.svg'
import jorden from '@/public/images/jorden.svg'
import SectionDivider from '../annika/section-divider'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0.5,
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

export default function WhatToExpect() {
  return (
    <>
      <div className="text-center pt-16 md:text-center">
        <h2>Vad du kan förvänta dig när du bokar oss</h2>
      </div>
      <div className="flex flex-col mt-8 px-4 md:px-24 pt-12 ">
        {/* First pair: Image and List with Header */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
          className="flex flex-col  items-center"
        >
          <Image
            src={jorden}
            alt="En hand sträcker ut en delad jordglob med gröna träd, en cykel och 3 vindkraftverk."
            width={200}
            height={200}
            className="md:max-w-md max-h-60 my-4 md:mx-4"
          />
          <motion.ul
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="space-y-6 max-w-xl text-xl font-bold"
          >
            {[
              `Hög Kvalitet och framtidssäkrade lösningar.`,
              `Innovativ Design: Estetisk och funktionell design som engagerar.`,
              `Säkerhet: Moderna tekniker skyddar din webbplats och användare.`,
              `Tillgänglighet: Vi följer internationella standarder för att säkerställa tillgänglighet.`,
              `Utbildning och Support: Fortsatt support och utbildning post-leverans.`,
              `Framtidssäkring: Flexibla lösningar som växer med din verksamhet.`,
              `Personlig Service: Skräddarsydda lösningar för din unika verksamhet.`,
              `Långsiktigt Partnerskap: Vi växer tillsammans genom öppen kommunikation.`,
              `Hög prestanda: Slipp långa laddningstider på grund av standardiserade kodbaser.`,
              `Budgetklarhet: Full öppenhet om kostnader - full kontroll.`,
              `Inga Dolda Avgifter: Transparent prissättning med engångskostnad.`,
              `Kostnadseffektivitet: Enkel budgetplanering utan löpande avgifter.`,
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mt-4 bg-white p-4 border-2 border-gray-200 shadow-sm-blue-800/50 dark:border-gray-800 rounded-lg dark:bg-gray-800 dark:text-white"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
              >
                <Image
                  src={Check}
                  alt="Checkbox icon"
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="mr-2 dark:bg-white"
                />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <div className=" pt-16">
          <h2>
            Anlita {` `}
            <strong>
              <em>inte</em>
            </strong>{' '}
            oss om du föredrar:
          </h2>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
          className="flex flex-col mb-4 md:mb-12 lg:flex-row md:gap-12 md:space-x-10"
        >
          <motion.ul
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.275 }}
            className="space-y-6 max-w-xl text-xl font-bold"
          >
            {[
              `"Quick-fix-lösningar": Vi bygger för hållbarhet, inte för att snabbt fixa.`,
              `Billiga Genvägar: Vi har höga kvalitetskrav och lägger hantverksmässig stolthet i vårt arbete.`,
              `Omedelbar Överlämning: Vi tar ansvar för det vi skapar. Vi bygger webbplatser som vi själva ska vilja använda och underhålla, inte bara sälja.`,
              `Standardlösningar: Vi undviker generiska lösningar och "one-size-fits-all".`,
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mt-4 bg-white p-4 border-2 border-gray-200 shadow-sm-blue-800/50 dark:border-gray-800 rounded-lg dark:bg-gray-800 dark:text-white"
                variants={fadeInAnimationVariants}
                initial="initial"
                animate="animate"
              >
                <Image
                  src={Check}
                  alt="Check"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                {item}
              </motion.li>
            ))}
          </motion.ul>{' '}
          <Image
            src={gaffatejp} // Change to your specific image
            alt="Gaffatejp"
            width={200}
            height={200}
            className="md:max-w-xl max-h-60 align-top  md:my-0"
          />
        </motion.div>
      </div>
    </>
  )
}
