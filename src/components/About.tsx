import { I18nType } from "../lib/i18n";
import { motion } from "framer-motion";

export default function About({ t }: { t: I18nType }) {
  return (
    <motion.section
      className="w-full mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        {t.aboutTitle}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
        {t.aboutDesc}
      </p>
    </motion.section>
  );
}
