# Recruitment starter – kursy online

Projekt startowy do zadań podczas rozmowy technicznej. Treść zadania dostaniesz w trakcie rozmowy, więc nie musisz nic przygotowywać poza uruchomieniem projektu.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Uruchomienie

Wymagany Node.js 20.9 lub nowszy (zalecany 22 LTS, jest `.nvmrc`).

```bash
npm install
npm run dev
```

Otwórz http://localhost:3000. Jeśli widzisz stronę „Projekt działa” i linki do API zwracają JSON, wszystko jest gotowe.

## Co jest w projekcie

```
app/
├─ api/courses/route.ts    mock API katalogu kursów (filtr + sortowanie)
├─ task/                   strona na zadanie (szkielet, bez zaimplementowanej logiki)
│  ├─ page.tsx             formularz filtrów (wyszukiwanie, min. ocena, sortowanie)
│  ├─ useCourses.ts        hook do uzupełnienia – pobieranie danych z API
│  ├─ CourseList.tsx       renderowanie listy wyników
│  └─ CourseCard.tsx       pojedynczy kurs na liście
└─ layout.tsx
mocks/                     dane w JSON
types/index.ts             typy
```

Formularz na stronie `/task` jest już podpięty pod stan (wyszukiwanie po tytule/prowadzącym, slider minimalnej oceny, select sortowania), ale hook `useCourses` nie pobiera jeszcze danych – to część do zaimplementowania.

W odróżnieniu od poprzednich wariantów (biblioteka, wydarzenia) tym razem API wspiera też **sortowanie wyników po stronie serwera** oraz filtr liczbowy (`minRating`) zamiast dopasowania dokładnej wartości czy checkboxa – warto zwrócić uwagę, jak kandydat obsłuży kombinację filtrowania i sortowania w jednym zapytaniu.

### Mock API

| Endpoint | Opis |
|---|---|
| `GET /api/courses` | lista kursów |
| `GET /api/courses?q=react` | filtrowanie po tytule/prowadzącym |
| `GET /api/courses?minRating=4.5` | tylko kursy ocenione 4.5+ |
| `GET /api/courses?sort=price-asc` | sortowanie po cenie rosnąco (`price-asc`, `price-desc`, `rating-desc`) |
| `GET /api/courses?fail=1` | odpowiedź z błędem 500 |
| `GET /api/courses?delay=500` | wymuszone opóźnienie odpowiedzi (ms) |
