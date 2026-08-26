import { useEffect, useRef, useState } from "react";
import "./footer.css";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

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

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`site-footer ${isVisible ? "footer-visible" : ""}`}
    >
      <p>
        © 2026 <span>Samara Sales</span>. Todos os direitos reservados.
      </p>
    </footer>
  );
}