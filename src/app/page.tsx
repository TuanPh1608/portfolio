"use client";

import { useState } from "react";
import { HeaderNav } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const t = useTranslation(lang);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-0 m-0">
      <HeaderNav t={t} lang={lang} setLang={setLang} />
      <HeroSection t={t} />
      <main className="flex flex-col items-center px-4 py-10 max-w-3xl mx-auto">
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
