import type { Metadata } from 'next'
import { Nunito, PT_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { Navigation } from './components/NavigationMenu'
import Footer from './components/Footer'
import ActiveSectionContextProvider from './components/annika/active-section-context'
import ThemeContextProvider from './components/annika/theme-context'

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
  description: 'NextToEdit Tech Solutions',
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
      </head>
      <body className={`${nunito.className} ${ptSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange // Prevent transition on initial page load and theme change (re-enable with a delay) to avoid a flash of light and dark mode on initial load (remove if not important to you)
        >
          <Navigation />
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <main>{children}</main>
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
          <Toaster position="top-right" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
