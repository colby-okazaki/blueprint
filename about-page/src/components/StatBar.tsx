import type { PokemonStat } from "../types/pokemon";

interface StatBarProps {
  stat: PokemonStat;
}

const LABELS: Record<string, string> = {
  hp: "HP",
  attack: "Atk",
  defense: "Def",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Spd",
};

const MAX_STAT = 255;

export default function StatBar({ stat }: StatBarProps) {
  const label = LABELS[stat.name] ?? stat.name;
  const percent = Math.round((stat.value / MAX_STAT) * 100);

  return (
    <li className="grid grid-cols-[4rem_2.5rem_1fr] items-center gap-2 text-xs">
      <span className="font-medium text-red-100">{label}</span>
      <span className="text-right font-mono text-white">{stat.value}</span>
      <div
        role="meter"
        aria-label={label}
        aria-valuenow={stat.value}
        aria-valuemin={0}
        aria-valuemax={MAX_STAT}
        className="h-2 overflow-hidden rounded-full bg-black/40"
      >
        <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-rose-300" style={{ width: `${percent}%` }} />
      </div>
    </li>
  );
}
