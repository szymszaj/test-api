const endpoints = [
  { href: "/api/courses", description: "lista kursów" },
  { href: "/api/courses?q=react", description: "filtrowanie po tytule/prowadzącym" },
  { href: "/api/courses?minRating=4.5", description: "tylko kursy ocenione 4.5+" },
  { href: "/api/courses?sort=price-asc", description: "sortowanie po cenie rosnąco" },
  { href: "/api/courses?fail=1", description: "odpowiedź z błędem 500" },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Projekt działa</h1>
      <p className="mt-2 max-w-prose text-zinc-600">
        Jeśli widzisz tę stronę, środowisko jest gotowe. Sprawdź jeszcze, czy
        poniższe endpointy zwracają dane. Treść zadania dostaniesz podczas
        rozmowy.
      </p>

      <h2 className="mt-8 text-lg font-semibold">Mock API</h2>
      <ul className="mt-3 space-y-2">
        {endpoints.map((endpoint) => (
          <li key={endpoint.href}>
            <a href={endpoint.href} className="font-mono text-sm underline">
              {endpoint.href}
            </a>
            <span className="text-sm text-zinc-600"> – {endpoint.description}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
