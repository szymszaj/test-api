# Recruitment starter – biblioteka

Projekt startowy do zadań podczas rozmowy technicznej. Treść zadania dostaniesz w trakcie rozmowy, więc nie musisz nic przygotowywać poza uruchomieniem projektu.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Uruchomienie

Wymagany Node.js 20.9 lub nowszy (zalecany 22 LTS, jest `.nvmrc`).

```bash
git clone <adres-repozytorium>
cd recruitment-starter-biblioteka
npm install
npm run dev
```

Otwórz http://localhost:3000. Jeśli widzisz stronę „Projekt działa” i linki do API zwracają JSON, wszystko jest gotowe.

## Co jest w projekcie

```
app/
├─ api/books/route.ts      mock API katalogu książek
├─ task/                   strona na zadanie (szkielet, bez zaimplementowanej logiki)
│  ├─ page.tsx             formularz filtrów (wyszukiwanie, gatunek, dostępność)
│  ├─ useBooks.ts          hook do uzupełnienia – pobieranie danych z API
│  ├─ BookList.tsx         renderowanie listy wyników
│  └─ BookCard.tsx         pojedyncza pozycja na liście
└─ layout.tsx
mocks/                     dane w JSON
types/index.ts             typy
```

Formularz na stronie `/task` jest już podpięty pod stan (wyszukiwanie po tytule/autorze, filtr gatunku, checkbox dostępności), ale hook `useBooks` nie pobiera jeszcze danych – to część do zaimplementowania.

### Mock API

| Endpoint | Opis |
|---|---|
| `GET /api/books` | lista książek |
| `GET /api/books?q=lem` | filtrowanie po tytule/autorze |
| `GET /api/books?genre=Fantastyka` | filtrowanie po gatunku |
| `GET /api/books?available=1` | tylko dostępne pozycje |
| `GET /api/books?fail=1` | odpowiedź z błędem 500 |
| `GET /api/books?delay=500` | wymuszone opóźnienie odpowiedzi (ms) |
