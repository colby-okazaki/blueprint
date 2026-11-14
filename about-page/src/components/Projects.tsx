import Section from "./Section";
import ProjectItem from "./ProjectItem";
import type { Project } from "../data/projects";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="Projects">
      <ul className="divide-y divide-gray-200 border-y border-gray-200">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  );
}
