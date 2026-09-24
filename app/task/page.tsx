"use client";

import { useState } from "react";
import type { BookFilters } from "@/types";
import { useBooks } from "./useBooks";
import { BookList } from "./BookList";

const genres = [
  "",
  "Powieść",
  "Kryminał",
  "Fantastyka",
  "Science Fiction",
  "Poradnik",
  "Biografia",
  "Reportaż",
  "Poezja",
];

export default function TaskPage() {
  const [filters, setFilters] = useState<BookFilters>({
    q: "",
    genre: "",
    onlyAvailable: false,
  });
  const { books, loading, error } = useBooks(filters);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Katalog książek</h1>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium">
            Szukaj po tytule lub autorze
          </label>
          <input
            id="search"
            type="search"
            value={filters.q}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, q: event.target.value }))
            }
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="genre" className="block text-sm font-medium">
            Gatunek
          </label>
          <select
            id="genre"
            value={filters.genre}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, genre: event.target.value }))
            }
            className="mt-1 rounded-md border border-zinc-300 px-3 py-2"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre === "" ? "Wszystkie" : genre}
              </option>
            ))}
          </select>
        </div>

        <label className="flex items-center gap-2 pb-2 text-sm">
          <input
            type="checkbox"
            checked={filters.onlyAvailable}
            onChange={(event) =>
              setFilters((prev) => ({
                ...prev,
                onlyAvailable: event.target.checked,
              }))
            }
          />
          Tylko dostępne
        </label>
      </div>

      <div className="mt-6" aria-live="polite">
        <BookList books={books} loading={loading} error={error} />
      </div>
    </main>
  );
}
