import { NextResponse } from "next/server";
import courses from "@/mocks/courses.json";

// GET /api/courses?q=react&minRating=4&sort=price-asc
// Parametry:
//   q         – filtr po tytule i prowadzącym (bez rozróżniania wielkości liter)
//   minRating – minimalna ocena kursu (np. 4 zwraca kursy ocenione na 4.0+)
//   sort      – price-asc | price-desc | rating-desc (domyślnie brak sortowania)
//   fail      – fail=1 zwraca błąd 500
//   delay     – stałe opóźnienie w ms (domyślnie losowe 200–1500 ms)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  const minRating = Number(searchParams.get("minRating") ?? 0);
  const sort = searchParams.get("sort");
  const delayParam = searchParams.get("delay");
  const delay =
    delayParam !== null ? Number(delayParam) : 200 + Math.random() * 1300;

  await new Promise((resolve) => setTimeout(resolve, delay));

  if (searchParams.get("fail") === "1") {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }

  let result = courses.filter((course) => {
    const matchesQuery =
      course.title.toLowerCase().includes(q) ||
      course.instructor.toLowerCase().includes(q);
    const matchesRating = course.rating >= minRating;

    return matchesQuery && matchesRating;
  });

  if (sort === "price-asc") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    result = [...result].sort((a, b) => b.price - a.price);
  } else if (sort === "rating-desc") {
    result = [...result].sort((a, b) => b.rating - a.rating);
  }

  return NextResponse.json(result);
}
