import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding final-cta-section">
      <div className="container">
        <div className="final-cta-box">
          
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

      <style>{`
        .final-cta-section {
          background-color: var(--bg-main);
        }

        .final-cta-box {
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          border-radius: var(--radius-lg);
          padding: 60px 40px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .final-cta-title {
          font-size: 2.5rem;
          margin-bottom: 16px;
          color: var(--text-title);
        }

        .final-cta-text {
          font-size: 1.1rem;
          color: var(--text-body);
          max-width: 640px;
          margin: 0 auto 32px auto;
          line-height: 1.6;
        }

        .final-cta-btn-wrap {
          display: flex;
          justify-content: center;
        }

        .btn-cta-main {
          padding: 16px 36px;
          font-size: 1.05rem;
        }

        @media (max-width: 768px) {
          .final-cta-box {
            padding: 36px 20px;
          }
          .final-cta-title {
            font-size: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
}
