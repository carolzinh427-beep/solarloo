import React from 'react';
import { DollarSign, TrendingUp, Leaf, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      icon: <DollarSign size={28} className="benefit-icon" />,
      title: 'Economia na conta de energia',
      description: 'Reduza de forma expressiva o valor mensal pago à concessionária ao gerar sua própria energia elétrica.',
    },
    {
      icon: <TrendingUp size={28} className="benefit-icon" />,
      title: 'Valorização do imóvel',
      description: 'Imóveis equipados com sistemas solares ganham apelo no mercado e aumentam seu valor patrimonial.',
    },
    {
      icon: <Leaf size={28} className="benefit-icon" />,
      title: 'Energia limpa',
      description: 'Geração 100% renovável e sem emissão de poluentes, contribuindo diretamente com a sustentabilidade.',
    },
    {
      icon: <ShieldCheck size={28} className="benefit-icon" />,
      title: 'Mais previsibilidade nos gastos',
      description: 'Proteja seu orçamento contra os aumentos frequentes das tarifas de energia e mudanças de bandeiras.',
    },
  ];

  return (
    <section className="section-padding bg-subtle">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">
            <span>VANTAGENS</span>
          </div>
          <h2>Por que investir em energia solar?</h2>
          <p>Confira os principais motivos para fazer a transição para a geração própria de energia elétrica no seu imóvel.</p>
        </div>

        <div className="benefits-grid">
          {benefitsList.map((item, idx) => (
            <div key={idx} className="card-clean benefit-card">
              <div className="benefit-icon-wrap">
                {item.icon}
              </div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .benefit-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 28px 24px;
        }

        .benefit-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .benefit-icon {
          color: var(--green-primary);
        }

        .benefit-title {
          font-size: 1.15rem;
          margin-bottom: 10px;
        }

        .benefit-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
