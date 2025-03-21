import { Button } from "../components/Button";
import online from "../images/online.svg";
import profilePicture from "../images/profile-picture.svg";

export function Header() {
  return (
    <header
      className="relative py-10 px-6 md:px-20 lg:px-40"
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="1440" height="629" viewBox="0 0 1440 629"><path d="M1627 128.053C1627 285.483 1278.61 512.763 844.1 588.481C-826.456 774.99 -59.0574 265.997 -59.0574 108.567C-59.0574 -48.8635 558.992 -157 938.976 -157C1318.96 -157 1627 -29.3774 1627 128.053Z" fill="%23EDD7D6"/><path d="M1627 95.053C1627 252.483 1278.61 479.763 844.1 555.481C-826.456 741.99 -59.0574 232.997 -59.0574 75.567C-59.0574 -81.8635 558.992 -190 938.976 -190C1318.96 -190 1627 -62.3774 1627 95.053Z" fill="%23824D5C"/></svg>')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        minHeight: "400px",
      }}
    >
      <nav className="flex justify-between items-center font-museomoderno font-bold text-sm text-third">
        <p>itsrenata2</p>
        <ul className="hidden md:flex items-center flex-row gap-6 lg:gap-8">
          {["home", "sobre", "habilidades", "projetos"].map((item, index) => (
            <li key={index}>
              <p className="hover:border-b-2 cursor-pointer">{item}</p>
            </li>
          ))}
          <Button asChild>
            <a href="/curriculo.pdf" download="Renata_Silva_CV.pdf">
              download CV
            </a>
          </Button>
        </ul>
      </nav>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-16 md:mt-24">
        <div className="text-center md:text-left font-museomoderno">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-secondary">
            Hello! Eu sou <br />
            <span className="text-third">Renata Silva</span>
          </h1>
          <p className="text-lg md:text-2xl mt-4 text-secondary mb-6">
            desenvolvedora front-end
          </p>
          <Button>ver projetos</Button>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm mt-3 text-third font-bold">
            <img src={online} alt="available green dot" className="w-2 h-2" />
            disponível
          </p>
        </div>
        <div>
          <img
            src={profilePicture}
            alt="profile"
            className="w-full max-w-xs md:max-w-md mt-10 md:mt-0"
          />
        </div>
      </div>
    </header>
  );
}
