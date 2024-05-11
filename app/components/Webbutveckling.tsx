'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '../../public/assets/check.svg'
import Link from 'next/link'
import classes from '../components/pricing.module.css'
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-')

// Simplified animation object
const animationProps = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
}

const Webbutveckling = () => (
  <>
    <motion.div
      {...animationProps}
      transition={{ delay: 0.175 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.175 } }}
      className="py-12 lg:py-15"
      aria-label="Pricing Options"
    >
      <div className="flex flex-col items-center justify-center gap-3 lg:gap-5">
        <h1 className="mb-6 text-2xl font-semibold text-center text-[#36485C] dark:text-white lg:text-3xl">
          Tillgänglig webbplats som växer med dig
        </h1>
        <ul className="flex flex-col justify-center space-y-2 lg:text-xl">
          {[
            'SEO-optimerade, skräddarsydda hemsidor efter dina behov',
            'Handkodade, tillgänglighets- och SEO-optimerade hemsidor',
            'Flexibel och konkurrenskraftig prismodell',
            'Glöm begränsningarna med no-code plattformar; välj en lösning som växer med din verksamhet',
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center dark:text-white"
              variants={animationProps}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              <Image
                src={Check}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
                className="mr-2 dark:bg-white"
              />
              {item}
            </motion.li>
          ))}
        </ul>
        <h2 className="md:text-lg text-center text-[#36485C] dark:text-white lg:text-2xl">
          Bygg för framtiden – skala upp när du behöver.
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start lg:gap-8">
        {[
          {
            title: 'Färdig webbplats på 1 vecka',
            description:
              'Kom igång snabbt och effektivt med vårt snabbstart-paket. ',
            price: '10 000 kr',
            features: [
              'Stilren, fördesignad mall anpassad med ditt unika innehåll',
              'Responsiv och SEO-optimerad webbplats redo att lanseras inom 1-2 veckor.',
              'Fast antal sidor och bilder ingår, perfekt för en effektiv och professionell närvaro online',
              'Kontaktformulär',
              'Byggd enligt bästa praxis för tillgänglighet och SEO',
              'Bildoptimering och laddningstidsoptimering av din webbplats',

              'Skalbart och flexibelt för framtida tillägg',
            ],
            buttonLabel: 'Jag vill ha en snabbstart',
            bgClass: 'bg-stone-50 dark:bg-rose-950',
          },
          {
            title: 'Webbplats att växa i',
            description:
              'Här är lösningen för dig som vill ha en skräddarsydd webbplats som växer med din verksamhet.',
            price: '30 000 kr',
            features: [
              'Specialdesignad webbplats med unik design och funktionalitet som animeringar',

              'Skräddarsytt CMS (Content Management System) för att enkelt kunna uppdatera innehållet på din webbplats',
              'Avancerad SEO (Search Engine Optimization)strategi, analyserad och framtagen specifikt för dina mål och din målgrupp',
              'Träning i hur du själv kan uppdatera och underhålla din webbplats',
              'Tre månaders support och utbildning för effektiv hantering av din webbplats.',
              'Bildoptimering och laddningstidsoptimering av din webbplats',
              'Tillgänglighetsredogörelse',
              'Manuell tillgänglighetstestning och korrigeringar som säkerställer att din webbplats är tillgänglig för tillämpliga lagar och riktlinjer såsom WCAG 2.2, Tillgänglighetsdirektivet och Europastandarden EN 301 549',
              'Fullständiga rättigheter till design och kod',
            ],
            buttonLabel: 'Jag vill ha en webbplats att växa i',
            bgClass: 'bg-blue-100 shadow-4xl dark:bg-fuchsia-950',
            widthClass: '',
          },
          {
            title: 'Enterprise Lösningar',
            description:
              'Vårt Enterprise Lösningpaket är skräddarsytt för stora organisationer i Stockholm som vill ha ett långsiktigt samarbete med en pålitlig partner.',
            price: 'Offert',
            features: [
              'Våra Enterprise-lösningar är skräddarsydda för att passa dina behov och mål och kravställning sker i samråd med dig och ditt team för att säkerställa att vi levererar en lösning som passar just er.',
              'En "discovery-fas" där vi tillsammans med dig och ditt team går igenom era behov och mål för att skapa en lösning som passar just er',
              'Strategiskt innehållsanalys och strukturering för att maximera konverteringar',
              'Skräddarsydda formulär och interaktioner',
              'UX (User Experience) och UI (User Interface) design för att skapa en användarvänlig och tilltalande webbplats',
              'Robusta och skalbara webbapplikationer med större mängder data, en mer avancerad autentisering med krav på högre säkerhet och prestanda',
              'En djupgående analys av din nuvarande webbplats och digitala närvaro för att identifiera möjligheter och utmaningar',
              'UX-research, flödesscheman, prototyping i iterativa processer för att optimera utformaning och funktionalitet efter användarens behov',
            ],
            buttonLabel: 'Jag vill veta mer om enterprise-lösningar',
            bgClass: 'bg-green-100 shadow-4xl dark:bg-cyan-950',
            widthClass: '',
          },
        ].map((card, index) => (
          <article
            aria-label="{card.title}"
            key={index}
            className={`border-2 border-blue-200 dark:border-rose-100 p-7 mt-10 rounded-lg flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:scale-105 ${card.bgClass}`}
          >
            <div>
              <h3 className="mb-5 mt-3 text-2xl font-medium text-center">
                {card.title}
              </h3>
              <p
                className={`${classes.multiLineEllipsis} text-center md:mx-auto  text-xs md:text-sm leading-5`}
              >
                {card.description}
              </p>

              <ol className="mt-4 text-xs md:text-lg ">
                {card.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-2 mb-3"
                    variants={animationProps}
                    initial="initial"
                    whileInView="animate"
                    custom={featureIndex}
                  >
                    <Image
                      src={Check}
                      aria-hidden="true"
                      alt="Included"
                      width={20}
                      height={20}
                      className="dark:bg-white mr-3"
                    />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ol>
              <h2 className="pt-4 text-2xl font-semibold text-center leading-10">
                {card.price}
              </h2>
            </div>
            <Link
              href={`/forms/${slugify(card.title)}`}
              aria-label={`Boka ${card.title}`}
              className="text-center mt-4 rounded bg-rose-900 py-2 px-4 font-medium text-white dark:bg-fuchsia-100 dark:text-slate-900 hover:bg-rose-800 dark:hover:bg-fuchsia-200 transition-colors duration-500 ease-in-out transform hover:scale-105"
              onClick={() => console.log(`${card.buttonLabel} clicked`)}
            >
              {card.buttonLabel}
            </Link>
          </article>
        ))}
      </div>
      <h3>I alla paket ingår:</h3>
      <ul className="flex flex-col justify-center space-y-2 lg:text-xl">
        {[
          'Responsiv design som anpassar sig till alla skärmstorlekar',
          'Optimering för sökmotorer (SEO)',
          'Bildoptimering och laddningstidsoptimering',
          'Tillgänglighetsstandard i enlighet med WCAG 2.2 (nivå AA), Tillgänglighetsdirektivet och Europastandarden EN 301 549',
        ].map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center dark:text-white"
            variants={animationProps}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <Image
              src={Check}
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
              className="mr-2 dark:bg-white"
            />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>{' '}
    <p className=" text-[#36485C] dark:text-white lg:text-xl">
      * Alla priser exklusive moms
    </p>
  </>
)

export default Webbutveckling
