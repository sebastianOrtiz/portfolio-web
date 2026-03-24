import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getDictionary, locales, type Locale } from "@/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <ThemeProvider>
      <Header lang={lang as Locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} />
    </ThemeProvider>
  );
}
