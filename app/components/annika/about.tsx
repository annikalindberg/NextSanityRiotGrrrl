'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from './hooks'
import SectionDivider from './section-divider'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem]  leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {' '}
      <div className=" mb-4">
        <h2 className="text-3xl font-bold mb-3 text-center">
          Webbutvecklare och Tillgänglighetsexpert
        </h2>{' '}
        <hr className="w-10 h-1 mx-auto my-8  bg-pink-600 border-0 rounded md:my-9 dark:bg-cyan-400" />
        <h3 className="text-3xl  font-bold text-left dark:text-pink-500 text-pink-800">
          Expertis inom Frontend och Fullstack-utveckling{' '}
        </h3>
        <hr className="w-10 h-1 mx-auto my-8 bg-cyan-600 border-0 rounded md:my-12 dark:bg-pink-500" />
        <h3 className="text-3xl text-center font-bold mb-3  mr-5 text-cyan-800 dark:text-cyan-200">
          Specialisering inom Webb Tillgänglighet{' '}
        </h3>{' '}
        <div className="flex items-center justify-center">
          <SectionDivider />
        </div>
        <p className="font-medium">
          Med en bakgrund som utbildare och projektledare inom offentlig sektor
          och ideell sektor, har jag alltid drivits av att möta och lösa
          utmaningar. Efter över tio år i dessa roller, tog jag klivet in i
          tech-världen och har inte sett tillbaka sedan dess. Min dagliga
          drivkraft är passionen för kodning och att skapa användbara,
          tillgängliga digitala lösningar.
        </p>
        <hr className="w-10 h-1 mx-auto my-8 bg-cyan-600 border-0 rounded md:my-12 dark:bg-pink-500" />
        <p className="mt-4">
          Jag har en djup förståelse för tillgänglighet på webben, vilket
          säkerställer att de webbplatser jag utvecklar inte bara är
          funktionella utan också tillgängliga enligt aktuella standarder och
          lagkrav. För mig är tillgänglighet en naturlig del av webbutvecklings
          alla faser, från design till utveckling och testning. Jag praktiserar
          tillgänglighet både i kod och design för att uppfylla aktuella
          standarder, men har även lång erfarenhet av att använda ett
          inkluderande språk i allt från copywriting, design och kommunikation.
        </p>
      </div>
      <hr className="w-10 h-1 mx-auto my-8 bg-cyan-600 border-0 rounded md:my-12 dark:bg-pink-500" />
      <h3 className="text-3xl  font-bold text-left dark:text-pink-500 text-pink-800">
        Tech Stack{' '}
      </h3>
      <h2 className="text-3xl font-bold mb-3 text-center">
        Webbutvecklare och Tillgänglighetsexpert
      </h2>
      <div>
        <h3 className=" font-bold text-cyan-800 dark:text-cyan-200 ">
          Frontend Utveckling
        </h3>
        <p className="mt-2">
          HTML5, CSS3, JavaScript, TypeScript: Rutinerad inom grundläggande och
          avancerade frontend-tekniker.
        </p>
        <p className="mt-4">
          React, Next.js: Erfarenhet i moderna JavaScript-ramverk och bibliotek
          för byggande av skalbara SPA och SSR applikationer.
        </p>
        <p className="mt-4">
          Redux, Context API: Hantering av applikationsstatus och dataflöden i
          komplexa projekt.
        </p>
        <p className="mt-4">
          jQuery: Kunskap inom detta bibliotek, även om dess relevans har
          minskat med moderna frontend-ramverk.
        </p>
        <p className="mt-4">
          Tailwind CSS: Implementering av utility-first CSS för snabb och
          effektiv UI-utveckling.
        </p>
        <p className="mt-4">
          Framer Motion: Användning för sofistikerade animationer inom
          React-ekosystemet.
        </p>

        <h3 className=" font-bold text-cyan-800 dark:text-cyan-200 ">
          Backend Utveckling
        </h3>
        <p className="mt-4">
          Node.js, Express: Skapande av server-side applikationer med
          JavaScript.
        </p>
        <p className="mt-4">
          MongoDB, Mongoose: Utveckling och hantering av NoSQL-databaser för
          applikationer med stora datamängder.
        </p>
        <p className="mt-4">
          APIs: Design och integration av RESTful och GraphQL APIs för effektiv
          kommunikation mellan klient och server.
        </p>

        <h3 className=" font-bold text-cyan-800 dark:text-cyan-200 ">
          UX/UI Design
        </h3>
        <p className="mt-4">
          Figma: Prototyping och UI-design för att skapa interaktiva och
          användarvänliga gränssnitt.
        </p>
        <p className="mt-4">
          UX-design: Kompetens i att optimera användarupplevelser genom väl
          genomtänkta designprinciper.
        </p>

        <h3 className=" font-bold text-cyan-800 dark:text-cyan-200 ">
          Tillgänglighet och SEO
        </h3>
        <p className="mt-4">
          WCAG 2.2, WAI-ARIA: Tillämpning av tillgänglighetsstandarder för att
          säkerställa webbplatser är tillgängliga för alla användare.
        </p>
        <p className="mt-4">
          SEO, Google Analytics: Optimering av webbsidor för sökmotorer och
          analys av användarbeteende för att förbättra sidans prestanda och
          synlighet.
        </p>

        <h3 className=" font-bold text-cyan-800 dark:text-cyan-200 ">
          Versionshantering och Verktyg
        </h3>
        <p className="mt-4">
          Git: Effektiv hantering av kodbaser och projektversioner genom
          branschstandard verktyg för versionskontroll.
        </p>

        <h3 className=" font-bold text-cyan-800 dark:text-cyan-200 ">
          CMS och Övriga Verktyg
        </h3>
        <p className="mt-4">
          Sanity: Användning av headless CMS för flexibel och skalbar
          innehållshantering.
        </p>
      </div>
    </motion.section>
  )
}
