import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Text & CTAs */}
        <div className="hero-content-col">
          <div className="badge-tag">
            <span>Energia Solar Fotovoltaica</span>
          </div>

          <h1 className="hero-title">
            Você já pensou em gerar a própria energia?
          </h1>

          <p className="hero-subtitle">
            Produza sua própria eletricidade com energia solar, reduza os custos da sua conta de luz e garanta previsibilidade financeira para o seu imóvel ou empresa.
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

        {/* Right Column: Realistic Roof Solar Photo */}
        <div className="hero-image-col">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
              alt="Instalação de painéis solares em telhado residencial pela Onda Verde Energia Solar"
              className="hero-img"
            />
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          padding-top: 150px;
          padding-bottom: 80px;
          background: linear-gradient(180deg, #FFFFFF 0%, var(--bg-subtle) 100%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }

        .hero-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-title {
          font-size: 3.2rem;
          margin-bottom: 20px;
          color: var(--text-title);
          line-height: 1.15;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-body);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .hero-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
        }

        .bullet-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-body);
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
          padding: 16px 28px;
          font-size: 1rem;
        }

        .hero-image-col {
          width: 100%;
        }

        .hero-image-frame {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          background-color: #FFFFFF;
          aspect-ratio: 4 / 3;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 110px;
            padding-bottom: 50px;
          }
          .hero-title {
            font-size: 2rem;
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
