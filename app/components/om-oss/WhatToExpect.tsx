'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '@/public/assets/check.svg'
import gaffatejp from '@/public/images/gaffa.svg'
import earth from '@/public/images/earth.svg'
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
      <div className="flex flex-col mt-8 px-24 pt-12 ">
        {/* First pair: Image and List with Header */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
          className="flex flex-col lg:flex-row items-center"
        >
          <Image
            src={earth}
            alt="Jorden"
            width={400}
            height={400}
            layout="responsive"
            className="max-w-xl my-4 md:my-0"
          />
          <motion.ul
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="space-y-3 max-w-xl"
          >
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
          </motion.ul>
        </motion.div>
        <div className=" pt-16">
          <h2>
            {' '}
            Vad du{' '}
            <strong>
              <em>inte</em>
            </strong>{' '}
            bör förvänta dig av oss
          </h2>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
          className="flex flex-col lg:flex-row md:gap-12 md:space-x-10"
        >
          <motion.ul
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.275 }}
            className="space-y-3 max-w-xl"
          >
            {[
              'Snabba Fixar: Vi prioriterar kvalitet och noggrann planering framför hastighet. Vårt arbete är grundligt för att säkerställa hållbara resultat.',
              'Standardlösningar: Vi erbjuder inga generiska, one-size-fits-all lösningar. Varje projekt är unikt och kräver sin egen specialanpassade lösning.',
              'Billiga Genvägar: Vi kompromissar inte med kvaliteten för att sänka kostnaderna. Våra priser reflekterar värdet av hållbart och tillgängligt webbinnehåll.',
              'Endast Teknisk Support: Medan vi erbjuder teknisk support, är vårt fokus på en helhetslösning som omfattar både teknik och strategisk rådgivning.',
              'Omedelbar Överlämning: Vårt engagemang för ditt projekt innebär en kontinuerlig dialog och samarbete. Vi strävar efter partnerskap snarare än enkla affärstransaktioner.',
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center"
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
            width={300}
            height={300}
            layout="responsive"
            className="max-w-xl align-top md:my-0"
          />
        </motion.div>
      </div>
    </>
  )
}
