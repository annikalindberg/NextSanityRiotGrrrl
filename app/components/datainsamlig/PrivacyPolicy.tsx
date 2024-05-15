import React from 'react'
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Integritetspolicy</h1>
      <p className="mt-4 mb-2">
        Denna integritetspolicy förklarar hur vi på NextToEdit Tech Solutions
        samlar in, använder, och skyddar dina personuppgifter när du besöker vår
        webbplats https://www.nexttoedit-tech.com/ eller använder våra tjänster.
        Genom att använda vår webbplats och våra tjänster godkänner du
        behandlingen av dina personuppgifter enligt denna policy.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">
        Vilka uppgifter samlar vi in?
      </h2>
      <p className="mt-4 mb-2">
        Vi samlar in olika typer av information beroende på hur du interagerar
        med oss:
      </p>
      <ul className="list-disc list-inside mt-4 mb-2">
        <li>Kontaktinformation, såsom namn, e-postadress och telefonnummer.</li>
        <li>Demografisk information, såsom ålder och kön.</li>
        <li>
          Teknisk information, såsom IP-adress, webbläsartyp och operativsystem.
        </li>
        <li>
          Användningsdata, såsom information om hur du använder vår webbplats
          och våra tjänster.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">
        Hur använder vi dina uppgifter?
      </h2>
      <p className="mt-4 mb-2">
        Vi använder de insamlade uppgifterna för olika ändamål, bland annat:
      </p>
      <ul className="list-disc list-inside mt-4 mb-2">
        <li>För att tillhandahålla och förbättra våra tjänster.</li>
        <li>
          För att kommunicera med dig, exempelvis genom att svara på
          förfrågningar och skicka nyhetsbrev.
        </li>
        <li>För att anpassa och förbättra din upplevelse på vår webbplats.</li>
        <li>
          För att analysera användningsdata och förbättra vår webbplats och våra
          tjänster.
        </li>
        <li>
          För att uppfylla lagliga skyldigheter och skydda våra rättigheter.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">
        Hur skyddar vi dina uppgifter?
      </h2>
      <p className="mt-4 mb-2">
        Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda
        dina personuppgifter mot obehörig åtkomst, förlust, missbruk eller
        otillåten ändring. Dessa åtgärder inkluderar, men är inte begränsade
        till:
      </p>
      <ul className="list-disc list-inside mt-4 mb-2">
        <li>
          Användning av krypteringstekniker för att skydda data under
          överföring.
        </li>
        <li>Implementering av säkerhetsprotokoll och brandväggar.</li>
        <li>
          Begränsning av åtkomst till personuppgifter till endast behörig
          personal.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Dina rättigheter</h2>
      <p className="mt-4 mb-2">Du har rätt att:</p>
      <ul className="list-disc list-inside mt-4 mb-2">
        <li>Begära åtkomst till de personuppgifter vi behandlar om dig.</li>
        <li>Begära rättelse av felaktiga eller ofullständiga uppgifter.</li>
        <li>
          Begära radering av dina personuppgifter under vissa omständigheter.
        </li>
        <li>Invända mot behandlingen av dina personuppgifter.</li>
        <li>Begära begränsning av behandlingen av dina personuppgifter.</li>
        <li>
          Begära dataportabilitet, vilket innebär att få ut de personuppgifter
          du lämnat till oss i ett strukturerat, allmänt använt och
          maskinläsbart format.
        </li>
        <li>
          Återkalla ditt samtycke när som helst, utan att det påverkar
          lagligheten av behandlingen baserat på samtycke innan det
          återkallades.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Delning av dina uppgifter</h2>
      <p className="mt-4 mb-2">
        Vi delar inte dina personuppgifter med tredje part förutom i följande
        situationer:
      </p>
      <ul className="list-disc list-inside mt-4 mb-2">
        <li>Med ditt uttryckliga samtycke.</li>
        <li>
          För att uppfylla lagliga skyldigheter eller svara på rättsliga
          förfrågningar.
        </li>
        <li>
          För att skydda våra rättigheter, integritet, säkerhet eller egendom.
        </li>
        <li>
          För att förhindra, upptäcka eller utreda eventuella brott eller
          säkerhetsincidenter.
        </li>
        <li>
          Med tjänsteleverantörer som utför tjänster å våra vägnar (exempelvis
          webbhotell, e-postleverantörer) och som är bundna av sekretessavtal.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">
        Överföring av uppgifter utanför EU/EES
      </h2>
      <p className="mt-4 mb-2">
        Vi kan komma att överföra dina personuppgifter till länder utanför
        EU/EES. I sådana fall vidtar vi nödvändiga åtgärder för att säkerställa
        att dina uppgifter skyddas på ett adekvat sätt, i enlighet med gällande
        dataskyddslagstiftning.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Cookies</h2>
      <p className="mt-4 mb-2">
        Vi använder cookies och liknande teknologier på vår webbplats. För mer
        information om hur vi använder cookies, se vår{' '}
      </p>
      <Link
        className="text-blue-600 dark:text-blue-200 hover:underline focus:outline p-6 "
        href="/cookiepolicy"
      >
        cookiepolicy
      </Link>

      <h2 className="text-xl font-bold mt-4 mb-2">
        Ändringar i denna integritetspolicy
      </h2>
      <p className="mt-4 mb-2">
        Vi kan uppdatera denna integritetspolicy från tid till annan för att
        återspegla ändringar i våra rutiner eller av andra operativa, juridiska
        eller regulatoriska skäl. Vänligen granska denna policy regelbundet för
        eventuella uppdateringar.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Kontakta oss</h2>
      <p className="mt-4 mb-2">
        Om du har några frågor om denna integritetspolicy eller om hur vi
        behandlar dina personuppgifter, vänligen kontakta oss på:
      </p>
      <p className="mt-4 mb-2">
        Om du har några frågor om denna cookiepolicy, vänligen kontakta oss.
        Kontaktuppgifter hittar du under &quot;Om oss&quot; längst ner på sidan.
      </p>
    </div>
  )
}

export default PrivacyPolicy
