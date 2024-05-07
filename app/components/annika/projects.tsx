'use client'

import React from 'react'
import { projectsData } from './data'
import Project from './project'
import { useSectionInView } from './hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 md:px-64">
      <h1 className="text-center">My projects</h1>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
