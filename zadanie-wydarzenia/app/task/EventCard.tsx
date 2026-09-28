import type { Event } from "@/types";

export function EventCard({ event }: { event: Event }) {
  return (
    <li className="rounded-md border border-zinc-200 px-4 py-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{event.name}</p>
          <p className="mt-1 text-sm text-zinc-600">
            {event.city} · {event.date}
          </p>
          <p className="mt-1 text-xs text-zinc-500">{event.category}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-medium">
            {event.price === 0 ? "Wstęp wolny" : `${event.price} zł`}
          </p>
          <p
            className={
              event.ticketsAvailable
                ? "text-xs text-green-600"
                : "text-xs text-red-600"
            }
          >
            {event.ticketsAvailable ? "Bilety dostępne" : "Wyprzedane"}
          </p>
        </div>
      </div>
    </li>
  );
}
