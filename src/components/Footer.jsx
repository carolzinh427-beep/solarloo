import React from 'react';
import { MessageSquare, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer-root">
      <div className="container">
        
        <div className="footer-content-grid">
          
          {/* Official Logo Brand */}
          <div className="footer-col brand-info">
            <a href="#hero" className="logo-brand">
              <img src="/logo.svg" alt="Onda Verde Energia Solar" className="footer-logo-img" />
            </a>

            <p className="footer-tagline">
              Soluções inteligentes em energia solar fotovoltaica para residências, empresas e propriedades rurais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navegação</h4>
            <ul className="footer-links">
              <li><a href="#hero">Início</a></li>
              <li><a href="#solutions">Energia Solar</a></li>
              <li><a href="#how-it-works">Como Funciona</a></li>
              <li><a href="#simulation">Simulação</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contato</h4>
            <div className="contact-list">
              <a
                href="https://wa.me/5511924891417"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item-link"
              >
                <MessageSquare size={18} className="contact-icon" />
                <span>WhatsApp: (11) 92489-1417</span>
              </a>

              <a
                href="https://www.instagram.com/ondaverdeenergia/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item-link"
              >
                <Instagram size={18} className="contact-icon" />
                <span>Instagram: @ondaverdeenergia</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Onda Verde Energia Solar. Todos os direitos reservados.</p>
          
          <button className="scroll-top-button" onClick={scrollToTop} aria-label="Voltar ao topo">
            <ArrowUp size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-root {
          background-color: #FFFFFF;
          border-top: 1px solid var(--border-color);
          padding: 60px 0 30px 0;
        }

        .footer-content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-logo-img {
          height: 44px;
          width: auto;
          display: block;
        }

        .footer-tagline {
          margin-top: 16px;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 320px;
        }

        .footer-heading {
          font-size: 1rem;
          color: var(--text-title);
          margin-bottom: 16px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          color: var(--text-body);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--green-primary);
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-body);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .contact-item-link:hover {
          color: var(--green-primary);
        }

        .contact-icon {
          color: var(--green-primary);
          flex-shrink: 0;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .scroll-top-button {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-color);
          color: var(--text-title);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .scroll-top-button:hover {
          background-color: var(--green-light);
          border-color: var(--green-border);
          color: var(--green-primary);
        }

        @media (max-width: 900px) {
          .footer-content-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
}
