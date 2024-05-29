'use client'

import { useRef } from 'react'
import { projectsData } from './data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  LiveDemoLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  const renderLiveDemoLink = (link: string | undefined) => {
    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )
    }
    return 'Links to this project will be available soon!'
  }
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 flex flex-col sm:flex-row justify-center sm:justify-between items-center"
    >
      <article
        aria-labelledby="projectTitleId"
        className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[40rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-slate-950 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 id="projectTitleId" className="text-2xl font-semibold">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed mb-4 text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-4 py-2 text-[0.7rem] uppercase tracking-wider text-white rounded-md dark:text-white/80 dark:bg-purple-950"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt={`Screenshot of project titled ${title}`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </article>
      <div className="flex flex-col justify-center items-center space-y-6 mt-4 sm:mt-0 ml-9">
        {LiveDemoLink ? (
          <a
            href={LiveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${title}`}
            className="flex items-center text-xl justify-end gap-2 text-right text-indigo-900 dark:text-white hover:underline hover:translate-y-2 transition"
          >
            <HiOutlineExternalLink aria-hidden="true" className="opacity-70" />
            Demo{' '}
            <BsArrowRight aria-hidden="true" className="opacity-70 ml-10" />
          </a>
        ) : (
          <p>{renderLiveDemoLink(LiveDemoLink)}</p>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository of ${title}`}
            className="flex items-center justify-end gap-2 text-right text-xl text-indigo-900 hover:underline dark:text-white hover:translate-y-2 transition"
          >
            <FaGithub
              aria-hidden="true"
              className="opacity-70 dark:text-white"
            />
            GitHub{' '}
            <BsArrowRight aria-hidden="true" className="opacity-70 ml-10" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
