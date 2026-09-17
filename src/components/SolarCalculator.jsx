import React, { useState } from 'react';
import { Calculator, Sun, DollarSign, Calendar, TreePine, ArrowRight, Zap, RefreshCw, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SolarCalculator({ onOpenProposalModal }) {
  const [billValue, setBillValue] = useState(850);
  const [propertyType, setPropertyType] = useState('Residencial');
  const [region, setRegion] = useState('Sudeste');

  // Factors per region (kWp factor)
  const regionFactors = {
    Sudeste: 1.0,
    Nordeste: 1.15,
    'Centro-Oeste': 1.10,
    Sul: 0.90,
    Norte: 1.05,
  };

  const factor = regionFactors[region] || 1.0;

  // Calculation Logic
  // Assuming average tariff ~ R$ 0.95 / kWh
  const estimatedKwhMonthly = Math.round(billValue / 0.95);
  const savingsMonthly = Math.round(billValue * 0.93); // ~93% savings after minimum grid connection fee
  const newBillMonthly = billValue - savingsMonthly;
  const savings25Years = Math.round(savingsMonthly * 12 * 25 * 1.04); // including 4% yearly tariff inflation
  const kWpNeeded = (estimatedKwhMonthly / (125 * factor)).toFixed(2);
  const panelsCount = Math.max(2, Math.ceil(kWpNeeded / 0.55)); // 550W panels
  const estimatedInvestment = Math.round(panelsCount * 2600 + 3500);
  const paybackYears = (estimatedInvestment / (savingsMonthly * 12)).toFixed(1);
  const treesSavedPerYear = Math.round(savingsMonthly / 40);

  const propertyTypes = [
    { id: 'Residencial', label: 'Residencial', icon: '🏡' },
    { id: 'Comercial', label: 'Comercial', icon: '🏢' },
    { id: 'Agro', label: 'Agronegócio', icon: '🚜' },
    { id: 'Industrial', label: 'Industrial', icon: '🏭' },
  ];

  const handleGenerateProposal = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00E676', '#00B4D8', '#FFD600'],
      });
    } catch (e) {
      console.log('Confetti error', e);
    }
    onOpenProposalModal({
      billValue,
      propertyType,
      region,
      savingsMonthly,
      savings25Years,
      panelsCount,
      paybackYears,
    });
  };

  return (
    <section id="calculator" className="calculator-section section-padding">
      <div className="bg-glow-green" style={{ top: '20%', right: '5%' }}></div>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-eco">
            <Calculator size={16} />
            <span>SIMULADOR INTELIGENTE DE ECONOMIA</span>
          </div>
          <h2>Descubra Quanto Você Vai <span className="text-gradient-green">Economizar</span></h2>
          <p>Ajuste os valores abaixo para calcular o tamanho ideal do seu sistema solar fotovoltaico e seu retorno financeiro imediato.</p>
        </div>

        {/* Calculator Main Container */}
        <div className="glass-card calc-main-box">
          <div className="calc-grid">
            
            {/* Left Inputs Column */}
            <div className="calc-inputs-col">
              <h3 className="calc-subtitle">1. Configuração do Imóvel</h3>

              {/* Property Type Selector */}
              <div className="form-group">
                <label className="input-label">Tipo de Imóvel</label>
                <div className="property-grid">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      className={`type-btn ${propertyType === type.id ? 'active' : ''}`}
                      onClick={() => setPropertyType(type.id)}
                    >
                      <span className="type-icon">{type.icon}</span>
                      <span>{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Bill Slider */}
              <div className="form-group">
                <div className="slider-label-row">
                  <label className="input-label">Valor Médio da Conta de Luz Atual</label>
                  <span className="slider-value-display">R$ {billValue.toLocaleString('pt-BR')} <small>/mês</small></span>
                </div>
                
                <input
                  type="range"
                  min="200"
                  max="15000"
                  step="50"
                  value={billValue}
                  onChange={(e) => setBillValue(Number(e.target.value))}
                  className="calc-slider"
                />

                <div className="slider-ticks">
                  <span>R$ 200</span>
                  <span>R$ 2.500</span>
                  <span>R$ 7.500</span>
                  <span>R$ 15.000+</span>
                </div>
              </div>

              {/* Region Selector */}
              <div className="form-group">
                <label className="input-label">Região do Imóvel (Incidência Solar)</label>
                <div className="select-wrapper">
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="calc-select"
                  >
                    <option value="Sudeste">Sudeste (SP, MG, RJ, ES)</option>
                    <option value="Nordeste">Nordeste (BA, CE, PE, RN, MA, etc.)</option>
                    <option value="Centro-Oeste">Centro-Oeste (GO, MT, MS, DF)</option>
                    <option value="Sul">Sul (PR, SC, RS)</option>
                    <option value="Norte">Norte (AM, PA, TO, RO, etc.)</option>
                  </select>
                </div>
              </div>

              <div className="calc-guarantee-note">
                <CheckCircle size={18} className="highlight-green" />
                <span>Simulação estimada com tarifa média regulada pela ANEEL e inflação energética anual.</span>
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="calc-results-col">
              <div className="results-header">
                <h3>Seu Resultado de Economia</h3>
                <span className="results-badge">Projeção Garantida</span>
              </div>

              {/* Main Savings Hero Display */}
              <div className="savings-hero-box">
                <span className="savings-title">Sua Economia Mensal Estimada</span>
                <div className="savings-amount text-gradient-green">
                  R$ {savingsMonthly.toLocaleString('pt-BR')} <small>/mês</small>
                </div>
                <div className="savings-comparison-pill">
                  <span>Sua conta cai de <strong>R$ {billValue}</strong> para apenas <strong>R$ {newBillMonthly}</strong> (Taxa mínima)</span>
                </div>
              </div>

              {/* 4 Cards Grid Metrics */}
              <div className="metrics-cards-grid">
                <div className="metric-mini-card">
                  <div className="metric-icon gold"><DollarSign size={20} /></div>
                  <div className="metric-content">
                    <span className="metric-name">Economia em 25 Anos</span>
                    <span className="metric-val text-gradient-gold">R$ {savings25Years.toLocaleString('pt-BR')}</span>
                  </div>
                </div>

                <div className="metric-mini-card">
                  <div className="metric-icon green"><Zap size={20} /></div>
                  <div className="metric-content">
                    <span className="metric-name">Painéis Necessários</span>
                    <span className="metric-val">{panelsCount} Painéis ({kWpNeeded} kWp)</span>
                  </div>
                </div>

                <div className="metric-mini-card">
                  <div className="metric-icon cyan"><Calendar size={20} /></div>
                  <div className="metric-content">
                    <span className="metric-name">Retorno do Investimento</span>
                    <span className="metric-val">~{paybackYears} Anos</span>
                  </div>
                </div>

                <div className="metric-mini-card">
                  <div className="metric-icon eco"><TreePine size={20} /></div>
                  <div className="metric-content">
                    <span className="metric-name">Impacto Ecológico</span>
                    <span className="metric-val">{treesSavedPerYear} Árvores/ano</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                className="btn-primary w-full btn-proposal-trigger"
                onClick={handleGenerateProposal}
              >
                <span>Receber Proposta Completa com Lista de Equipamentos</span>
                <ArrowRight size={20} />
              </button>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .calculator-section {
          position: relative;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .calc-main-box {
          padding: 40px;
        }

        .calc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .calc-subtitle {
          font-size: 1.25rem;
          margin-bottom: 24px;
          color: var(--text-main);
          border-left: 3px solid var(--green-primary);
          padding-left: 12px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .input-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .property-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .type-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          padding: 12px 8px;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .type-btn:hover {
          background: rgba(0, 230, 118, 0.08);
          border-color: var(--green-primary);
          color: var(--text-main);
        }

        .type-btn.active {
          background: rgba(0, 230, 118, 0.15);
          border-color: var(--green-primary);
          color: var(--green-primary);
          box-shadow: 0 0 15px rgba(0, 230, 118, 0.2);
        }

        .type-icon {
          font-size: 1.4rem;
        }

        .slider-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .slider-value-display {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--green-primary);
        }

        .slider-value-display small {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .calc-slider {
          width: 100%;
          height: 10px;
          border-radius: 5px;
          background: #1E293B;
          outline: none;
          -webkit-appearance: none;
          accent-color: var(--green-primary);
          cursor: pointer;
        }

        .slider-ticks {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-subtle);
          margin-top: 8px;
        }

        .select-wrapper {
          position: relative;
        }

        .calc-select {
          width: 100%;
          padding: 14px 16px;
          background: rgba(7, 15, 24, 0.8);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          color: var(--text-main);
          font-size: 0.95rem;
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }

        .calc-select:focus {
          border-color: var(--green-primary);
        }

        .calc-guarantee-note {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.02);
          padding: 12px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Output Column */
        .calc-results-col {
          background: rgba(7, 15, 24, 0.6);
          border: 1px solid var(--border-glass-bright);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .results-header h3 {
          font-size: 1.2rem;
        }

        .results-badge {
          background: rgba(0, 180, 216, 0.2);
          color: var(--cyan-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .savings-hero-box {
          background: linear-gradient(135deg, rgba(0, 230, 118, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%);
          border: 1px solid var(--border-glass-bright);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
        }

        .savings-title {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .savings-amount {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 900;
          margin: 6px 0;
        }

        .savings-amount small {
          font-size: 1.2rem;
        }

        .savings-comparison-pill {
          font-size: 0.85rem;
          color: var(--text-main);
          background: rgba(0, 0, 0, 0.3);
          padding: 6px 12px;
          border-radius: 20px;
          display: inline-block;
        }

        .metrics-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .metric-mini-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .metric-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .metric-icon.gold { background: rgba(255, 214, 0, 0.15); color: #FFD600; }
        .metric-icon.green { background: rgba(0, 230, 118, 0.15); color: var(--green-primary); }
        .metric-icon.cyan { background: rgba(0, 180, 216, 0.15); color: var(--cyan-primary); }
        .metric-icon.eco { background: rgba(16, 185, 129, 0.15); color: #10B981; }

        .metric-name {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .metric-val {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-main);
        }

        .btn-proposal-trigger {
          margin-top: 10px;
          padding: 16px;
        }

        @media (max-width: 1024px) {
          .calc-grid {
            grid-template-columns: 1fr;
          }
          .calc-main-box {
            padding: 24px;
          }
          .property-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
