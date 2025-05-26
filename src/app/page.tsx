"use client";

import { useState } from "react";
import Header from "@/components/Header";
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
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setLang("vi")}
          className={`px-3 py-1 rounded ${
            lang === "vi"
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
          }`}
        >
          VI
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded ${
            lang === "en"
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
          }`}
        >
          EN
        </button>
      </div>
      <Header t={t} />
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
