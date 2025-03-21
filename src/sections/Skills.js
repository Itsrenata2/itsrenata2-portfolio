import GithubSkill from "../images/gh.svg";
import HTMLSkill from "../images/html.svg";
import JavaScriptSkill from "../images/js.svg";
import BootstrapSkill from "../images/bs.svg";
import TailwindCSSSkill from "../images/tw.svg";
import CSSSkill from "../images/css.svg";
import ReactSkill from "../images/react.svg";
import FigmaSkill from "../images/figma.svg";

export function Skills() {
  const skills = [
    {
      icon: GithubSkill,
      title: "GitHub",
      text: "Ferramenta importante e necessária para o meu desenvolvimento em projetos.",
    },
    {
      icon: HTMLSkill,
      title: "HTML",
      text: "Foi uma das primeiras coisas que aprendi para o desenvolvimento web.",
    },
    {
      icon: JavaScriptSkill,
      title: "JavaScript",
      text: "Para complementar o desenvolvimento web, aprendi JS para aplicar lógica e interação as páginas.",
    },
    {
      icon: BootstrapSkill,
      title: "Bootstrap",
      text: "Ferramenta importante para o desenvolvimento responsivo.",
    },
    {
      icon: TailwindCSSSkill,
      title: "Tailwind CSS",
      text: "Após aprender CSS me interessei a aprender mais e descobri o Tailwind.",
    },
    {
      icon: CSSSkill,
      title: "CSS",
      text: "Após o HTML aprendi CSS para obter habilidades em estilização de páginas.",
    },
    {
      icon: ReactSkill,
      title: "React",
      text: "Depois de aprender JavaScript o próximo passo foi aprender uma framework.",
    },
    {
      icon: FigmaSkill,
      title: "Figma",
      text: "Como me interesso bastante pela parte de design decidi aprender figma para aprimorar meus projetos.",
    },
  ];

  return (
    <section className="flex flex-col items-start py-2 pr-10 pl-10 sm:px-6 md:px-10">
      <h2 className="text-main font-bold text-3xl font-museomoderno mb-12">
        Minhas <span className="text-secondary">habilidades</span>
        <span className="text-main">.</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            icon={skill.icon}
            title={skill.title}
            text={skill.text}
          />
        ))}
      </div>
    </section>
  );
}

function Skill({ icon, title, text }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start group">
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110"
      />
      <h4 className="text-lg font-semibold mb-2 text-secondary font-poppins">
        {title}
      </h4>
      <p className="font-poppins text-main font-medium">{text}</p>
    </div>
  );
}
