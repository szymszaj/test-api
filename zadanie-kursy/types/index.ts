export type Course = {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: "Początkujący" | "Średni" | "Zaawansowany";
  price: number;
  rating: number;
  durationHours: number;
};

export type SortOption = "price-asc" | "price-desc" | "rating-desc";

export type CourseFilters = {
  q: string;
  minRating: number;
  sort: SortOption;
};
