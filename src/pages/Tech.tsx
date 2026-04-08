import "./tech.css";

export default function Tech() {
  return (
    <section id="tech" className="tech-section">
      <h2 className="tech-title">Tecnologias</h2>

      {/* FRONT-END */}
      <div className="tech-block">
        <h3 className="tech-block-title">Front-end</h3>

        <div className="tech-grid">
          <div className="tech-box">
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML" />
            <span>HTML</span>
          </div>

          <div className="tech-box">
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS" />
            <span>CSS</span>
          </div>

          <div className="tech-box">
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript" />
            <span>JavaScript</span>
          </div>

          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
            <span>TypeScript</span>
          </div>

          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <span>React</span>
          </div>
        </div>
      </div>

      {/* BACK-END */}
      <div className="tech-block">
        <h3 className="tech-block-title">Back-end</h3>

        <div className="tech-grid">
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" />
            <span>Dart</span>
          </div>

          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
            <span>Flutter</span>
          </div>
        </div>
      </div>

      {/* BANCO DE DADOS */}
      <div className="tech-block">
        <h3 className="tech-block-title">Banco de Dados</h3>

        <div className="tech-grid">
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
            <span>MySQL</span>
          </div>
        </div>
      </div>

      {/* FERRAMENTAS */}
      <div className="tech-block">
        <h3 className="tech-block-title">Ferramentas</h3>

        <div className="tech-grid">
          <div className="tech-box">
            <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="Git" />
            <span>Git</span>
          </div>

          <div className="tech-box">
            <img src="https://img.icons8.com/?size=100&id=X5YZ2OUzP87M&format=png&color=000000" alt="Pixel Art" />
            <span>Pixel Art</span>
          </div>
        </div>
      </div>

    </section>
  );
}