import { useState } from "react";
import type { Book, BookFilters } from "@/types";

// TODO: zaimplementuj pobieranie danych z /api/books na podstawie `filters`
//  - zmapuj `filters.q`, `filters.genre`, `filters.onlyAvailable` na parametry zapytania
//  - obsłuż stany `loading` i `error`
//  - zadbaj o anulowanie nieaktualnego zapytania (np. AbortController) przy zmianie filtrów
//  - rozważ debounce dla pola tekstowego, żeby nie odpytywać API przy każdym znaku
export function useBooks(filters: BookFilters) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return { books, loading, error };
}
