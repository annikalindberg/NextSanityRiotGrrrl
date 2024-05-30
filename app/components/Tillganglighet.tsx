'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '@/public/assets/check.svg'
import Link from 'next/link'
import banner from '@/public/images/banner2.svg'
import womanbaby from '@/public/images/womenbaby.svg'
import armprotes from '@/public/images/tjej-armprotes.svg'
import { CTAButton } from './cta-buttons'
import Direktivet from '../components/Direktivet-accordion'

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

export default function Tillganglighet() {
  return (
    <>
      <section className=" max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
          className="flex justify-center items-center"
        >
          {' '}
          <h2>Fem skäl till att din hemsida ska vara tillgänglig</h2>{' '}
          <Image
            alt="Illustreration av en funktionsdiversifierad grupp människor med olika hudfärger och kön. som sträcker upp händer i luften och är glada."
            src={banner}
            width={600}
            height={400}
            className="items-center w-1/2 justify-center lg:w-3/4"
          />
        </motion.div>
        <motion.article
          initial="initial"
          animate="animate"
          variants={articleVariants}
          className=" pt-8 "
        >
          <p>
            Många pratar idag om vikten av att ha en tillgänglig webbplats. Men
            vad innebär det egentligen, och vad har du att vinna på att optimera
            tillgängligheten digitalt?{' '}
          </p>
          <h3>Tillgänglighet online: Mer än bara ett krav</h3>{' '}
          <p className="mt-4">
            Låt oss förklara varför en tillgänglig webbplats inte bara är ett
            lagkrav utan också en <strong>fördel</strong> för din verksamhet. Vi
            kommer att titta på hur tillgänglighet kan gynna din verksamhet, och
            varför det är så viktigt att börja tänka på tillgänglighet redan
            idag.
          </p>
          <p className="mt-4">
            Men först och främst, vad betyder det att en webbplats är{' '}
            <em>tillgänglig</em>?
          </p>
          <p className="mt-4">
            Tillgänglighet betyder att din webbplats är byggd så att alla,
            oavsett funktionsvariation, enkelt kan interagera med den.
            Textelement ska kunna läsas av skärmläsare, det ska gå att navigera
            med endast tangentbord och personer med nedsatt motorik ska utan
            hinder kunna klicka på länkar.
          </p>{' '}
          <h3>Varför tillgänglighetsoptimera?</h3>
          <p>
            Om vi vänder på frågan och istället frågar oss{' '}
            <em>vad är syftet med din webbplats?</em> I 99 fall av 100 är det
            den första plats en kund eller besökare kommer i kontakt med ditt
            varumärke. Det spelar ingen roll om du driver en frisörsalong, en
            tech-startup eller en stor e-handel, så är din webbplats en av dina{' '}
            <strong>viktigaste tillgångar</strong>. Oavsett vad målet är med din
            verksamhet, är din webbplats hjärtat i din digitala strategi och
            ditt ansikte utåt.
          </p>{' '}
          <p className="mt-4">
            {' '}
            Över 20% av befolkningen lever med en permanent
            funktionsnedsättning. I Sverige, där nästan alla, 97.2% av
            befolkningen, använder internet dagligen, innebär detta att cirka 2
            miljoner människor kan stöta på hinder när de besöker en webbplats
            som inte är tillgängligt utformad.
          </p>
          <h2>1. Tillgänglighet gagnar alla</h2>
          <p>
            Tillgänglighet på din webbplats gynnar inte bara individer med
            permanenta funktionsnedsättningar.{' '}
          </p>
          <p className="mt-4">
            Tänk på alla situationer där någon kan uppleva tillfälliga
            svårigheter, som att navigera en webbplats med en hand när man
            håller en bebis, eller att försöka läsa i en bullrig miljö.
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
                alt="Person som håller en bebis i famnen med ena handen och skriver på en laptop med den andra."
                src={womanbaby}
                width={600}
                height={400}
                className=" max-w-80 rounded-xl mt-6 mb-6 lg:inline-block align-top"
              />
            </div>
            <div className="flex flex-col justify-center items-center  md:w-1/2 md:p-8 ">
              {' '}
              <p>
                Genom att göra din webbplats tillgänglig skapar du en bättre
                upplevelse för alla användare, oavsett deras situation. Din
                webbplats bör vara mer än bara laglydig; den bör vara en
                attraktiv plats dit dina besökare vill återvända till igen och
                igen.{' '}
              </p>{' '}
              <p className="ml-6 mt-4 mb-4 md:mr-20 lg:mr-auto lg:ml-auto">
                {' '}
                <em>
                  Att ha en webbplats som är tillgänglig för alla, förbättrar
                  även upplevelsen för <strong>alla</strong> besökare
                </em>
              </p>{' '}
            </div>
          </motion.div>
          <h2>2. Tillgänglighet ökar SEO</h2>
          <p>
            En tillgänglig webbplats är inte bara en fördel för användarna, det
            är också en fördel för din{' '}
            <strong>synlighet i sökmotorerna och ditt SEO</strong>.{' '}
          </p>
          <h2>3. Tillgänglighet ökar konverteringarna </h2>
          <p>
            Att öka tillgängligheten på din webbplats är därför inte bara en
            fråga om att följa lagar och regler, eller att vara `&quot;`snäll
            mot människor med funktionsvariationer`&quot;`. Det är en fråga om
            att skapa en bättre webbplats för<strong> alla,</strong> och
            därigenom öka din{' '}
            <strong>synlighet, din trovärdighet, och ditt förtroende</strong>{' '}
            online.
          </p>{' '}
          <p>
            Tillgängliget är någonting som gynnnar{' '}
            <strong> alla användare,</strong> vilket kommer att öka{' '}
            <strong>
              kvaliteten på din hemsida, din trovärdighet, och ditt förtroende
            </strong>{' '}
            online.
          </p>
          <h2>4. Den nya lagen om tillgänglighet - 2025 </h2>
          <p className="mt-4">
            Att ignorera tillgänglighet kan inte bara skada ditt varumärkes
            anseende. Det kan också få juridiska påföljder. Många länder har
            lagar som kräver tillgänglighetsstandarder för digitala plattformar.
            Att inte uppfylla dessa krav kan resultera i kostsamma
            rättsprocesser. Den nya lagen som börjar gälla 2025,
            (tillgänglighetsdirektivet) har likheter med
            webbtillgänglighetsdirektivet för offentlig sektor som började gälla
            2019.{' '}
          </p>
          <Direktivet />
          {/*
          </p>{' '}
          <h3>Webbtillgänglighetsdirektivet (2019) </h3>
          <p className="mt-4">
            Du har nog hört talas om DOS-lagen, eller Lagen om tillgänglighet
            till digital offentlig service. Webbtillgänglighetsdirektivet är
            dess juridiska benämning. EU:s webbtillgänglighetsdirektiv är en
            gemensam EU-lagstiftning som trädde i kraft i svensk lag 1 januari
            2019. Lagen säger att offfentliga webbplatser i Sverige ska vara
            tillgängliga, och från och med 2025 gäller detta även för privata
            företag. Att inte följa dessa krav kan leda till sanktioner.
          </p>
          <h3>Vad innebär EU:s tillgänglighetsdirektiv (2025)?</h3>
          <p className="mt-4">
            Från och med 2025 kommer även privata och kommersiella aktörer i
            Sverige att att omfattas av lagarna om digital tillgänglighet.
            Europaparlamentets och rådets direktiv om tillgänglighetskrav för
            produkter och tjänster, även kallat tillgänglighetsdirektivet,
            handlar om att göra livet enklare för människor med
            funktionsnedsättningar och äldre i EU. Det innebär att produkter och
            tjänster måste bli mer tillgängliga för dem. Genom att ha gemensamma
            regler för tillgänglighet blir det också lättare för företag att
            förstå och följa lagarna. Det kan minska krångel och göra det
            lättare att handla mellan olika EU-länder. Så,
            tillgänglighetsdirektivet handlar både om att hjälpa människor och
            förenkla för företag. Direktivet innebär att nya produkter och
            tjänster bör uppfylla kraven enligt standarden EN 301 549
            tillsammans med WCAG 2.1. En kontrollmyndighet kommer att granska
            att kraven uppfylls, och besluta om sanktionsavgift till lägst 10
            000 och högst 10 000 000 SEK. Företag som inte följer lagen riskerar
            alltså böter och kan till och med få sina produkter eller tjänster
            borttagna från marknaden.
          </p> */}
          <Image
            alt="Illustration av en person som skriver på en laptop och en annan person som tittar på en mobiltelefon."
            src={armprotes}
            width={600}
            height={400}
            className=" max-w-90 items-center rounded-xl mt-6 mb-6 lg:inline-block align-top"
          />
          <h2>
            5. Alla har rätt till information och tjänster - oavsett
            funktionsvariation
          </h2>
          <p>
            För de allra flesta är det självklart att vi inte ska exkludera
            användare, men när det kommer till kritan är det precis det vi gör
            när vi inte tar tillgänglighet på allvar.{' '}
          </p>{' '}
          <p>
            Att säkerställa att er webbplats följer lagkrav är en, om än mycket
            viktig, del av tillgänglighetsoptimering. Men att skapa en
            tillgänglig webbplats handlar om mer än att följa lagar och regler.
            Det handlar i grund och botten om samma sak som allt annat inom
            webbutveckling:{' '}
            <strong> att skapa en bra användarupplevelse.</strong>{' '}
          </p>
          <p className="mt-4">
            {' '}
            Tänk på att tillgång till information och tjänster är
            <strong> en rättighet</strong>, inte ett privilegium. I en värld där
            digital närvaro blir alltmer avgörande, spelar webbtillgänglighet en
            central roll i att säkerställa att alla har lika tillgång till
            information och möjligheter.{' '}
          </p>
          <h3>Sammanfattningsvis...</h3>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="py-1 lg:py-15 mt-4 mb-4"
            aria-label="Sammanfattning av fördelar med tillgänglighetsoptimering"
          >
            <p>
              Sammanfattningsvis, en tillgänglig webbplats är inte bara en
              fördel; det är en nödvändighet i dagens digitala värld. Låt oss
              hjälpa dig att göra din webbplats tillgänglig för alla.
            </p>

            <p className="mt-4">
              Slutligen. Önskar du att din webbplats ska ge dig och din
              verksamhet:{' '}
            </p>
            <ul
              aria-label="Fördelar med tillgänglighetsoptimering"
              className="mt-4 mb-4 text-1xl space-y-3 flex justify-center flex-col"
            >
              {[
                'Fler positiva användarupplevelser',
                'Förbättrad SEO',
                'Ökad seriosistet och trovärdighet',
                'Fler konverteringar',
                'Lugn och ro inför 2025',
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
          <p>
            Kontakta oss idag för att utforska hur enkelt och fördelaktigt det
            kan vara att göra din webbplats tillgänglig för alla.
          </p>{' '}
          <div className="flex items-center mt-8 mb-6">
            <Link
              href="/tillganglighets-audits"
              className=" m-12 mx-auto rounded bg-rose-900 text-white dark:bg-rose-100 dark:text-slate-950 py-4 px-4 font-medium hover:bg-rose-800 dark:hover:bg-fuchsia-200 transition-colors duration-500 ease-in-out  transform hover:scale-105 "
            >
              Jag vill ha proffshjälp att tillgänglighetsoptimera!
            </Link>
          </div>
          <p>
            Vi på NextToEdit Tech Solutions tycker att tillgänglighet
            <em> bör vara</em>, och tror att tillgänglighet i framtiden{' '}
            <em>kommer att vara </em>någonting självklart och redan inbyggt i
            allt nytt digitalt skapande.
          </p>{' '}
          <p>
            {' '}
            Våra experter är här för att underlätta det för dig genom
            granskningar, tips och råd, kunskap och stöd - så att du kan få mer
            tid att göra det som du är expert på!
          </p>
          <div className="flex items-center mt-8 mb-6">
            <p className="mt-8 text-2xl font-semibold">
              Just nu bjuder vi på en kostnadsfri tillgänglighetsgranskning av
              din hemsida! Allt du behöver göra är att fylla i ditt url och din
              e-postadress - så får du veta vad som behöver åtgärdas!{' '}
            </p>{' '}
          </div>
          <div className="flex items-center mt-8 mb-6">
            <CTAButton
              title="Kostnadsfri Audit"
              buttonLabel="Boka kostnadsfri Audit"
            />
          </div>
        </motion.article>{' '}
      </section>
    </>
  )
}
