import { FaEnvelope, FaFileArrowDown } from "react-icons/fa6";
import "./home.css";

export function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");

    link.href = "/curriculo.pdf";
    link.download = "Curriculo-Samara-Sales.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home">
      <div className="hero-left">
        <p className="line line-top">
          <span className="purple">• OLÁ, MEU NOME É</span>
        </p>

        <h1 className="name">
          <span>Samara</span>
          <span className="purple">Sales</span>
        </h1>

        <p className="line line-bottom">
          <span className="typing">
            <span className="purple">Desenvolvedora</span> de Software
          </span>
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-projects">
            Ver Projetos <span>→</span>
          </a>

          <a href="#contact" className="btn-contact">
            Entrar em Contato
            <FaEnvelope />
          </a>

          <button
            type="button"
            className="btn-contact mobile-cv"
            onClick={handleDownloadCV}
          >
            Baixar CV
            <FaFileArrowDown />
          </button>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/samarasales78"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://img.icons8.com/?size=100&id=12598&format=png&color=ffffff"
              alt="GitHub"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/samara-matias-sales-573b43390"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://img.icons8.com/?size=100&id=447&format=png&color=ffffff"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="/pixel-art.png"
          alt="Pixel Art Samara"
          className="pixel-art"
        />
      </div>
    </section>
  );
}
