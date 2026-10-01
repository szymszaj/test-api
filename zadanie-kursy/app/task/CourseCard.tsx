import type { Course } from "@/types";

export function CourseCard({ course }: { course: Course }) {
  return (
    <li className="rounded-md border border-zinc-200 px-4 py-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{course.title}</p>
          <p className="mt-1 text-sm text-zinc-600">{course.instructor}</p>
          <p className="mt-1 text-xs text-zinc-500">
            {course.category} · {course.level} · {course.durationHours} h
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-medium">
            {course.price === 0 ? "Bezpłatny" : `${course.price} zł`}
          </p>
          <p className="text-xs text-amber-600">★ {course.rating.toFixed(1)}</p>
        </div>
      </div>
    </li>
  );
}
