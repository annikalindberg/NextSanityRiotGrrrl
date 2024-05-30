'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import BottomLogo from '@/public/images/BottomLogo.png'
import TillganglighetLogo from '@/public/images/TopLogo.png'
import Image from 'next/image'

export function FaqTillganglighet() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between ">
        <h2>Frågor och svar om digital tillgänglighet</h2>
        <Image
          width={300}
          height={300}
          src={TillganglighetLogo}
          alt="TillganglighetLogo"
          className="mt-10 md:w-300 md:mt-2 md:mb-12"
        />
      </div>{' '}
      <Accordion
        type="single"
        collapsible
        className="max-w-xs ml-auto mr-auto p-10 bg-indigo-100 dark:bg-indigo-950 rounded-4xl md:max-w-4xl md:px-8"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Vad innebär det att en webbplats är tillgänglig?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              En tillgänglighetsoptimerad webbplats är en webbplats som är
              utformad och utvecklad för att vara användbar för alla människor,
              inklusive personer med funktionsnedsättningar. Det innebär att
              webbplatsen är utformad för att vara lätt att navigera, förstå och
              använda för alla användare, oavsett deras förmåga eller tekniska
              kunskaper.{' '}
            </p>
            <p className="mt-4">
              Det innebär också att den är byggd för att fungera optimalt med
              exempelvis skärmläsare och för den som navigerar med tangentbord.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Vad menar ni med &quot;tillgänglighetsoptimerad webbplats&quot;?{' '}
          </AccordionTrigger>
          <AccordionContent>
            <p>
              När vi pratar om tillgänglighetsoptimering, refererar vi till
              processen att göra en webbplats tillgänglig och användbar för alla
              personer, oavsett funktionsnedsättning eller tekniska
              förutsättningar. Detta begrepp skiljer sig från enbart
              &quot;tillgänglighetsanpassning&quot;, som ofta kan uppfattas som
              att webbplatsen justeras för att passa specifika grupper. Vi ser
              det inte som en isolerad anpassning, utan snarare som en
              omfattande optimering.
            </p>{' '}
            <p className="mt-4">
              Optimering för tillgänglighet innebär att vi integrerar
              tillgänglighet i varje steg av webbutvecklingsprocessen, från
              planering till genomförande och vidare underhåll. Det handlar inte
              bara om att lägga till tillgängliga funktioner som en eftertanke,
              likt hur meta-taggar läggs till för SEO. Istället ser vi
              tillgängligheten som en grundläggande aspekt av webbdesign som
              påverkar allt från kodstruktur till användarinteraktion och
              visuell design.
            </p>
            <p className="mt-4">
              Att optimera för tillgänglighet handlar om att identifiera och ta
              bort hinder som kan begränsa användarnas förmåga att navigera,
              förstå och interagera med webbplatsen. Genom att se till att alla
              element på sidan är tillgängliga och fungerar smidigt för alla
              användare, inklusive de som använder assistiv teknik som
              skärmläsare, försäkrar vi att webbplatsen är inkluderande.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Varför är tillgänglighet viktigt för en webbplats?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              Tillgänglighet är viktigt för en webbplats av flera skäl. För det
              första är det ett etiskt krav att se till att alla användare har
              tillgång till information och tjänster på webben.{' '}
            </p>
            <p className="mt-4">
              För det andra kan en tillgänglighetsoptimerad webbplats öka din
              målgrupps storlek och förbättra användarupplevelsen för alla
              användare. Slutligen kan en tillgänglighetsoptimerad webbplats
              också förbättra din webbplats SEO och sökmotorrankning.{' '}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            Hur testar jag om min webbplats är tillgänglighetsoptimerad?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              Det finns flera verktyg och metoder för att testa om din webbplats
              är tillgänglighetsoptimerad. Ett enkelt sätt är att använda
              webbaserade verktyg som Lighthouse eller WAVE som kan identifiera
              tillgänglighetsproblem på din webbplats.{' '}
            </p>
            <p>
              Oftast räcker det inte med att testa med ett av dessa verktyg,
              eftersom olika verktyg kan hitta olika problem. Det är därför en
              bra idé att använda flera verktyg och metoder för att testa din
              webbplats tillgänglighet.{' '}
            </p>
            <p className="mt-3">
              Automatiserade testverktyg behöver dock alltid kompletteras med
              manuella tester för att lyckas identifiera alla
              tillgänglighetsproblem på din webbplats. Du behöver vara bekväm
              med att använda de vanligaste assisterande teknologierna som
              skärmläsare för att kunna testa din webbplats på rätt sätt.{' '}
            </p>{' '}
            <p className="mt-3">
              Har du inte själv rätt kunskap för att testa din webbplats, bör du
              anlita någon som har det. Ett första steg kan vara att boka
              kostnadsfri tillgänglighetsrådgivning med oss, för att få en
              första diagnos av din webbplats tillgänglighet och råd hur du ska
              ta nästa steg.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            Hur många användare är det som påverkas negativt om min webbplats
            brister i tillgänglighet?
          </AccordionTrigger>
          <AccordionContent>
            {' '}
            <p>
              I Sverige använder nästan alla, 97,2% av befolkningen internet
              dagligen. Om din webbplats har brister i tillgänglighet utesluter
              den cirka två miljoner potentiella användare. Detta är bara i
              Sverige.{' '}
            </p>
            <p className="mt-4">
              Det är inte bara personer med funktionsnedsättningar som påverkas
              av en otillgänglig webbplats. Äldre personer, personer med långsam
              internetuppkoppling, personer som använder mobiltelefoner och
              surfplattor, och personer som inte talar svenska som förstaspråk
              kan också ha svårt att använda en otillgänglig webbplats.
            </p>
            <p className="mt-4">
              Lägger vi dessutom till alla som har tillfälliga funktionshinder,
              vilket du själv säkert upplevt om du brutit ett finger eller bara
              glömt dina hörlurar och försöker kolla på en video på tåget, så
              blir det en stor del av befolkningen som påverkas negativt av en
              otillgänglig webbplats.{' '}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">
            Varför hänger SEO och tillgänglighet ihop?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              Tillgänglighet och sökmotoroptimering (SEO) djupt sammanlänkade.
              En tillgänglig webbplats är lättare att indexera och förstå för
              sökmotorer som Google, vilket leder till högre placeringar i
              sökresultat. Att optimera din webbplats för tillgänglighet innebär
              att göra den mer läsbar för både användare och sökmotorer. Till
              exempel, om du använder korrekt HTML-kodning och alt-text för
              bilder, kan sökmotorer förstå innehållet på din webbplats bättre
              och ranka den högre i sökresultat.{' '}
            </p>
            <p className="mt-3">
              Dessutom, många av de åtgärder som krävs för att göra en webbplats
              tillgänglighetsoptimerad, såsom att förbättra laddningstiden och
              användarupplevelsen, kan också förbättra din webbplats SEO.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left">
            Om tillgänglighet är så viktig, varför är inte alla webbplatser
            tillgänglighetsoptimerade från början?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mt4">
              Det är en bra fråga. När internet var nytt var inte
              tillgängligheten lika prioriterad som den är idag. Ursprungligen
              skrevs webbsidor i HTML, ett kodspråk som redan då stödde
              tillgänglighet. Men när webben utvecklades och blev mer avancerad,
              introducerades nya tekniker och verktyg. Dessa gjorde det enklare
              att bygga webbplatser men var inte alltid optimerade för
              tillgänglighet.
            </p>
            <p className="mt4">
              {' '}
              Det är också så att det är enklare och snabbare att bygga en
              webbplats som inte är tillgänglighetsoptimerad.{' '}
            </p>{' '}
            <p className="mt-4">
              Många webbplatser byggs av personer som inte har kunskap om
              tillgänglighet, och med hjälp av plattformar som inte prioriterar
              tillgänglighet. Det är också så att det inte finns några lagkrav
              som tvingar webbplatser att vara tillgänglighetsoptimerade, vilket
              gör att många inte ser det som en prioritet.
            </p>{' '}
            <p className="mt-4">
              Dock har det på senare år blivit allt mer uppmärksammat och det
              finns fler och fler som ser tillgänglighet som en viktig del av
              webbutveckling. Nu finns det också olika lagkrav som ställer krav
              på att vissa webbplatser ska vara tillgänglighetsoptimerade.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-left">
            Innebär tillgänglighetsanpassning att min sida kommer att bli tråkig
            och ful?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              Nej, tvärtom! En tillgänglighetsoptimerad webbplats är en
              webbplats som är utformad och utvecklad för att vara användbar för
              alla människor, inklusive personer med funktionsnedsättningar. Det
              innebär att webbplatsen är utformad för att vara lätt att
              navigera, förstå och använda för alla användare, oavsett deras
              förmåga eller tekniska kunskaper.{' '}
            </p>
            <p className="mt-4">
              En tillgänglighetsoptimerad webbplats är en webbplats som är
              användarvänlig, lätt att navigera och som fungerar felfritt på
              alla enheter. Det innebär att din webbplats kommer att vara mer
              attraktiv och användarvänlig för alla användare, vilket kan öka
              din målgrupps storlek och förbättra användarupplevelsen.{' '}
            </p>{' '}
            <p className="mt-4">
              En vanlig missuppfattning är att en tillgänglig webbplats måste
              kompromissa med design och estetik. Detta är långt ifrån
              sanningen.
            </p>{' '}
            <p className="mt-4">
              Modern webbdesign tillåter kreativitet och innovation även inom
              ramarna för tillgänglighetsstandarder. Du kan fortfarande skapa en
              visuellt tilltalande webbplats som också är funktionell och
              tillgänglig för alla.{' '}
            </p>{' '}
            <p className="mt-4">
              Som utvecklare ser jag det som en utmaning att lyckas kombinera
              estetik och funktionalitet på ett sätt som gör att din webbplats
              sticker ut och samtidigt är användarvänlig för alla.
            </p>{' '}
            <p className="mt-4">
              Boka en kostnadsfri konsultation med mig för att diskutera dina
              behov och designidéer.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-left">
            Jag har hört att det finns enklare sätt att göra en webbplats mer
            tillgänglig utan att behöva göra en hel omdesign. Är det sant?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              På senare tiden har det kommit tekniker på marknaden som säger sig
              kunna förbättra tillgängligheten på en webbplats med olika tillägg
              som kan läggas till på en befintlig webbplats, så kallade
              overlay-lösningar. Dessa lösningar har blivit starkt kritiserade
              av användare som använder hjälpmedel som skärmläsare, eftersom de
              ofta inte fungerar korrekt med dessa hjälpmedel.
            </p>
            <p className="mt-3 mb-3">
              {' '}
              Det är viktigt att komma ihåg att tillgänglighet inte är något som
              kan läggas till i efterhand, utan något som måste byggas in i
              webbplatsen från början.{' '}
            </p>{' '}
            <p>
              En tillgänglighetsoptimerad webbplats är en webbplats som är
              utformad och utvecklad för att vara användbar för alla människor,
              inklusive personer med funktionsnedsättningar. Det innebär att
              webbplatsen är utformad för att vara lätt att navigera, förstå och
              använda för <strong>alla</strong> {''}
              användare, oavsett deras förmåga eller tekniska kunskaper.{' '}
            </p>
            <p className="mt-3 mb-3">
              Om du vill göra din webbplats mer tillgänglig är det bästa sättet
              att bygga in tillgänglighetsstandarder direkt i koden från början.
              Detta innebär att du behöver anlita en webbutvecklare som har
              kunskap om tillgänglighet och som kan implementera dessa
              standarder på rätt sätt.{' '}
            </p>
            <p>
              En &quot;quick fix&quot; är sällan en hållbar lösning när det
              kommer till tillgänglighet. Overlay-lösningar är inte bara
              ineffektiva ur tillgänglighetssynpunkt, de kan också vara olagliga
              enligt tillgänglighetsdirektivet och Europastandarden EN 301 549.{' '}
            </p>
            <p className="mt-3">
              {' '}
              Boka en kostnadsfri konsultation med oss för att diskutera hur vi
              kan hjälpa dig att göra din webbplats mer tillgänglig. Boka här:
            </p>
            <div className=" items-center flex justify-center mt-8 md:mt-10 lg:mt-20">
              <Link
                href="/tillganglighets-audits"
                className="rounded bg-rose-900 text-white dark:bg-fuchsia-100 dark:text-slate-900 py-4 px-4 font-medium hover:bg-rose-800 dark:hover:bg-fuchsia-200 transition-colors duration-500 ease-in-out  transform hover:scale-105 "
              >
                Se vilka paket vi erbjuder och boka en kostnadsfri konsultation
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.section>
  )
}
