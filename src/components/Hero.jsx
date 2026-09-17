import React from 'react';
import { Sun, Zap, ShieldCheck, ArrowRight, TrendingDown, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Hero({ onOpenProposalModal }) {
  return (
    <section id="hero" className="hero-section">
      <div className="bg-glow-green" style={{ top: '10%', left: '-100px' }}></div>
      <div className="bg-glow-cyan" style={{ top: '30%', right: '-150px' }}></div>

      <div className="container hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="badge-eco animate-float">
            <Sun size={16} className="highlight-green" />
            <span>ENERGIA RENOVÁVEL DO FUTURO HOJE</span>
          </div>

          <h1 className="hero-title">
            Transforme a Luz do Sol em <span className="text-gradient-green">Economia de até 95%</span> na sua Conta
          </h1>

          <p className="hero-subtitle">
            A <strong>Onda Verde Energia Solar</strong> projeta, instala e monitora sistemas fotovoltaicos 
            de altíssima eficiência para sua casa, empresa ou agronegócio. Pague a parcela com a própria economia da conta!
          </p>

          {/* Key Bullet Points */}
          <div className="hero-bullets">
            <div className="bullet-item">
              <CheckCircle2 size={18} className="highlight-green" />
              <span>Garantia de 25 Anos nos Painéis</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={18} className="highlight-green" />
              <span>Sem Entrada & Até 120x para Pagar</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={18} className="highlight-green" />
              <span>Engenharia Própria Sem Terceirização</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button className="btn-primary btn-hero" onClick={onOpenProposalModal}>
              <span>Simular Minha Economia Agora</span>
              <ArrowRight size={20} />
            </button>
            
            <a 
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Onda%20Verde%20e%20quero%20um%20or%C3%A7amento%20personalizado."
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary btn-hero btn-whatsapp"
            >
              <MessageSquare size={20} />
              <span>Atendimento WhatsApp</span>
            </a>
          </div>

          {/* Trust Ratings Pill */}
          <div className="trust-pill">
            <div className="avatar-group">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="avatar" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="avatar" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="avatar" />
            </div>
            <div className="trust-text">
              <div className="stars">★★★★★ <span>4.9/5 (1.200+ Clientes)</span></div>
              <p>Economizando mais de R$ 18 Milhões por ano</p>
            </div>
          </div>
        </div>

        {/* Right Graphic / Interactive Showcase */}
        <div className="hero-graphic-col">
          <div className="glass-card hero-main-card">
            {/* Visual Solar System Badge */}
            <div className="hero-card-header">
              <div className="status-dot"></div>
              <span>Monitoramento Inteligente 24/7 Ativo</span>
              <span className="live-tag">AO VIVO</span>
            </div>

            <div className="hero-card-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80" 
                alt="Instalação Solar Onda Verde" 
                className="hero-card-img"
              />
              <div className="image-overlay-glow"></div>
            </div>

            {/* Floating Metric Badges */}
            <div className="floating-badge badge-top-right">
              <div className="icon-wrap green">
                <TrendingDown size={20} />
              </div>
              <div>
                <span className="badge-label">Redução na Conta</span>
                <span className="badge-value">-95%</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <div className="icon-wrap gold">
                <Sun size={20} />
              </div>
              <div>
                <span className="badge-label">Geração Mensal Est.</span>
                <span className="badge-value">1.450 kWh</span>
              </div>
            </div>

            {/* Simulated Live Generation Meter */}
            <div className="live-meter-card">
              <div className="meter-info">
                <span>Produção Solar Hoje</span>
                <span className="highlight-green">48.2 kWh</span>
              </div>
              <div className="meter-bar-track">
                <div className="meter-bar-fill" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 170px;
          padding-bottom: 100px;
          overflow: hidden;
          background: radial-gradient(circle at 50% 20%, rgba(10, 25, 47, 0.8) 0%, var(--bg-primary) 100%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .hero-title {
          font-size: 3.4rem;
          letter-spacing: -1px;
          line-height: 1.15;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .hero-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--text-main);
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .btn-hero {
          padding: 16px 32px;
          font-size: 1.1rem;
        }

        .trust-pill {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          padding: 12px 20px;
          border-radius: 50px;
          width: fit-content;
          margin-top: 10px;
        }

        .avatar-group {
          display: flex;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
          margin-left: -10px;
        }

        .avatar:first-child {
          margin-left: 0;
        }

        .trust-text .stars {
          color: #FFD600;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .trust-text p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* Right Graphic Styles */
        .hero-graphic-col {
          position: relative;
        }

        .hero-main-card {
          padding: 20px;
        }

        .hero-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: var(--green-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--green-primary);
          animation: pulseGlow 2s infinite;
        }

        .live-tag {
          margin-left: auto;
          background: rgba(0, 230, 118, 0.2);
          color: var(--green-primary);
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 800;
        }

        .hero-card-image-wrap {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 16 / 10;
        }

        .hero-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .hero-card-image-wrap:hover .hero-card-img {
          transform: scale(1.05);
        }

        .floating-badge {
          position: absolute;
          background: rgba(10, 25, 47, 0.88);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-glass-bright);
          padding: 12px 18px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .badge-top-right {
          top: 30px;
          right: -20px;
        }

        .badge-bottom-left {
          bottom: 80px;
          left: -20px;
        }

        .icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-wrap.green {
          background: rgba(0, 230, 118, 0.2);
          color: var(--green-primary);
        }

        .icon-wrap.gold {
          background: rgba(255, 214, 0, 0.2);
          color: #FFD600;
        }

        .badge-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .badge-value {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .live-meter-card {
          margin-top: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 14px;
        }

        .meter-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .meter-bar-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .meter-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00E676 0%, #00B4D8 100%);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 230, 118, 0.8);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-title {
            font-size: 2.6rem;
          }
          .hero-bullets {
            align-items: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .trust-pill {
            margin: 0 auto;
          }
          .badge-top-right {
            right: 0;
          }
          .badge-bottom-left {
            left: 0;
          }
        }
      `}</style>
    </section>
  );
}
