import { useState } from "react";
import { Code2 } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import "./projects.css";
import "../components/project-card.css";

type ProjectCategory = "Web" | "Mobile" | "Backend" | "Outros";

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  projectUrl?: string;
  codeUrl: string;
}

export function Projects() {
  const [current, setCurrent] = useState(0);
  const [activeCategory, setActiveCategory] = useState<
    "Todos" | ProjectCategory
  >("Todos");

  const projects: Project[] = [
    {
      image: "/goldengallery.png",
      title: "Visual Diary",
      description:
        "Galeria digital de desenhos com filtros dinâmicos por estilo e ano, explorando organização de conteúdo e navegação.",
      technologies: ["TypeScript", "JavaScript", "CSS", "HTML"],
      category: "Web",
      projectUrl:
        "https://samarasales78.github.io/golden-galleryTS/",
      codeUrl:
        "https://github.com/samarasales78/golden-galleryTS",
    },
    {
      image: "/hospital-system.png",
      title: "Hospital System",
      description:
        "Sistema hospitalar full stack desenvolvido com C# e ASP.NET Core, integrado a React, API REST e banco de dados SQL.",
      technologies: [
        "C#",
        ".NET",
        "ASP.NET Core",
        "React",
        "TypeScript",
        "SQL",
        "REST API",
      ],
      category: "Web",
      projectUrl:
        "https://frontend-eight-lake-84.vercel.app/",
      codeUrl:
        "https://github.com/samarasales78/hospital_system",
    },
    {
      image: "/dev-portfolio.png",
      title: "Dev Portfolio",
      description:
        "Portfólio pessoal desenvolvido para apresentar projetos, tecnologias e informações profissionais com interface responsiva.",
      technologies: ["React", "TypeScript", "CSS", "HTML"],
      category: "Web",
      projectUrl:
        "https://dev-portfolio-five-ashy.vercel.app/",
      codeUrl:
        "https://github.com/samarasales78/dev-portfolio",
    },
    {
      image: "/bookly.png",
      title: "Bookly",
      description:
        "Biblioteca digital integrada à Open Library API, com busca, filtros, categorias e acompanhamento do progresso de leitura.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "REST API",
      ],
      category: "Web",
      projectUrl:
        "https://bookly-chi-seven.vercel.app/",
      codeUrl:
        "https://github.com/samarasales78/bookly",
    },
    {
      image: "/data-structures-library.png",
      title: "Data Structures Library",
      description:
        "Biblioteca de estruturas de dados desenvolvida em Java para estudos e prática de algoritmos.",
      technologies: ["Java"],
      category: "Backend",
      codeUrl:
        "https://github.com/samarasales78/data-structures-library",
    },
  ];

  const categories: ("Todos" | ProjectCategory)[] = [
    "Todos",
    "Web",
    "Mobile",
    "Backend",
    "Outros",
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const nextProject = () => {
    setCurrent((currentProject) =>
      currentProject === filteredProjects.length - 1
        ? 0
        : currentProject + 1
    );
  };

  const previousProject = () => {
    setCurrent((currentProject) =>
      currentProject === 0
        ? filteredProjects.length - 1
        : currentProject - 1
    );
  };

  const handleCategoryChange = (
    category: "Todos" | ProjectCategory
  ) => {
    setActiveCategory(category);
    setCurrent(0);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-decoration">
            <span></span>

            <Code2 size={27} />

            <span></span>
          </div>

          <h2 className="projects-title">
            Meus <span>Projetos</span>
          </h2>

          <p className="projects-subtitle">
            Alguns dos projetos que desenvolvi.
          </p>
        </div>

        <div className="projects-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category active"
                  : "category"
              }
              onClick={() => handleCategoryChange(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 && (
          <>
            <div className="project-carousel-wrapper">
              <button
                className="project-arrow project-arrow-left"
                onClick={previousProject}
                aria-label="Projeto anterior"
                type="button"
              >
                ←
              </button>

              <div className="project-carousel">
                <div
                  className="project-track"
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                >
                  {filteredProjects.map((project) => (
                    <div
                      className="project-slide"
                      key={project.title}
                    >
                      <ProjectCard
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        projectUrl={project.projectUrl}
                        codeUrl={project.codeUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="project-arrow project-arrow-right"
                onClick={nextProject}
                aria-label="Próximo projeto"
                type="button"
              >
                →
              </button>
            </div>

            <div className="project-indicators">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.title}
                  className={
                    current === index
                      ? "project-indicator active"
                      : "project-indicator"
                  }
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir para ${project.title}`}
                  type="button"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
