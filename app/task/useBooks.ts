import { useEffect, useState } from "react";
import type { Book, BookFilters } from "@/types";

export function useBooks(filters: BookFilters) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (filters.q) params.set("q", filters.q);
      if (filters.genre) params.set("genre", filters.genre);
      if (filters.onlyAvailable) params.set("available", "1");

      fetch(`/api/books?${params.toString()}`, {
        signal: controller.signal,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Nie udało się pobrać książek");
          }
          return response.json();
        })
        .then((data: Book[]) => {
          setBooks(data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") return;
          setError(err.message);
          setLoading(false);
        });
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [filters.q, filters.genre, filters.onlyAvailable]);

  return { books, loading, error };
}
