import Hero from "../components/Hero";
import Section from "../components/Section";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import PokemonCard from "../components/PokemonCard";
import { skills } from "../data/skills";
import { projects } from "../data/projects";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
      <Hero name="Colby Okazaki" title="CS Student · Software Developer" />

      <Section id="about" title="About Me">
        <p className="leading-relaxed text-gray-700">
          I am a 3rd Year Computer Science with an interest in Software Engineering. I have experience working with full stack applications created with Javascript, React, and Node.js. 
        </p>
      </Section>

      <Skills skills={skills} />
      <Projects projects={projects} />

      <Section id="favorite-pokemon" title="My Favorite Pokémon">
        <PokemonCard name="yveltal" />
      </Section>
    </main>
  );
}
