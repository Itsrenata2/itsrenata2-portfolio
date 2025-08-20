import linkedinIcon from "../images/linkedin.svg";
import instagramIcon from "../images/instagram.svg";
import githubIcon from "../images/github.svg";

export function About() {
  const birthYear = 2003;
  const birthMonth = 3;
  const birthDay = 22;

  const today = new Date();
  let age = today.getFullYear() - birthYear;

  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }

  return (
    <main
      id="sobre"
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 px-6 md:px-10 md:gap-24"
    >
      <div className="flex flex-col gap-4 w-full md:w-5/12 text-sm text-center md:text-left">
        <h2 className="text-main font-bold text-3xl font-museomoderno">
          Sobre <span className="text-secondary">mim</span>
          <span className="text-main">.</span>
        </h2>
        <div className="flex gap-4 justify-center md:justify-start mt-4 mb-8">
          <a
            href="https://www.linkedin.com/in/renata-silva22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
          <a
            href="https://github.com/Itsrenata2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.instagram.com/_rescripts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="instagram icon" />
          </a>
        </div>
        <p className="text-main font-semibold font-poppins text-sm text-justify md:text-base">
          Profissional com experiência em desenvolvimento Front-End, criação de
          interfaces responsivas e design de materiais gráficos. Atuo na
          implementação de soluções digitais aplicando HTML, CSS, JavaScript e
          Tailwind CSS, com foco em usabilidade, performance e resultados
          mensuráveis. <br />
          <br />✅ Desenvolvimento de landing pages e design de interfaces{" "}
          <br />
          🖌 Gestão de conteúdo digital e mídias sociais <br />
          📊 Organização, dedicação e liderança em projetos e equipes <br />
          🌐 Fluência em inglês e colaboração em ambientes multiculturais <br />
          <br />
          🛠 Competências Técnicas <br />✔ HTML, CSS, JavaScript, Tailwind CSS{" "}
          <br />✔ Design de interfaces e materiais gráficos: Figma <br />✔
          Pacote Office intermediário (Word, PowerPoint, Excel) <br />✔
          Planejamento, organização e resolução de problemas <br />
          <br />
          📌 Experiência Relevante <br />✔ Projetos práticos como freelancer em
          desenvolvimento e design <br />✔ Assistente administrativa e de
          marketing com foco em resultados <br />✔ Aprendizado contínuo e rápida
          adaptação a novas tecnologias
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-5/12 mt-8 md:mt-0 text-sm">
        <InfoWithColor>idade: {age}</InfoWithColor>
        <InfoWithoutColor>nacionalidade: brasileira</InfoWithoutColor>
        <InfoWithColor>email: renatasilva2222@hotmail.com</InfoWithColor>
        <InfoWithoutColor>endereço: salvador, bahia</InfoWithoutColor>
        <InfoWithColor>telefone: 71 99244-6052</InfoWithColor>
      </div>
    </main>
  );
}

function InfoWithColor({ children }) {
  return (
    <div className="bg-main font-museomoderno text-third px-2 md:px-8 py-2 md:py-4 rounded-2xl font-bold">
      <p>{children}</p>
    </div>
  );
}

function InfoWithoutColor({ children }) {
  return (
    <div className="font-museomoderno text-main px-8 rounded-2xl font-bold">
      <p>{children}</p>
    </div>
  );
}
