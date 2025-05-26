import { I18nType } from "@/lib/i18n";

export default function About({ t }: { t: I18nType }) {
  return (
    <section
      id="about"
      className="w-full mb-12 scroll-mt-32"
    >
      <h2
        className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2"
      >
        <span role="img" aria-label="about">🧑‍💼</span>
        {t.aboutTitle}
      </h2>
      <p
        className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
      >
        {t.aboutDesc}
      </p>
    </section>
  );
}
