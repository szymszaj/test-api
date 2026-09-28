export type Event = {
  id: number;
  name: string;
  city: string;
  date: string;
  category: string;
  price: number;
  ticketsAvailable: boolean;
};

export type EventFilters = {
  q: string;
  city: string;
  onlyAvailable: boolean;
};
