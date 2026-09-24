export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  rating: number;
  available: boolean;
};

export type BookFilters = {
  q: string;
  genre: string;
  onlyAvailable: boolean;
};
