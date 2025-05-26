import { I18nType } from "@/lib/i18n";

export default function Footer({ t }: { t: I18nType }) {
  return (
    <footer
      className="w-full text-center py-6 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 mt-10 bg-white/60 dark:bg-black/30 backdrop-blur"
    >
      © {new Date().getFullYear()} {t.name}. All rights reserved.
    </footer>
  );
}
