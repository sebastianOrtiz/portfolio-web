import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { ScrollRevealInit } from "@/components/ui/scroll-reveal-init";
import { getDictionary, type Locale } from "@/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <ScrollRevealInit />
      <Hero dict={dict} />
      <div className="reveal">
        <About dict={dict} />
      </div>
      <div className="reveal">
        <Projects dict={dict} />
      </div>
      <div className="reveal">
        <Skills dict={dict} />
      </div>
      <div className="reveal">
        <Contact dict={dict} />
      </div>
    </>
  );
}
