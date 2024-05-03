'use client' // This file is client-side only
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '@/public/assets/check.svg'
import Link from 'next/link'
import banner from '@/public/images/banner2.svg'
import FaqTillganglighet from './FaqTillganglighet'

const articleVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
}
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
      <section className=" max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {' '}
        <FaqTillganglighet />
        {/*       <motion.div
          initial={{ x: 200, opacity: 0 }} // Start from the right side with no visibility
          animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
          className="flex justify-center items-center"
        >
          {' '}
          <Image
            alt="Illustreration av en funktionsdiversifierad grupp människor med olika hudfärger och kön. som sträcker upp händer i luften och är glada."
            src={banner}
            width={600}
            height={400}
            className="mt-10 justify-center"
          />
        </motion.div> */}
        {/* <h2>&quot;Digital tillgänglighet&quot;..?</h2>
          <p>
            Många pratar idag om vikten av att ha en tillgänglig webbplats. Men
            vad innebär det egentligen?{' '}
          </p>{' '}
          <p>
            En tillgänglig webbplats är en webbplats som är utformad och byggd
            på ett sätt som gör att alla, oavsett funktionsvariationer, kan
            använda den. Det kan handla om allt från att göra texten på sidan
            läsbar för skärmläsare, till att se till att knappar och länkar är
            lätta att klicka på för personer med nedsatt rörlighet.
          </p>
          <h2>Varför är det så viktigt?</h2>
          <p>
            Oavsett om du driver en liten blogg eller en stor e-handel, är din
            webbplats en av dina viktigaste tillgångar. Vare sig ditt mål är att
            öka försäljningen, attrahera fler kunder, eller förbättra din
            synlighet online, är din webbplats hjärtat i din digitala strategi
            och ditt ansikte utåt. I 99 fall av 100 är det den första plats en
            kund eller besökare kommer i kontakt med ditt varumärke. Att öka
            tillgängligheten på din webbplats är därför inte bara en fråga om
            att följa lagar och regler, eller att vara snäll mot människor med
            funktionsvariationer. Det är en fråga om att skapa en bättre
            webbplats för alla, och därigenom öka din synlighet, din
            trovärdighet, och ditt förtroende online.
          </p>
          <p className="ml-6 md:ml-20 md:mr-20 lg:mr-50 lg:ml-50 italic">
            Att ha en webbplats som är tillgänglig för alla, förbättrar även
            upplevelsen för <strong>alla</strong> besökare
          </p>
          <p>
            Att säkerställa att er webbplats följer lagkrav är en, om än mycket
            viktig, del av tillgänglighetsoptimering. Men att skapa en
            tillgänglig webbplats handlar om mer än att följa lagar och regler.
            Det handlar i grund och botten om samma sak som allt annat inom
            webbutveckling: att skapa en bra användarupplevelse. Att göra webben
            tillgänglig för alla är inte bara en fråga om rättvisa och
            jämlikhet, det är också en fråga om affärsmässig framgång.
            Tillgänglighet är en investering som ger avkastning även i form av:
          </p>
          <p className="">
            Vill du veta mer om hur du kan förbättra tillgängligheten på din
            webbplats och därigenom inte bara möta lagkrav men även förstärka
            ditt varumärkes rykte? Kontakta oss idag för att utforska hur enkelt
            och fördelaktigt det kan vara att göra din webbplats tillgänglig för
            alla.
          </p>{' '} */}
        {/*  <Link
            href="/pricing"
            className=" rounded bg-rose-900 text-white dark:bg-fuchsia-100 dark:text-slate-900 py-4 px-4 font-medium hover:bg-rose-800 dark:hover:bg-fuchsia-200 transition-colors duration-500 ease-in-out  transform hover:scale-105 "
          >
            Läs mer om våra priser och paket
          </Link> */}
        {/*   <motion.article
          initial="initial"
          animate="animate"
          variants={articleVariants}
          className="divide-y  divide-gray-100 dark:divide-gray-700 pt-8 "
        >
          <h2 className="text-xl font-semibold">
            Affärsmässiga fördelar med tillgänglighet
          </h2>
          <p>
            Att skapa en tillgänglig webbplats är inte bara en god gärning; det
            är en smart affärsstrategi. Över en miljard människor globalt lever
            med någon form av funktionsnedsättning. Genom att säkerställa att
            din webbplats är tillgänglig, utvidgar du din potentiella kundbas
            och öppnar din verksamhet för en bredare publik.
          </p>
          <h2>Användarvänlighet och ökad försäljning</h2>
          <p>
            Webbplatser som är byggda med tillgänglighet i åtanke är ofta mer
            användarvänliga, vilket leder till en förbättrad kundupplevelse och
            ökad försäljning. Tillgänglighet handlar om att skapa webbplatser
            som alla kan använda, vilket i sin tur kan minska avhopp och öka
            konverteringarna.
          </p>
          <h2>Juridiskt skydd och rykteshantering</h2>
          <p>
            Att ignorera tillgänglighet kan leda till juridiska utmaningar och
            skada ditt varumärkes anseende. Många länder har lagar som kräver
            tillgänglighetsstandarder för digitala plattformar, och att inte
            uppfylla dessa krav kan resultera i kostsamma rättsprocesser.
          </p>
          <h2>Moraliska skäl: En inkluderande digital värld</h2>
          <p>
            Tänk på att tillgång till information och tjänster är en rättighet,
            inte ett privilegium. I en värld där digital närvaro blir alltmer
            avgörande, spelar webbtillgänglighet en central roll i att
            säkerställa att alla har lika tillgång till information och
            möjligheter.
          </p>
          <h2>Egennytta: Förbättra din professionella kompetens</h2>
          <p>
            Kunskaper i webbtillgänglighet är mycket eftertraktade och kan öka
            dina yrkesmässiga möjligheter och potentiellt din inkomst. Att
            arbeta med tillgänglighetsfrågor utmanar traditionella designnormer
            och förbättrar ditt arbete på alla nivåer.
          </p>
          <h2>Hur personer med funktionsnedsättning använder webben</h2>
          <p>
            Att förstå hur personer med olika funktionsnedsättningar använder
            webben är avgörande. Detta inkluderar allt från teknik som
            skärmläsare för personer med synnedsättning till anpassade
            inmatningsenheter för de med motoriska begränsningar. Att designa
            med dessa behov i åtanke är essentiellt för att skapa en tillgänglig
            och inkluderande digital miljö.
          </p>
        </motion.article> */}
        {/* <motion.section
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
        </motion.section> */}
      </section>
    </div>
  )
}
