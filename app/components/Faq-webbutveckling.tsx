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
import Image from 'next/image'

export function FaqWebbutveckling() {
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
        <h2>Vanliga frågor och svar om webbutveckling</h2>
        <Image
          width={300}
          height={300}
          src={BottomLogo}
          alt="Logo"
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
            Vad innebär det att bygga en &quot;handkodad&quot; webbsida?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              En handkodad webbsida betyder att varje del av din webbplats
              skapas från grunden med precision och anpassning i åtanke. Till
              skillnad från plattformar som använder förbyggda teman, skapar vi
              unika digitala lösningar som exakt uppfyller dina behov och
              optimerar för både tillgänglighet och sökmotorer.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Vad är fördelarna med en handkodad webbsida jämfört med no-code
            plattformar?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              Att välja en handkodad webbsida ger dig fullständig kontroll och
              flexibilitet över din webbnärvaro. No-code plattformar kan verka
              bekväma, men de kommer ofta med begränsningar som kan hämma din
              webbplats prestanda och skalbarhet. En skräddarsydd webbsida
              optimerad för SEO säkerställer att du inte bara syns bättre i
              sökresultaten, utan också att din sida laddar snabbt och fungerar
              felfritt på alla enheter.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Hur påverkar en handkodad webbsida min digitala närvaro?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              En handkodad, SEO-optimerad webbsida höjer din webbplats i
              sökmotorernas resultat, vilket förbättrar din synlighet och lockar
              fler besökare. Dessutom är prestandaoptimeringen som vi
              implementerar på din webbsida avgörande för både
              användarupplevelsen och sökmotorns rankning, vilket leder till
              bättre resultat och högre engagemang.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            Vilka är de ekonomiska fördelarna med att välja en handkodad
            webbsida?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              Med en startkostnad från endast 7 000 SEK erbjuder vi prisvärda
              webbutvecklingstjänster som är betydligt mer kostnadseffektiva
              över tid jämfört med månadskostnader för no-code plattformar. Min
              flexibla prismodell gör det enklare för dig att starta och
              expandera din webbnärvaro utan att kompromissa med kvaliteten.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            Hur kan vi få hjälp och support efter att min webbsida har
            lanserats?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              När du väljer oss som din webbutvecklare får du mer än bara en
              tjänst; du får en partner. Vi erbjuder personlig support och
              coachning för att hjälpa dig att underhålla och öka trafiken till
              din webbsida. Tillsammans arbetar vi för att din digitala närvaro
              ska växa och anpassas efter dina förändrade behov.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">
            Hur säkerställer du att webbsidan är tillgänglig för alla användare?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              Som expert på tillgänglighet bygger vi in
              tillgänglighetsstandarder direkt i koden från starten av ditt
              projekt. Vi följer noggrant WCAG-riktlinjer för att garantera att
              din webbsida är användarvänlig för personer med olika
              funktionsnedsättningar. Detta innefattar användning av lättläst
              text, implementering av funktioner som stödjer skärmläsare, samt
              säkerställande av god kontrast och smidig navigering.
              Tillgänglighetstester är en integrerad del av min
              webbutvecklingstjänst.
            </p>{' '}
            <p>
              {' '}
              Vi utför omfattande tester för att identifiera och åtgärda
              eventuella tillgänglighetsproblem innan din webbsida lanseras.
              Detta tillvägagångssätt minimerar risken för framtida
              överraskningar och säkerställer att din webbsida är fullt
              tillgänglig för alla användare från dag ett.
            </p>{' '}
            <p>
              Att välja oss som din webbutvecklare betyder att du investerar i
              en högkvalitativ, tillgänglig och framtidssäker digital närvaro.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left">
            Varför är en skräddarsydd landningssida fördelaktig för digital
            marknadsföring?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {' '}
              Skräddarsydda landningssidor är optimerade för att konvertera
              besökare till leads eller kunder. Vi designar landningssidor som
              är visuellt tilltalande, laddar snabbt och är skräddarsydda för
              att möta specifika kampanjmål, vilket ökar din ROI från digitala
              marknadsföringsinsatser.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-left">
            Hur optimerar du webbsidor för snabbare laddningstider?
          </AccordionTrigger>
          <AccordionContent>
            Vi använder moderna tekniker som bildkomprimering, minifiering av
            CSS och JavaScript, samt nätverksoptimering för att minska
            laddningstiderna. Dessa åtgärder förbättrar inte bara
            användarupplevelsen utan också din webbplats ranking i sökmotorerna.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-left">
            Kan vi uppdatera min webbsida själv efter att den är utvecklad?
          </AccordionTrigger>
          <AccordionContent>
            Absolut, vi bygger din webbsida med tanke på användarvänlighet.
            Möjligheten att självständigt uppdatera och ändra innehåll på din
            webbplats ingår i kostnaden för vissa av mina paket. Efter
            lanseringen tillhandahåller vi de nödvändiga verktygen och
            utbildningen så att du kan hantera din webbsida själv, vilket ger
            dig full kontroll och oberoende. För det mest kostnadseffektiva
            paketet finns möjlighet att köpa till tjänster för underhåll och
            uppdateringar. Oavsett vilket paket du väljer, kan du alltid
            uppgradera ditt paket när som helst för att möta nya behov eller
            expandera din webbplats funktionalitet.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="text-left">
            Vem äger rättigheterna till koden och designen på webbsidan?
          </AccordionTrigger>
          <AccordionContent>
            När du anlitar oss för att bygga din webbsida överför vi alla
            rättigheter till koden och designen direkt till dig som kund. Detta
            skiljer sig från många no-code plattformar, där plattformen behåller
            äganderätten till den underliggande koden och designen. Genom att
            välja mina tjänster får du full äganderätt, vilket innebär total
            kontroll och frihet att använda, modifiera eller till och med sälja
            din webbsida i framtiden utan några restriktioner. Detta är en
            betydande fördel för att säkerställa att din digitala närvaro är
            helt och hållet din egen.
          </AccordionContent>
        </AccordionItem>
      </Accordion>{' '}
    </motion.section>
  )
}
