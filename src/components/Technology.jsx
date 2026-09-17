import React from 'react';
import { SunMedium, Cpu, Layers, Smartphone } from 'lucide-react';

export default function Technology() {
  const techList = [
    {
      title: 'Painéis Solares',
      icon: <SunMedium size={24} />,
      description: 'Captam a iluminação solar e realizam a conversão primária em energia elétrica de forma contínua e silenciosa.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Inversor Solar',
      icon: <Cpu size={24} />,
      description: 'Transforma a corrente contínua produzida pelos painéis na corrente alternada utilizada pelas tomadas e aparelhos do seu imóvel.',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Estrutura de Instalação',
      icon: <Layers size={24} />,
      description: 'Suportes de fixação de alta durabilidade projetados para se adaptarem ao seu tipo de telhado com segurança.',
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Monitoramento Digital',
      icon: <Smartphone size={24} />,
      description: 'Sistema de acompanhamento em tempo real para você checar a produção diária de energia de forma simples no celular.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        
        {/* Section Header (NO BADGES AS REQUESTED) */}
        <div className="section-header">
          <h2>Equipamentos e tecnologia do sistema</h2>
          <p>Entenda como cada componente trabalha em conjunto para gerar energia limpa para o seu imóvel.</p>
        </div>

        <div className="tech-grid">
          {techList.map((item, idx) => (
            <div key={idx} className="card-clean tech-card">
              <div className="tech-image-frame">
                <img src={item.image} alt={item.title} className="tech-img" />
              </div>
              
              <div className="tech-body">
                <div className="tech-title-row">
                  <div className="tech-icon-wrap">{item.icon}</div>
                  <h3 className="tech-title">{item.title}</h3>
                </div>

                <p className="tech-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .tech-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .tech-image-frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background-color: var(--bg-subtle);
        }

        .tech-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .tech-body {
          padding: 24px;
        }

        .tech-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .tech-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          color: var(--green-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tech-title {
          font-size: 1.15rem;
        }

        .tech-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
