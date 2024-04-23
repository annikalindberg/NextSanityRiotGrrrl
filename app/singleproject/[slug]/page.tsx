// src/pages/projects/[slug].tsx
/* import { GetStaticPaths, GetStaticProps } from 'next';
import projects from '../../project/projectData';
import { Project } from '../../lib/interface';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Render other project details */
   /*  </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for each project
  const paths = projects.map((project) => ({
    params: { slug: project.slug }, // Make sure your projects data has a 'slug' field
    
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  // Find the project by slug
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project }, // Pass the project data to the page via props
  };
};

export default ProjectPage; */ 