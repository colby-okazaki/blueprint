import type { Skill } from "../data/skills";

interface TechIconProps {
  skill: Skill;
}

export default function TechIcon({ skill }: TechIconProps) {
  const { name, Icon } = skill;
  return (
    <li className="flex flex-col items-center gap-2 text-gray-700 transition-transform hover:scale-110">
      <Icon size={36} aria-hidden="true" />
      <span className="text-sm">{name}</span>
    </li>
  );
}
