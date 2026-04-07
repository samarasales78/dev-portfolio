import './home.css'

export function Home() {
  return (
    <section id="home" className="home">
      <div className="hero-left">
        <p className="line line-top">
          Olá, meu nome é
        </p>

        <h1 className="name">
          Samara <span className="purple">Sales</span>
        </h1>

        <p className="line line-bottom">
          <span className="typing">
            E sou uma <span className="purple">desenvolvedora de software</span>
          </span>
        </p>

        <div className="icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
              alt="GitHub"
            />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
              alt="LinkedIn"
            />
          </a>
        </div>

        <a href="/cv.pdf" download className="btn-cv">
          Baixar CV
        </a>
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