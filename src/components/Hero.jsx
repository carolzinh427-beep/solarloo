import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import ShinyText from './ShinyText';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Solar Panel Full Background Overlay */}
      <div className="hero-bg-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          
          {/* Logo da Onda Verde no Hero */}
          <div className="hero-logo-box">
            <img src="/logo.svg" alt="Onda Verde Energia Solar" className="hero-logo-img" />
          </div>

          {/* Frase com Efeito ShinyText */}
          <h1 className="hero-title">
            <ShinyText
              text="Você já pensou em gerar a própria energia?"
              speed={3}
              color="#222222"
              shineColor="#7CB342"
              spread={120}
              direction="left"
            />
          </h1>

          <p className="hero-subtitle">
            Produza sua própria eletricidade com energia solar, reduza os custos da sua conta de luz e garanta previsibilidade financeira para seu imóvel ou empresa.
          </p>

          <div className="hero-bullets-list">
            <div className="bullet-row">
              <CheckCircle2 size={18} className="bullet-icon" />
              <span>Solução personalizada para seu perfil de consumo</span>
            </div>
            <div className="bullet-row">
              <CheckCircle2 size={18} className="bullet-icon" />
              <span>Equipamentos de alta tecnologia e eficiência</span>
            </div>
            <div className="bullet-row">
              <CheckCircle2 size={18} className="bullet-icon" />
              <span>Projeto, instalação e homologação inclusos</span>
            </div>
          </div>

          <div className="hero-buttons-group">
            <a href="#simulation" className="btn-primary btn-hero">
              <span>Simular minha economia</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/5511924891417?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20energia%20solar%20com%20a%20Onda%20Verde."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-hero btn-whatsapp"
            >
              <MessageSquare size={16} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 110px;
          padding-bottom: 50px;
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
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.97) 0%, rgba(255, 255, 255, 0.92) 55%, rgba(255, 255, 255, 0.5) 100%);
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 660px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-logo-box {
          margin-bottom: 16px;
          background: rgba(255, 255, 255, 0.92);
          padding: 6px 14px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .hero-logo-img {
          height: 38px;
          width: auto;
          display: block;
        }

        .hero-title {
          font-size: 2.7rem;
          margin-bottom: 14px;
          color: var(--text-title);
          line-height: 1.18;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: var(--text-body);
          line-height: 1.5;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .hero-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .bullet-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--text-title);
        }

        .bullet-icon {
          color: var(--green-primary);
          flex-shrink: 0;
        }

        .hero-buttons-group {
          display: flex;
          gap: 12px;
          width: 100%;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 12px 24px;
          font-size: 0.95rem;
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .hero-bg-overlay {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.97) 0%, rgba(255, 255, 255, 0.9) 100%);
          }
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-content {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 90px;
            padding-bottom: 30px;
          }
          .hero-logo-img {
            height: 32px;
          }
          .hero-title {
            font-size: 1.65rem;
          }
          .hero-subtitle {
            font-size: 0.92rem;
          }
          .bullet-row {
            font-size: 0.85rem;
          }
          .hero-buttons-group {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
