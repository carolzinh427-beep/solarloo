import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import ShinyText from './ShinyText';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Solar Panel Background Overlay Mask */}
      <div className="hero-bg-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          
          {/* Official Onda Verde Logo - Centered with No Background */}
          <div className="hero-logo-box">
            <img src="/logo.svg" alt="Onda Verde Energia Solar" className="hero-logo-img" />
          </div>

          {/* Centered H1 Phrase with Fade-In Entrance + ShinyText Effect */}
          <h1 className="hero-title hero-title-fade">
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
          padding-top: 130px;
          padding-bottom: 70px;
          background-image: url('/solar_panels_onda_verde.jpg');
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
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.97) 70%, rgba(255, 255, 255, 0.9) 100%);
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Logo sem plano de fundo e centralizada */
        .hero-logo-box {
          margin-bottom: 24px;
          background: transparent;
          border: none;
          box-shadow: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-logo-img {
          height: 64px;
          width: auto;
          display: block;
        }

        /* Animação Fade-In no título centralizado */
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title-fade {
          animation: heroFadeIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          text-align: center;
          width: 100%;
        }

        .hero-title {
          font-size: 2.9rem;
          margin-bottom: 16px;
          color: var(--text-title);
          line-height: 1.18;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-body);
          line-height: 1.55;
          margin-bottom: 24px;
          font-weight: 500;
          max-width: 680px;
        }

        .hero-bullets-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }

        .bullet-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-title);
        }

        .bullet-icon {
          color: var(--green-primary);
          flex-shrink: 0;
        }

        .hero-buttons-group {
          display: flex;
          justify-content: center;
          gap: 14px;
          width: 100%;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 14px 28px;
          font-size: 0.98rem;
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding-top: 110px;
            padding-bottom: 50px;
          }
          .hero-logo-img {
            height: 52px;
          }
          .hero-title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 95px;
            padding-bottom: 36px;
          }
          .hero-logo-img {
            height: 42px;
          }
          .hero-title {
            font-size: 1.7rem;
          }
          .hero-subtitle {
            font-size: 0.95rem;
          }
          .bullet-row {
            font-size: 0.85rem;
          }
          .hero-buttons-group {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
