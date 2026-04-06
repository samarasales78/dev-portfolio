import './header.css'

export function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <span className="logo-white">Port</span>
        <span className="logo-purple">folio</span>
      </h1>

      <nav className="nav">
        <a href="#home" className="nav-item">HOME</a>
        <a href="#about" className="nav-item">SOBRE</a>
        <a href="#projects" className="nav-item">PROJETOS</a>
        <a href="#contact" className="nav-item">CONTATO</a>
      </nav>
    </header>
  );
}