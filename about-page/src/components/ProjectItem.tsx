import type { Project } from "../data/projects";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { title, description, tech, link } = project;
  return (
    <li className="py-4 sm:flex sm:items-start sm:justify-between sm:gap-6">
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p
          aria-label={`Technologies used: ${tech.join(", ")}`}
          className="mt-1 text-sm text-gray-500"
        >
          {tech.join(" · ")}
        </p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub (opens in new tab)`}
          className="mt-2 inline-block shrink-0 text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:mt-0"
        >
          GitHub
        </a>
      )}
    </li>
  );
}
