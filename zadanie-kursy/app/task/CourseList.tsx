import type { Course } from "@/types";
import { CourseCard } from "./CourseCard";

type CourseListProps = {
  courses: Course[];
  loading: boolean;
  error: string | null;
};

export function CourseList({ courses, loading, error }: CourseListProps) {
  if (loading) return <p className="text-sm text-zinc-600">Ładowanie...</p>;

  if (error) return <p className="text-sm text-red-600">Błąd: {error}</p>;

  if (courses.length === 0) {
    return <p className="text-sm text-zinc-600">Brak kursów.</p>;
  }

  return (
    <ul className="space-y-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </ul>
  );
}
