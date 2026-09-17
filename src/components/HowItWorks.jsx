import React from 'react';
import { Search, Compass, Wrench, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Análise do consumo',
      description: 'Avaliamos seu histórico de consumo de energia para compreender a necessidade exata do seu imóvel.',
      icon: <Search size={22} />,
    },
    {
      number: '02',
      title: 'Dimensionamento do sistema',
      description: 'Elaboramos o projeto técnico personalizado, definindo a quantidade ideal de equipamentos.',
      icon: <Compass size={22} />,
    },
    {
      number: '03',
      title: 'Instalação dos equipamentos',
      description: 'Nossa equipe realiza a montagem das estruturas e painéis com rigor técnico e segurança.',
      icon: <Wrench size={22} />,
    },
    {
      number: '04',
      title: 'Geração da sua própria energia',
      description: 'Após a homologação com a concessionária, seu sistema começa a produzir eletricidade limpa.',
      icon: <Zap size={22} />,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">
            <span>PASSO A PASSO</span>
          </div>
          <h2>Como funciona a transição para energia solar</h2>
          <p>Um processo simples, transparente e acompanhado em todas as etapas por nossa equipe.</p>
        </div>

        <div className="timeline-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-top">
                <span className="step-num">{step.number}</span>
                <div className="step-icon-box">{step.icon}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          position: relative;
        }

        .timeline-item {
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          position: relative;
          transition: border-color 0.2s ease;
        }

        .timeline-item:hover {
          border-color: var(--green-primary);
        }

        .timeline-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .step-num {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.8rem;
          color: var(--green-primary);
        }

        .step-icon-box {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          color: var(--green-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-size: 1.15rem;
          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
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
