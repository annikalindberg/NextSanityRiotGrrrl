'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

export default function Direktivet() {
  return (
    <section className="mt-4 mb-12">
      {' '}
      <Accordion
        type="single"
        collapsible
        className=" pl-2 pr-2 pb-1 md:pt-2 bg-indigo-100 dark:bg-indigo-950 rounded-4xl md:max-w-2xl md:px-8"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left text-lg">
            Läs mer om Tillgänglighetsdirektivet{' '}
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="mt-6">Webbtillgänglighetsdirektivet (2019) </h3>
            <p className="mt-4">
              Du har nog hört talas om DOS-lagen, eller Lagen om tillgänglighet
              till digital offentlig service. Webbtillgänglighetsdirektivet är
              dess juridiska benämning. EU:s webbtillgänglighetsdirektiv är en
              gemensam EU-lagstiftning som trädde i kraft i svensk lag 1 januari
              2019. Lagen säger att offfentliga webbplatser i Sverige ska vara
              tillgängliga, och från och med 2025 gäller detta även för privata
              företag. Att inte följa dessa krav kan leda till sanktioner.
            </p>
            <h3 className="mt-6">
              Vad innebär EU:s tillgänglighetsdirektiv (2025)?
            </h3>
            <p className="mt-4">
              Från och med 2025 kommer även privata och kommersiella aktörer i
              Sverige att att omfattas av lagarna om digital tillgänglighet.
              Europaparlamentets och rådets direktiv om tillgänglighetskrav för
              produkter och tjänster, även kallat tillgänglighetsdirektivet,
              handlar om att göra livet enklare för människor med
              funktionsnedsättningar och äldre i EU.{' '}
            </p>{' '}
            <p className="mt-4">
              Detta innebär att du som driver exempelvis e-handel och webbshop
              måste se till att din webbplats är tillgänglig för alla.{' '}
            </p>{' '}
            <p className="mt-4">
              Genom att ha gemensamma regler för tillgänglighet blir det också
              lättare för företag att förstå och följa lagarna. Det kan minska
              krångel och göra det lättare att handla mellan olika EU-länder.
              Så, tillgänglighetsdirektivet handlar både om att hjälpa människor
              och förenkla för företag.{' '}
            </p>{' '}
            <p className="mt-4">
              Direktivet innebär att nya produkter och tjänster bör uppfylla
              kraven enligt standarden EN 301 549 tillsammans med WCAG 2.1.
            </p>{' '}
            <h3 className="mt-6">Vad händer om jag inte följer lagen?</h3>
            <p className="mt-4">
              En kontrollmyndighet kommer att granska att kraven uppfylls, och
              besluta om sanktionsavgift till lägst 10 000 och högst 10 000 000
              SEK. Företag som inte följer lagen riskerar alltså böter och kan
              till och med få sina produkter eller tjänster borttagna från
              marknaden.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
