import linkedinIcon from "../images/linkedin.svg";
import instagramIcon from "../images/instagram.svg";
import githubIcon from "../images/github.svg";

export function About() {
  return (
    <main className="flex justify-between py-16 pr-10 pl-10 sm:px-6 md:px-10">
      {" "}
      <div className="flex flex-col gap-4 mt-28 w-5/12">
        <InfoWithColor>idade: 21</InfoWithColor>
        <InfoWithoutColor>nacionalidade: brasileira</InfoWithoutColor>
        <InfoWithColor>email: renatasilva2222@hotmail.com</InfoWithColor>
        <InfoWithoutColor>endereço: salvador, bahia</InfoWithoutColor>
        <InfoWithColor>telefone: 71 99244-6052</InfoWithColor>
      </div>
      <div className="text-right w-5/12">
        <div flex flex-row>
          <h2 className="text-main font-bold text-3xl font-museomoderno">
            Sobre <span className="text-secondary">mim</span>
            <span className="text-main">.</span>
          </h2>
          <div className="flex gap-2 justify-end mt-2 mb-12">
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
        </div>
        <p className="text-main font-semibold font-poppins">
          Bem vindo(a) ao meu portfolio, meu interesse pela tecnologia me
          levaram a desenvolver conhecimentos sólidos em HTML, CSS e estou me
          aprimorando cada vez mais no JavaScript, além de estudos em C. Até o
          momento, tive a oportunidade de aplicar essas tecnologias em projetos
          práticos, o que me proporcionou novas experiências na área. <br />
          <br />
          Minhas habilidades vão além do conhecimento técnico, e destaco minha
          organização, dedicação e liderança como atributos que me ajudam a
          atingir resultados de qualidade. <br /> <br />
          Também possuo habilidades interpessoais e fluência em inglês, o que me
          permite colaborar efetivamente em equipes multicultural e me comunicar
          com pessoas de diferentes nacionalidades.
        </p>
      </div>
    </main>
  );
}

function InfoWithColor({ children }) {
  return (
    <div className="bg-main font-museomoderno text-third px-8 py-4 rounded-2xl font-bold">
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
