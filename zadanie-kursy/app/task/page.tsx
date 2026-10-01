"use client";

import { useState } from "react";
import type { CourseFilters, SortOption } from "@/types";
import { useCourses } from "./useCourses";
import { CourseList } from "./CourseList";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "rating-desc", label: "Najwyżej oceniane" },
  { value: "price-asc", label: "Cena: od najniższej" },
  { value: "price-desc", label: "Cena: od najwyższej" },
];

export default function TaskPage() {
  const [filters, setFilters] = useState<CourseFilters>({
    q: "",
    minRating: 0,
    sort: "rating-desc",
  });
  const { courses, loading, error } = useCourses(filters);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Kursy online</h1>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium">
            Szukaj po tytule lub prowadzącym
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
          <label htmlFor="minRating" className="block text-sm font-medium">
            Min. ocena: {filters.minRating.toFixed(1)}
          </label>
          <input
            id="minRating"
            type="range"
            min={0}
            max={5}
            step={0.5}
            value={filters.minRating}
            onChange={(event) =>
              setFilters((prev) => ({
                ...prev,
                minRating: Number(event.target.value),
              }))
            }
            className="mt-1"
          />
        </div>

        <div>
          <label htmlFor="sort" className="block text-sm font-medium">
            Sortowanie
          </label>
          <select
            id="sort"
            value={filters.sort}
            onChange={(event) =>
              setFilters((prev) => ({
                ...prev,
                sort: event.target.value as SortOption,
              }))
            }
            className="mt-1 rounded-md border border-zinc-300 px-3 py-2"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6" aria-live="polite">
        <CourseList courses={courses} loading={loading} error={error} />
      </div>
    </main>
  );
}
