'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '@/lib/helper'

const CookieBanner: React.FC = () => {
  const [isConsentSet, setIsConsentSet] = useState(false)
  const [isCustomizing, setIsCustomizing] = useState(false)
  const [functionalCookies, setFunctionalCookies] = useState(false)
  const [analyticalCookies, setAnalyticalCookies] = useState(false)
  const [advertisingCookies, setAdvertisingCookies] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage<boolean | null>(
      'cookie_consent',
      null
    )
    const storedPreferences = getLocalStorage<any>('cookie_preferences', {
      functional: false,
      analytical: false,
      advertising: false,
    })

    if (storedCookieConsent !== null) {
      setIsConsentSet(true)
    } else {
      setFunctionalCookies(storedPreferences.functional)
      setAnalyticalCookies(storedPreferences.analytical)
      setAdvertisingCookies(storedPreferences.advertising)
    }

    /*     console.log('Stored Cookie Consent:', storedCookieConsent)
    console.log('Stored Preferences:', storedPreferences) */
  }, [])

  const savePreferences = () => {
    const preferences = {
      functional: functionalCookies,
      analytical: analyticalCookies,
      advertising: advertisingCookies,
    }
    setLocalStorage('cookie_preferences', preferences)
    setLocalStorage('cookie_consent', true)
    setIsConsentSet(true)

    const newValue =
      preferences.analytical || preferences.advertising ? 'granted' : 'denied'
    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    })
    console.log('Cookie Preferences Saved:', preferences)
  }

  const acceptAllCookies = () => {
    setFunctionalCookies(true)
    setAnalyticalCookies(true)
    setAdvertisingCookies(true)
    savePreferences()
  }

  const rejectAllCookies = () => {
    setFunctionalCookies(false)
    setAnalyticalCookies(false)
    setAdvertisingCookies(false)
    savePreferences()
  }

  if (isConsentSet) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-live="assertive"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-20 flex flex-col justify-between gap-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8"
    >
      <p
        id="cookie-consent-title"
        className="max-w-4xl text-sm leading-6 text-gray-900"
      >
        Denna webbplats använder cookies för att förbättra din surfupplevelse,
        analysera webbplatstrafik och ge bättre användarupplevelser. Genom att
        fortsätta använda denna webbplats samtycker du till vår användning av
        cookies. Läs mer i vår{' '}
        <Link className="font-semibold text-[#8A2BE2]" href="/cookiepolicy">
          cookiepolicy
        </Link>
      </p>
      <div className="flex gap-2">
        {isCustomizing ? (
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={functionalCookies}
                onChange={() => setFunctionalCookies(!functionalCookies)}
                aria-label="Tillåt funktionella cookies"
              />
              <span className="ml-2">Funktionella cookies</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={analyticalCookies}
                onChange={() => setAnalyticalCookies(!analyticalCookies)}
                aria-label="Tillåt analytiska cookies"
              />
              <span className="ml-2">Analytiska cookies</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={advertisingCookies}
                onChange={() => setAdvertisingCookies(!advertisingCookies)}
                aria-label="Tillåt reklamcookies"
              />
              <span className="ml-2">Reklamcookies</span>
            </label>
            <button
              onClick={savePreferences}
              type="button"
              className="mt-4 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              aria-label="Spara inställningar"
            >
              Spara inställningar
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <button
              onClick={acceptAllCookies}
              type="button"
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              aria-label="Acceptera alla cookies"
            >
              Acceptera alla 🍪
            </button>
            <button
              onClick={rejectAllCookies}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              aria-label="Avvisa alla cookies"
            >
              Avvisa alla
            </button>
            <button
              onClick={() => setIsCustomizing(true)}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              aria-label="Anpassa cookie-inställningar"
            >
              Anpassa
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CookieBanner
