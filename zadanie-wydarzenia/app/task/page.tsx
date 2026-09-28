"use client";

import { useState } from "react";
import type { EventFilters } from "@/types";
import { useEvents } from "./useEvents";
import { EventList } from "./EventList";

const cities = [
  "",
  "Warszawa",
  "Kraków",
  "Wrocław",
  "Gdańsk",
  "Poznań",
  "Łódź",
];

export default function TaskPage() {
  const [filters, setFilters] = useState<EventFilters>({
    q: "",
    city: "",
    onlyAvailable: false,
  });
  const { events, loading, error } = useEvents(filters);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Wydarzenia</h1>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium">
            Szukaj po nazwie
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
          <label htmlFor="city" className="block text-sm font-medium">
            Miasto
          </label>
          <select
            id="city"
            value={filters.city}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, city: event.target.value }))
            }
            className="mt-1 rounded-md border border-zinc-300 px-3 py-2"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city === "" ? "Wszystkie" : city}
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
          Tylko z dostępnymi biletami
        </label>
      </div>

      <div className="mt-6" aria-live="polite">
        <EventList events={events} loading={loading} error={error} />
      </div>
    </main>
  );
}
