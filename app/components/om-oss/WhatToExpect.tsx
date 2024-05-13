'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '@/public/assets/check.svg'
import Link from 'next/link'
import classes from '../om-oss/omoss.module.css'
import gaffatejp from '@/public/images/gaffatejp.svg'
import earth from '@/public/images/earth.svg'

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
      <div className="flex flex-col mt-8 mb-6 ">
        <h3>
          Vad kan du förvänta dig när du anlitar NextToEdit Tech Solutions?
        </h3>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
          className="flex flex-row mx-auto my-auto md:flex-row  "
        >
          {' '}
          <Image
            className=""
            src={earth}
            alt="Jorden"
            width={400}
            height={400}
          />
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="py-1 lg:py-15 mt-4 mb-4"
            aria-label="Vad du kan förvänta dig när du anlitar oss"
          >
            <ul className="mt-4 mb-4  text-1xl space-y-3 flex justify-center flex-col">
              {[
                'Personlig Service: Vi tar oss tid att förstå dina unika behov och skräddarsyr våra lösningar för att passa din verksamhet perfekt.',
                'Hållbarhet och Tillgänglighet: Vi följer internationella riktlinjer för webbtillgänglighet och anpassar oss kontinuerligt till rådande standarder och teknologier.',
                'Trygghet och Säkerhet: Vi arbetar med moderna tekniker och säkerhetslösningar för att skydda din webbplats och dina användare från hot och intrång.',
                'Framtidssäkring: Vi utvecklar skalbara och flexibla lösningar som kan växa med din verksamhet och anpassas till framtida behov och krav.',
                'Hög Kvalitet: Vi strävar efter att leverera högkvalitativa lösningar som är robusta, pålitliga och hållbara över tid.',
                'Innovativ Design: Vårt kreativa team säkerställer att din webbplats inte bara är funktionell utan också visuellt tilltalande och "i tiden".',
                'Utbildning och Support: Vi stannar inte vid leverans. Vi utbildar ditt team och erbjuder kontinuerlig support för att du ska kunna navigera din nya digitala miljö med lätthet.',
                'Ett Långsiktigt Partnerskap: Vi ser varje klientrelation som en möjlighet att växa tillsammans, med öppen kommunikation och ärliga feedbackslingor.',
                'Konkurrenskraftiga Priser: Våra priser är noggrant utformade för att vara konkurrenskraftiga och fördelaktiga, jämfört med plattformar där kostnader kan växa oväntat över tid.',
                'Inga Dolda Avgifter: Vi erbjuder en transparent engångskostnad, så att du inte behöver oroa dig för att månadskostnader ackumuleras.',
                'Kostnadseffektivitet: Med vår engångsbetalning behöver du inte bekymra dig över oändliga abonnemangsavgifter, vilket gör budgetplaneringen enklare och mer förutsägbar.',
                'Högre Värde: Genom att välja oss får du tillgång till skräddarsydd, professionell design och utveckling som levererar mer än vad automatiserade webbplattformar kan erbjuda.',
                'Budgetklarhet: Vi strävar efter fullständig öppenhet i våra priser, så att du vet exakt vad du betalar för och kan känna dig trygg i ditt beslut att investera i kvalitet.',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center mt-4"
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
            </ul>
          </motion.section>{' '}
        </motion.div>{' '}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
          className="flex flex-row mx-auto my-auto md:flex-row  "
        >
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="py-1 lg:py-15 mt-4 mb-4"
            aria-label="Vad vi inte erbjuder"
          >
            {' '}
            <h3 className="">
              Vad kan du <strong>inte</strong> förvänta dig när du anlitar
              NextToEdit Tech Solutions?
            </h3>
            <ul className="mt-4 mb-4 w-10/12  text-1xl space-y-3 flex justify-center flex-col">
              {[
                'Snabba Fixar: Vi prioriterar kvalitet och noggrann planering framför hastighet. Vårt arbete är grundligt för att säkerställa hållbara resultat.',
                'Standardlösningar: Vi erbjuder inga generiska, one-size-fits-all lösningar. Varje projekt är unikt och kräver sin egen specialanpassade lösning.',
                'Billiga Genvägar: Vi kompromissar inte med kvaliteten för att sänka kostnaderna. Våra priser reflekterar värdet av hållbart och tillgängligt webbinnehåll.',
                'Endast Teknisk Support: Medan vi erbjuder teknisk support, är vårt fokus på en helhetslösning som omfattar både teknik och strategisk rådgivning.',
                'Omedelbar Överlämning: Vårt engagemang för ditt projekt innebär en kontinuerlig dialog och samarbete. Vi strävar efter partnerskap snarare än enkla affärstransaktioner.',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center mt-4"
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
            </ul>
          </motion.section>{' '}
          <Image src={gaffatejp} alt="Gaffatejp" width={400} height={400} />
        </motion.div>
      </div>
    </>
  )
}
