import Section from "./Section";
import TechIcon from "./TechIcon";
import type { Skill } from "../data/skills";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Skills">
      <ul className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5">
        {skills.map((skill) => (
          <TechIcon key={skill.name} skill={skill} />
        ))}
      </ul>
    </Section>
  );
}
