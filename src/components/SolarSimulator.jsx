import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';

export default function SolarSimulator() {
  const [billRange, setBillRange] = useState('R$500 a R$1.000');
  const [propertyType, setPropertyType] = useState('Residencial');

  const billOptions = [
    { label: 'Até R$300', value: 'Até R$300', estimate: 'Até R$ 250 /mês' },
    { label: 'R$300 a R$500', value: 'R$300 a R$500', estimate: 'De R$ 270 a R$ 450 /mês' },
    { label: 'R$500 a R$1.000', value: 'R$500 a R$1.000', estimate: 'De R$ 450 a R$ 920 /mês' },
    { label: 'Acima de R$1.000', value: 'Acima de R$1.000', estimate: 'Acima de R$ 920 /mês' },
  ];

  const propertyOptions = [
    { label: 'Residencial', value: 'Residencial' },
    { label: 'Comercial', value: 'Comercial' },
    { label: 'Rural', value: 'Rural' },
  ];

  const currentSelection = billOptions.find((opt) => opt.value === billRange) || billOptions[2];

  const whatsappMessage = `Ol%C3%A1!%20Fiz%20uma%20simula%C3%A7%C3%A3o%20no%20site%20da%20Onda%20Verde:%0A-%20Conta%20m%C3%A9dia:%20${encodeURIComponent(billRange)}%0A-%20Tipo%20de%20im%C3%B3vel:%20${encodeURIComponent(propertyType)}%0AGostaria%20de%20receber%20uma%20an%C3%A1lise%20personalizada%20gratuitamente.`;
  const whatsappUrl = `https://wa.me/5511924891417?text=${whatsappMessage}`;

  return (
    <section id="simulation" className="section-padding bg-white">
      <div className="container">
        
        {/* Section Header (NO BADGES AS REQUESTED) */}
        <div className="section-header">
          <h2>Calcule uma estimativa inicial de economia</h2>
          <p>Selecione a faixa de valor da sua conta atual e o tipo do seu imóvel para consultar a estimativa inicial.</p>
        </div>

        <div className="simulator-card-wrap">
          <div className="card-clean simulator-card">
            
            <div className="simulator-steps-col">
              
              {/* Question 1 */}
              <div className="sim-group">
                <label className="sim-label">1. Qual é o valor médio da sua conta de energia?</label>
                <div className="options-grid options-bill">
                  {billOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`option-btn ${billRange === option.value ? 'selected' : ''}`}
                      onClick={() => setBillRange(option.value)}
                    >
                      <span className="opt-check">
                        {billRange === option.value && <CheckCircle2 size={16} />}
                      </span>
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="sim-group">
                <label className="sim-label">2. Qual é o tipo do imóvel?</label>
                <div className="options-grid options-prop">
                  {propertyOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`option-btn ${propertyType === option.value ? 'selected' : ''}`}
                      onClick={() => setPropertyType(option.value)}
                    >
                      <span className="opt-check">
                        {propertyType === option.value && <CheckCircle2 size={16} />}
                      </span>
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Outcome Display Box */}
            <div className="simulator-result-box">
              <div className="sim-res-img-frame">
                <img
                  src="/solar_panels_onda_verde.jpg"
                  alt="Painéis Solares Onda Verde"
                  className="sim-res-img"
                />
              </div>

              <div className="res-hero">
                <span className="res-subtitle">Potencial de Economia Estimada:</span>
                <span className="res-value">{currentSelection.estimate}</span>
                <span className="res-context">Imóvel {propertyType} • Faixa: {billRange}</span>
              </div>

              <div className="res-disclaimer">
                <AlertCircle size={16} className="disclaimer-icon" />
                <p>
                  <strong>Aviso:</strong> Este valor é uma <strong>estimativa inicial</strong>. O dimensionamento exato depende de análise técnica do local.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full btn-sim-cta"
              >
                <MessageSquare size={18} />
                <span>Quero uma análise personalizada</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        #simulation {
          padding-top: 40px !important;
          padding-bottom: 45px !important;
        }

        .simulator-card-wrap {
          max-width: 860px;
          margin: 0 auto;
        }

        .simulator-card {
          padding: 24px 28px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
          border-radius: 16px;
        }

        .sim-group {
          margin-bottom: 18px;
        }

        .sim-group:last-child {
          margin-bottom: 0;
        }

        .sim-label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-title);
          margin-bottom: 10px;
        }

        .options-grid {
          display: grid;
          gap: 8px;
        }

        .options-bill {
          grid-template-columns: repeat(2, 1fr);
        }

        .options-prop {
          grid-template-columns: repeat(3, 1fr);
        }

        .option-btn {
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 9px 12px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-body);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          text-align: left;
        }

        .option-btn:hover {
          border-color: var(--green-primary);
          background-color: #FFFFFF;
        }

        .option-btn.selected {
          border-color: var(--green-primary);
          background-color: var(--green-light);
          color: var(--green-primary);
        }

        .opt-check {
          width: 14px;
          height: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Result Box */
        .simulator-result-box {
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sim-res-img-frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #DCEDC8;
        }

        .sim-res-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .res-hero {
          display: flex;
          flex-direction: column;
        }

        .res-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .res-value {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--green-primary);
          margin: 2px 0;
        }

        .res-context {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .res-disclaimer {
          display: flex;
          gap: 8px;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 0.78rem;
          color: var(--text-body);
          line-height: 1.35;
        }

        .disclaimer-icon {
          color: #D97706;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .btn-sim-cta {
          padding: 10px 14px;
          font-size: 0.88rem;
          border-radius: 8px;
        }

        @media (max-width: 900px) {
          .simulator-card {
            grid-template-columns: 1fr;
            padding: 18px;
            gap: 20px;
          }
          .options-bill {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
