'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { CTAButton } from '../cta-buttons'
import annika from '@/public/images/annika.svg'
import highfive from '@/public/images/highfive.svg'
import alex from '@/public/images/alex.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import classes from '../om-oss/omoss.module.css'

const articleVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
}
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

export default function OmOss() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-16">
      <h1>
        NextToEdit Tech Solutions – för en digital värld där alla har plats.
      </h1>{' '}
      <p className={classes.text}>
        Vi startade det här företaget med en enkel, men kraftfull idé: att göra
        den digitala världen tillgänglig för alla.{' '}
      </p>{' '}
      <p className={classes.text}>
        Är du tech-nörden som drömmer i kod? Eller är du den som fortfarande
        tror att &quot;cookie&quot; bara är något gott till kaffet? Oavsett, du
        är på rätt ställe. Vi är här för att göra din digitala resa så smidig
        och rolig som möjligt.{' '}
      </p>{' '}
      <h2 className="text-center">Vi som är NextToEdit Tech Solutions</h2>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
        className="flex flex-col mx-auto my-auto md:flex-row  "
      >
        <div className="flex flex-col md:flex-row  mx-auto my-auto justify-between gap-8">
          <figure className=" mb-10 items-center md:w-1/2 justify-center lg:w-3/4">
            <Image
              alt="Annika Lindberg porträtt"
              src={annika}
              width={400}
              height={500}
              /*             className="items-center w-1/2 justify-center lg:w-3/4"
               */
            />
            <figcaption className={classes.figcaption}>
              Annika Lindberg, Fullstack-utvecklare och tillgänglighetsexpert
            </figcaption>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-full bg-red-200 dark:bg-rose-950 p-5">
                  Läs mer om Annika
                </AccordionTrigger>{' '}
                <AccordionContent>
                  <h3> Från akademisk kunskap till teknisk skicklighet</h3>
                  <p className={classes.textSmall}>
                    Som frontendutvecklare, UX-designer och utbildare har jag en
                    unik kombination av teknisk kompetens och pedagogisk
                    erfarenhet som gör mig särskilt lämpad att undervisa i
                    digital tillgänglighet. Min resa började i offentlig och
                    ideell sektor, där jag under över ett decennium arbetade med
                    projektledning och utbildning. Genom detta lärde jag mig att
                    hantera komplexa processer och att anpassa utbildning efter
                    olika målgruppers behov.{' '}
                  </p>
                  <h3> En banbrytande kraft för jämlikhet och inkludering</h3>
                  <p className={classes.textSmall}>
                    När jag sedan övergick till tech-världen, öppnade det nya
                    möjligheter att kombinera min passion för frontendutveckling
                    och UX-design med min erfarenhet av pedagogik. I min roll
                    som lärare inom frontendutveckling har jag haft möjligheten
                    att undervisa i teknologier som JavaScript, TypeScript och
                    React, samtidigt som jag introducerat mina studenter till
                    grunderna i användbarhet och tjänstedesigndesign.{' '}
                  </p>
                  <h3> Teknisk expertis i praktiken</h3>
                  <p className={classes.textSmall}>
                    UX-design för mig handlar om att skapa digitala lösningar
                    som alla användare, inte bara kan använda, utan vill
                    använda. Tillgänglighet är en central del av mitt arbete,
                    både som utvecklare och utbildare. Jag brinner för att lära
                    ut hur man bygger inkluderande webbplatser som fungerar för
                    alla, oavsett förmåga. Jag tror starkt på att kodning och
                    UX-design är färdigheter som kan läras av alla, och jag har
                    en särskild passion för att stötta kvinnor och
                    underrepresenterade grupper att ta klivet in i tech-världen.{' '}
                  </p>
                  <p className={classes.textSmall}>
                    {' '}
                    Min undervisningsfilosofi bygger på att skapa en trygg och
                    inspirerande lärmiljö där det är okej att göra misstag.
                    Genom att ge studenterna verktygen och självförtroendet de
                    behöver för att experimentera och misslyckas, hjälper jag
                    dem att utvecklas både tekniskt och kreativt. Att vara den
                    förebild jag själv saknade när jag började är en av mina
                    största drivkrafter.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </figure>
          <figure className="mb-10 items-center md:w-1/2 justify-center lg:w-3/4">
            <Image
              alt="Alex Alexandersson porträtt"
              src={alex}
              width={400}
              height={500}
            />
            <figcaption className={classes.figcaption}>
              Alex Alexandersson, pedagogisk utvecklare och
              tillgänglighetsexpert
            </figcaption>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-full bg-red-200  dark:bg-rose-950 p-5">
                  Läs mer om Alex
                </AccordionTrigger>{' '}
                <AccordionContent>
                  <p className={classes.textSmall}>
                    Med över 15 år inom tillgänglighetsarbete är Alex expert på
                    användarupplevelse och digital tillgänglighet. Hennes
                    omfattande erfarenhet sträcker sig över arbete som
                    pedagogisk utvecklare på Södertörns Högskola och Kungliga
                    Tekniska Högskolan (KTH) under de senaste 12 åren, och hon
                    arbetar nu på Karolinska Institutet (KI).{' '}
                  </p>
                  <p className={classes.textSmall}>
                    Hennes djupa förståelse för WCAG-riktlinjerna och hennes
                    erfarenheter från arbete med diverse CMS och lärplattformar
                    (LMS) ger henne en unik förmåga att skapa lösningar som är
                    enkla för alla att använda. Alex är särskilt skicklig i att
                    förbättra kognitiv tillgänglighet och att författa innehåll
                    som alla kan förstå. Alex finner stor njutning i
                    korrekturläsning och har utvecklat ett särskilt öga för
                    detaljer, vilket gör henne till teamets go-to person för att
                    se till att allt är punktligt och prydligt.
                  </p>
                  <p className={classes.textSmall}>
                    Alex är särskilt skicklig i att förbättra kognitiv
                    tillgänglighet och att författa innehåll som alla kan
                    förstå. Alex finner stor njutning i korrekturläsning och har
                    utvecklat ett särskilt öga för detaljer, vilket gör henne
                    till teamets go-to person för att se till att allt är
                    punktligt och prydligt.
                  </p>
                  <p className={classes.textSmall}>
                    Alex utgår alltid från riktlinjer för klarspråk. Att göra
                    tillgängliga PDF:er är också något som Alex gärna tar sig
                    an.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </figure>
        </div>
      </motion.div>
      <motion.article
        initial="initial"
        animate="animate"
        variants={articleVariants}
        className="pt-8 "
      >
        <p className="mt-4">
          Våra specialkompetenser är inte bara en teknisk resurs – de är en del
          av vår mission att göra digitala upplevelser bättre för alla. Genom
          att välja oss följer du inte bara lagar och regler utan tar också ett
          steg mot en mer inkluderande värld.
        </p>{' '}
        <h2 className="text-center">Varför välja oss?</h2>{' '}
        <p>
          På NextToEdit Tech Solutions är tillgänglighet inte bara en del av vår
          affärsmodell – det är kärnan i allt vi gör. Vårt åtagande är att varje
          webbplats vi utvecklar ska vara tillgänglig för alla, oavsett
          användarens fysiska eller kognitiva förmågor. Vi följer strikt de
          internationella riktlinjerna för webbtillgänglighet och anpassar oss
          kontinuerligt till rådande standarder och teknologier. Allt för att
          säkerställa att våra digitala lösningar är så inkluderande som
          möjligt.{' '}
        </p>{' '}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
          className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-center lg:space-x-6"
        >
          {' '}
          <div className="flex   md:w-1/2 lg:justify-between">
            <Image
              alt="Illustration av tre personer som ger varandra en high five."
              src={highfive}
              width={600}
              height={400}
              className=" max-w-80 rounded-xl mt-6 mb-6 lg:inline-block align-top"
            />
          </div>
          <div className="flex flex-col justify-center items-center  md:w-1/2 md:p-8 ">
            {' '}
            <p className="ml-6 mt-4 mb-4 md:mr-20 lg:mr-auto lg:ml-auto">
              {' '}
              <em>
                Det handlar inte bara om att följa lagar och regler, utan om att
                skapa en digital värld där varje person kan delta fullt ut.{' '}
              </em>
            </p>{' '}
          </div>
        </motion.div>
        <p>
          Kontakta oss idag för att utforska hur enkelt och fördelaktigt det kan
          vara att göra din webbplats tillgänglig för alla.
        </p>{' '}
        <div className=" mt-10 mb-10 md:mt-16 md:mb-16 lg:mt-20 lg:mb-20">
          <CTAButton
            title="Kostnadsfri Audit"
            buttonLabel="Boka kostnadsfri Audit"
          />
        </div>
      </motion.article>
    </div>
  )
}
