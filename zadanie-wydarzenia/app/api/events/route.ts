import { NextResponse } from "next/server";
import events from "@/mocks/events.json";

// GET /api/events?q=jazz
// Parametry:
//   q         – filtr po nazwie wydarzenia (bez rozróżniania wielkości liter)
//   city      – filtr po mieście (dokładne dopasowanie)
//   available – available=1 zwraca tylko wydarzenia z dostępnymi biletami
//   fail      – fail=1 zwraca błąd 500
//   delay     – stałe opóźnienie w ms (domyślnie losowe 200–1500 ms)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  const city = (searchParams.get("city") ?? "").trim().toLowerCase();
  const onlyAvailable = searchParams.get("available") === "1";
  const delayParam = searchParams.get("delay");
  const delay =
    delayParam !== null ? Number(delayParam) : 200 + Math.random() * 1300;

  await new Promise((resolve) => setTimeout(resolve, delay));

  if (searchParams.get("fail") === "1") {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }

  const result = events.filter((event) => {
    const matchesQuery = event.name.toLowerCase().includes(q);
    const matchesCity = city === "" || event.city.toLowerCase() === city;
    const matchesAvailability = !onlyAvailable || event.ticketsAvailable;

    return matchesQuery && matchesCity && matchesAvailability;
  });

  return NextResponse.json(result);
}
