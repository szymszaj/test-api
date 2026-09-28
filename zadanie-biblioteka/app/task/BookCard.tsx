import type { Book } from "@/types";

export function BookCard({ book }: { book: Book }) {
  return (
    <li className="rounded-md border border-zinc-200 px-4 py-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{book.title}</p>
          <p className="mt-1 text-sm text-zinc-600">{book.author}</p>
          <p className="mt-1 text-xs text-zinc-500">
            {book.genre} · {book.year}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-medium">★ {book.rating.toFixed(1)}</p>
          <p
            className={
              book.available ? "text-xs text-green-600" : "text-xs text-red-600"
            }
          >
            {book.available ? "Dostępna" : "Wypożyczona"}
          </p>
        </div>
      </div>
    </li>
  );
}
