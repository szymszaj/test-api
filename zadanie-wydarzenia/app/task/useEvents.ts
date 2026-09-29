import { useEffect, useState } from "react";
import type { Event, EventFilters } from "@/types";

export function useEvents(filters: EventFilters) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (filters.q) params.set("q", filters.q);
      if (filters.city) params.set("city", filters.city);
      if (filters.onlyAvailable) params.set("available", "1");

      fetch(`/api/events?${params.toString()}`, {
        signal: controller.signal,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Nie udało się pobrać wydarzeń");
          }
          return response.json();
        })
        .then((data: Event[]) => {
          setEvents(data);
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
  }, [filters.q, filters.city, filters.onlyAvailable]);

  return { events, loading, error };
}
