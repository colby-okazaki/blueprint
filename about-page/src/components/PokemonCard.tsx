import { usePokemon } from "../hooks/usePokemon";
import StatBar from "./StatBar";

interface PokemonCardProps {
  name: string;
}

const TYPE_COLORS: Record<string, string> = {
  dark: "bg-neutral-800 text-white",
  flying: "bg-sky-300 text-sky-950",
};

export default function PokemonCard({ name }: PokemonCardProps) {
  const state = usePokemon(name);

  if (state.status === "loading") return <p aria-live="polite" className="text-sm text-gray-600">Loading Pokémon…</p>;
  if (state.status === "error") return <p className="text-sm text-gray-600">Couldn't load Pokémon data.</p>;

  const { pokemon } = state;
  const hp = pokemon.stats.find((s) => s.name === "hp")?.value;

  return (
    <article
      aria-labelledby="pokemon-name"
      className="mx-auto max-w-sm rounded-2xl border-8 border-yellow-400 bg-gradient-to-b from-red-900 via-neutral-900 to-black p-4 text-white shadow-xl"
    >
      <header className="flex items-baseline justify-between">
        <h3 id="pokemon-name" className="text-2xl font-bold capitalize">{pokemon.name}</h3>
        <p className="font-bold">
          <span className="text-xs font-medium text-red-200">HP</span> {hp}
        </p>
      </header>
      <p className="text-xs text-red-200">
        #{String(pokemon.id).padStart(4, "0")} · {pokemon.genus}
      </p>

      <div className="mt-3 rounded-lg border-4 border-yellow-300/80 bg-gradient-to-br from-rose-950 to-neutral-800">
        <img src={pokemon.image} alt={`Official artwork of ${pokemon.name}`} className="mx-auto h-56 w-56 object-contain" />
      </div>

      <p className="mt-2 text-center text-[11px] text-neutral-400">
        Height {pokemon.heightM} m · Weight {pokemon.weightKg} kg
      </p>

      <ul aria-label="Types" className="mt-3 flex gap-2">
        {pokemon.types.map((type) => (
          <li key={type} className={`rounded-full px-3 py-0.5 text-xs font-semibold capitalize ${TYPE_COLORS[type] ?? "bg-gray-300 text-gray-900"}`}>
            {type}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-sm">
        <span className="font-semibold text-yellow-300">Ability</span>{" "}
        <span className="capitalize">{pokemon.abilities.join(", ")}</span>
      </p>

      <ul aria-label="Base stats" className="mt-3 space-y-1.5">
        {pokemon.stats.map((stat) => <StatBar key={stat.name} stat={stat} />)}
      </ul>

      <p className="mt-4 border-t border-white/20 pt-3 text-xs italic leading-relaxed text-neutral-300">
        {pokemon.flavorText}
      </p>
    </article>
  );
}
