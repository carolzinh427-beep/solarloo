import React from 'react';
import { Home, Building2, Tractor, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'Solar Residencial',
      icon: <Home size={18} />,
      description: 'Projetos para casas e condomínios que buscam reduzir gastos com energia e aumentar a autonomia.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Solar Comercial',
      icon: <Building2 size={18} />,
      description: 'Soluções de alta eficiência para empresas, comércios e escritórios reduzirem custos operacionais.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Solar Rural',
      icon: <Tractor size={18} />,
      description: 'Sistemas para o agronegócio, atendendo fazendas, irrigação e produção rural com autonomia.',
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container">
        
        <div className="section-header">
          <h2>Soluções completas em energia solar</h2>
          <p>Projetos desenvolvidos sob medida para atender a necessidade de cada tipo de imóvel.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, idx) => (
            <div key={idx} className="solution-card">
              <div className="solution-image-frame">
                <img src={item.image} alt={item.title} className="solution-img" />
              </div>
              
              <div className="solution-content">
                <div className="solution-header-row">
                  <div className="solution-icon-box">{item.icon}</div>
                  <h3 className="solution-title">{item.title}</h3>
                </div>

                <p className="solution-desc">{item.description}</p>

                <a href="#simulation" className="solution-link">
                  <span>Simular perfil</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .solution-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .solution-card:hover {
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }

        .solution-image-frame {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: var(--bg-subtle);
        }

        .solution-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .solution-content {
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .solution-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .solution-icon-box {
          width: 30px;
          height: 30px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          color: var(--green-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .solution-title {
          font-size: 0.98rem;
        }

        .solution-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-bottom: 14px;
        }

        .solution-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--green-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .solution-content {
            padding: 10px 8px;
          }
          .solution-title {
            font-size: 0.88rem;
          }
          .solution-desc {
            font-size: 0.78rem;
            line-height: 1.35;
          }
        }
      `}</style>
    </section>
  );
}
