import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export interface Skill {
  name: string;
  Icon: IconType;
}

export const skills: Skill[] = [
  { name: "Java", Icon: FaJava },
  { name: "Python", Icon: SiPython },
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "React", Icon: SiReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Git", Icon: SiGit },
];
