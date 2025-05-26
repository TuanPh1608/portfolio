import { useEffect, useState } from "react";
import { I18nType } from "@/lib/i18n";
import { motion } from "framer-motion";

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
}

export default function Projects({ t }: { t: I18nType }) {
  const [repos, setRepos] = useState<GithubRepo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Không thể lấy danh sách project từ GitHub.");
        setLoading(false);
      });
  }, []);

  return (
    <motion.section
      className="w-full mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        {t.projectsTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading && (
          <div className="col-span-2 text-center text-gray-400">
            Đang tải project từ GitHub...
          </div>
        )}
        {error && (
          <div className="col-span-2 text-center text-red-400">{error}</div>
        )}
        {repos &&
          repos.length > 0 &&
          repos.map((repo) => (
            <motion.div
              key={repo.id}
              className="bg-white dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-lg mb-1 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {repo.name}
                </a>
                {repo.fork && (
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">
                    Fork
                  </span>
                )}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-base">
                {repo.description}
              </p>
              <div className="flex gap-3 text-xs text-gray-500 dark:text-gray-400">
                {repo.language && <span>{repo.language}</span>}
                <span>⭐ {repo.stargazers_count}</span>
                <span>
                  Cập nhật:{" "}
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        {repos && repos.length === 0 && (
          <div className="col-span-2 text-center text-gray-400">
            Không có project nào trên GitHub.
          </div>
        )}
      </div>
      <p className="italic text-gray-400 mt-4 text-center">
        {t.projectNote}
      </p>
    </motion.section>
  );
}
