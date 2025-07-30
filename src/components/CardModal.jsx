import { useState } from "react";
import { Github } from "lucide-react";
import ReactDOM from "react-dom";
import {
  SiReact,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiDjango,
  SiAstro,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiSolidity,
  SiSpringboot,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function CardModal({ img, title, subtitle, text, zoom, github, tech}) {
    const [isOpen, setIsOpen] = useState(false);

    const zoomEnabled = zoom !== "false";

    const type = img ? "img" : github ? "github" : "text";

    const openModal = () => {
        if(zoomEnabled) setIsOpen(true);
    };
    const closeModal = () => setIsOpen(false);

    const iconMap = {
        react: <SiReact className="text-blue-500" title="React" />,
        tailwindcss: <SiTailwindcss className="text-cyan-400" title="TailwindCSS" />,
        python: <SiPython className="text-yellow-500" title="Python" />,
        javascript: <SiJavascript className="text-yellow-400" title="JavaScript" />,
        django: <SiDjango className="text-green-800" title="Django" />,
        astro: <SiAstro className="text-white" title="Astro" />,
        html: <SiHtml5 className="text-orange-600" title="Html" />,
        css: <SiCss3 className="text-blue-600" title="CSS3" />,
        docker: <SiDocker className="text-blue-600" title="Docker" />,
        solidity: <SiSolidity className="text-gray-600" title="Solidity" />,
        java: <FaJava className="text-red-600" title="Java" />,
        springboot: <SiSpringboot className="text-green-600" title="Spring Boot" />,
        postgre: <SiPostgresql className="text-blue-400" title="PostgreSQL" />,
        nextjs: <SiNextdotjs className="text-white" title="Next.js" />,
        typescript: <SiTypescript className="text-blue-400" title="TypeScript" />
    };

    const content = (
    <div className="bg-gray-900 rounded-xl text-white h-auto overflow-hidden">
        {type === "img" && (
            <img
            src={img}
            alt="Card Image"
            className="h-auto rounded w-full object-cover"
            />
        )}
        {type === "github" && (
            <div className="p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h1 className="xs:text-lg sm:text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold">{title}</h1>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-white hover:text-gray-300 xs:text-sm sm:text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl" />
                    </a>
                </div>
                {tech && tech.length > 0 && (
                    <div className="flex flex-wrap m-2 xs:gap-1 xs:m-0 sm:gap-5 xl:gap-3 xl:m-3">
                        {tech.map((key, i) => (
                        <div key={i} className="xs:text-sm sm:text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                            {iconMap[key.toLowerCase()]}
                        </div>
                        ))}
                    </div>
                )}
                <p className="text-gray-500 xs:text-sm sm:text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl">{subtitle}</p>
                <p className="xs:text-xs sm:text-xl md:text-base xl:text-lg 2xl:text-xl">{text}</p>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-center bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 xs:text-xs sm:text-xl md:text-base xl:text-lg 2xl:text-xl"
                >
                    Ver en GitHub
                </a>
            </div>
        )}
        {type == "text" &&(
            <div>
                <h1 className="m-4 xs:m-2 xs:text-3xl sm:text-6xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold">{title}</h1>
                <p className="m-4 xs:m-2 xs:text-sm sm:text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-500">{subtitle}</p>
                <p className="m-4 xs:m-2 xs:text-xs sm:text-xl md:text-base xl:text-lg 2xl:text-xl">{text}</p>
            </div>
        )}
    </div>    
    );

    return (
    <>
        <div onClick={zoomEnabled ? openModal : undefined} className={zoomEnabled ? "cursor-pointer" : ""}>
        {content}
        </div>

        {isOpen &&
        ReactDOM.createPortal(
            <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
            >
                <div
                className="max-w-screen-lg w-full bg-gray-900 rounded-xl overflow-hidden max-h-full"
                onClick={(e) => e.stopPropagation()}
                >
                {content}
                </div>
            </div>,
            document.body
        )}
    </>
    );
}
