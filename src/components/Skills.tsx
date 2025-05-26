import { I18nType } from "@/lib/i18n";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma } from "react-icons/si";

const skillIcon: Record<string, React.ReactNode> = {
  React: <FaReact className="text-sky-500" title="React" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" title="Next.js" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />,
  TypeScript: <SiTypescript className="text-blue-600" title="TypeScript" />,
  JavaScript: <FaJs className="text-yellow-400" title="JavaScript" />,
  HTML: <FaHtml5 className="text-orange-500" title="HTML" />,
  CSS: <FaCss3Alt className="text-blue-400" title="CSS" />,
  Git: <FaGitAlt className="text-orange-600" title="Git" />,
  UIUX: <SiFigma className="text-pink-500" title="UI/UX" />,
  "UI/UX": <SiFigma className="text-pink-500" title="UI/UX" />,
  NodeJS: <FaNodeJs className="text-green-600" title="NodeJS" />,
};

export default function Skills({ t }: { t: I18nType }) {
  return (
    <section id="skills" className="w-full mb-12 scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{t.skillsTitle}</h2>
      <ul className="flex flex-wrap gap-3">
        {t.skills.map((skill) => (
          <li
            key={skill}
            className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-base font-semibold shadow hover:scale-105 transition-transform duration-200 flex items-center gap-2"
          >
            {skillIcon[skill] || null} {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
