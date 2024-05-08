'use client'

import React from 'react'
import { projectsData } from './data'
import Project from './project'
import { useSectionInView } from './hooks'
import Link from 'next/link'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5)
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h1 className="text-center">Tidigare Case</h1>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <h3 className="text-2xl mt-12 text-center text-teal-900 dark:text-teal-50 font-bold ">
        Fler av mina projekt finns att kolla in här:
      </h3>
      <Link
        href="https://www.annikalindberg-ts.com/#projects"
        className="text-2xl flex justify-center mt-3 underline hover:animate-out hover:text-red-900 dark:hover:text-blue-500 focus:active:outline text-teal-900 dark:text-teal-50"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Link to Annika Lindberg portfolio"
        title="Link to Annika Lindberg portfolio"
      >
        annikalindberg-ts.com
      </Link>
    </section>
  )
}
