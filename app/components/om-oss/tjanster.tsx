'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Check from '@/public/assets/check.svg'

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

const services = [
  {
    name: 'Webbutveckling',
    description:
      'Vi bygger skräddarsydda webbplatser som är optimerade för tillgänglighet från grunden. Vi skapar lättläst, förståelig och välskriven kod. En responsiv design som fungerar på alla enheter och plattformar är en självklarhet.',
  },
  {
    name: 'Tillgänglighets-audits',
    description:
      'Vi granskar befintliga webbplatser och identifierar tillgänglighetsbrister. Vi ser till att dina plattformar uppfyller gällande riktlinjer och lagar om digital tillgänglighet.',
  },
  {
    name: 'Skräddarsydda workshops i tillgänglighet on demand',
    description:
      'Vi utbildar, föreläser och coachar i tillgänglighet för webb. Vi rustar dig och/eller ditt team med värdefull kunskap som ni kan använda framöver i ert arbete med tillgänglighet.',
  },
  {
    name: 'Support och underhåll',
    description:
      'Vår tjänst slutar inte vid lanseringen. Vi erbjuder kontinuerlig support och underhåll för att säkerställa att din webbplats förblir aktuell, säker och tillgänglig.',
  },
]

const Tjanster = () => (
  <ol
    aria-label="Tjänster erbjudna av NextToEdit Tech Solutions"
    className="mt-4 md:text-md"
  >
    {services.map((service, index) => (
      <motion.li
        key={index}
        className="flex items-center gap-2 mb-3 text-xl dark:text-white"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
      >
        <Image
          aria-hidden="true"
          src={Check}
          alt="Included"
          width={30}
          height={30}
          className="dark:bg-white mr-3"
        />
        <span>{`${service.name}: ${service.description}`}</span>
      </motion.li>
    ))}
  </ol>
)

export default Tjanster
