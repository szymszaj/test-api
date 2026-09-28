import { useState } from "react";
import type { Event, EventFilters } from "@/types";

// TODO: zaimplementuj pobieranie danych z /api/events na podstawie `filters`
//  - zmapuj `filters.q`, `filters.city`, `filters.onlyAvailable` na parametry zapytania
//  - obsłuż stany `loading` i `error`
//  - zadbaj o anulowanie nieaktualnego zapytania (np. AbortController) przy zmianie filtrów
//  - rozważ debounce dla pola tekstowego, żeby nie odpytywać API przy każdym znaku
export function useEvents(filters: EventFilters) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return { events, loading, error };
}
