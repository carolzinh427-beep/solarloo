import React from 'react';
import Stepper, { Step } from './Stepper';
import { Search, Compass, Wrench, Zap, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Análise do consumo',
      description: 'Avaliamos seu histórico de conta de luz para entender a necessidade exata do seu imóvel e projetar a economia ideal.',
      icon: <Search size={20} />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      details: ['Análise minuciosa do histórico tarifário', 'Identificação do potencial de economia', 'Proposta comercial sem compromisso'],
    },
    {
      number: '02',
      title: 'Dimensionamento e Projeto',
      description: 'Elaboramos o projeto técnico personalizado com os equipamentos ideais e solicitamos a aprovação junto à concessionária.',
      icon: <Compass size={20} />,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      details: ['Seleção de inversores e módulos tier 1', 'Engenharia dedicada e homologação', 'Planejamento de entrega e prazos'],
    },
    {
      number: '03',
      title: 'Instalação técnica',
      description: 'Montagem dos painéis, inversores e estruturas de fixação com rigor técnico, equipe qualificada e total segurança.',
      icon: <Wrench size={20} />,
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80',
      details: ['Instalação rápida e organizada', 'Conformidade com normas NBR e NR-35', 'Testes de segurança e acionamento'],
    },
    {
      number: '04',
      title: 'Geração e Economia',
      description: 'Seu sistema entra em operação comercial e você passa a produzir sua própria eletricidade limpa com até 95% de economia.',
      icon: <Zap size={20} />,
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
      details: ['Monitoramento em tempo real via app', 'Vistoria final da distribuidora de energia', 'Redução imediata na conta de luz'],
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container">
        
        <div className="section-header">
          <h2>Como funciona a transição para energia solar</h2>
          <p>Um processo simples, transparente e acompanhado em todas as etapas por nossa equipe técnica.</p>
        </div>

        {/* Stepper Component Integration */}
        <div className="stepper-wrapper">
          <Stepper
            initialStep={1}
            backButtonText="Anterior"
            nextButtonText="Próximo"
            onFinalStepCompleted={() => {
              const el = document.getElementById('simulator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {steps.map((s, idx) => (
              <Step key={idx}>
                <div className="step-custom-card">
                  <div className="step-custom-img-frame">
                    <img src={s.image} alt={s.title} className="step-custom-img" />
                  </div>
                  <div className="step-custom-info">
                    <div className="step-badge-row">
                      <span className="step-badge-num">Etapa {s.number}</span>
                      <div className="step-badge-icon">{s.icon}</div>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <ul className="step-details-list">
                      {s.details.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <CheckCircle2 size={16} className="text-green-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>

      </div>

      <style>{`
        .stepper-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .step-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .step-badge-num {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--green-primary);
          background-color: var(--green-light);
          padding: 3px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .step-badge-icon {
          color: var(--green-primary);
          display: flex;
          align-items: center;
        }

        .step-details-list {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          list-style: none;
          padding: 0;
        }

        .step-details-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #454545;
        }

        .text-green-primary {
          color: var(--green-primary);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}

