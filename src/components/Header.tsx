import Image from "next/image";
import { I18nType } from "../lib/i18n";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export function HeaderNav({
  lang,
  setLang,
  t,
}: {
  lang: "vi" | "en";
  setLang: (l: "vi" | "en") => void;
  t: I18nType;
}) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-purple-950 dark:to-pink-950 shadow-lg backdrop-blur border-b border-blue-300 dark:border-purple-900 flex items-center justify-between px-4 md:px-16 py-2">
      <div className="flex items-center gap-3">
        <Image
          src={t.github?.avatar || "/globe.svg"}
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full border-2 border-blue-300 dark:border-purple-400 shadow"
        />
        <span className="hidden md:inline font-bold text-lg text-white tracking-tight drop-shadow-lg select-none">
          Portfolio
        </span>
      </div>
      <ul className="hidden md:flex gap-6 font-semibold text-white text-base drop-shadow-lg">
        <li>
          <a
            href="#about"
            className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
          >
            🧑‍💼 {t.menuAbout}
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
          >
            🛠️ {t.menuSkills}
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
          >
            📁 {t.menuProjects}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
          >
            ✉️ {t.menuContact}
          </a>
        </li>
      </ul>
      <div className="flex gap-2 items-center ml-4">
        <button
          onClick={() => setLang("vi")}
          className={`px-2 py-1 rounded text-xs font-bold border ${
            lang === "vi"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white/80 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700"
          }`}
        >
          VI
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-1 rounded text-xs font-bold border ${
            lang === "en"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white/80 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700"
          }`}
        >
          EN
        </button>
        <button
          className="md:hidden ml-2 p-2 rounded hover:bg-blue-900/30"
          onClick={() => setOpen(!open)}
        >
          <FaBars className="text-white text-xl" />
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-purple-950 dark:to-pink-950 py-4 flex flex-col gap-3 items-center font-semibold text-white text-base drop-shadow-lg animate-fade-in">
          <li>
            <a
              href="#about"
              className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
              onClick={() => setOpen(false)}
            >
              🧑‍💼 {t.menuAbout}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
              onClick={() => setOpen(false)}
            >
              🛠️ {t.menuSkills}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
              onClick={() => setOpen(false)}
            >
              📁 {t.menuProjects}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
              onClick={() => setOpen(false)}
            >
              ✉️ {t.menuContact}
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
