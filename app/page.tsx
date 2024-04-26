'use client' // This file is client-side only
import Image from 'next/image'
import banner from '@/public/images/banner.svg'
import SectionDivider from '@/components/ui/SectionDivider'
import { motion } from 'framer-motion'
import Logo from '@/public/images/Logo.svg'
import Hero from './components/Hero'

/* import {Pricing }from "./components/pricing";
 */ export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-w-3xl mx-auto px-4 m-4 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          className="divide-y  divide-gray-100 dark:divide-gray-700 pt-8 "
        >
          <div className="items-center space-y-3 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">
            <motion.div className="flex flex-col items-center pt-8">
              <h2 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                Vad vinner du på att tillgänglighetsoptimera din webb?
              </h2>

              <p>
                Att säkerställa att er webbplats följer lagkrav är ett viktigt
                steg på vägen mot en webbplats som är tillgänglig för alla, men
                är långt ifrån en garanti att alla era användare får en positiv
                användarupplevelse när de besöker er webb.
              </p>
              <p>
                Vare sig ditt mål är att öka försäljningen, attrahera fler
                kunder, eller förbättra din synlighet online, är din webbplats
                hjärtat i din digitala strategi.
              </p>
              <p>
                {' '}
                Det är platsen där potentiella kunder först interagerar med ditt
                varumärke och där dina produkter och tjänster presenteras. Men,
                för att verkligen dra nytta av din närvaro online, är det
                avgörande att din webbplats är tillgänglig för alla användare.
              </p>
              <p>
                En tillgänglig webbplats säkerställer att alla, oavsett
                funktionsvariationer, kan navigera, förstå och interagera med
                ditt innehåll utan hinder. Detta inte bara breddar din
                potentiella kundbas, utan också skapar en mer inkluderande och
                välkomnande miljö för alla besökare. Genom att optimera
                tillgängligheten för din webbplattform, öppnar du dörren till
                större engagemang och ökad kundlojalitet.
              </p>
            </motion.div>
          </div>
          <div className="items-center space-y-3 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">
            <motion.div className="flex flex-col items-center pt-8">
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                Annika Lindberg
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-center">
                Hey my name is Annika and I am a Full Stack developer
              </p>

              <div className="flex space-x-5 pt-6">
                <a href="" target="_blank">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="w-8 h-8 text-teal-500 hover:text-teal-600"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                  </svg>
                </a>
                <a href="" target="_blank">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="w-8 h-8 text-teal-500 hover:text-teal-600"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                  </svg>
                </a>
                <a href="" target="_blank">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="w-8 h-8 text-teal-500 hover:text-teal-600"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
                  </svg>
                </a>
                <a href="" target="_blank">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="w-8 h-8 text-teal-500 hover:text-teal-600"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
              <p>
                Im a Stockholm-based front-end developer with a flair for
                crafting accessible, React.js-based web solutions that meet WCAG
                2.2 standards.
              </p>
              <p>
                My work in the non-profit and education sectors fuels my drive
                to create SEO-optimized, accessible and professional websites
                with performance in mind. I craft tailored to your specific
                organizational needs, which often go beyond what template-based
                site builders can provide.
              </p>
              <p>
                React.js, Typescript, Next.js, Web Content Accessibility
                Standards, UX/UI, SEO, Hosting, CMS
              </p>
              <p>Let s build something great together.</p>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  )
}
