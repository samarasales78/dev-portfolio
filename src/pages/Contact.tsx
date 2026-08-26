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
import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwlegdlz");
  const contactRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = contactRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={contactRef}
      className={`contact ${isVisible ? "is-visible" : ""}`}
      id="contact"
    >
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
            {state.succeeded ? (
              <div className="contact-success">
                <h3>Mensagem enviada!</h3>

                <p>
                  Obrigada pelo contato. Responderei assim que possível.
                </p>
              </div>
            ) : (
              <>
                <div className="contact-form-title">
                  <h3>Envie uma mensagem</h3>

                  <p>
                    Preencha o formulário abaixo e entrarei em contato assim
                    que possível.
                  </p>
                </div>

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="contact-input-row">
                    <div className="contact-field">
                      <FaUser />

                      <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        required
                      />

                      <ValidationError
                        prefix="Nome"
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div className="contact-field">
                      <FaEnvelope />

                      <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        required
                      />

                      <ValidationError
                        prefix="E-mail"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="contact-field contact-field-full">
                    <FaTag />

                    <input
                      type="text"
                      name="subject"
                      placeholder="Assunto"
                      required
                    />

                    <ValidationError
                      prefix="Assunto"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>

                  <div className="contact-field contact-textarea">
                    <FaPen />

                    <textarea
                      name="message"
                      placeholder="Sua mensagem"
                      required
                    ></textarea>

                    <ValidationError
                      prefix="Mensagem"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <div className="contact-button-area">
                    <button
                      type="submit"
                      disabled={state.submitting}
                    >
                      <FaPaperPlane />

                      {state.submitting
                        ? "Enviando..."
                        : "Enviar mensagem"}
                    </button>
                  </div>

                  {state.errors && (
                    <ValidationError errors={state.errors} />
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}