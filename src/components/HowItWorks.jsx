import React from 'react';
import { Search, Compass, Wrench, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Análise do consumo',
      description: 'Avaliamos seu histórico para entender a necessidade exata do seu imóvel.',
      icon: <Search size={18} />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
    {
      number: '02',
      title: 'Dimensionamento',
      description: 'Elaboramos o projeto técnico personalizado com os equipamentos ideais.',
      icon: <Compass size={18} />,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      number: '03',
      title: 'Instalação técnica',
      description: 'Montagem dos painéis e estruturas com rigor técnico e total segurança.',
      icon: <Wrench size={18} />,
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=600&q=80',
    },
    {
      number: '04',
      title: 'Geração de energia',
      description: 'Seu sistema entra em operação e você começa a produzir sua eletricidade.',
      icon: <Zap size={18} />,
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container">
        
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
          gap: 20px;
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
          top: 8px;
          left: 8px;
          background-color: var(--green-primary);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 2px 8px;
          border-radius: 12px;
        }

        .step-body {
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .step-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .step-icon-box {
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          color: var(--green-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 0.98rem;
          line-height: 1.25;
        }

        .step-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .step-body {
            padding: 10px 8px;
          }
          .step-title {
            font-size: 0.88rem;
          }
          .step-desc {
            font-size: 0.78rem;
            line-height: 1.35;
          }
        }
      `}</style>
    </section>
  );
}
