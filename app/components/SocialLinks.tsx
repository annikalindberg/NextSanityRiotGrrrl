/* import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { RxEnvelopeClosed } from 'react-icons/rx'

export default function SocialLinks() {
  return (
    <section id="social-links" className="flex items-center justify-center bg-">
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
          <Link
            className="bg-white-50 p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
            href="https://github.com/annikalindberg"
            target="_blank"
            rel="noopener noreferrer"
            title="External link to Annikas GitHub"
            aria-label="Visit Annikas Github profile page - opens in new tab"
          >
            <FaGithubSquare />
          </Link>{' '}
          <Link
            href="/contact"
            passHref
            className="bg-white-50 p-3 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
            title="Kontakta oss!"
            aria-label="Intern länk till kontaktsidan"
          >
            <RxEnvelopeClosed />
          </Link>
        </div>
      </div>
    </section>
  )
}
 */
