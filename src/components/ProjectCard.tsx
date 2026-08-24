import {
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiVite,
  SiFlutter,
  SiDart,
  SiPython,
} from "react-icons/si";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  codeUrl: string;
}

export function ProjectCard({
  image,
  title,
  description,
  technologies,
  projectUrl,
  codeUrl,
}: ProjectCardProps) {
  const technologyIcon = (technology: string) => {
    switch (technology) {
      case "TypeScript":
        return <SiTypescript />;
      case "JavaScript":
        return <SiJavascript />;
      case "HTML":
        return <FaHtml5 />;
      case "CSS":
        return <FaCss3Alt />;
      case "React":
        return <FaReact />;
      case "Java":
        return <FaJava />;
      case "Python":
        return <SiPython />;
      case "Vite":
        return <SiVite />;
      case "Flutter":
        return <SiFlutter />;
      case "Dart":
        return <SiDart />;
      default:
        return null;
    }
  };

  return (
    <article className="project-card">
      <div className="project-image-area">
        <img
          src={image}
          alt={`Preview do projeto ${title}`}
          className="project-image"
        />
      </div>

      <div className="project-info">
        <span className="project-type">PROJETO</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span
              className="project-technology"
              key={technology}
            >
              {technologyIcon(technology)}
              {technology}
            </span>
          ))}
        </div>

        <div className="project-divider"></div>

        <div className="project-actions">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-main"
          >
            <FaExternalLinkAlt />
            Ver Projeto
          </a>

          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-code"
          >
            <FaGithub />
            Ver Código
          </a>
        </div>
      </div>
    </article>
  );
}