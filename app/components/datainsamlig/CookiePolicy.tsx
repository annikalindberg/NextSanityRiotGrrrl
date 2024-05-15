import React from 'react'
import Link from 'next/link'
import { OpenInNewWindowIcon } from '@radix-ui/react-icons'

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cookiepolicy</h1>
      <p className="mt-4 mb-2">
        Denna cookiepolicy förklarar hur vi på NextToEdit Tech Solutions
        använder cookies och liknande teknologier på vår webbplats [Din
        Webbplats URL]. Genom att använda vår webbplats samtycker du till
        användningen av cookies enligt denna policy.
      </p>
      <h2 className="text-xl font-bold mt-4 mb-2">Vad är cookies?</h2>
      <p className="mt-4 mb-2">
        Cookies är små textfiler som lagras på din enhet (dator, surfplatta
        eller mobil) när du besöker en webbplats. De hjälper webbplatsen att
        känna igen din enhet och komma ihåg information om ditt besök, såsom
        dina inställningar och åtgärder.
      </p>
      <h2 className="text-xl font-bold mt-4 mb-2">
        Vilka typer av cookies använder vi?
      </h2>
      <p className="mt-4 mb-2">
        Vi använder följande typer av cookies på vår webbplats:
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Nödvändiga cookies</h3>
      <p className="mt-4 mb-2">
        Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. De
        möjliggör grundläggande funktioner som sidnavigering och åtkomst till
        säkra områden på webbplatsen. Utan dessa cookies kan webbplatsen inte
        fungera korrekt.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Funktionella cookies</h3>
      <p className="mt-4 mb-2">
        Dessa cookies gör det möjligt för webbplatsen att komma ihåg val du gör
        (t.ex. ditt språk eller den region du befinner dig i) och erbjuda
        förbättrade, mer personliga funktioner.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Analytiska cookies</h3>
      <p className="mt-4 mb-2">
        Dessa cookies hjälper oss att förstå hur besökare interagerar med vår
        webbplats genom att samla in och rapportera information anonymt. Detta
        hjälper oss att förbättra webbplatsens prestanda och användarupplevelse.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Reklamcookies</h3>
      <p className="mt-4 mb-2">
        Dessa cookies används för att leverera annonser som är relevanta för
        dig. De hjälper oss också att mäta effektiviteten av våra
        reklamkampanjer.
      </p>
      <h2 className="text-xl font-bold mt-4 mb-2">
        Cookies som används på vår webbplats
      </h2>
      <table className="table-auto w-full mt-4 mb-2">
        <thead>
          <tr>
            <th className="px-4 py-2">Cookienamn</th>
            <th className="px-4 py-2">Typ</th>
            <th className="px-4 py-2">Syfte</th>
            <th className="px-4 py-2">Utgångstid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">cookieConsent</td>
            <td className="border px-4 py-2">Nödvändig</td>
            <td className="border px-4 py-2">
              Lagrar dina cookie-samtyckesinställningar
            </td>
            <td className="border px-4 py-2">1 år</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">_ga</td>
            <td className="border px-4 py-2">Analytisk</td>
            <td className="border px-4 py-2">
              Google Analytics-cookie för att spåra användarbeteende
            </td>
            <td className="border px-4 py-2">2 år</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">_gid</td>
            <td className="border px-4 py-2">Analytisk</td>
            <td className="border px-4 py-2">
              Google Analytics-cookie för att skilja användare åt
            </td>
            <td className="border px-4 py-2">24 timmar</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">_gat</td>
            <td className="border px-4 py-2">Analytisk</td>
            <td className="border px-4 py-2">
              Google Analytics-cookie för att begränsa antalet förfrågningar
            </td>
            <td className="border px-4 py-2">1 minut</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">ads/ga-audiences</td>
            <td className="border px-4 py-2">Reklam</td>
            <td className="border px-4 py-2">
              Google Ads-cookie för att återengagera besökare
            </td>
            <td className="border px-4 py-2">Session</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">NID</td>
            <td className="border px-4 py-2">Reklam</td>
            <td className="border px-4 py-2">
              Google-cookie för att visa personliga annonser
            </td>
            <td className="border px-4 py-2">6 månader</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-4 mb-2">
        Hantera dina cookieinställningar
      </h2>
      <p className="mt-4 mb-2">
        Du kan hantera dina cookieinställningar när som helst via
        cookie-samtyckesbannern eller genom att justera dina
        webbläsarinställningar. Observera att avaktivering av vissa cookies kan
        påverka funktionaliteten på vår webbplats.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">
        Webbläsarinställningar
      </h3>
      <p className="mt-4 mb-2">
        De flesta webbläsare tillåter dig att hantera cookies genom deras
        inställningar. Du kan välja att blockera eller radera cookies, men detta
        kan påverka din förmåga att använda vissa funktioner på vår webbplats.{' '}
      </p>
      <Link
        className="text-blue-600 dark:text-blue-200 hover:underline focus:outline p-6 "
        href="https://www.allaboutcookies.org/manage-cookies/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Extern länk till instruktioner för att hantera cookies i vanliga webbläsare"
      >
        <OpenInNewWindowIcon className="w-5 h-5 mr-4 inline-block" />
        Instruktioner för att hantera cookies i vanliga webbläsare
      </Link>

      <h3 className="text-lg font-semibold mt-4 mb-2">
        Cookie-samtyckesbanner
      </h3>
      <p className="mt-4 mb-2">
        Du kan anpassa dina cookieinställningar med hjälp av vår
        cookie-samtyckesbanner som visas när du först besöker vår webbplats
        eller genom att få åtkomst till inställningarna via länken nedan.
      </p>
      <h2 className="text-xl font-bold mt-4 mb-2">
        Ändringar i denna cookiepolicy
      </h2>
      <p className="mt-4 mb-2">
        Vi kan uppdatera denna cookiepolicy från tid till annan för att
        återspegla ändringar i våra rutiner eller av andra operativa, juridiska
        eller regulatoriska skäl. Vänligen granska denna policy regelbundet för
        eventuella uppdateringar.
      </p>
      <h2 className="text-xl font-bold mt-4 mb-2">Kontakta oss</h2>
      <p className="mt-4 mb-2">
        Om du har några frågor om denna cookiepolicy, vänligen kontakta oss.
        Kontaktuppgifter hittar du under &quot;Om oss&quot; längst ner på sidan.
      </p>
    </div>
  )
}

export default CookiePolicy
