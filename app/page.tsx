const endpoints = [
  { href: "/api/books", description: "lista książek" },
  { href: "/api/books?q=lem", description: "filtrowanie po tytule/autorze" },
  { href: "/api/books?genre=Fantastyka", description: "filtrowanie po gatunku" },
  { href: "/api/books?available=1", description: "tylko dostępne pozycje" },
  { href: "/api/books?fail=1", description: "odpowiedź z błędem 500" },
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
