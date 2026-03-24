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
  title: "Sebastian | Senior Fullstack / Backend Engineer",
  description:
    "Portfolio of a senior software engineer with 9+ years building scalable backend systems, REST APIs, cloud infrastructure, and modern frontends.",
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
