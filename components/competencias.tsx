import {
  SiPython,
  SiSwift,
  SiReact,
  SiJavascript,
  SiFastapi,
  SiMysql,
  SiC,
  SiCplusplus,
  SiSharp,
  SiLinux,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";

const competencias = [
  { nome: "Python", icone: SiPython },
  { nome: "Swift", icone: SiSwift },
  { nome: "Java", icone: FaJava },
  { nome: "C", icone: SiC },
  { nome: "C++", icone: SiCplusplus },
  { nome: "C#", icone: SiSharp },
  { nome: "JavaScript", icone: SiJavascript },
  { nome: "React", icone: SiReact },
  { nome: "FastAPI", icone: SiFastapi },
  { nome: "MySQL", icone: SiMysql },
  { nome: "Machine Learning", icone: TbBrain },
  { nome: "Docker", icone: SiDocker },
  { nome: "Linux", icone: SiLinux },
  { nome: "Git", icone: SiGit },
];

export default function Competencias() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {competencias.map((comp) => {
        const Icone = comp.icone;
        return (
          <div
            key={comp.nome}
            className="group flex flex-col items-center gap-2 rounded-xl border p-4 hover:border-primary transition-colors"
          >
            <Icone className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
              {comp.nome}
            </span>
          </div>
        );
      })}
    </div>
  );
}
