import React, { useState } from 'react';
import { CreditCard, CheckCircle2, ShieldCheck, ArrowRight, DollarSign } from 'lucide-react';

export default function FinancingSimulator({ onOpenProposalModal }) {
  const [months, setMonths] = useState(60);
  const [billValue, setBillValue] = useState(1200);

  // Installment estimation formula:
  // System cost ~ 16 * billValue
  const systemCost = billValue * 16;
  // Interest rate ~ 1.15% per month
  const rate = 0.0115;
  const installment = Math.round((systemCost * (rate * Math.pow(1 + rate, months))) / (Math.pow(1 + rate, months) - 1));
  const monthlySavings = Math.round(billValue * 0.93);
  const netMonthlyBenefit = monthlySavings - installment;

  return (
    <section id="financing" className="financing-section section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-eco">
            <CreditCard size={16} />
            <span>FINANCIAMENTO SOLAR INTELIGENTE</span>
          </div>
          <h2>Troque sua Conta de Luz por uma <span className="text-gradient-green">Parcela Própria</span></h2>
          <p>Você não precisa tirar dinheiro do bolso. A economia gerada pelos painéis solares paga a parcela do seu financiamento.</p>
        </div>

        <div className="glass-card financing-card">
          <div className="financing-grid">
            
            {/* Left Controls */}
            <div className="financing-controls">
              <h3 className="fin-title">Simulação de Parcelamento Sem Entrada</h3>

              <div className="form-group">
                <div className="slider-label-row">
                  <label className="input-label">Sua Conta de Luz Atual</label>
                  <span className="slider-value-display">R$ {billValue.toLocaleString('pt-BR')}</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="10000"
                  step="100"
                  value={billValue}
                  onChange={(e) => setBillValue(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>

              <div className="form-group">
                <label className="input-label">Prazo de Financiamento</label>
                <div className="months-selector">
                  {[24, 36, 60, 84, 120].map((m) => (
                    <button
                      key={m}
                      type="button"
                      className={`month-btn ${months === m ? 'active' : ''}`}
                      onClick={() => setMonths(m)}
                    >
                      {m}x
                    </button>
                  ))}
                </div>
              </div>

              <div className="fin-highlights">
                <div className="fin-h-item">
                  <CheckCircle2 size={18} className="highlight-green" />
                  <span>Carência de até 120 dias para começar a pagar</span>
                </div>
                <div className="fin-h-item">
                  <CheckCircle2 size={18} className="highlight-green" />
                  <span>Aprovação rápida de crédito em até 2 horas</span>
                </div>
                <div className="fin-h-item">
                  <CheckCircle2 size={18} className="highlight-green" />
                  <span>Financiamento 100% do projeto + instalação</span>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="financing-result-box">
              <div className="fin-res-header">
                <span>Comparativo Financeiro Mensal</span>
              </div>

              <div className="comparison-row">
                <div className="comp-item old">
                  <span className="comp-label">Sua Conta Hoje (Perdido)</span>
                  <span className="comp-value">R$ {billValue.toLocaleString('pt-BR')}</span>
                </div>
                <div className="comp-vs">VS</div>
                <div className="comp-item new">
                  <span className="comp-label">Sua Parcela Onda Verde</span>
                  <span className="comp-value text-gradient-green">R$ {installment.toLocaleString('pt-BR')}</span>
                </div>
              </div>

              <div className="benefit-alert">
                <DollarSign size={22} className="highlight-green" />
                <div>
                  <strong>{netMonthlyBenefit >= 0 ? 'Economia Sobrando no Bolso:' : 'Diferença Mensal Irrisória:'}</strong>
                  <p>{netMonthlyBenefit >= 0 ? `R$ ${netMonthlyBenefit}/mês de lucro imediato desde a 1ª parcela!` : `Apenas R$ ${Math.abs(netMonthlyBenefit)}/mês a mais para ser dono do seu próprio gerador!`}</p>
                </div>
              </div>

              <button className="btn-primary w-full" onClick={() => onOpenProposalModal()}>
                <span>Aprovar Meu Crédito Solar Sem Entrada</span>
                <ArrowRight size={20} />
              </button>

              {/* Partners Badges */}
              <div className="bank-partners">
                <span>Bancos Parceiros:</span>
                <div className="partner-tags">
                  <span className="partner-tag">Santander</span>
                  <span className="partner-tag">BV Financeiro</span>
                  <span className="partner-tag">Solfácil</span>
                  <span className="partner-tag">Banco do Brasil</span>
                  <span className="partner-tag">Bradesco</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .financing-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .financing-card {
          padding: 40px;
        }

        .financing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .fin-title {
          font-size: 1.3rem;
          margin-bottom: 24px;
        }

        .months-selector {
          display: flex;
          gap: 10px;
        }

        .month-btn {
          flex: 1;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          padding: 10px;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s;
        }

        .month-btn:hover {
          border-color: var(--green-primary);
          color: var(--text-main);
        }

        .month-btn.active {
          background: rgba(0, 230, 118, 0.2);
          border-color: var(--green-primary);
          color: var(--green-primary);
        }

        .fin-highlights {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }

        .fin-h-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .financing-result-box {
          background: rgba(7, 15, 24, 0.7);
          border: 1px solid var(--border-glass-bright);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .fin-res-header {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 1px;
        }

        .comparison-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.02);
          padding: 16px;
          border-radius: 14px;
        }

        .comp-item {
          display: flex;
          flex-direction: column;
        }

        .comp-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .comp-value {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
        }

        .comp-item.old .comp-value {
          color: #EF4444;
          text-decoration: line-through;
        }

        .comp-vs {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--text-subtle);
        }

        .benefit-alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(0, 230, 118, 0.1);
          border: 1px solid rgba(0, 230, 118, 0.3);
          border-radius: 12px;
          padding: 14px;
        }

        .benefit-alert strong {
          color: var(--green-primary);
          font-size: 0.95rem;
        }

        .benefit-alert p {
          font-size: 0.85rem;
          color: var(--text-main);
          margin-top: 2px;
        }

        .bank-partners {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .partner-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .partner-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .financing-grid {
            grid-template-columns: 1fr;
          }
          .financing-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
