import { useState } from "react"
import { ProjectCard } from "../components/ProjectCard"
import "../components/project-card.css"
import "./projects.css"

export function Projects() {
  const [current, setCurrent] = useState(0)

  const projects = [
    {
      image: "/goldengallery.png",
      title: "Visual Diary",
      description: "Galeria digital de desenhos com sistema de filtros por estilo e ano.",
      technologies: ["TypeScript", "JavaScript", "CSS", "HTML"],
      projectUrl: "https://samarasales78.github.io/golden-galleryTS/",
      codeUrl: "https://github.com/samarasales78/golden-galleryTS"
    },
    {
      image: "/goldengallery.png",
      title: "The Wizard's Delights",
      description: "Website fictício de restaurante e floricultura com estética inspirada no universo de Harry Potter.",
      technologies: ["JavaScript", "CSS", "HTML"],
      projectUrl: "https://samarasales78.github.io/restaurant-page/",
      codeUrl: "https://github.com/samarasales78/restaurant-page"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="tech-title">
        <span className="purple">Projetos</span>
      </h2>

      {/* CARROSSEL */}
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div className="carousel-item" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* BOLINHAS */}
      <div className="dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  )
}