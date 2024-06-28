'use client'
import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import Faq from '../faq/page'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Logo from '@/public/images/GreenLogo.png'
import { SmallCTAButton } from './cta-buttons'

export default function Footer() {
  return (
    <footer className="px-5 sm:px-10 md:px-20 py-8 bg-cyan-50 dark:bg-sky-950 dark:text-white text-gray-500">
      <section className="flex flex-col lg:flex-row justify-between space-y-4 md:space-y-0">
        <Link href="/" className="block">
          <Image
            alt="Logo"
            src={Logo}
            className="focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer w-20 h-auto md:w-56 lg:w-64"
            width={500}
            height={500}
            sizes="(max-width: 768px) 20vw, (max-width: 1200px) 15vw, 500px"
          />
        </Link>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg md:text-xl dark:text-gray-300">Följ oss!</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="https://www.linkedin.com/company/102953392/admin/feed/posts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök NextToEdit Solutions LinkedIn sida - öppnas i ny flik"
              title="Extern länk till NextToEdit Solutions LinkedIn"
              className="max-w-28 bg-white-50 text-gray-700 hover:text-gray-900 flex items-center gap-2 p-2 rounded-full focus:ring-2 focus:ring-cyan-500 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
            >
              LinkedIn <BsLinkedin className="md:w-5 md:h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/nexttoedit_solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök NextToEdit Solutions Instagram sida - öppnas i ny flik"
              title="Extern länk till NextToEdit Instagram"
              className="max-w-28 bg-white-50 text-gray-700 hover:text-gray-900 flex items-center gap-2 p-2 rounded-full focus:ring-2 focus:ring-cyan-500 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
            >
              Instagram <InstagramLogoIcon className="md:w-5 md:h-5" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61559664455443"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök NextToEdit Solutions Facebook sida - öppnas i ny flik"
              title="Extern länk till NextToEdit Facebook"
              className="max-w-28 bg-white-50 text-gray-700 hover:text-gray-900 flex items-center gap-2 p-2 rounded-full focus:ring-2 focus:ring-cyan-500 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
            >
              Facebook <BsFacebook className="md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col  space-y-2">
          <h3 className="text-lg md:text-xl dark:text-gray-300">Erbjudanden</h3>
          <Link
            href="/erbjudanden"
            passHref
            className="text-lg  text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Sommar-erbjudande - 60% rabatt på hemsidor
          </Link>

          <SmallCTAButton
            title="Kostnadsfri Audit"
            buttonLabel="Boka kostnadsfri Audit"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg md:text-xl dark:text-gray-300">Tjänster</h3>
          <Link
            href="/konsulttjanster"
            title="Konsulttjänster"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Konsulttjänster
          </Link>
          <Link
            href="/utvecklartjanster"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Utvecklartjänster
          </Link>
          <Link
            href="/tillganglighets-audits"
            title="Tillgänglighets-audits"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Tillgänglighets-audits
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg md:text-xl dark:text-gray-300">Om oss</h3>
          <Link
            href="/kontakt"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Kontakt
          </Link>
          <Link
            href="/om-oss"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Om oss
          </Link>
          <Link
            href="/faq"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Frågor och svar
          </Link>
          <Link
            href="/cookiepolicy"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Cookiepolicy
          </Link>
          <Link
            href="/Integritetspolicy"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:underline focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
          >
            Integritetspolicy
          </Link>
        </div>
      </section>
      <hr className="my-10 border-gray-300" />
      <small className="block text-center text-xs mt-4">
        &copy; 2024 Annika Lindberg. All rights reserved.
      </small>
    </footer>
  )
}
