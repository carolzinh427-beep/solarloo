import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Solar Panel Full Background Overlay */}
      <div className="hero-bg-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          
          <h1 className="hero-title">
            Você já pensou em gerar a própria energia?
          </h1>

          <p className="hero-subtitle">
            Produza sua própria eletricidade com energia solar, reduza os custos da sua conta de luz e garanta previsibilidade financeira para o seu imóvel ou empresa.
          </p>

          <div className="hero-bullets-list">
            <div className="bullet-row">
              <CheckCircle2 size={20} className="bullet-icon" />
              <span>Solução personalizada para seu perfil de consumo</span>
            </div>
            <div className="bullet-row">
              <CheckCircle2 size={20} className="bullet-icon" />
              <span>Equipamentos de alta tecnologia e eficiência</span>
            </div>
            <div className="bullet-row">
              <CheckCircle2 size={20} className="bullet-icon" />
              <span>Projeto, instalação e homologação inclusos</span>
            </div>
          </div>

          <div className="hero-buttons-group">
            <a href="#simulation" className="btn-primary btn-hero">
              <span>Simular minha economia</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/5511924891417?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20energia%20solar%20com%20a%20Onda%20Verde."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-hero btn-whatsapp"
            >
              <MessageSquare size={18} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 170px;
          padding-bottom: 110px;
          background-image: url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.88) 50%, rgba(255, 255, 255, 0.4) 100%);
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-title {
          font-size: 3.4rem;
          margin-bottom: 20px;
          color: var(--text-title);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-body);
          line-height: 1.6;
          margin-bottom: 28px;
          font-weight: 500;
        }

        .hero-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 36px;
        }

        .bullet-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-title);
        }

        .bullet-icon {
          color: var(--green-primary);
          flex-shrink: 0;
        }

        .hero-buttons-group {
          display: flex;
          gap: 16px;
          width: 100%;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 16px 32px;
          font-size: 1.05rem;
        }

        @media (max-width: 1024px) {
          .hero-bg-overlay {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.85) 100%);
          }
          .hero-title {
            font-size: 2.6rem;
          }
          .hero-content {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 120px;
            padding-bottom: 60px;
          }
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .hero-buttons-group {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
