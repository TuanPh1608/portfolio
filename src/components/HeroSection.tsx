import { FaCode, FaGithub, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import Image from "next/image";
import { I18nType } from "../lib/i18n";

export default function HeroSection({ t }: { t: I18nType }) {
  return (
    <section
      className="w-full flex flex-col items-center justify-center \
      min-h-[80vh] pt-40 pb-10 relative \
      bg-gradient-to-br \
      from-blue-900/80 via-purple-900/70 to-pink-900/60 \
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="relative flex flex-col items-center">
        <div className="rounded-full p-2 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 shadow-xl mb-6 animate-tilt">
          <Image
            src={t.github?.avatar || "/globe.svg"}
            alt="Avatar"
            width={150}
            height={150}
            className="rounded-full border-4 border-white dark:border-gray-900 shadow-lg object-cover"
          />
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-200 dark:via-purple-200 dark:to-pink-200 mb-2 drop-shadow-xl text-center mt-12 flex items-center justify-center gap-3">
        {t.name}
      </h1>
      <div className="flex flex-row items-center mb-4 gap-2 flex-wrap justify-center">
        {Array.isArray(t.role) &&
          t.role.map((r) => (
            <span
              key={r}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-base font-bold shadow-lg animate-pulse"
            >
              <FaCode className="inline-block" /> {r}
            </span>
          ))}
      </div>
      <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 font-medium text-center max-w-2xl mb-8 animate-fade-in flex items-center justify-center gap-2">
        {t.github?.bio}
      </p>
      <div className="flex flex-wrap gap-4 mt-2 justify-center">
        <a
          href={t.github?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow hover:from-blue-600 hover:to-purple-600 transition"
        >
          <FaGithub /> GitHub
        </a>
        {t.github?.location && (
          <span className="text-gray-200 bg-gray-800/60 px-3 py-1 rounded-full text-sm flex items-center gap-1">
            <FaMapMarkerAlt /> {t.github?.location}
          </span>
        )}
        <span className="text-gray-200 bg-gray-800/60 px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <FaUsers /> {t.github?.followers} followers
        </span>
        <span className="text-gray-200 bg-gray-800/60 px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <FaUsers /> {t.github?.following} following
        </span>
      </div>
    </section>
  );
}
