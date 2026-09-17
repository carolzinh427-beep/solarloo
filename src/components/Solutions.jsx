import React from 'react';
import { Home, Building2, Tractor, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'Energia Solar Residencial',
      icon: <Home size={22} />,
      description: 'Projetos sob medida para casas e condomínios que buscam reduzir gastos com energia e aumentar a autonomia energética da família.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Energia Solar Comercial',
      icon: <Building2 size={22} />,
      description: 'Soluções de alta eficiência para empresas, comércios e escritórios que desejam reduzir custos operacionais fixos.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Energia Solar Rural',
      icon: <Tractor size={22} />,
      description: 'Sistemas preparados para o agronegócio, atendendo fazendas, galpões de armazenagem, irrigação e produção rural.',
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-subtle">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">
            <span>SOLUÇÕES</span>
          </div>
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
                  <span>Simular para este perfil</span>
                  <ArrowRight size={16} />
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
          gap: 32px;
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
          border-color: #D1D5DB;
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
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .solution-header-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .solution-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          color: var(--green-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .solution-title {
          font-size: 1.15rem;
        }

        .solution-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .solution-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--green-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .solution-link:hover {
          gap: 12px;
          color: var(--green-hover);
        }

        @media (max-width: 1024px) {
          .solutions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
