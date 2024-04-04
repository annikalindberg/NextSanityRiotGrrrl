// pages/projects/page.tsx
'use client';
import projects from './projectData';
import { Project } from '../lib/interface';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../project-page.module.css';
import TechStackFilter from '../components/TechStackFilter';
import {useState, useMemo } from 'react';
import { getUniqueTechStacks } from '../lib/techStacks';

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const filteredProjects = useMemo(() => 
    projects.filter(project => 
      filter.length === 0 || project.stack.some(tech => filter.includes(tech))
    ), [filter]);
const  uniqueTechStacks = getUniqueTechStacks(projects)

  return (
     <div>
      <TechStackFilter techStacks={uniqueTechStacks} onFilterChange={setFilter} />
    <div className={styles.grid}>
       {filteredProjects.map((project, index) => (
          <div key={index} className={styles.card}>
          <Image src={project.image} alt={project.title} width={500} height={300} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className={styles.links}>
            <Link href={project.githubLink}>GitHub</Link>
            <Link href={project.LiveDemoLink}>Live Demo</Link>
          </div>
          <ul className={styles.stack}>
            {project.stack.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
          <p className={styles.notes}>{project.notes}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProjectsPage;
