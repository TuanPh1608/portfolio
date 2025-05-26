import { I18nType } from "@/lib/i18n";

export default function Contact({ t }: { t: I18nType }) {
  return (
    <section
      id="contact"
      className="w-full mb-12 scroll-mt-32"
    >
      <h2
        className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2"
      >
        <span role="img" aria-label="contact">✉️</span>
        {t.contactTitle}
      </h2>
      <form className="flex flex-col gap-4">
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
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded font-semibold hover:from-blue-700 hover:to-purple-700 transition flex items-center gap-2"
        >
          <span role="img" aria-label="send">📤</span>
          {t.contactSend}
        </button>
      </form>
    </section>
  );
}
