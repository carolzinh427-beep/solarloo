import React from 'react';
import { Shield, FileCheck, CheckCircle2, Award } from 'lucide-react';

export default function TrustSection() {
  const trustPillars = [
    {
      icon: <Shield size={20} className="trust-icon" />,
      title: 'Qualidade técnica',
      description: 'Equipamentos testados e homologados pelos órgãos reguladores competentes.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <FileCheck size={20} className="trust-icon" />,
      title: 'Projeto responsável',
      description: 'Dimensionamento elaborado por profissionais para garantir eficiência.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <CheckCircle2 size={20} className="trust-icon" />,
      title: 'Transparência total',
      description: 'Clareza em todas as etapas, do orçamento inicial à ligação na concessionária.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: <Award size={20} className="trust-icon" />,
      title: 'Acompanhamento',
      description: 'Atendimento dedicado para orientar e solucionar todas as suas dúvidas.',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        
        <div className="section-header">
          <h2>Engenharia e atendimento responsável</h2>
          <p>Nossa prioridade é oferecer um serviço transparente, seguro e alinhado com as normas do setor elétrico.</p>
        </div>

        <div className="trust-grid">
          {trustPillars.map((pillar, idx) => (
            <div key={idx} className="card-clean trust-card">
              <div className="trust-img-frame">
                <img src={pillar.image} alt={pillar.title} className="trust-img" />
              </div>
              
              <div className="trust-body">
                <div className="trust-title-row">
                  <div className="trust-icon-box">{pillar.icon}</div>
                  <h3 className="trust-title">{pillar.title}</h3>
                </div>

                <p className="trust-desc">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .trust-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .trust-img-frame {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: #E2E8F0;
        }

        .trust-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .trust-body {
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .trust-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .trust-icon-box {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background-color: var(--green-light);
          border: 1px solid var(--green-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-icon {
          color: var(--green-primary);
        }

        .trust-title {
          font-size: 0.98rem;
          line-height: 1.25;
        }

        .trust-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .trust-body {
            padding: 10px 8px;
          }
          .trust-title {
            font-size: 0.88rem;
          }
          .trust-desc {
            font-size: 0.78rem;
            line-height: 1.35;
          }
        }
      `}</style>
    </section>
  );
}
