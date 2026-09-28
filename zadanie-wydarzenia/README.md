# Recruitment starter – wydarzenia

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
├─ api/events/route.ts     mock API listy wydarzeń
├─ task/                   strona na zadanie (szkielet, bez zaimplementowanej logiki)
│  ├─ page.tsx             formularz filtrów (wyszukiwanie, miasto, dostępność biletów)
│  ├─ useEvents.ts         hook do uzupełnienia – pobieranie danych z API
│  ├─ EventList.tsx        renderowanie listy wyników
│  └─ EventCard.tsx        pojedyncze wydarzenie na liście
└─ layout.tsx
mocks/                     dane w JSON
types/index.ts             typy
```

Formularz na stronie `/task` jest już podpięty pod stan (wyszukiwanie po nazwie, filtr miasta, checkbox dostępności biletów), ale hook `useEvents` nie pobiera jeszcze danych – to część do zaimplementowania.

### Mock API

| Endpoint | Opis |
|---|---|
| `GET /api/events` | lista wydarzeń |
| `GET /api/events?q=jazz` | filtrowanie po nazwie |
| `GET /api/events?city=Kraków` | filtrowanie po mieście |
| `GET /api/events?available=1` | tylko dostępne bilety |
| `GET /api/events?fail=1` | odpowiedź z błędem 500 |
| `GET /api/events?delay=500` | wymuszone opóźnienie odpowiedzi (ms) |
