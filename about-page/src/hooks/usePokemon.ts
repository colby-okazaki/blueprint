import { useEffect, useState } from "react";
import type { PokeApiPokemon, PokeApiSpecies, Pokemon } from "../types/pokemon";

type PokemonState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; pokemon: Pokemon };

const API = "https://pokeapi.co/api/v2";

const getJson = async <T,>(url: string, signal: AbortSignal): Promise<T> => {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`PokéAPI ${res.status}`);
  return (await res.json()) as T;
};

export function usePokemon(name: string): PokemonState {
  const [state, setState] = useState<PokemonState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const load = async (): Promise<void> => {
      const [p, species] = await Promise.all([
        getJson<PokeApiPokemon>(`${API}/pokemon/${name}`, signal),
        getJson<PokeApiSpecies>(`${API}/pokemon-species/${name}`, signal),
      ]);
      const english = species.flavor_text_entries.filter((f) => f.language.name === "en");

      setState({
        status: "ready",
        pokemon: {
          id: p.id,
          name: p.name,
          genus: species.genera.find((g) => g.language.name === "en")?.genus ?? "",
          flavorText: english.at(-1)?.flavor_text.replace(/\s+/g, " ") ?? "",
          image: p.sprites.other["official-artwork"].front_default,
          types: p.types.map((t) => t.type.name),
          abilities: p.abilities.map((a) => a.ability.name.replace("-", " ")),
          stats: p.stats.map((s) => ({ name: s.stat.name, value: s.base_stat })),
          heightM: p.height / 10,
          weightKg: p.weight / 10,
        },
      });
    };

    load().catch(() => {
      if (!signal.aborted) setState({ status: "error" });
    });
    return () => controller.abort();
  }, [name]);

  return state;
}
