'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

export function FaqTillganglighet() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left">
          Vad innebär det att en webbplats är tillgänglighetsoptimerad?
        </AccordionTrigger>
        <AccordionContent>
          En tillgänglighetsoptimerad webbplats är en webbplats som är utformad
          och utvecklad för att vara användbar för alla människor, inklusive
          personer med funktionsnedsättningar. Det innebär att webbplatsen är
          utformad för att vara lätt att navigera, förstå och använda för alla
          användare, oavsett deras förmåga eller tekniska kunskaper.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left">
          Varför är tillgänglighet viktigt för en webbplats?
        </AccordionTrigger>
        <AccordionContent>
          Tillgänglighet är viktigt för en webbplats av flera skäl. För det
          första är det ett etiskt krav att se till att alla användare har
          tillgång till information och tjänster på webben. För det andra kan en
          tillgänglighetsoptimerad webbplats öka din målgrupps storlek och
          förbättra användarupplevelsen för alla användare. Slutligen kan en
          tillgänglighetsoptimerad webbplats också förbättra din webbplats SEO
          och sökmotorrankning. Läs gärna mer om hur tillgänglighet och SEO
          hänger ihop här:
          <Link
            href="/varfor-tillganglighetsoptimera-din-webbplats"
            passHref
            className="text-blue-600"
          >
            Varför är tillgänglighet viktigt för en webbplats?
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left">
          Hur testar jag om min webbplats är tillgänglighetsoptimerad?
        </AccordionTrigger>
        <AccordionContent>
          Det finns flera verktyg och metoder för att testa om din webbplats är
          tillgänglighetsoptimerad. Ett enkelt sätt är att använda webbaserade
          verktyg som Lighthouse eller WAVE som kan identifiera
          tillgänglighetsproblem på din webbplats. Oftast räcker det inte med
          att testa med ett av dessa verktyg, eftersom olika verktyg kan hitta
          olika problem. Det är därför en bra idé att använda flera verktyg och
          metoder för att testa din webbplats tillgänglighet. Dessa
          automatiserade testverktyg behöver dock alltid kompletteras med
          manuella tester för att lyckas identifiera alla tillgänglighetsproblem
          på din webbplats. Du behöver vara bekväm med att använda de vanligaste
          assisterande teknologierna som skärmläsare för att kunna testa din
          webbplats på rätt sätt. Har du inte själv rätt kunskap för att testa
          din webbplats, bör du anlita någon som har det. Ett första steg kan
          vara att boka kostnadsfri tillgänglighetsrådgivning med oss, för att
          få en första diagnos av din webbplats tillgänglighet och råd hur du
          ska ta nästa steg.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left">
          Ungefär hur många användare är det som påverkas negativt om min
          webbplats brister i tillgänglighet?
        </AccordionTrigger>
        <AccordionContent>
          Över 20% av befolkningen lever med en permanent funktionsnedsättning.
          I Sverige, där nästan alla, 97.2% av befolkningen, använder internet
          dagligen, innebär detta att cirka 2 miljoner potentiella användare som
          din webbplats utesluter. Och detta är bara i Sverige.{' '}
          <p>
            Lägger vi dessutom till alla som har tillfälliga funktionshinder,
            vilket du själv säkert upplevt om du brutit ett finger eller bara
            glömt dina hörlurar och försöker kolla på en video på tåget, så blir
            det en stor del av befolkningen som påverkas negativt av en
            otillgänglig webbplats. Det är inte bara personer med
            funktionsnedsättningar som påverkas av en otillgänglig webbplats.
            Äldre personer, personer med långsam internetuppkoppling, personer
            som använder mobiltelefoner och surfplattor, och personer som inte
            talar svenska som förstaspråk kan också ha svårt att använda en
            otillgänglig webbplats.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-left">
          Varför hänger SEO och tillgänglighet ihop?
        </AccordionTrigger>
        <AccordionContent>
          Tillgänglighet och sökmotoroptimering (SEO) djupt sammanlänkade. En
          tillgänglig webbplats är lättare att indexera och förstå för
          sökmotorer som Google, vilket leder till högre placeringar i
          sökresultat. Att optimera din webbplats för tillgänglighet innebär att
          göra den mer läsbar för både användare och sökmotorer. Till exempel,
          om du använder korrekt HTML-kodning och alt-text för bilder, kan
          sökmotorer förstå innehållet på din webbplats bättre och ranka den
          högre i sökresultat. Dessutom, många av de åtgärder som krävs för att
          göra en webbplats tillgänglighetsoptimerad, såsom att förbättra
          laddningstiden och användarupplevelsen, kan också förbättra din
          webbplats SEO.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-left">
          Om tillgänglighet är så viktigt, varför bygges inte alla webbplatser
          tillgänglighetsoptimerade från början?
        </AccordionTrigger>
        <AccordionContent>
          I Internets begynnelse skrevs alla hemsidor i ett kodspråk som kallas
          HTML. Denna teknik var och är fortfarande tillgänglighetsoptimerad i
          sig själv. Men när webben utvecklades och blev mer avancerad, tillkom
          fler tekniker och verktyg som gjorde det enklare att bygga webb och
          som inte alltid var lika tillgänglighetsoptimerade. Det är också så
          att det är enklare och snabbare att bygga en webbplats som inte är
          tillgänglighetsoptimerad. Många webbplatser byggs av personer som inte
          har kunskap om tillgänglighet, och med hjälp av plattformar som inte
          prioriterar tillgänglighet. Det är också så att det inte finns några
          lagkrav som tvingar webbplatser att vara tillgänglighetsoptimerade,
          vilket gör att många inte ser det som en prioritet. Dock har det på
          senare år blivit allt mer uppmärksammat och det finns fler och fler
          som ser tillgänglighet som en viktig del av webbutveckling. Nu finns
          det också olika lagkrav som ställer krav på att vissa webbplatser ska
          vara tillgänglighetsoptimerade.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-left">
          Innebär tillgänglighetsanpassning att min sida kommer att bli tråkig
          och ful?
        </AccordionTrigger>
        <AccordionContent>
          Nej, tvärtom! En tillgänglighetsoptimerad webbplats är en webbplats
          som är utformad och utvecklad för att vara användbar för alla
          människor, inklusive personer med funktionsnedsättningar. Det innebär
          att webbplatsen är utformad för att vara lätt att navigera, förstå och
          använda för alla användare, oavsett deras förmåga eller tekniska
          kunskaper. En tillgänglighetsoptimerad webbplats är en webbplats som
          är användarvänlig, lätt att navigera och som fungerar felfritt på alla
          enheter. Det innebär att din webbplats kommer att vara mer attraktiv
          och användarvänlig för alla användare, vilket kan öka din målgrupps
          storlek och förbättra användarupplevelsen. En vanlig missuppfattning
          är att en tillgänglig webbplats måste kompromissa med design och
          estetik. Detta är långt ifrån sanningen. Modern webbdesign tillåter
          kreativitet och innovation även inom ramarna för
          tillgänglighetsstandarder. Du kan fortfarande skapa en visuellt
          tilltalande webbplats som också är funktionell och tillgänglig för
          alla. Som utvecklare ser jag det som en utmaning att lyckas kombinera
          estetik och funktionalitet på ett sätt som gör att din webbplats
          sticker ut och samtidigt är användarvänlig för alla. Boka en
          kostnadsfri konsultation med mig för att diskutera dina behov och
          designidéer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-left">
          Jag har hört att det finns enklare sätt att göra en webbplats mer
          tillgänglig utan att behöva göra en hel omdesign. Är det sant?
        </AccordionTrigger>
        <AccordionContent>
          På senare tiden har det kommit tekniker på marknaden som säger sig
          kunna förbättra tillgängligheten på en webbplats med olika tillägg som
          kan läggas till på en befintlig webbplats, så kallade
          overlay-lösningar. Dessa lösningar har blivit starkt kritiserade av
          användare som använder hjälpmedel som skärmläsare, eftersom de ofta
          inte fungerar korrekt med dessa hjälpmedel.
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
            kunskap om tillgänglighet och som kan implementera dessa standarder
            på rätt sätt.{' '}
          </p>
          <p>
            En &quot;quick fix&quot; är sällan en hållbar lösning när det kommer
            till tillgänglighet. Overlay-lösningar är inte bara ineffektiva ur
            tillgänglighetssynpunkt, de kan också vara olagliga enligt
            tillgänglighetsdirektivet och Europastandarden EN 301 549.{' '}
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
  )
}
