import { useEffect, useState } from "react";
import { I18nType } from "@/lib/i18n";
import { motion } from "framer-motion";
import {
  FaStar,
  FaCodeBranch,
  FaGlobe,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
  homepage?: string | null;
}

const languageIcon: Record<string, React.ReactNode> = {
  TypeScript: <SiTypescript className="text-blue-500" title="TypeScript" />,
  JavaScript: <FaJs className="text-yellow-400" title="JavaScript" />,
  HTML: <FaHtml5 className="text-orange-500" title="HTML" />,
  CSS: <FaCss3Alt className="text-blue-400" title="CSS" />,
  React: <FaReact className="text-sky-500" title="React" />,
  "Next.js": (
    <SiNextdotjs className="text-black dark:text-white" title="Next.js" />
  ),
  "Tailwind CSS": (
    <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />
  ),
  NodeJS: <FaNodeJs className="text-green-600" title="NodeJS" />,
  Git: <FaGitAlt className="text-orange-600" title="Git" />,
  UIUX: <SiFigma className="text-pink-500" title="UI/UX" />,
  "UI/UX": <SiFigma className="text-pink-500" title="UI/UX" />,
};

export default function Projects({ t }: { t: I18nType }) {
  const [repos, setRepos] = useState<GithubRepo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setRepos(
          data.sort(
            (a: GithubRepo, b: GithubRepo) =>
              b.stargazers_count - a.stargazers_count
          )
        );
        setLoading(false);
      })
      .catch(() => {
        setError("Không thể lấy danh sách project từ GitHub.");
        setLoading(false);
      });
  }, []);

  return (
    <motion.section
      id="projects"
      className="w-full mb-12 scroll-mt-32"
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
              className="group bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-100/80 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-3 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-lg text-blue-700 dark:text-blue-300 flex-1 truncate flex items-center gap-2 hover:text-blue-500 transition group/name"
                >
                  {repo.language && languageIcon[repo.language]}
                  {repo.name}
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded-full font-semibold hover:underline transition flex items-center gap-1 text-xs z-10"
                    tabIndex={0}
                    onClick={(e) => e.stopPropagation()}
                    onMouseEnter={(e) => e.stopPropagation()}
                  >
                    <FaGlobe /> Demo
                  </a>
                )}
                {repo.fork && (
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded flex items-center gap-1">
                    <FaCodeBranch className="inline-block" /> Fork
                  </span>
                )}
                <span className="text-xs text-yellow-600 dark:text-yellow-300 flex items-center gap-1">
                  <FaStar className="inline-block" /> {repo.stargazers_count}
                </span>
              </div>
              {repo.description && (
                <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-2 min-h-[40px]">
                  {repo.description}
                </p>
              )}
              <div className="flex gap-3 text-xs text-gray-500 dark:text-gray-400 flex-wrap items-center">
                {repo.language && (
                  <span className="font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                    {languageIcon[repo.language]} {repo.language}
                  </span>
                )}
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                  <FaGlobe /> Cập nhật:{" "}
                  {new Date(repo.updated_at).toLocaleDateString("vi-VN")}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full font-semibold hover:underline transition flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
              <div className="absolute right-0 top-0 opacity-10 text-[6rem] pointer-events-none select-none font-black text-blue-300 dark:text-blue-900">
                {repo.language?.slice(0, 2) || ""}
              </div>
            </motion.div>
          ))}
        {repos && repos.length === 0 && (
          <div className="col-span-2 text-center text-gray-400">
            Không có project nào trên GitHub.
          </div>
        )}
      </div>
    </motion.section>
  );
}
