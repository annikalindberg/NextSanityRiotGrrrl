'use client' // This file is client-side only
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '@/public/assets/check.svg'
import Link from 'next/link'
import banner from '@/public/images/banner2.svg'

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
export default function OmTillganglighet() {
  return (
    <div className="bg-sky-100 dark:bg-sky-900 pt-5 md:pt-10 lg:pt-20 min-h-screen">
      <main className=" max-w-3xl mx-auto px-4 m-4 ">
        {' '}
        <h1 className="pt-4  font-bold  ">Varför tillgänglighet?</h1>
        <motion.div
          initial={{ x: 200, opacity: 0 }} // Start from the right side with no visibility
          animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
          className="flex justify-center items-center"
        >
          {' '}
          <Image
            alt="Kvinna med en laptop i knät och knutna nävar i luften som en segergest."
            src={banner}
            width={600}
            height={400}
            className="mt-10 justify-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          className="divide-y  divide-gray-100 dark:divide-gray-700 pt-8 "
        >
          <div className="prose max-w-none prose-lg pb-7 dark:prose-invert xl:col-span-2 mb-0.5">
            <p>
              Många pratar idag om vikten av att ha en tillgänglig webbplats.
              Men vad innebär det egentligen?{' '}
            </p>
            <p>Vi hjälper dig reda ut begreppen.</p>
            <h2>Vad är en tillgänglig webbplats?</h2>
            <p>
              En tillgänglig webbplats är en webbplats som är utformad och byggd
              på ett sätt som gör att alla, oavsett funktionsvariationer, kan
              använda den. Det kan handla om allt från att göra texten på sidan
              läsbar för skärmläsare, till att se till att knappar och länkar är
              lätta att klicka på för personer med nedsatt rörlighet.
            </p>
            <p>
              Och varför är det så viktigt? Oavsett om du driver en liten blogg
              eller en stor e-handel, är din webbplats en av dina viktigaste
              tillgångar. Vare sig ditt mål är att öka försäljningen, attrahera
              fler kunder, eller förbättra din synlighet online, är din
              webbplats hjärtat i din digitala strategi.
            </p>

            <p>
              Att säkerställa att er webbplats följer lagkrav är en, om än
              mycket viktig, del av tillgänglighetsoptimering. Men att skapa en
              tillgänglig webbplats handlar om mer än att följa lagar och
              regler. Det handlar i grund och botten om samma sak som allt annat
              inom webbutveckling: att skapa en bra användarupplevelse. Att göra
              webben tillgänglig för alla är inte bara en fråga om rättvisa och
              jämlikhet, det är också en fråga om affärsmässig framgång.
              Tillgänglighet är en investering som ger avkastning även i form
              av:
            </p>
            <p className="">
              Vill du veta mer om hur du kan förbättra tillgängligheten på din
              webbplats och därigenom inte bara möta lagkrav men även förstärka
              ditt varumärkes rykte? Kontakta oss idag för att utforska hur
              enkelt och fördelaktigt det kan vara att göra din webbplats
              tillgänglig för alla.
            </p>
            <Link
              href="/pricing"
              className=" rounded bg-rose-900 text-white dark:bg-fuchsia-100 dark:text-slate-900 py-4 px-4 font-medium hover:bg-rose-800 dark:hover:bg-fuchsia-200 transition-colors duration-500 ease-in-out  transform hover:scale-105 "
            >
              Läs mer om våra priser och paket
            </Link>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="py-1 lg:py-15"
            aria-label="Pricing Options"
          >
            <ul
              aria-label="Fördelar med tillgänglighetsoptimering"
              className=" text-1xl space-y-3 flex justify-center flex-col"
            >
              {[
                'Fler positiva användarupplevelser',
                'En webbplats som älskas av sökmotorer',
                'Ökad seriostet och trovärdighet',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
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
          </motion.section>

          <div className="items-center space-y-3 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">
            <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
              <p>
                En tillgänglig webbplats säkerställer att alla, oavsett
                funktionsvariationer, kan navigera, förstå och interagera med
                ditt innehåll utan hinder. Detta inte bara breddar din
                potentiella kundbas, utan också skapar en mer inkluderande och
                välkomnande miljö för alla besökare. Genom att optimera
                tillgängligheten för din webbplattform, öppnar du dörren till
                större engagemang och ökad kundlojalitet.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
