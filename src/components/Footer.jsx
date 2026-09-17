import React from 'react';
import { Sun, Zap, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        
        <div className="footer-top">
          
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="logo">
              <div className="logo-icon">
                <Sun className="icon-sun" size={24} />
                <Zap className="icon-zap" size={14} />
              </div>
              <div className="logo-text">
                <span className="brand-name">ONDA VERDE</span>
                <span className="brand-sub">ENERGIA SOLAR</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Conectando residências, empresas e o agronegócio à energia limpa e sustentável. Reduza até 95% da sua conta de luz com garantia e segurança total.
            </p>

            <div className="cert-badges">
              <span className="cert-badge"><ShieldCheck size={14} /> ANEEL</span>
              <span className="cert-badge"><ShieldCheck size={14} /> INMETRO</span>
              <span className="cert-badge"><ShieldCheck size={14} /> CREA-SP/MG</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#calculator">Calculadora Solar</a></li>
              <li><a href="#services">Nossos Serviços</a></li>
              <li><a href="#projects">Portfólio de Projetos</a></li>
              <li><a href="#financing">Financiamento</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-col">
            <h4>Soluções</h4>
            <ul>
              <li><a href="#services">Solar Residencial</a></li>
              <li><a href="#services">Solar Comercial</a></li>
              <li><a href="#services">Solar para Agronegócio</a></li>
              <li><a href="#services">Estações de Recarga EV</a></li>
              <li><a href="#services">Monitoramento 24/7</a></li>
            </ul>
          </div>

          {/* Institutional & Legal */}
          <div className="footer-col">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#why-us">Por Que a Onda Verde?</a></li>
              <li><a href="#testimonials">Depoimentos de Clientes</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
              <li><a href="#contact">Central de Ajuda</a></li>
              <li><a href="#contact">Política de Privacidade</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Onda Verde Energia Solar Ltda. CNPJ 38.902.112/0001-89. Todos os direitos reservados.</p>
          
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Voltar ao topo">
            <ArrowUp size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-wrapper {
          background: rgba(4, 10, 18, 0.98);
          border-top: 1px solid var(--border-glass);
          padding: 70px 0 30px 0;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-brand-desc {
          margin: 16px 0 20px 0;
          line-height: 1.6;
        }

        .cert-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cert-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(0, 230, 118, 0.1);
          border: 1px solid rgba(0, 230, 118, 0.2);
          color: var(--green-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .footer-col h4 {
          font-size: 1rem;
          color: var(--text-main);
          margin-bottom: 18px;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-col a:hover {
          color: var(--green-primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          font-size: 0.8rem;
        }

        .scroll-top-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
        }

        .scroll-top-btn:hover {
          background: var(--green-primary);
          color: #05130B;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
