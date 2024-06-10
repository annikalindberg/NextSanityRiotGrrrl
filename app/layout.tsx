import type { Metadata } from 'next'
import { Nunito, PT_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { Navigation } from './components/NavigationMenu'
import Footer from './components/Footer'
import ActiveSectionContextProvider from './components/annika/active-section-context'
import ThemeContextProvider from './components/annika/theme-context'
import CookieBanner from './components/datainsamlig/CookieBanner'
import TestBanner from './components/TestBanner'

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}` // Google Analytics

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
})
const ptSans = PT_Sans({
  // Make sure the function name matches the imported name
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the weights you need
})

export const metadata: Metadata = {
  title: 'NextToEdit Tech Solutions',
  description:
    'Vi skapar hållbara och tillgängliga webbplatser. Vill du ha en hemsida som är kodad från grunden i de senaste teknikerna är det oss du ska kontakta. Våra prisplaner är tydliga och anpassade för småföretag och föreningar. Vi erbjuder även konsulttjänster inom webbutveckling och tillgänglighet.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv">
      <head>
        <script async src={gtag} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname
                });
              `,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className={`${nunito.className} ${ptSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange // Prevent transition on initial page load and theme change (re-enable with a delay) to avoid a flash of light and dark mode on initial load (remove if not important to you)
        >
          {process.env.NEXT_PUBLIC_IS_TEST && <TestBanner />}

          <Navigation />
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <main>{children}</main>
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
          <Toaster position="top-right" />
          <CookieBanner />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
