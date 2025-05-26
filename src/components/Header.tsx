import { I18nType } from "../lib/i18n";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header({ t }: { t: I18nType }) {
  return (
    <motion.header
      className="w-full flex flex-col items-center py-10 bg-white/80 dark:bg-black/40 shadow-sm"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <Image
          src={t.github?.avatar || "/globe.svg"}
          alt="Avatar"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-300 dark:border-purple-400 shadow-lg mb-4 hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
      <motion.h1
        className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {t.name}
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 mb-2 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {t.role}
      </motion.p>
      <motion.p
        className="text-gray-500 dark:text-gray-400 text-base mb-2 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        {t.github?.bio}
      </motion.p>
      <motion.div
        className="flex gap-4 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <a
          href={t.github?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:underline font-semibold flex items-center gap-1"
        >
          <svg
            width="18"
            height="18"
            fill="currentColor"
            className="inline-block"
          >
            <use href="#icon-github" />
          </svg>{" "}
          GitHub
        </a>
        <span className="text-gray-400 text-sm flex items-center gap-1">
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="inline-block"
          >
            <use href="#icon-location" />
          </svg>
          {t.github?.location}
        </span>
        <span className="text-gray-400 text-sm flex items-center gap-1">
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="inline-block"
          >
            <use href="#icon-users" />
          </svg>
          {t.github?.followers} followers
        </span>
        <span className="text-gray-400 text-sm flex items-center gap-1">
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="inline-block"
          >
            <use href="#icon-users" />
          </svg>
          {t.github?.following} following
        </span>
      </motion.div>
      <svg style={{ display: "none" }}>
        <symbol id="icon-github" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </symbol>
        <symbol id="icon-location" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </symbol>
        <symbol id="icon-users" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.08 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </symbol>
      </svg>
    </motion.header>
  );
}
