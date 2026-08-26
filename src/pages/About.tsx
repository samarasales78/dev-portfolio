import { useEffect, useRef, useState } from "react";
import "./about.css";
import { Code2 } from "lucide-react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section ${isVisible ? "about-visible" : ""}`}
    >
      <div className="about-container">
        <div className="about-heading">
          <div className="about-heading-decoration">
            <span></span>
            <Code2 size={27} />
            <span></span>
          </div>

          <h2>Sobre Mim</h2>

          <p>
            Conheça minha trajetória, experiência e atuação no desenvolvimento
            de software.
          </p>
        </div>

        <div className="about-content">
          <div className="about-left">
            <p className="about-tag">SOBRE MIM</p>

            <h3 className="about-title">
              Desenvolvimento de software com{" "}
              <span className="purple">experiência prática</span> e visão
              multidisciplinar
            </h3>

            <div className="about-texts">
              <p className="about-text">
                Sou estudante de Análise e Desenvolvimento de Sistemas na UEPB,
                com experiência como estagiária no HUAC/UFCG e participação em
                projetos voltados a demandas reais no ambiente institucional.
              </p>

              <p className="about-text">
                Trabalho com React, TypeScript, JavaScript, Python, Java,
                Tailwind CSS e Flutter, desenvolvendo aplicações web e
                explorando diferentes abordagens de front-end e back-end. Também
                possuo experiência com integração e consumo de APIs.
              </p>

              <p className="about-text">
                Ao longo da minha formação, venho construindo projetos próprios
                e aplicando diferentes tecnologias na prática, com foco em
                aplicações funcionais, interfaces responsivas, integração de
                dados e código bem estruturado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}