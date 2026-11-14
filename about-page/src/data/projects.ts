export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Movie Ticket Booking",
    description: "Full-stack cinema booking app: users pick seats and manage tickets, admins track occupancy and revenue.",
    tech: ["React", "Express", "Prisma", "JWT"],
    link: "https://github.com/colby-okazaki/movie-ticket-booking",
  },
  {
    id: 2,
    title: "Sports Stats Query Engine",
    description: "Plain-English sports stats search with live scores, Gamecast and box scores from ESPN data.",
    tech: ["Next.js", "React", "TypeScript"],
    link: "https://github.com/colby-okazaki/sports-stats-query-engine",
  },
  {
    id: 3,
    title: "Lift",
    description: "Mobile-first workout tracker PWA for logging lifts, building plans and tracking 1RM PRs.",
    tech: ["React", "Vite", "Tailwind", "PWA"],
    link: "https://github.com/colby-okazaki/lift-app",
  },
];
