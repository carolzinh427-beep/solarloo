import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import ShinyText from './ShinyText';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Solar Panel Background Overlay Mask - Transparent gradient allowing solar panels to be clearly visible */}
      <div className="hero-bg-overlay"></div>
      
      {/* Soft Bottom Transition Fade into White Section */}
      <div className="hero-bottom-shadow"></div>

      <div className="container hero-container">
        <div className="hero-content">
          
          {/* Official Onda Verde Logo - Centered and High Visibility on all devices */}
          <div className="hero-logo-box">
            <img
              src="/logo.svg"
              alt="Onda Verde Energia Solar"
              className="hero-logo-img"
              loading="eager"
            />
          </div>

          {/* Centered H1 Phrase with Fade-In Entrance + Bolder Futuristic Font + ShinyText Effect */}
          <h1 className="hero-title hero-title-fade">
            <ShinyText
              text="VOCÊ JÁ PENSOU EM GERAR A PRÓPRIA ENERGIA?"
              speed={3.5}
              color="#111111"
              shineColor="#7CB342"
              spread={130}
              direction="left"
            />
          </h1>

          <p className="hero-subtitle">
            Produza sua própria eletricidade com energia solar, reduza os custos da sua conta de luz e garanta previsibilidade financeira para seu imóvel ou empresa.
          </p>

          <div className="hero-buttons-group">
            <a href="#simulation" className="btn-primary btn-hero">
              <span>Simular minha economia</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/5511924891417?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20energia%20solar%20com%20a%20Onda%20Verde."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-hero"
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
          padding-top: 140px;
          padding-bottom: 90px;
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
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.65) 60%, rgba(255, 255, 255, 0.88) 100%);
          z-index: 1;
        }

        .hero-bottom-shadow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 50%, #FFFFFF 100%);
          z-index: 2;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 3;
        }

        .hero-content {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-logo-box {
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 5;
        }

        .hero-logo-img {
          height: 68px;
          min-height: 52px;
          width: auto;
          max-width: 280px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.12));
        }

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
          font-family: 'Orbitron', 'Chakra Petch', var(--font-heading), sans-serif;
          font-weight: 900;
          font-size: 2.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          color: #111111;
          line-height: 1.25;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.8);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: #222222;
          line-height: 1.6;
          margin-bottom: 32px;
          font-weight: 600;
          max-width: 720px;
          text-shadow: 0 1px 6px rgba(255, 255, 255, 0.9);
        }

        .hero-buttons-group {
          display: flex;
          justify-content: center;
          gap: 16px;
          width: 100%;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 14px 30px;
          font-size: 1rem;
          font-weight: 700;
          box-shadow: 0 6px 20px rgba(124, 179, 66, 0.35);
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding-top: 120px;
            padding-bottom: 60px;
          }
          .hero-logo-img {
            height: 58px;
          }
          .hero-title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 110px;
            padding-bottom: 40px;
          }
          .hero-logo-img {
            height: 52px;
            min-height: 48px;
            max-width: 220px;
          }
          .hero-title {
            font-size: 1.65rem;
            font-weight: 900;
          }
          .hero-subtitle {
            font-size: 0.95rem;
            margin-bottom: 24px;
          }
          .hero-buttons-group {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .btn-hero {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
