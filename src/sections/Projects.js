import BlopUp from "../images/BlobUp.svg";
import BlobDown from "../images/BlobDown.svg";
import TodoList from "../images/todolist.png";
import ClothesShop from "../images/clothes-shop.png";
import BillCalculator from "../images/bill-calc.png";
import SignUpForm from "../images/signup-form.png";
import ERP from "../images/erp.png";
import Portfolio from "../images/portfolio.png";
import LandingPage from "../images/landing-page.png";
import Dashboard from "../images/dashboard.png";

import { Button } from "../components/Button";

export function Projects() {
  const softwareProjects = [
    {
      image: TodoList,
      title: "Todo List",
      subtitle: "React e Tailwind CSS",
      link: "https://github.com/itsrenata2/todo_list",
    },
    {
      image: ClothesShop,
      title: "Clothing Shop",
      subtitle: "React e Tailwind CSS",
      link: "https://github.com/Itsrenata2/trendy-threads",
    },
    {
      image: BillCalculator,
      title: "Split Bill Calculator",
      subtitle: "JavaScript e Tailwind CSS",
      link: "https://github.com/itsrenata2/FrontEnd-Mentor-Tip-Calculator",
    },
    {
      image: SignUpForm,
      title: "Sign Up Form",
      subtitle: "JavaScript e Tailwind CSS",
      link: "https://github.com/itsrenata2/FrontEnd-Mentor-SignUp-Form",
    },
  ];

  const designProjects = [
    {
      image: ERP,
      title: "ERP Sistema",
      link: "https://www.figma.com/design/B9v8jp0ifiOpU1cmNhsec6/ERP-Faturamento?node-id=0-1&t=ykRAxeNBbx3p5z9c-1",
    },
    {
      image: Portfolio,
      title: "Meu Portfolio",
      link: "https://www.figma.com/design/CG8YwXZ7suEyWp3ZMVsEkQ/Portfolio?node-id=0-1&t=ykRAxeNBbx3p5z9c-1",
    },
    {
      image: LandingPage,
      title: "Landing Page",
      link: "https://www.figma.com/design/LRXGxbBacHww5Ohi1JWQZI/3A---Landing-Page?node-id=0-1&t=Z56ajKVut34wZuXf-1",
    },
    {
      image: Dashboard,
      title: "Dashboard",
      link: "https://www.figma.com/design/GdHAPDspxFnCHblIudLYTi/Dashboard---AMT?t=89d2h4axRxoXlZ6W-1",
    },
  ];

  return (
    <section id="projetos" className="relative bg-fourth py-20 px-10 mt-20">
      <img
        src={BlopUp}
        alt="shapes"
        className="hidden md:absolute left-0 top-0 h-1/6"
      />
      <img
        src={BlobDown}
        alt="shapes"
        className="hidden md:absolute right-0 bottom-0 h-1/6"
      />
      <h2 className="text-main font-bold text-4xl font-museomoderno mb-12 text-center z-10">
        Meus <span className="text-secondary">Projetos</span>
        <span className="text-main">.</span>
      </h2>
      <div className="max-w-full sm:max-w-5xl md:max-w-6xl mx-auto">
        <h3 className="text-main font-bold text-2xl font-museomoderno mb-6 z-10 relative">
          Software
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareProjects.map((project, index) => (
            <ProjectSoftware
              key={index}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-main font-bold text-2xl font-museomoderno mb-6">
          Design
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designProjects.map((project, index) => (
            <ProjectDesign
              key={index}
              image={project.image}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSoftware({ image, title, subtitle, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className="font-museomoderno">
            <h4 className="text-lg lowercase font-bold text-main">{title}</h4>
            <p className="text-sm lowercase text-main font-regular">
              {subtitle}
            </p>
          </div>
          <Button>ver mais</Button>
        </div>
      </div>
    </a>
  );
}

function ProjectDesign({ image, title, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <h4 className="font-museomoderno text-lg lowercase font-bold text-main">
            {title}
          </h4>
          <Button>ver mais</Button>
        </div>
      </div>
    </a>
  );
}
