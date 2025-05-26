import { I18nType } from "../lib/i18n";
import { motion } from "framer-motion";

export default function Contact({ t }: { t: I18nType }) {
  return (
    <motion.section
      className="w-full mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        {t.contactTitle}
      </h2>
      <motion.form
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <input
          type="text"
          placeholder={t.contactName}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow focus:ring-2 focus:ring-blue-300 outline-none transition"
        />
        <input
          type="email"
          placeholder={t.contactEmail}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow focus:ring-2 focus:ring-blue-300 outline-none transition"
        />
        <textarea
          placeholder={t.contactMsg}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow focus:ring-2 focus:ring-blue-300 outline-none transition"
          rows={4}
        />
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded font-semibold hover:from-blue-700 hover:to-purple-700 transition"
          whileTap={{ scale: 0.95 }}
        >
          {t.contactSend}
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
