import React from 'react';
import { Search, Compass, Wrench, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Análise do consumo',
      description: 'Avaliamos seu histórico de consumo de energia para compreender a necessidade exata do seu imóvel.',
      icon: <Search size={20} />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
    {
      number: '02',
      title: 'Dimensionamento do sistema',
      description: 'Elaboramos o projeto técnico personalizado, definindo a quantidade ideal de equipamentos.',
      icon: <Compass size={20} />,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      number: '03',
      title: 'Instalação dos equipamentos',
      description: 'Nossa equipe realiza a montagem das estruturas e painéis com rigor técnico e segurança.',
      icon: <Wrench size={20} />,
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=600&q=80',
    },
    {
      number: '04',
      title: 'Geração da sua própria energia',
      description: 'Após a homologação com a concessionária, seu sistema começa a produzir eletricidade limpa.',
      icon: <Zap size={20} />,
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        
        {/* Section Header (NO BADGES AS REQUESTED) */}
        <div className="section-header">
          <h2>Como funciona a transição para energia solar</h2>
          <p>Um processo simples, transparente e acompanhado em todas as etapas por nossa equipe.</p>
        </div>

        <div className="timeline-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-item">
              <div className="step-image-frame">
                <img src={step.image} alt={step.title} className="step-img" />
                <span className="step-num-badge">{step.number}</span>
              </div>

              <div className="step-body">
                <div className="step-title-row">
                  <div className="step-icon-box">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <p className="step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .timeline-item {
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .timeline-item:hover {
          border-color: var(--green-primary);
          box-shadow: var(--shadow-md);
        }

        .step-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: #E2E8F0;
        }

        .step-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .step-num-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: var(--green-primary);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .step-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .step-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .step-icon-box {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          color: var(--green-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 1.05rem;
          line-height: 1.3;
        }

        .step-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .timeline-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
