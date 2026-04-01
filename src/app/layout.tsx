import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastian Ortiz Valencia | Senior Fullstack Engineer",
  description:
    "Portfolio of a senior fullstack engineer with 9+ years building end-to-end applications — from scalable APIs and cloud infrastructure to modern, responsive frontends.",
  keywords: [
    "software engineer",
    "fullstack developer",
    "backend engineer",
    "Python",
    "Go",
    "TypeScript",
    "Angular",
    "React",
    "FastAPI",
    "PostgreSQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
