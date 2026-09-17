import React from 'react';
import { Zap, DollarSign, Leaf, TreePine, Award } from 'lucide-react';

export default function GreenImpactCounter() {
  const stats = [
    {
      icon: <Zap size={28} className="highlight-green" />,
      value: "1.480+",
      label: "Usinas Instaladas",
      description: "Projetos em residências, indústrias e fazendas",
    },
    {
      icon: <DollarSign size={28} style={{ color: '#FFD600' }} />,
      value: "R$ 18,5M+",
      label: "Economia Acumulada",
      description: "Dinheiro economizado diretamente pelos clientes",
    },
    {
      icon: <Leaf size={28} style={{ color: '#00B4D8' }} />,
      value: "5.200 Ton.",
      label: "CO₂ Evitado",
      description: "Redução direta na pegada de carbono",
    },
    {
      icon: <TreePine size={28} className="highlight-green" />,
      value: "26.000",
      label: "Árvores Salvas",
      description: "Impacto ambiental equivalente de reflorestamento",
    },
  ];

  return (
    <section className="impact-section">
      <div className="container">
        <div className="impact-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card impact-card">
              <div className="impact-icon-box">
                {stat.icon}
              </div>
              <div className="impact-info">
                <h3 className="impact-value">{stat.value}</h3>
                <h4 className="impact-label">{stat.label}</h4>
                <p className="impact-desc">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .impact-section {
          padding: 40px 0;
          margin-top: -30px;
          position: relative;
          z-index: 10;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .impact-card {
          padding: 28px 20px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .impact-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .impact-value {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
          background: linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .impact-label {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .impact-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
