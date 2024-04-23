import { Project } from '../lib/interface';

export const getUniqueTechStacks = (projects: Project[]) => {
  const techSet = new Set<string>();
  projects.forEach(project => {
    project.stack.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet);
};