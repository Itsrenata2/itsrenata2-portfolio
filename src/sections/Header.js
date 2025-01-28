import { Button } from "../components/Button";
import online from "../images/online.svg";
import profilePicture from "../images/profile-picture.svg";

export function Header() {
  return (
    <header
      className="py-10 pr-60 pl-60"
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="1440" height="629" viewBox="0 0 1440 629"><path d="M1627 128.053C1627 285.483 1278.61 512.763 844.1 588.481C-826.456 774.99 -59.0574 265.997 -59.0574 108.567C-59.0574 -48.8635 558.992 -157 938.976 -157C1318.96 -157 1627 -29.3774 1627 128.053Z" fill="%23EDD7D6"/><path d="M1627 95.053C1627 252.483 1278.61 479.763 844.1 555.481C-826.456 741.99 -59.0574 232.997 -59.0574 75.567C-59.0574 -81.8635 558.992 -190 938.976 -190C1318.96 -190 1627 -62.3774 1627 95.053Z" fill="%23824D5C"/></svg>')`,
        backgroundSize: "100% auto", // Corrige a largura para preencher horizontalmente
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom", // Mantém a parte inferior do SVG visível
        height: "600px", // Ajuste a altura para evitar cortes verticais
        width: "100%", // Certifica-se que cobre toda a largura
      }}
    >
      <nav className="flex flex-row justify-between gap-8 font-museomoderno font-bold text-sm items-center text-third">
        <p>itsrenata2</p>
        <ul className="flex flex-row gap-8 font-museomoderno font-bold text-sm items-center">
          <li>
            <p to="/">home</p>
          </li>
          <li>
            <p to="/about">sobre</p>
          </li>
          <li>
            <p to="/contact">habilidades</p>
          </li>
          <li>
            <p to="/contact">projetos</p>
          </li>
          <Button>download CV</Button>
        </ul>
      </nav>
      <div className="flex justify-between">
        <div className="mt-24 font-museomoderno">
          <h1 className="text-6xl md:text-6xl font-bold leading-tight text-secondary">
            Hello! Eu sou <br />
            <span className=" text-third">Renata Silva</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-secondary mb-8">
            desenvolvedora front-end
          </p>
          <Button>ver projetos</Button>
          <p className="flex content-center gap-2 text-sm mt-2 ml-6 text-third font-bold">
            <img src={online} alt="available green dot" />
            disponível
          </p>
        </div>
        <div>
          <img src={profilePicture} alt="profile" className="mt-14" />
        </div>
      </div>
    </header>
  );
}
