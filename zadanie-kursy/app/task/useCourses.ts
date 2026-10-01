import { useState } from "react";
import type { Course, CourseFilters } from "@/types";

// TODO: zaimplementuj pobieranie danych z /api/courses na podstawie `filters`
//  - zmapuj `filters.q`, `filters.minRating`, `filters.sort` na parametry zapytania
//  - obsłuż stany `loading` i `error`
//  - zadbaj o anulowanie nieaktualnego zapytania (np. AbortController) przy zmianie filtrów
//  - rozważ debounce dla pola tekstowego, żeby nie odpytywać API przy każdym znaku
export function useCourses(filters: CourseFilters) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return { courses, loading, error };
}
