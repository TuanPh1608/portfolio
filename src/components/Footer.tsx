import { I18nType } from "../lib/i18n";
import { motion } from "framer-motion";

export default function Footer({ t }: { t: I18nType }) {
  return (
    <motion.footer
      className="w-full text-center py-6 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 mt-10 bg-white/60 dark:bg-black/30 backdrop-blur"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      © {new Date().getFullYear()} {t.name}. All rights reserved.
    </motion.footer>
  );
}
