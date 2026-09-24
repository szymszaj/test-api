import { NextResponse } from "next/server";
import books from "@/mocks/books.json";

// GET /api/books?q=lem
// Parametry:
//   q         – filtr po tytule i autorze (bez rozróżniania wielkości liter)
//   genre     – filtr po gatunku (dokładne dopasowanie)
//   available – available=1 zwraca tylko dostępne pozycje
//   fail      – fail=1 zwraca błąd 500
//   delay     – stałe opóźnienie w ms (domyślnie losowe 200–1500 ms)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  const genre = (searchParams.get("genre") ?? "").trim().toLowerCase();
  const onlyAvailable = searchParams.get("available") === "1";
  const delayParam = searchParams.get("delay");
  const delay =
    delayParam !== null ? Number(delayParam) : 200 + Math.random() * 1300;

  await new Promise((resolve) => setTimeout(resolve, delay));

  if (searchParams.get("fail") === "1") {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }

  const result = books.filter((book) => {
    const matchesQuery =
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q);
    const matchesGenre = genre === "" || book.genre.toLowerCase() === genre;
    const matchesAvailability = !onlyAvailable || book.available;

    return matchesQuery && matchesGenre && matchesAvailability;
  });

  return NextResponse.json(result);
}
