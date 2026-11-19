export interface PokemonStat {
  name: string;
  value: number;
}

export interface Pokemon {
  id: number;
  name: string;
  genus: string;
  flavorText: string;
  image: string;
  types: string[];
  abilities: string[];
  stats: PokemonStat[];
  heightM: number;
  weightKg: number;
}

export interface PokeApiPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { other: { "official-artwork": { front_default: string } } };
}

interface Localized {
  language: { name: string };
}

export interface PokeApiSpecies {
  genera: (Localized & { genus: string })[];
  flavor_text_entries: (Localized & { flavor_text: string })[];
}
