import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import "./projects.css";
import "../components/project-card.css";

export function Projects() {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      image: "/goldengallery.png",
      title: "Visual Diary",
      description:
        "Galeria digital de desenhos com sistema de filtros por estilo e ano.",
      technologies: ["TypeScript", "JavaScript", "CSS", "HTML"],
      projectUrl:
        "https://samarasales78.github.io/golden-galleryTS/",
      codeUrl:
        "https://github.com/samarasales78/golden-galleryTS",
    },
    {
      image: "/data-structures-library.png",
      title: "Data Structures Library",
      description:
        "Biblioteca de estruturas de dados desenvolvida em Java para estudos e prática de algoritmos.",
      technologies: ["Java"],
      codeUrl:
        "https://github.com/samarasales78/data-structures-library",
    },
    {
      image: "/bibliotech.png",
      title: "BiblioTech",
      description:
        "Sistema de biblioteca desenvolvido para gerenciamento e organização de livros.",
      technologies: ["Java"],
      codeUrl:
        "https://github.com/samarasales78/bibliotech",
    },
  ];

  const nextProject = () => {
    setCurrent((currentProject) =>
      currentProject === projects.length - 1
        ? 0
        : currentProject + 1
    );
  };

  const previousProject = () => {
    setCurrent((currentProject) =>
      currentProject === 0
        ? projects.length - 1
        : currentProject - 1
    );
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <div className="projects-decoration">
          <span></span>
          <strong>{"</>"}</strong>
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
        <button className="category active">Todos</button>
        <button className="category">Web</button>
        <button className="category">Mobile</button>
        <button className="category">Backend</button>
        <button className="category">Outros</button>
      </div>

      <div className="project-carousel-wrapper">
        <button
          className="project-arrow project-arrow-left"
          onClick={previousProject}
          aria-label="Projeto anterior"
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
            {projects.map((project) => (
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
        >
          →
        </button>
      </div>

      <div className="project-indicators">
        {projects.map((project, index) => (
          <button
            key={project.title}
            className={
              current === index
                ? "project-indicator active"
                : "project-indicator"
            }
            onClick={() => setCurrent(index)}
            aria-label={`Ir para ${project.title}`}
          />
        ))}
      </div>
    </section>
  );
}