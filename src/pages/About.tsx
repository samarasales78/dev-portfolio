import './About.css'

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-left">
          <p className="about-tag">SOBRE MIM</p>

          <h2 className="about-title">
            Desenvolvendo <span className="purple">soluções completas</span> com tecnologia
          </h2>

          <p className="about-text">
            Sou estudante de Análise e Desenvolvimento de Sistemas na UEPB, com interesse em desenvolver soluções completas e funcionais através da tecnologia.
          </p>

          <p className="about-text">
            Tenho experiência com JavaScript, TypeScript, React, Python, Java e Flutter, criando interfaces dinâmicas e responsivas, além de fortalecer minha base em lógica de programação e estruturação de aplicações.
          </p>

          <p className="about-text">
            Busco evoluir constantemente em diferentes áreas do desenvolvimento de software, ampliando minhas habilidades para transformar ideias em projetos modernos, eficientes e bem estruturados.
          </p>
        </div>
      </div>
    </section>
  )
}