interface HeroProps {
  name: string;
  title?: string;
}

export default function Hero({ name, title }: HeroProps) {
  return (
    <header className="py-12 text-center sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {name}
      </h1>
      {title && <p className="mt-2 text-lg text-gray-600">{title}</p>}
    </header>
  );
}
