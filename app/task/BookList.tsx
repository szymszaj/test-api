import type { Book } from "@/types";
import { BookCard } from "./BookCard";

type BookListProps = {
  books: Book[];
  loading: boolean;
  error: string | null;
};

export function BookList({ books, loading, error }: BookListProps) {
  if (loading) return <p className="text-sm text-zinc-600">Ładowanie...</p>;

  if (error) return <p className="text-sm text-red-600">Błąd: {error}</p>;

  if (books.length === 0) {
    return <p className="text-sm text-zinc-600">Brak książek.</p>;
  }

  return (
    <ul className="space-y-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}
