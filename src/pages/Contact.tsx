import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaTag,
  FaPen,
} from "react-icons/fa6";
import { Code2 } from "lucide-react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <div className="contact-heading-decoration">
            <span></span>
            <Code2 size={21} />
            <span></span>
          </div>

          <h2>
            Con<span>tato</span>
          </h2>

          <p>
            Estou disponível para oportunidades profissionais,
            colaborações e novos projetos.
          </p>
        </div>

        <div className="contact-content">
          <aside className="contact-info">
            <div className="contact-intro">
              <h3>Entre em contato</h3>

              <p>
                Para assuntos profissionais, oportunidades ou informações
                sobre meus projetos, entre em contato através dos canais
                disponíveis.
              </p>
            </div>

            <div className="contact-line"></div>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h4>E-mail</h4>

                  <a href="mailto:smatiassales@gmail.com">
                    smatiassales@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FaLocationDot />
                </div>

                <div>
                  <h4>Localização</h4>
                  <p>Campina Grande, PB - Brasil</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FaClock />
                </div>

                <div>
                  <h4>Disponibilidade</h4>
                  <p>Aberta a oportunidades</p>
                </div>
              </div>
            </div>

            <div className="contact-line"></div>

            <div className="contact-social">
              <h3>Me encontre nas redes</h3>

              <div className="contact-social-links">
                <a
                  href="https://github.com/samarasales78"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/samara-matias-sales-573b43390"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.instagram.com/samarasales78"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </aside>

          <div className="contact-form-card">
            <div className="contact-form-title">
              <h3>Envie uma mensagem</h3>

              <p>
                Preencha o formulário abaixo e entrarei em contato assim
                que possível.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="contact-input-row">
                <div className="contact-field">
                  <FaUser />

                  <input
                    type="text"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="contact-field">
                  <FaEnvelope />

                  <input
                    type="email"
                    placeholder="Seu e-mail"
                  />
                </div>
              </div>

              <div className="contact-field contact-field-full">
                <FaTag />

                <input
                  type="text"
                  placeholder="Assunto"
                />
              </div>

              <div className="contact-field contact-textarea">
                <FaPen />

                <textarea placeholder="Sua mensagem"></textarea>
              </div>

              <div className="contact-button-area">
                <button type="submit">
                  <FaPaperPlane />
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}