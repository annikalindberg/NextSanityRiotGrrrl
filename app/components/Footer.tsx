'use client'
import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { SmallCTAButton } from './cta-buttons'
import Logo from '@/public/images/GreenLogo.png'
import Image from 'next/image'
import { InstagramLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <footer className="pl-20 pr-20 pb-10 pt-8  bg-cyan-50 dark:bg-sky-950 dark:text-white text-gray-500">
      <section className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <Link href="/">
          <Image
            alt="Logo"
            src={Logo}
            width={500} // Maximum width the image can scale up to
            height={500} // Maintain the aspect ratio
            sizes=" w-xs md:w-300 lg:w-500" // Responsive sizes
            className=" focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer w-20 h-auto md:w-56 lg:w-64"
          />
        </Link>
        <div className="flex flex-col">
          {' '}
          <div id="social-links" className="flex">
            <h3 className="text-gray-500 dark:text-gray-300">Följ oss</h3>
          </div>
          <div className="flex flex-col  gap-2">
            <Link
              className="bg-white-50 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
              href="https://www.linkedin.com/in/annika-lindberg-frontend-developer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Annikas Linkedin profile page - opens in new tab"
              title="External link to Annikas LinkedIn"
            >
              {' '}
              LinkedIn
              <BsLinkedin className="lg:w-6 lg:h-6" />
            </Link>
            <Link
              className="bg-white-50 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
              href="https://www.instagram.com/nexttoedit_solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit NextToEdit Instagram profile page - opens in new tab"
              title="External link to NextToEdit Instagram"
            >
              Instagram
              <InstagramLogoIcon className="lg:w-6 lg:h-6" />
            </Link>
            <Link
              href="/blogg"
              passHref
              className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:underline focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            >
              Blogg
            </Link>
          </div>
        </div>

        {/*    */}

        <div className="flex flex-col">
          <h3 className="text-gray-500 dark:text-gray-300">Tjänster</h3>
          <Link
            href="/konsulttjanster"
            title="Konsulttjänster"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:underline focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          >
            Konsulttjänster
          </Link>
          <Link
            href="/"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:underline focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          >
            Utvecklartjänster
          </Link>
          <Link
            href="/tillganglighets-audits"
            title="Tillgänglighets-audits"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:underline focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          >
            Tillgänglighets-audits
          </Link>{' '}
          <SmallCTAButton
            title="Kostnadsfri Audit"
            buttonLabel="Boka kostnadsfri Audit"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-500 dark:text-gray-300">Kontakt</h3>
          <Link
            href="/kontakt"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:underline focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          >
            Kontakt
          </Link>
          <Link
            href="/om-oss"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:underline focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          >
            Om oss
          </Link>
          <Link
            href="/blogg"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:underline focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          >
            Blogg
          </Link>
          {/*  <div id="social-links" className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Link
                className="bg-white-50 p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
                href="https://www.linkedin.com/in/annika-lindberg-frontend-developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Annikas Linkedin profile page - opens in new tab"
                title="External link to Annikas LinkedIn"
              >
                <BsLinkedin />
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      <hr className="mt-10 border-gray-300" />
      <small className="block text-center text-xs mt-4 ">
        &copy; 2024 Annika Lindberg. All rights reserved.
      </small>
    </footer>
  )
}
