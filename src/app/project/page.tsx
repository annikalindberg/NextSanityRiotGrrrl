// pages/projects/page.tsx
import projects from './projectData';
import { Project } from '../lib/interface';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../project-page.module.css';
export const unstable_runtimeJS = false;

const ProjectsPage = () => {
  return (
    <div className={styles.grid}>
      {projects.map((project: Project, index: number) => (
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
  );
};

export default ProjectsPage;
