import type { Event } from "@/types";
import { EventCard } from "./EventCard";

type EventListProps = {
  events: Event[];
  loading: boolean;
  error: string | null;
};

export function EventList({ events, loading, error }: EventListProps) {
  if (loading) return <p className="text-sm text-zinc-600">Ładowanie...</p>;

  if (error) return <p className="text-sm text-red-600">Błąd: {error}</p>;

  if (events.length === 0) {
    return <p className="text-sm text-zinc-600">Brak wydarzeń.</p>;
  }

  return (
    <ul className="space-y-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
}
