import { useState } from 'react'
import './header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <h1 className="logo">
        <span className="logo-white">Port</span>
        <span className="logo-purple">folio</span>
        <span className="logo-symbol">&lt;/&gt;</span>
      </h1>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#home" className="nav-item" onClick={() => setMenuOpen(false)}>
          INÍCIO
        </a>

        <a href="#about" className="nav-item" onClick={() => setMenuOpen(false)}>
          SOBRE
        </a>

        <a href="#tech" className="nav-item" onClick={() => setMenuOpen(false)}>
          TECNOLOGIAS
        </a>

        <a href="#projects" className="nav-item" onClick={() => setMenuOpen(false)}>
          PROJETOS
        </a>

        <a href="#contact" className="nav-item" onClick={() => setMenuOpen(false)}>
          CONTATO
        </a>
      </nav>

      <a
        href="/curriculo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-button"
      >
        Baixar CV <span>⇩</span>
      </a>
    </header>
  )
}
