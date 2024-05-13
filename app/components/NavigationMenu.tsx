'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Logo from '@/public/images/GreenLogo.png'
import Link from 'next/link'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from '../components/ModeToggle'
import TopLogo from '@/public/images/TopLogo.png'
import BottomLogo from '@/public/images/BottomLogo.png'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Vilka vi är',
    href: '/om-oss',
    description:
      'Lär känna oss och varför vi brinner för tillgänglighet på webben.',
  },
  {
    title: 'Varför tillgänglighetsoptimera din webbplats?',
    href: '/varfor-tillganglighetsoptimera-din-webbplats',
    description:
      '5 starka skäl till varför du bör tillgänglighetsoptimera din webbplats.',
  },
  {
    title: 'Tidigare projekt',
    href: '/project',
    description:
      'Se exempel på tidigare projekt och hur vi hjälpt våra kunder att nå sina mål.',
  },

  /*   {
    title: 'Konsulttjänster',
    href: '/konsulttjanster',
    description: 'Visually or semantically separates content.',
  }, */
  {
    title: 'Blogg',
    href: '/blogpage',
    description:
      'Läs våra senaste inlägg om webbutveckling, tillgänglighet och UX.',
  },
  {
    title: 'Kontakta oss',
    href: '/contact',
    description:
      'Boka kostnadsfri konsultation eller ställ frågor om våra tjänster.',
  },
  /*   {
    title: 'Boka kostnadsfri audit',
    href: '/tillganglighets-audits',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Webbutveckling',
    href: '/utvecklartjanster',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  }, */
]

export function Navigation() {
  return (
    <>
      <NavigationMenu className=" pt-2 md:p-5 lg:p-8 sticky top-0 z-50 bg-amber-50 dark:bg-rose-950 rounded-xl shadow-md">
        <NavigationMenuList>
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuLink asChild>
              <a href="/">
                <Image
                  alt="Logo"
                  src={Logo}
                  width={500} // Maximum width the image can scale up to
                  height={500} // Maintain the aspect ratio
                  sizes=" w-xs md:w-300 lg:w-500" // Responsive sizes
                  className=" focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer w-20 h-auto md:w-56 lg:w-64 ml-2 pr-3 md:ml-4 md:mr-6 lg:ml-10 lg:mr-20"
                />
              </a>
            </NavigationMenuLink>
            <NavigationMenuTrigger className="p-1 text-xs md:text-sm lg:text-lg">
              Tjänster
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className=" grid gap-3  md:p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <div className="dark:bg-rose-950 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <Image
                      src={TopLogo}
                      alt="Logo"
                      className="w-40 h-400 mb-2"
                    />
                    <p className="text-sm leading-tight text-muted-foreground">
                      Vi utvecklar, designar och optimerar webbplatser och appar
                      för att vara tillgängliga för alla.
                    </p>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image
                        src={BottomLogo}
                        alt="Logo"
                        className="w-40 h-400 ml-4"
                      />
                    </div>
                  </div>
                </li>
                <ListItem href="/utvecklartjanster" title="Utvecklartjänster">
                  Professionell Webbutveckling med Fokus på Tillgänglighet och
                  Kvalitet
                </ListItem>
                <ListItem
                  href="/tillganglighets-audits"
                  title="Tillgänglighets-audits"
                >
                  Experter på tillgänglighet för webb med 15 år i branchen. Vi
                  erbjuder tillgänglighets-audits av webbplatser till förmånliga
                  priser och med olika paketlösningar. Vi bjuder på en
                  kostnadsfri första audit för att du som kund ska få ett
                  smakprov på hur vi arbetar och vilka förbättringar som kan
                  göras.Vår vision är att webben ska vara en plats för alla.
                </ListItem>
                <ListItem href="/konsulttjanster" title="Konsulttjänster">
                  På jakt efter en konsult specialiserad inom Frontend och UX?
                  Då är det här du ska kika in{' '}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-1 md:p-4 text-xs md:text-sm lg:text-lg">
              Om oss
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                {components.map(component => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-1 text-xs md:text-sm lg:text-lg">
              Kontakta oss
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                <ListItem
                  title="Kontakta oss"
                  href="/kontakt"
                  className="text-lg"
                >
                  {' '}
                  Boka kostnadsfri konsultation eller ställ frågor om våra
                  tjänster.
                </ListItem>{' '}
              </ul>
            </NavigationMenuContent>
            <Link href="/faq" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQ{' '}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
