import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recruitment",
  description: "Projekt do zadań podczas rozmowy technicznej",
};

const links = [
  { href: "/", label: "Start" },
  { href: "/task", label: "Zadanie" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen font-sans antialiased">
        <header className="border-b border-zinc-200">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
