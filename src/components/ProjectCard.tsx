import { techIcons } from "../data/techIcons"

type ProjectCardProps = {
  image: string
  title: string
  description: string
  technologies: string[]
  projectUrl: string
  codeUrl: string
}

export function ProjectCard({
  image,
  title,
  description,
  technologies,
  projectUrl,
  codeUrl
}: ProjectCardProps) {
  return (
    <div className="project-card">

      {/* imagem */}
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="content">
        <h3 className="title purple">{title}</h3>

        <p className="description">{description}</p>

        <div className="divider" />

        <div className="techs">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-item">
              <img src={techIcons[tech]} alt={tech} />
              {tech}
            </span>
          ))}
        </div>

        <div className="buttons">
          <a href={projectUrl} target="_blank">
            <button className="btn primary">
              Ver Projeto ↗
            </button>
          </a>

          <a href={codeUrl} target="_blank">
            <button className="btn secondary">
              Código
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}