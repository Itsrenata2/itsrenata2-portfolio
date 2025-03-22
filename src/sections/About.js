import linkedinIcon from "../images/linkedin.svg";
import instagramIcon from "../images/instagram.svg";
import githubIcon from "../images/github.svg";

export function About() {
  return (
    <main className="flex flex-col items-center text-center md:text-left py-16 px-6 md:px-10 gap-6">
      <div className="w-full md:w-5/12">
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
        <p className="text-main font-semibold font-poppins text-sm md:text-base">
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
          permite colaborar efetivamente em equipes multiculturais e me
          comunicar com pessoas de diferentes nacionalidades.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-5/12 mt-8 md:mt-0 text-sm">
        <InfoWithColor>idade: 21</InfoWithColor>
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
