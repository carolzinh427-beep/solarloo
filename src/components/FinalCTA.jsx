import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding final-cta-section bg-white">
      <div className="container">
        <div className="final-cta-box">
          <div className="final-cta-bg-image"></div>
          <div className="final-cta-overlay"></div>
          
          <div className="final-cta-content">
            <h2 className="final-cta-title">Comece a gerar sua própria energia</h2>
            
            <p className="final-cta-text">
              Solicite uma análise técnica sem compromisso para o seu imóvel e descubra como a energia solar pode transformar seus custos com eletricidade.
            </p>

            <div className="final-cta-btn-wrap">
              <a
                href="https://wa.me/5511924891417?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20de%20energia%20solar%20com%20a%20Onda%20Verde."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-cta-main btn-whatsapp"
              >
                <MessageSquare size={20} />
                <span>Falar com a Onda Verde</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .final-cta-section {
          position: relative;
        }

        .final-cta-box {
          position: relative;
          border: 1px solid var(--green-border);
          border-radius: var(--radius-lg);
          padding: 60px 40px;
          text-align: center;
          max-width: 960px;
          margin: 0 auto;
          overflow: hidden;
          background-color: #FFFFFF;
          box-shadow: var(--shadow-md);
        }

        .final-cta-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80');
          background-size: cover;
          background-position: center center;
          opacity: 0.08;
          z-index: 1;
        }

        .final-cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.92) 100%);
          z-index: 2;
        }

        .final-cta-content {
          position: relative;
          z-index: 3;
        }

        .final-cta-title {
          font-size: 2.3rem;
          margin-bottom: 16px;
          color: var(--text-title);
        }

        .final-cta-text {
          font-size: 1.05rem;
          color: var(--text-body);
          max-width: 640px;
          margin: 0 auto 28px auto;
          line-height: 1.55;
        }

        .final-cta-btn-wrap {
          display: flex;
          justify-content: center;
        }

        .btn-cta-main {
          padding: 14px 32px;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .final-cta-box {
            padding: 36px 20px;
          }
          .final-cta-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
