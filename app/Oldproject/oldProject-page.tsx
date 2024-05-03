/* 'use client'
import projects from './projectData'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../project-page.module.css'
import TechStackFilter from '../components/TechStackFilter'
import { useState, useMemo } from 'react'
import { getUniqueTechStacks } from '../lib/techStacks'

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 6

  const filteredProjects = useMemo(
    () =>
      projects
        .filter(
          project =>
            filter.length === 0 ||
            project.stack.some(tech => filter.includes(tech))
        )
        .slice(
          currentPage * projectsPerPage,
          (currentPage + 1) * projectsPerPage
        ),
    [filter, currentPage]
  )

  const uniqueTechStacks = getUniqueTechStacks(projects)

  return (
    <main className="max-w-3xl mx-auto px-4 ">
      <TechStackFilter
        techStacks={uniqueTechStacks}
        onFilterChange={setFilter}
      />
      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
            />
            <h2>{project.title}</h2>
            <p>{project.description.substring(0, 100)}...</p>
            <div className={styles.links}>
              <Link href={`/projects/${project.slug}`}>
                Go to {project.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={(currentPage + 1) * projectsPerPage >= projects.length}
        >
          Next
        </button>
      </div>
    </main>
  )
}

export default ProjectsPage
 */
