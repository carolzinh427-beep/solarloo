import React from 'react';
import { DollarSign, TrendingUp, Leaf, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      icon: <DollarSign size={24} className="benefit-icon" />,
      title: 'Economia na conta de energia',
      description: 'Reduza de forma expressiva o valor mensal pago à concessionária ao gerar sua própria energia elétrica.',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <TrendingUp size={24} className="benefit-icon" />,
      title: 'Valorização do imóvel',
      description: 'Imóveis equipados com sistemas solares ganham apelo no mercado e aumentam seu valor patrimonial.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <Leaf size={24} className="benefit-icon" />,
      title: 'Energia limpa',
      description: 'Geração 100% renovável e sem emissão de poluentes, contribuindo diretamente com a sustentabilidade.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <ShieldCheck size={24} className="benefit-icon" />,
      title: 'Mais previsibilidade nos gastos',
      description: 'Proteja seu orçamento contra os aumentos frequentes das tarifas de energia e mudanças de bandeiras.',
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="section-padding bg-subtle">
      <div className="container">
        
        {/* Section Header (NO BADGES AS REQUESTED) */}
        <div className="section-header">
          <h2>Por que investir em energia solar?</h2>
          <p>Confira os principais motivos para fazer a transição para a geração própria de energia elétrica no seu imóvel.</p>
        </div>

        <div className="benefits-grid">
          {benefitsList.map((item, idx) => (
            <div key={idx} className="card-clean benefit-card">
              <div className="benefit-img-frame">
                <img src={item.image} alt={item.title} className="benefit-img" />
              </div>

              <div className="benefit-body">
                <div className="benefit-title-row">
                  <div className="benefit-icon-wrap">{item.icon}</div>
                  <h3 className="benefit-title">{item.title}</h3>
                </div>

                <p className="benefit-desc">{item.description}</p>
              </div>
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
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .benefit-img-frame {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: #E2E8F0;
        }

        .benefit-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .benefit-body {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .benefit-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .benefit-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .benefit-icon {
          color: var(--green-primary);
        }

        .benefit-title {
          font-size: 1.05rem;
          line-height: 1.3;
        }

        .benefit-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
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
