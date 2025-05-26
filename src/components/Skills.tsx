import { I18nType } from "../lib/i18n";
import { motion } from "framer-motion";

export default function Skills({ t }: { t: I18nType }) {
  return (
    <motion.section
      className="w-full mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        {t.skillsTitle}
      </h2>
      <ul className="flex flex-wrap gap-3">
        {t.skills.map((skill, idx) => (
          <motion.li
            key={skill}
            className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-base font-semibold shadow hover:scale-105 transition-transform duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + idx * 0.07, duration: 0.4 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
