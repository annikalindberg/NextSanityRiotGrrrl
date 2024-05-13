import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { RxEnvelopeClosed } from 'react-icons/rx'

export default function Footer() {
  return (
    <footer className=" mb-10 mt-10 text-gray-500">
      <section className="flex  space-x-4">
        <hr className="mb-4 border-gray-300" />
        <div className="flex flex-col space-x-4">
          <h3 className="text-gray-500 dark:text-gray-300 ">
            Tjänster och bokning
          </h3>
          <Link
            href="/konsulttjanster"
            title="Konsulttjänster"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Konsulttjänster{' '}
          </Link>
          <Link
            href="/"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Utvecklartjänster{' '}
          </Link>
          <Link
            href="/tillganglighets-audits"
            title="Tillgänglighets-audits"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Tillgänglighets-audits{' '}
          </Link>{' '}
        </div>
        <div className="flex flex-col space-x-4">
          <h3 className="text-gray-500 dark:text-gray-300 ">Kontakt</h3>
          <Link
            href="/kontakt"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Kontakt{' '}
          </Link>{' '}
          <Link
            href="/om"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Om{' '}
          </Link>
          <Link
            href="/blogg"
            passHref
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Blogg{' '}
          </Link>
        </div>
        <div className="flex flex-col space-x-4">
          <h3 className="text-gray-500 dark:text-gray-300 ">Följ NextToEdit</h3>
          <div id="social-links" className="flex items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium">
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
            </div>
          </div>
        </div>
      </section>
      <small className="mb-2 text-xs">
        &copy; 2024 Annika Lindberg. All rights reserved.
      </small>
    </footer>
  )
}
