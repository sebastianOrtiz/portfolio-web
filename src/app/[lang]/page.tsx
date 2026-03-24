import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { getDictionary, type Locale } from "@/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <Projects dict={dict} />
      <Skills dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
