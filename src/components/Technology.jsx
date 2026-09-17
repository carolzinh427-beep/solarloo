import React from 'react';
import { SunMedium, Cpu, Layers, Smartphone } from 'lucide-react';

export default function Technology() {
  const techList = [
    {
      title: 'Painéis Solares',
      icon: <SunMedium size={20} />,
      description: 'Captam a iluminação solar e realizam a conversão primária em energia elétrica contínua.',
      image: '/solar_panels_onda_verde.jpg',
    },
    {
      title: 'Inversor Solar',
      icon: <Cpu size={20} />,
      description: 'Transforma a corrente contínua produzida na corrente alternada utilizada pelas tomadas.',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Estrutura de Fixação',
      icon: <Layers size={20} />,
      description: 'Suportes de alta durabilidade projetados para se adaptarem ao seu telhado com segurança.',
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Monitoramento Digital',
      icon: <Smartphone size={20} />,
      description: 'Sistema de acompanhamento em tempo real para você checar a produção no celular.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="section-padding bg-subtle">
      <div className="container">
        
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
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .tech-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .tech-image-frame {
          width: 100%;
          aspect-ratio: 16 / 10;
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
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .tech-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .tech-icon-wrap {
          width: 32px;
          height: 32px;
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
          font-size: 0.98rem;
          line-height: 1.25;
        }

        .tech-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .tech-body {
            padding: 10px 8px;
          }
          .tech-title {
            font-size: 0.88rem;
          }
          .tech-desc {
            font-size: 0.78rem;
            line-height: 1.35;
          }
        }
      `}</style>
    </section>
  );
}
