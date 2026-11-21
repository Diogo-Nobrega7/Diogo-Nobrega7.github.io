import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <a
        href="#cases"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Cases />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
    </>
  );
}
