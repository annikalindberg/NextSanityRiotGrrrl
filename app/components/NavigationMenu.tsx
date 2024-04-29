'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Logo from '@/public/images/GreenLogo.png'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from '../components/ModeToggle'
import TopLogo from '@/public/images/TopLogo.png'
import BottomLogo from '@/public/images/BottomLogo.png'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Vilka vi är',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Tidigare projekt',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },

  {
    title: 'Konsulttjänster',
    href: '/konsulttjanster',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Blogg',
    href: '/blogpage',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
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
    <NavigationMenu className="flex items-center mt-2 md:m-5 lg:ml-8">
      <ModeToggle />

      <NavigationMenuList>
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuLink asChild>
            <a href="/">
              <Image
                width={100}
                height={100}
                src={Logo}
                alt="Logo"
                className=" w-20 mt-2 ml-2 mr-3 h-200 md:w-40 md:h-400 md:mr-40 md:ml-10"
              />
            </a>
          </NavigationMenuLink>
          <NavigationMenuTrigger className="p-1 text-xs md:text-sm lg:text-lg">
            Tjänster
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3  md:p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <Image src={TopLogo} alt="Logo" className="w-40 h-400 mb-2" />
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
                Vi har arbetat med digital tillgänglighet i över 15 år, och är
                experter inom området. Vi erbjuder tillgänglighets-audits av
                webbplatser till förmånliga priser och med olika paketlösningar.
                Vi bjuder på en kostnadsfri första audit för att du som kund ska
                få ett smakprov på hur vi arbetar och vilka förbättringar som
                kan göras.Vår vision är att webben ska vara en plats för alla.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-1 text-xs md:text-sm lg:text-lg">
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
        {/*         <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Kontakta oss
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
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
