import { ProjectCard } from "../components/ProjectCard"
import "../components/project-card.css"

export function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="tech-title">
        <span className="purple">Projetos</span>
      </h2>

      <div className="projects-container">
        <ProjectCard
          image="/goldengallery.png"
          title="Visual Diary"
          description="Galeria digital de desenhos com sistema de filtros por estilo e ano."
          technologies={["TypeScript", "JavaScript", "CSS", "HTML"]}
          projectUrl="https://samarasales78.github.io/golden-galleryTS/"
          codeUrl="https://github.com/samarasales78/golden-galleryTS"
        />

<ProjectCard
          image="/goldengallery.png"
          title="The Wizard's Delights"
          description="Website fictício de restaurante e floricultura com estética inspirada no universo de Harry Potter."
          technologies={["TypeScript", "JavaScript", "CSS", "HTML"]}
          projectUrl="https://samarasales78.github.io/restaurant-page/"
          codeUrl="https://github.com/samarasales78/restaurant-page"
        />
      </div>
    </section>
  )
}